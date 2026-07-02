'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BANNERS, BANNER_AUTOPLAY_MS } from '@/lib/banners';

/**
 * BannerCarousel
 * --------------
 *
 * Full-width promotional banner carousel for the homepage. Renders each
 * entry from `lib/banners.ts` as a slide with:
 *   - Full-bleed background image,
 *   - Tailwind gradient overlay (per-banner),
 *   - Optional badge pill,
 *   - Title (3xl–5xl responsive),
 *   - Subtitle,
 *   - CTA button linking to the per-banner route.
 *
 * UX details
 *   - Auto-rotates every `BANNER_AUTOPLAY_MS` (4.5s). Pauses on hover
 *     and resumes on mouse-leave.
 *   - Smooth fade transitions (700ms opacity) between slides.
 *   - Dot indicators at the bottom for jump-to-slide navigation.
 *   - Prev/Next arrow controls, hidden on mobile (dots only).
 *   - Responsive height: 260px mobile / 320px tablet / 380px desktop.
 *   - First slide uses `priority`, the rest are lazy-loaded.
 *   - Section padding `pt-8 lg:pt-12` per the design brief.
 *
 * Stacking
 *   - Active slide is z-10, inactive slides are z-0 — clicking the CTA
 *     on a sliding slide still targets the top one.
 */

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const total = BANNERS.length;

  const goTo = useCallback(
    (idx: number) => setCurrent(((idx % total) + total) % total),
    [total]
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay — pauses while hovered or while the tab is hidden, so we
  // don't burn cycles when nobody's looking.
  useEffect(() => {
    if (paused) return;

    const tick = () => {
      timerRef.current = window.setTimeout(() => {
        setCurrent((c) => (c + 1) % total);
      }, BANNER_AUTOPLAY_MS);
    };

    const start = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      tick();
    };

    const stop = () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [paused, total]);

  if (total === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden pt-8 lg:pt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Promotional banners"
    >
      <div className="container-app">
        <div className="relative h-[260px] sm:h-[320px] lg:h-[380px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
          {BANNERS.map((banner, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={banner.id}
                className={cn(
                  'absolute inset-0 transition-opacity duration-700 ease-in-out',
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                )}
                aria-hidden={!isActive}
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${total}`}
              >
                {/* Background image */}
                <Image
                  src={banner.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
                  priority={idx === 0}
                  loading={idx === 0 ? undefined : 'lazy'}
                  className="object-cover"
                />

                {/* Gradient overlay */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-r',
                    banner.gradient ||
                      'from-sky-600/80 via-sky-700/60 to-blue-800/80'
                  )}
                />

                {/* Subtle vignette so the text always reads on top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-14">
                  <div className="max-w-2xl text-white">
                    {banner.badge && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur ring-1 ring-white/30">
                        <Sparkles className="h-3.5 w-3.5" />
                        {banner.badge}
                      </span>
                    )}

                    <h2 className="mt-4 font-display font-extrabold leading-[1.1] text-3xl sm:text-4xl lg:text-5xl drop-shadow-md">
                      {banner.title}
                    </h2>

                    <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/90 max-w-xl drop-shadow">
                      {banner.subtitle}
                    </p>

                    <Link
                      href={banner.ctaLink}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-bold text-gray-900 shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
                    >
                      {banner.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Arrows (hidden on mobile) */}
          <button
            type="button"
            onClick={prev}
            className="hidden sm:flex absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Previous banner"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="hidden sm:flex absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Next banner"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
            {BANNERS.map((banner, idx) => (
              <button
                key={banner.id}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Go to banner ${idx + 1}: ${banner.title}`}
                aria-current={idx === current ? 'true' : undefined}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  idx === current
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes for entrance & modal-style transitions.
          Kept scoped here so we don't pollute globals.css. */}
      <style jsx>{`
        @keyframes pwaModalIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default BannerCarousel;
