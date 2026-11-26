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
        {product.comingSoon && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded">
              Coming Soon
            </span>
          </div>
        )}
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
        {product.comingSoon ? (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
              Coming Soon
            </span>
          </div>
        ) : (() => {
          const primaryPlan = product.plans?.find((p) => p.days >= 30) || product.plans?.[0];
          if (primaryPlan) {
            let label = `/${primaryPlan.label}`;
            if (primaryPlan.days === 120) label = '/ 4M pkg';
            else if (primaryPlan.days === 30) label = '/ 1M pkg';
            else if (primaryPlan.days === 60) label = '/ 2M pkg';
            else if (primaryPlan.days === 90) label = '/ 3M pkg';
            else if (primaryPlan.days === 180) label = '/ 6M pkg';
            else if (primaryPlan.days === 365) label = '/ 12M pkg';
            else if (primaryPlan.days === 1) label = '/ day';
            return (
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-base font-bold text-gray-900">
                  ₹{primaryPlan.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-gray-500 font-medium">{label}</span>
              </div>
            );
          }
          return (
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-base font-bold text-gray-900">
                ₹{getFeaturedPrice(product).toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-gray-500 font-medium">/month</span>
            </div>
          );
        })()}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{product.brand}</span>
          {product.comingSoon ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded cursor-not-allowed">
              Coming Soon
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
              <ShoppingBag className="h-3.5 w-3.5" />
              Rent
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}