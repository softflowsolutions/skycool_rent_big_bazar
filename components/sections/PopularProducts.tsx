'use client';

import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Snowflake } from 'lucide-react';
import { useRef } from 'react';
import type { Product } from '@/types';
import { ProductCard } from '@/components/shared/ProductCard';

interface PopularProductsProps {
  products: Product[];
}

export function PopularProducts({ products }: PopularProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="container-app section-padding">
      <div className="flex items-end justify-between mb-6 lg:mb-8 gap-4">
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Snowflake className="h-4 w-4" />
            Top Picks
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Most Rented This Month
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-sky-50 text-gray-700"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-sky-50 text-gray-700"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <Link
            href="/rent"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex lg:grid lg:grid-cols-4 gap-3 sm:gap-5 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory pb-2"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[68%] sm:w-[42%] md:w-[30%] lg:w-auto flex-shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}