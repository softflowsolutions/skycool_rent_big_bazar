import { Truck, Sparkles, Shield } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface PricingCardProps {
  product: Product;
}

export function PricingCard({ product }: PricingCardProps) {
  const plans = [
    { label: 'Monthly', price: product.pricing.monthly, save: 0 },
    { label: '3 Months', price: product.pricing.quarterly, save: 8, perMonth: Math.round(product.pricing.quarterly / 3) },
    { label: '6 Months', price: product.pricing.halfYearly, save: 12, perMonth: Math.round(product.pricing.halfYearly / 6) },
    { label: '12 Months', price: product.pricing.yearly, save: 20, perMonth: Math.round(product.pricing.yearly / 12) },
  ];

  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 rounded-2xl p-4 sm:p-6 border border-sky-100">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl sm:text-4xl font-extrabold text-gradient">
          {formatPrice(product.pricing.monthly)}
        </span>
        <span className="text-sm sm:text-base text-gray-500 font-semibold">/month</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 rounded-lg px-2 py-1.5">
          <Truck className="h-3 w-3" />
          <span className="hidden sm:inline">Free Delivery</span>
          <span className="sm:hidden">Free</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 bg-sky-50 rounded-lg px-2 py-1.5">
          <Sparkles className="h-3 w-3" />
          <span>Zero Deposit</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-700 bg-orange-50 rounded-lg px-2 py-1.5">
          <Shield className="h-3 w-3" />
          <span className="hidden sm:inline">Warranty</span>
          <span className="sm:hidden">Safe</span>
        </div>
      </div>

      <div className="space-y-2">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100"
          >
            <div>
              <div className="text-sm font-semibold text-gray-900">{plan.label}</div>
              {plan.perMonth && (
                <div className="text-xs text-gray-500">₹{plan.perMonth}/month</div>
              )}
            </div>
            <div className="text-right">
              <div className="text-sm sm:text-base font-bold text-gray-900">
                {formatPrice(plan.price)}
              </div>
              {plan.save > 0 && (
                <div className="text-[10px] font-bold text-green-600">
                  Save {plan.save}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}