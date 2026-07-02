import { BadgeCheck, Tag, Award } from 'lucide-react';
import type { Product } from '@/types';
import { StarRating } from '@/components/shared/StarRating';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="badge-primary">{product.brand}</span>
        <span className="badge-warning">{product.energyRating}</span>
        <span className="badge-success">
          <BadgeCheck className="h-3 w-3" />
          In Stock
        </span>
        {product.rating >= 4.8 && (
          <span className="badge-accent">
            <Award className="h-3 w-3" />
            Bestseller
          </span>
        )}
      </div>

      <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
        {product.name}
      </h1>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
        <span className="text-sm text-gray-400">|</span>
        <span className="text-sm text-gray-600">
          {product.warranty} warranty
        </span>
      </div>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
        {product.longDescription}
      </p>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
        <div className="bg-sky-50 rounded-xl p-2.5 sm:p-3 text-center">
          <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Capacity</div>
          <div className="font-bold text-sm sm:text-base text-gray-900 mt-0.5">{product.capacity}</div>
        </div>
        <div className="bg-cyan-50 rounded-xl p-2.5 sm:p-3 text-center">
          <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Type</div>
          <div className="font-bold text-sm sm:text-base text-gray-900 mt-0.5">{product.type}</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-2.5 sm:p-3 text-center">
          <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Brand</div>
          <div className="font-bold text-sm sm:text-base text-gray-900 mt-0.5">{product.brand}</div>
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2 flex items-center gap-1">
          <Tag className="h-3.5 w-3.5" />
          Key Features
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-cool flex-shrink-0">
                <BadgeCheck className="h-2.5 w-2.5 text-white" strokeWidth={3} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}