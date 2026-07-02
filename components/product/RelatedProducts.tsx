import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Product } from '@/types';
import { ProductCard } from '@/components/shared/ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="container-app py-8 lg:py-12 border-t border-gray-200 mt-8">
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
          You May Also Like
        </h2>
        <Link
          href="/rent"
          className="text-sm font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}