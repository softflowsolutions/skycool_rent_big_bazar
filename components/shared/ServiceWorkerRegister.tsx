'use client';

import { useEffect } from 'react';

/**
 * ServiceWorkerRegister
 * ---------------------
 *
 * Mount once near the top of <body> (we do this in app/layout.tsx).
 * The component renders nothing.
 *
 * Behavior
 *   - Only registers `/sw.js` in production. Dev builds skip
 *     registration so we don't get bitten by stale caches while iterating.
 *   - Waits for the `load` event before registering, so it never blocks
 *     first paint.
 *   - Subscribes to `updatefound` and tracks the new worker's lifecycle:
 *     when a waiting worker is detected we send `{ type: 'SKIP_WAITING' }`
 *     so the user gets the new shell on next reload.
 *
 * Why no UI?
 *   - We *could* show a "new version available — refresh" toast, but for
 *     a marketing site this is more annoying than helpful. The next
 *     navigation will pick up the new SW transparently.
 */
export function ServiceWorkerRegister(): null {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('serviceWorker' in navigator)) return;

    // Only register in production — service workers make dev iteration
    // miserable by caching old code.
    if (process.env.NODE_ENV !== 'production') return;

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        });

        // If there's already a waiting worker from a previous install,
        // prompt it to activate immediately.
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            // Once the new worker is installed and there's an existing
            // controller, the user is on the *old* version. Tell the new
            // worker to take over as soon as it's safe.
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              newWorker.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      } catch (err) {
        // Service worker registration failed — usually because the user
        // is on an insecure origin (e.g. http://10.x on a phone). Swallow
        // quietly; the rest of the site works fine without it.
        // eslint-disable-next-line no-console
        console.warn('[sw] registration failed:', err);
      }
    };

    if (document.readyState === 'complete') {
      // Page is already fully loaded — register immediately.
      register();
    } else {
      // Otherwise, wait until `load` so we don't delay first paint.
      window.addEventListener('load', register, { once: true });
    }
  }, []);

  return null;
}

export default ServiceWorkerRegister;
