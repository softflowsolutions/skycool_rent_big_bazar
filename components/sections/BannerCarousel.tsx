'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BANNERS, BANNER_AUTOPLAY_MS } from '@/lib/banners';
import { cn } from '@/lib/utils';

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((p) => (p + 1) % BANNERS.length);
    }, BANNER_AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="container-app">
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px] rounded-lg overflow-hidden border border-gray-200">
        {BANNERS.map((b, idx) => (
          <div
            key={b.id}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            )}
            aria-hidden={idx !== current}
          >
            <Image
              src={b.image}
              alt={b.title}
              fill
              sizes="100vw"
              className="object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
              priority={idx === 0}
            />
            {/* Plain dark overlay for legibility */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="container-app w-full">
                <div className="max-w-xl text-white">
                  {b.badge && (
                    <span className="inline-block text-[11px] font-medium uppercase tracking-widest mb-2 opacity-90">
                      {b.badge}
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                    {b.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/90 mb-4 max-w-md">
                    {b.subtitle}
                  </p>
                  <Link
                    href={b.ctaLink}
                    className="inline-flex items-center gap-1.5 bg-white text-gray-900 rounded-md px-4 py-2 font-semibold text-sm hover:bg-gray-100 transition-colors"
                  >
                    {b.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {BANNERS.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setCurrent(idx)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                idx === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
              )}
              aria-label={`Go to banner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}