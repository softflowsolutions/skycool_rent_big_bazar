'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
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
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
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
              alt={b.title ?? ''}
              fill
              sizes="100vw"
              className="object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
