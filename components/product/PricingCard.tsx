import { Truck, Shield, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface PricingCardProps {
  product: Product;
}

export function PricingCard({ product }: PricingCardProps) {
  if (product.comingSoon) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 sm:p-6 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-3">
          <Clock className="h-3.5 w-3.5" />
          Coming Soon
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Coming Soon
        </h2>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Rental plans and pricing for this product will be announced soon. This item is currently unavailable for booking.
        </p>
      </div>
    );
  }

  const plans =
    product.plans && product.plans.length > 0
      ? product.plans
      : [
          { label: '1 Month', price: product.pricing.monthly, days: 30 },
          { label: '3 Months', price: product.pricing.quarterly, days: 90 },
          { label: '6 Months', price: product.pricing.halfYearly, days: 180 },
          { label: '12 Months', price: product.pricing.yearly, days: 365 },
        ];

  // The primary rental package from the price sheet (defaults to first multi-month package or first plan)
  const primaryPlan = plans.find((p) => p.days >= 30) || plans[0];
  const mainPrice = primaryPlan.price;
  const mainPriceLabel = `/ ${primaryPlan.label}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-bold text-gray-900">
            {formatPrice(mainPrice)}
          </span>
          <span className="text-sm text-gray-600 font-semibold">
            {mainPriceLabel}
          </span>
        </div>

        {product.dayPrice && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
            <Sparkles className="h-3.5 w-3.5 text-sky-600" />
            <span>1-Day Rate:</span>
            <span className="font-bold">{formatPrice(product.dayPrice)}</span>
            <span className="text-sky-600 font-normal">{product.dayPriceUnit || 'per day'}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
        <span className="flex items-center gap-1 font-medium text-gray-700">
          <Truck className="h-3.5 w-3.5 text-gray-500" />
          {product.transportationNote || 'Transportation extra'}
        </span>
        {product.pricingNote && (
          <span className="flex items-center gap-1 text-green-700 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {product.pricingNote}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Shield className="h-3.5 w-3.5 text-gray-500" />
          {product.deposit > 0
            ? `${formatPrice(product.deposit)} Refundable Deposit`
            : 'Zero Deposit'}
        </span>
      </div>

      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
          Available Rental Packages
        </div>
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2.5 px-3 rounded-md border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="text-sm font-semibold text-gray-900">{plan.label}</span>
              {plan.days === 1 && (
                <span className="block text-[11px] text-sky-600 font-medium">
                  Short-term / daily rate
                </span>
              )}
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900">{formatPrice(plan.price)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}