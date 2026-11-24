'use client';

import { useState, useMemo } from 'react';
import { Minus, Plus, Phone, MapPin, Calendar, ShieldCheck, MessageCircle } from 'lucide-react';
import type { Product } from '@/types';
import { CITIES } from '@/lib/constants';
import { cn, formatPrice, generateWhatsAppLink, generateCallLink } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';

interface ConfigurationFormProps {
  product: Product;
}

export function ConfigurationForm({ product }: ConfigurationFormProps) {
  if (product.comingSoon) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-800 mx-auto">
          <Calendar className="h-6 w-6" />
        </div>
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-2">
            Coming Soon
          </span>
          <h3 className="font-display font-bold text-xl text-gray-900">
            Enquiries &amp; Bookings Unavailable
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-lg mx-auto">
            {product.name} is currently not available for rent. Enquiry submission and order placement for this product are temporarily disabled.
          </p>
        </div>

        {/* Grayed out CTA Buttons that cannot generate enquiry */}
        <div className="max-w-md mx-auto space-y-2.5 pt-2">
          <button
            type="button"
            disabled
            className="w-full inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-400 rounded-xl px-6 py-3.5 font-bold text-base cursor-not-allowed shadow-none"
            aria-disabled="true"
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp (Disabled)
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-400 rounded-xl px-4 py-3 font-bold text-sm cursor-not-allowed"
              aria-disabled="true"
            >
              <Phone className="h-4 w-4" />
              Call Now (Disabled)
            </button>
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-400 border border-gray-200 rounded-xl px-4 py-3 font-bold text-sm cursor-not-allowed"
              aria-disabled="true"
            >
              <Calendar className="h-4 w-4" />
              Send Enquiry (Disabled)
            </button>
          </div>
        </div>
      </div>
    );
  }

  const availablePlans =
    product.plans && product.plans.length > 0
      ? product.plans
      : [
          { label: '1 Month', days: 30, price: product.pricing.monthly },
          { label: '3 Months', days: 90, price: product.pricing.quarterly },
          { label: '6 Months', days: 180, price: product.pricing.halfYearly },
          { label: '12 Months', days: 365, price: product.pricing.yearly },
        ];

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [city, setCity] = useState(CITIES[0]);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedPlan = availablePlans[selectedPlanIndex] || availablePlans[0];
  const rentTotal = useMemo(() => selectedPlan.price * quantity, [selectedPlan, quantity]);
  const depositTotal = useMemo(() => (product.deposit || 0) * quantity, [product.deposit, quantity]);

  const months = selectedPlan.days >= 30 ? Math.round(selectedPlan.days / 30) : 0;
  const effectiveMonthly = months > 0 ? Math.round(rentTotal / (months * quantity)) : 0;
  const baselineRent = product.pricing.monthly * (months || 1) * quantity;
  const savings = baselineRent > rentTotal && months > 1 ? baselineRent - rentTotal : 0;

  const whatsappMessage = `Hi ${SITE_CONFIG.name} Team! 🧊

I want to rent the following from ${SITE_CONFIG.name}:

📦 Product: ${product.name}
🏷️ Brand: ${product.brand}
📊 Capacity: ${product.capacity}
🔢 Quantity: ${quantity}
⏱️ Selected Package: ${selectedPlan.label}
📍 City: ${city}
💰 Rent Total: ${formatPrice(rentTotal)}
🛡️ Refundable Deposit: ${depositTotal > 0 ? formatPrice(depositTotal) : 'Zero'}
🚚 Delivery & Transportation: ${product.transportationNote || 'Transportation extra'}
${product.pricingNote ? `📝 Note: ${product.pricingNote}` : ''}

Please confirm availability and share booking details.

---
Sent from: ${SITE_CONFIG.name} (${SITE_CONFIG.url})`;

  const handleWhatsApp = () => {
    if (!agreed) {
      setError('Please accept the Terms & Conditions to proceed.');
      return;
    }
    setError(null);
    window.open(generateWhatsAppLink(whatsappMessage, SITE_CONFIG.whatsapp), '_blank');
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 space-y-5">
      <div>
        <h3 className="font-display font-bold text-lg text-gray-900 mb-3">Configure Your Rental</h3>

        {/* Rental Duration / Plan */}
        <div>
          <label className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2 block">
            Rental Duration / Plan
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {availablePlans.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedPlanIndex(idx)}
                className={cn(
                  'px-3 py-2.5 rounded-xl text-sm font-semibold transition-all border-2 text-center',
                  selectedPlanIndex === idx
                    ? 'bg-accent text-brand border-transparent shadow-sm'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                )}
              >
                <div>{p.label}</div>
                <div className="text-xs font-normal opacity-80 mt-0.5">{formatPrice(p.price)}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2 block">
          Quantity
        </label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            className="h-10 w-10 rounded-xl bg-gray-100 hover:bg-gray-200 disabled:opacity-40 flex items-center justify-center text-gray-700"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <div className="flex-1 text-center">
            <span className="font-display text-2xl font-bold text-gray-900">{quantity}</span>
            <span className="text-xs text-gray-500 ml-2">units</span>
          </div>
          <button
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            disabled={quantity >= 10}
            className="h-10 w-10 rounded-xl bg-gray-100 hover:bg-gray-200 disabled:opacity-40 flex items-center justify-center text-gray-700"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* City */}
      <div>
        <label className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2 block">
          Delivery City
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-base pl-10 pr-8 appearance-none bg-no-repeat bg-right cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center',
            }}
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-gray-900 rounded-2xl p-4 sm:p-5 text-white space-y-2">
        <div className="flex justify-between items-baseline">
          <span className="text-sm opacity-90">Rental Price ({selectedPlan.label})</span>
          <span className="font-display text-2xl sm:text-3xl font-extrabold">{formatPrice(rentTotal)}</span>
        </div>
        {effectiveMonthly > 0 && months > 1 && (
          <div className="flex justify-between items-center text-xs opacity-80">
            <span>Effective rate per unit</span>
            <span>≈ {formatPrice(effectiveMonthly)}/month</span>
          </div>
        )}
        {savings > 0 && (
          <div className="flex justify-between items-center text-xs text-green-400">
            <span>Total plan savings</span>
            <span className="font-bold">You save {formatPrice(savings)}</span>
          </div>
        )}
        {depositTotal > 0 && (
          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300 pt-2 border-t border-gray-700/60">
            <span>Refundable Security Deposit ({quantity} {quantity === 1 ? 'unit' : 'units'})</span>
            <span className="font-semibold text-white">+{formatPrice(depositTotal)}</span>
          </div>
        )}
        <div className="flex justify-between items-center text-xs text-gray-400 pt-1">
          <span>Transportation</span>
          <span className="text-amber-400 font-medium">Extra (payable at delivery)</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2.5">
        <button
          onClick={handleWhatsApp}
          className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3.5 font-bold text-base shadow-md transition-all active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" />
          Order on WhatsApp
        </button>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={generateCallLink(SITE_CONFIG.phone)}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-brand rounded-xl px-4 py-3 font-bold text-sm shadow-md transition-all"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href="#enquiry"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-sky-500 text-sky-600 hover:bg-sky-50 rounded-xl px-4 py-3 font-bold text-sm transition-all"
          >
            <Calendar className="h-4 w-4" />
            Send Enquiry
          </a>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div>
        <label className="flex items-start gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (e.target.checked) setError(null);
            }}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500 cursor-pointer flex-shrink-0"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            I agree to the{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">
              Terms & Conditions
            </a>
            {' '}and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">
              Privacy Policy
            </a>
            . I understand that submitting this enquiry does not guarantee availability.
          </span>
        </label>
        {error && (
          <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" />
            {error}
          </p>
        )}
      </div>
    </div>
  );
}