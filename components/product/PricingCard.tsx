import { Truck, Shield } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface PricingCardProps {
  product: Product;
}

export function PricingCard({ product }: PricingCardProps) {
  const plans = [
    { label: '1 Month', price: product.pricing.monthly, save: 0 },
    { label: '3 Months', price: product.pricing.quarterly, save: 8 },
    { label: '6 Months', price: product.pricing.halfYearly, save: 12 },
    { label: '12 Months', price: product.pricing.yearly, save: 20 },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-3xl sm:text-4xl font-bold text-gray-900">
          {formatPrice(product.pricing.monthly)}
        </span>
        <span className="text-sm text-gray-500">/month</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
        <span className="flex items-center gap-1">
          <Truck className="h-3.5 w-3.5" />
          Free Delivery
        </span>
        <span className="flex items-center gap-1">
          <Shield className="h-3.5 w-3.5" />
          Zero Deposit
        </span>
      </div>

      <div className="space-y-1.5">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">{plan.label}</span>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">{formatPrice(plan.price)}</div>
              {plan.save > 0 && (
                <div className="text-[10px] font-semibold text-green-700">Save {plan.save}%</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}