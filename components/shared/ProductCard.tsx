import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { getFeaturedPrice } from '@/lib/featured';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const href = `/rent/${product.category}/${product.subCategory}/${product.slug}`;
  const price = formatPrice(getFeaturedPrice(product));

  return (
    <Link
      href={href}
      className={`group block bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-md ${className || ''}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={`${product.name} for rent`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3.5">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 leading-snug min-h-[2.5rem] group-hover:text-gray-700">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-base font-bold text-gray-900">₹{getFeaturedPrice(product)}</span>
          <span className="text-xs text-gray-500">/month</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{product.brand}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
            <ShoppingBag className="h-3.5 w-3.5" />
            Rent
          </span>
        </div>
      </div>
    </Link>
  );
}