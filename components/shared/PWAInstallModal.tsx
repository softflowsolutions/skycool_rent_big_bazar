'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Smartphone, X, Wifi, Zap, Download, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * PWAInstallModal
 * ---------------
 *
 * A friendly "Add to Home Screen" prompt that fires **once**, about
 * 20 seconds after the user's first visit. Subsequent visits won't
 * re-show it (tracked via sessionStorage).
 *
 * Visibility rules
 *   1. Don't show if `localStorage.pwa_installed === 'true'` — the
 *      user already installed the PWA at some point.
 *   2. Don't show if the page is already running as an installed PWA
 *      (display-mode === 'standalone').
 *   3. Don't show for 20s after first visit.
 *   4. Don't show more than once per browser session.
 *
 * Browser API integration
 *   - Listens for `beforeinstallprompt` so we can capture the deferred
 *     prompt event and call `.prompt()` ourselves when the user clicks
 *     "Install".
 *   - Listens for `appinstalled` to persist the install state in
 *     localStorage so we never show the modal again on that device.
 *
 * UX
 *   - Backdrop + centered dialog, ARIA labelled, focus-trapped (the
 *     close button auto-focuses), Esc-to-close, click-outside-to-close.
 *   - z-index 80 — sits below the Toast container (z-100) but above
 *     the rest of the page.
 *   - Entrance animation via Tailwind transitions on opacity +
 *     scale + translate (no external animation lib needed).
 */

const SESSION_KEY = 'pwa_modal_visited';
const INSTALLED_KEY = 'pwa_installed';
const SHOW_AFTER_MS = 20_000;

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function PWAInstallModal() {
  const [open, setOpen] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [installable, setInstallable] = useState(false);
  const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Detect standalone mode on mount — browser support is good across
  // modern engines but we feature-check anyway.
  const isStandalone = (() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia?.('(display-mode: standalone)').matches ||
      // iOS Safari uses a different signal.
      // @ts-expect-error - non-standard
      window.navigator?.standalone === true
    );
  })();

  // Capture the deferred prompt and the "installed" event exactly once.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Persisted "installed" state from a previous visit.
    if (window.localStorage.getItem(INSTALLED_KEY) === 'true') {
      setInstalled(true);
    }

    const onBeforeInstallPrompt = (e: Event) => {
      // The browser will only fire this if the site meets the
      // installability criteria. We stash the event so we can call
      // `.prompt()` ourselves when the user clicks Install.
      e.preventDefault();
      deferredPromptRef.current = e as BeforeInstallPromptEvent;
      setInstallable(true);
    };

    const onAppInstalled = () => {
      window.localStorage.setItem(INSTALLED_KEY, 'true');
      setInstalled(true);
      setInstallable(false);
      setOpen(false);
      deferredPromptRef.current = null;
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  // Schedule the 20-second one-shot on first visit.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Don't show if already installed.
    if (window.localStorage.getItem(INSTALLED_KEY) === 'true') return;
    if (isStandalone) return;

    // Already shown this session — bail.
    if (window.sessionStorage.getItem(SESSION_KEY) === 'true') return;

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, 'true');
      setOpen(true);
    }, SHOW_AFTER_MS);

    return () => window.clearTimeout(timer);
  }, [isStandalone]);

  // Focus the close button + trap Tab to within the dialog when open.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    // Auto-focus the close button so Esc and screen readers land on it.
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      // Simple focus trap — keep tabbing inside the dialog.
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const handleInstall = useCallback(async () => {
    const promptEvent = deferredPromptRef.current;
    if (!promptEvent) {
      // Browser didn't give us a deferred prompt (e.g. iOS Safari).
      // Fall back to friendly guidance: hide the modal and surface a
      // toast in the host page (omitted here to keep the component
      // self-contained — the user can still use "Add to Home Screen"
      // from the share menu).
      setOpen(false);
      return;
    }
    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice.outcome === 'accepted') {
        window.localStorage.setItem(INSTALLED_KEY, 'true');
        setInstalled(true);
      }
    } catch (err) {
      // Swallow — installation is best-effort.
      // eslint-disable-next-line no-console
      console.warn('[pwa] install prompt failed:', err);
    } finally {
      deferredPromptRef.current = null;
      setInstallable(false);
      setOpen(false);
    }
  }, []);

  if (!open || installed || isStandalone) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center px-3 py-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-modal-title"
      aria-describedby="pwa-modal-desc"
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className="absolute inset-0 bg-sky-950/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className={cn(
          'relative w-full max-w-md overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl',
          'transition-all duration-300 ease-out',
          'opacity-100 translate-y-0 scale-100'
        )}
        style={{
          animation: 'pwaModalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Solid header */}
        <div className="relative bg-gray-900 px-5 sm:px-6 pt-5 sm:pt-8 pb-12 sm:pb-14 text-white">
          <button
            ref={closeButtonRef}
            onClick={close}
            className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Close install dialog"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-3 pr-10">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-accent ring-1 ring-accent-dark backdrop-blur shrink-0">
              <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80 font-semibold">
                Rent BigBazar
              </p>
              <h2
                id="pwa-modal-title"
                className="font-display text-lg sm:text-xl font-bold leading-tight"
              >
                Install on your phone
              </h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-4 sm:px-6 -mt-7">
          <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-lg ring-1 ring-gray-100">
            <p
              id="pwa-modal-desc"
              className="text-[13px] sm:text-sm text-gray-600 leading-relaxed"
            >
              Get instant access to AC &amp; Fridge rentals — no app store
              needed. Works offline once installed.
            </p>

            <ul className="mt-4 space-y-2">
              <Benefit icon={<Wifi className="h-3.5 w-3.5" />} text="Works offline" />
              <Benefit icon={<Zap className="h-3.5 w-3.5" />} text="Instant access from your home screen" />
              <Benefit icon={<Download className="h-3.5 w-3.5" />} text="No app store needed — installs in seconds" />
            </ul>

            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleInstall}
                disabled={!installable}
                className={cn(
                  'flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold text-sm transition',
                  installable
                    ? 'bg-accent text-brand hover:bg-accent-dark shadow-md hover:shadow-lg'
                    : 'bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200'
                )}
              >
                <Download className="h-4 w-4" />
                {installable ? 'Install App' : 'Use browser menu to install'}
              </button>
              <button
                onClick={close}
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Maybe Later
              </button>
            </div>

            <p className="mt-3 text-center text-[11px] text-gray-400">
              Free • Lightweight • No tracking
            </p>
          </div>
        </div>

        {/* Bottom safe area */}
        <div className="h-2 bg-white" />
      </div>
    </div>
  );
}

function Benefit({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-700">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 text-brand ring-1 ring-accent-100">
        {icon}
      </span>
      <span className="font-medium">{text}</span>
      <Check className="ml-auto h-4 w-4 text-emerald-500" />
    </li>
  );
}

export default PWAInstallModal;
