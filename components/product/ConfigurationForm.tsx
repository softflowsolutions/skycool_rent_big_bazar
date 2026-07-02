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
  const [duration, setDuration] = useState<3 | 6 | 12 | 1>(3);
  const [quantity, setQuantity] = useState(1);
  const [city, setCity] = useState(CITIES[0]);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const durationPricing = {
    1: product.pricing.monthly,
    3: product.pricing.quarterly,
    6: product.pricing.halfYearly,
    12: product.pricing.yearly,
  };

  const total = useMemo(() => durationPricing[duration] * quantity, [duration, quantity, durationPricing]);
  const monthlyTotal = useMemo(() => Math.round(total / duration), [total, duration]);
  const savings = useMemo(
    () => product.pricing.monthly * duration * quantity - total,
    [product.pricing.monthly, duration, quantity, total]
  );

  const durations = [
    { value: 1 as const, label: '1 Month' },
    { value: 3 as const, label: '3 Months' },
    { value: 6 as const, label: '6 Months' },
    { value: 12 as const, label: '12 Months' },
  ];

  const whatsappMessage = `Hi SkyCool Team! 🧊

I want to rent the following:

📦 Product: ${product.name}
🏷️ Brand: ${product.brand}
📊 Capacity: ${product.capacity}
🔢 Quantity: ${quantity}
⏱️ Duration: ${duration} ${duration === 1 ? 'Month' : 'Months'}
📍 City: ${city}
💰 Estimated Total: ${formatPrice(total)}
📅 Monthly: ${formatPrice(monthlyTotal)}

Please confirm availability and share payment details.

---
Sent from: SkyCool Website`;

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

        {/* Duration */}
        <div>
          <label className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2 block">
            Rental Duration
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                className={cn(
                  'px-3 py-2.5 rounded-xl text-sm font-semibold transition-all border-2',
                  duration === d.value
                    ? 'bg-gradient-cool text-white border-transparent shadow-cool'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-sky-300'
                )}
              >
                {d.label}
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
      <div className="bg-gradient-cool rounded-2xl p-4 sm:p-5 text-white">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-sm opacity-90">Total for {duration} {duration === 1 ? 'month' : 'months'}</span>
          <span className="font-display text-2xl sm:text-3xl font-extrabold">{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm opacity-90">
          <span>≈ {formatPrice(monthlyTotal)}/month</span>
          {savings > 0 && (
            <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold">
              You save {formatPrice(savings)}
            </span>
          )}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2.5">
        <button
          onClick={handleWhatsApp}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl px-6 py-3.5 font-bold text-base shadow-lg shadow-green-500/30 transition-all active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" />
          Order on WhatsApp
        </button>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={generateCallLink(SITE_CONFIG.phone)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl px-4 py-3 font-bold text-sm shadow-md transition-all"
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