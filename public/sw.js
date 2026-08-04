/**
 * SkyCool Solutions — Service Worker
 * ----------------------------------
 *
 * Strategy overview
 *  - Cache-first for the app shell pages so the site feels instant on
 *    repeat visits and works offline.
 *  - Cache-first for static assets (icons, fonts, manifest, etc.).
 *  - Network-first for everything else (3rd-party APIs, analytics,
 *    the Resend enquiry endpoint etc.) with a fallback to the runtime
 *    cache so a quick network drop doesn't blow up the page.
 *  - Cross-origin requests (Unsplash images etc.) are NOT cached by the
 *    service worker itself; the browser handles them with its normal HTTP
 *    cache.
 *
 * Cache versioning
 *  - Bump `CACHE_VERSION` whenever you ship breaking changes to the
 *    shell. On activate the SW purges any cache that doesn't match the
 *    current version, so users get the fresh shell automatically.
 *
 * Registration
 *  - Registered by `<ServiceWorkerRegister />`. It only registers in
 *    production (`process.env.NODE_ENV === 'production'`) to avoid
 *    dev-mode caching headaches.
 */

/// <reference lib="webworker" />

/* eslint-disable no-restricted-globals */

const CACHE_VERSION = 'rentbigbazar-v1';
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

/**
 * Pages we always want available offline — the "app shell".
 */
const APP_SHELL_URLS = [
  '/',
  '/rent',
  '/service',
  '/about',
  '/contact',
  '/terms',
  '/privacy',
  '/refund-policy',
];

/**
 * Static assets we pre-cache on install. These are mostly optional —
 * missing ones will simply fail silently and 404 on first request.
 */
const PRECACHE_URLS = [
  '/manifest.json',
  '/favicon.ico',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-icon.png',
  '/og-image.jpg',
];

/**
 * Skip cross-origin requests — Unsplash images, analytics, the Resend
 * API endpoint, etc. are not handled by this SW. The browser's normal
 * HTTP cache applies.
 */
function isSameOrigin(url) {
  try {
    const u = new URL(url);
    return u.origin === self.location.origin;
  } catch (e) {
    return false;
  }
}

/**
 * Network-first with runtime-cache fallback.
 * Good for navigations to pages NOT in the app shell (e.g. /rent/[slug])
 * and for API calls — fresh content when possible, cached when offline.
 */
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    // Only cache successful, non-opaque same-origin responses.
    if (response && response.ok) {
      cache.put(request, response.clone()).catch(() => {
        /* swallow — quota errors etc. */
      });
    }
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw e;
  }
}

/**
 * Cache-first with network fallback. Used for the app shell and static
 * assets where freshness doesn't matter.
 */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone()).catch(() => {
        /* swallow */
      });
    }
    return response;
  } catch (e) {
    // Last-resort: if requesting the document root while offline and
    // nothing is cached, surface a minimal offline page rather than a
    // browser error.
    if (request.mode === 'navigate') {
      const root = await caches.match('/');
      if (root) return root;
    }
    throw e;
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const shell = await caches.open(SHELL_CACHE);
      // Pre-cache the app shell so offline works immediately after install.
      // Use addAll but isolate individual failures so a single 404 doesn't
      // break the whole install.
      await Promise.all(
        APP_SHELL_URLS.map((url) =>
          shell.add(new Request(url, { cache: 'reload' })).catch(() => null)
        )
      );

      const statics = await caches.open(STATIC_CACHE);
      await Promise.all(
        PRECACHE_URLS.map((url) =>
          statics
            .add(new Request(url, { cache: 'reload' }))
            .catch(() => null)
        )
      );

      // Take over from any old worker ASAP.
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          // Keep only caches that belong to the current version.
          const keep =
            key === SHELL_CACHE || key === STATIC_CACHE || key === RUNTIME_CACHE;
          if (!keep) return caches.delete(key);
          return null;
        })
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GETs.
  if (request.method !== 'GET') return;

  // Skip cross-origin entirely (Unsplash, Resend API, analytics, etc.).
  if (!isSameOrigin(request.url)) return;

  const url = new URL(request.url);

  // 1) App shell pages → cache-first.
  if (APP_SHELL_URLS.includes(url.pathname)) {
    event.respondWith(cacheFirst(request, SHELL_CACHE));
    return;
  }

  // 2) Pre-cached static assets → cache-first.
  if (
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/_next/static/') ||
    PRECACHE_URLS.includes(url.pathname) ||
    /\.(?:png|jpg|jpeg|svg|webp|ico|woff2?|ttf|css|js|json|webmanifest)$/.test(
      url.pathname
    )
  ) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // 3) HTML navigations to pages NOT in the shell → network-first
  //    against the runtime cache so users still get a cached HTML page
  //    if they've visited it before.
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }

  // 4) Everything else (same-origin XHR, API calls) → network-first.
  event.respondWith(networkFirst(request, RUNTIME_CACHE));
});

// Optional: let the page trigger skipWaiting via { type: 'SKIP_WAITING' }.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
