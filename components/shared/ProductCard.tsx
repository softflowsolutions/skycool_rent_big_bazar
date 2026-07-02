'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BadgeCheck, Sparkles } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { getFeaturedPrice } from '@/lib/featured';
import { StarRating } from './StarRating';

interface ProductCardProps {
  product: Product;
  className?: string;
  showBadge?: boolean;
}

export function ProductCard({ product, className, showBadge = true }: ProductCardProps) {
  const href = `/rent/${product.category}/${product.subCategory}/${product.slug}`;

  return (
    <Link
      href={href}
      className={`group block relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className || ''}`}
    >
      {/* Badge */}
      {showBadge && product.inStock && (
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          <span className="badge-success text-[10px]">
            <BadgeCheck className="h-3 w-3" />
            In Stock
          </span>
        </div>
      )}
      {product.rating >= 4.8 && showBadge && (
        <div className="absolute top-3 right-3 z-10">
          <span className="badge-accent text-[10px]">
            <Sparkles className="h-3 w-3" />
            Bestseller
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50">
        <Image
          src={product.images[0]}
          alt={`${product.name} for rent`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-1 mb-1.5">
          <span className="badge-primary text-[10px]">{product.brand}</span>
          <span className="badge-warning text-[10px]">{product.energyRating}</span>
        </div>
        <h3 className="font-display font-semibold text-sm sm:text-base text-gray-900 line-clamp-2 mb-1 group-hover:text-sky-600 transition-colors min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="mb-2">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>
            <div className="text-xs text-gray-500">Starting at</div>
            <div className="text-lg sm:text-xl font-bold text-gradient">
              {formatPrice(getFeaturedPrice(product))}
              <span className="text-xs font-normal text-gray-500">/mo</span>
            </div>
          </div>
          <div className="text-[10px] text-gray-500 group-hover:text-sky-600 transition-colors flex items-center gap-1 font-semibold">
            <span>Rent Now</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}