import type { Product } from '@/types';
import { StarRating } from '@/components/shared/StarRating';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        {product.brand} · {product.capacity} · {product.type}
      </p>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
        {product.name}
      </h1>

      <div className="flex items-center gap-3 mb-4">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
        <span className="text-sm text-gray-400">|</span>
        <span className="text-sm text-gray-600">{product.warranty} warranty</span>
      </div>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
        {product.longDescription}
      </p>

      {/* Spec grid */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="bg-gray-50 rounded-md p-2.5 text-center border border-gray-100">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Capacity</div>
          <div className="font-semibold text-sm text-gray-900 mt-0.5">{product.capacity}</div>
        </div>
        <div className="bg-gray-50 rounded-md p-2.5 text-center border border-gray-100">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Type</div>
          <div className="font-semibold text-sm text-gray-900 mt-0.5">{product.type}</div>
        </div>
        <div className="bg-gray-50 rounded-md p-2.5 text-center border border-gray-100">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Energy</div>
          <div className="font-semibold text-sm text-gray-900 mt-0.5">{product.energyRating}</div>
        </div>
      </div>

      <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs sm:text-sm font-medium text-amber-800">
        {product.comingSoon ? (
          <span>Coming Soon · This product is currently not available for rental booking.</span>
        ) : (
          <>
            {product.transportationNote || 'Transportation extra. Installation charges applicable.'}
            {product.pricingNote ? ` · ${product.pricingNote}.` : ''}
            {product.deposit > 0 ? ` Refundable security deposit: ₹${product.deposit}.` : ' Zero security deposit.'}
          </>
        )}
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">
          Key Features
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-0.5 h-4 w-4 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 text-[10px]">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}