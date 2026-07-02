'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Loader2,
  Package,
  Wrench,
  Check,
} from 'lucide-react';
import { CITIES, DURATIONS } from '@/lib/constants';
import { cn, validatePhone } from '@/lib/utils';
import type { Enquiry } from '@/types';
import { getEnquiryTaxonomy } from '@/lib/data';
import { useToast } from '@/components/shared/Toast';

interface EnquiryFormProps {
  defaultCategory?: 'rent' | 'service';
  defaultSubCategory?: string;
  defaultProduct?: string;
  defaultParentCategory?: string;
}

const AUTO_DISMISS_MS = 5000;

export function EnquiryForm({
  defaultCategory = 'rent',
  defaultSubCategory = '',
  defaultProduct = '',
  defaultParentCategory = '',
}: EnquiryFormProps) {
  const { error: showError } = useToast();
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [form, setForm] = useState<Enquiry>({
    name: '',
    phone: '',
    email: '',
    address: '',
    category: defaultCategory,
    subCategory: defaultSubCategory,
    product: defaultProduct,
    parentCategory: defaultParentCategory,
    quantity: 1,
    duration: '3',
    message: '',
    city: CITIES[0],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);

  const taxonomy = useMemo(() => getEnquiryTaxonomy(), []);

  const subCategoryOptions = useMemo<string[]>(() => {
    if (!form.category) return [];
    return Object.keys(taxonomy[form.category] ?? {});
  }, [taxonomy, form.category]);

  const productOptions = useMemo<Array<{ value: string; label: string }>>(() => {
    if (!form.category || !form.subCategory) return [];
    return taxonomy[form.category]?.[form.subCategory] ?? [];
  }, [taxonomy, form.category, form.subCategory]);

  // Reset cascading fields when category changes
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      subCategory: subCategoryOptions.includes(prev.subCategory)
        ? prev.subCategory
        : '',
      product: '',
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.category]);

  // Reset product when subcategory changes
  useEffect(() => {
    setForm((prev) => {
      const valid = productOptions.some((o) => o.value === prev.product);
      return valid ? prev : { ...prev, product: '' };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.subCategory]);

  // Auto-dismiss success modal
  useEffect(() => {
    if (!showSuccessModal) return;
    const t = window.setTimeout(() => setShowSuccessModal(false), AUTO_DISMISS_MS);
    return () => window.clearTimeout(t);
  }, [showSuccessModal]);

  const update = (key: keyof Enquiry, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.name || form.name.length < 2)
      newErrors.name = 'Please enter your full name (min 2 characters)';
    if (!validatePhone(form.phone))
      newErrors.phone = 'Enter a valid 10-digit phone number';
    // Email is now OPTIONAL
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email address';
    if (!form.address || form.address.length < 10)
      newErrors.address = 'Please enter complete address (min 10 characters)';
    if (!form.subCategory) newErrors.subCategory = 'Please select a sub-category';
    if (!form.product) newErrors.product = 'Please select a product/service';
    if (!agreed) newErrors.terms = 'You must agree to the Terms & Conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showError('Please fix the errors', 'Check the highlighted fields and try again.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          quantity: form.category === 'rent' ? form.quantity : undefined,
          duration: form.category === 'rent' ? form.duration : undefined,
        }),
      });
      if (!res.ok) throw new Error('Network error');
      setShowSuccessModal(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        address: '',
        category: defaultCategory,
        subCategory: defaultSubCategory,
        product: defaultProduct,
        parentCategory: defaultParentCategory,
        quantity: 1,
        duration: '3',
        message: '',
        city: CITIES[0],
      });
      setAgreed(false);
    } catch {
      showError('Submission failed', 'Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const isService = form.category === 'service';

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8"
        noValidate
      >
        <div className="text-center mb-6">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cool mb-3">
            <Send className="h-7 w-7 text-white" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1.5">
            Send Enquiry
          </h2>
          <p className="text-sm text-gray-600">
            Fill the form and our team will contact you within 30 minutes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Category — Radio Cards */}
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-2 block">
              What do you need?
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { value: 'rent' as const, label: 'Rent', sub: 'AC & Fridge on rent', Icon: Package, color: 'from-sky-500 to-blue-600', activeBg: 'from-sky-500 to-blue-600' },
                { value: 'service' as const, label: 'Service', sub: 'Repair & maintenance', Icon: Wrench, color: 'from-orange-500 to-red-600', activeBg: 'from-orange-500 to-red-600' },
              ].map((opt) => {
                const active = form.category === opt.value;
                return (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => update('category', opt.value)}
                    className={cn(
                      'relative flex flex-col items-start gap-2 rounded-2xl p-3 sm:p-4 text-left border-2 transition-all duration-200',
                      active
                        ? cn('border-transparent bg-gradient-to-br text-white shadow-lg', opt.activeBg)
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    )}
                    aria-pressed={active}
                  >
                    {/* Check mark indicator on active card */}
                    {active && (
                      <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-white/30 flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                    <div className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
                      active ? 'bg-white/25' : cn('bg-gradient-to-br text-white', opt.color)
                    )}>
                      <opt.Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-base">{opt.label}</div>
                      <div className={cn('text-[11px] mt-0.5', active ? 'text-white/85' : 'text-gray-500')}>
                        {opt.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-Category */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              Sub-Category <span className="text-red-500">*</span>
            </label>
            <select
              value={form.subCategory}
              onChange={(e) => update('subCategory', e.target.value)}
              className={cn('input-base cursor-pointer', errors.subCategory && 'border-red-400')}
            >
              <option value="">Select…</option>
              {subCategoryOptions.map((s) => {
                const friendly = s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
                return <option key={s} value={s}>{friendly}</option>;
              })}
            </select>
            {errors.subCategory && <p className="text-xs text-red-600 mt-1">{errors.subCategory}</p>}
          </div>

          {/* Product / Service */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              {isService ? 'Service' : 'Product'} <span className="text-red-500">*</span>
            </label>
            <select
              value={form.product}
              onChange={(e) => update('product', e.target.value)}
              disabled={!form.subCategory}
              className={cn('input-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed', errors.product && 'border-red-400')}
            >
              <option value="">{form.subCategory ? 'Select…' : 'Choose a sub-category first'}</option>
              {productOptions.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
            {errors.product && <p className="text-xs text-red-600 mt-1">{errors.product}</p>}
          </div>

          {/* Name */}
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={cn('input-base pl-10', errors.name && 'border-red-400')}
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                className={cn('input-base pl-10', errors.phone && 'border-red-400')}
                placeholder="98765 43210"
                inputMode="numeric"
              />
            </div>
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          {/* Email (OPTIONAL) */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              Email <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={cn('input-base pl-10', errors.email && 'border-red-400')}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              <textarea
                value={form.address}
                onChange={(e) => update('address', e.target.value)}
                className={cn('input-base pl-10 min-h-[80px] resize-y', errors.address && 'border-red-400')}
                placeholder="Complete delivery address"
                rows={2}
              />
            </div>
            {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
          </div>

          {/* City */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              City
            </label>
            <select
              value={form.city}
              onChange={(e) => update('city', e.target.value)}
              className="input-base cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Quantity + Duration — only for RENT */}
          {!isService && (
            <>
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={form.quantity}
                  onChange={(e) => update('quantity', parseInt(e.target.value) || 1)}
                  className="input-base"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
                  Duration
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {DURATIONS.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => update('duration', d.value.toString())}
                      className={cn(
                        'px-3 py-2.5 rounded-xl text-sm font-semibold transition-all border-2',
                        form.duration === d.value.toString()
                          ? 'bg-gradient-cool text-white border-transparent shadow-md'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-sky-300'
                      )}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
              Message (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              <textarea
                value={form.message || ''}
                onChange={(e) => update('message', e.target.value.slice(0, 500))}
                className="input-base pl-10 min-h-[80px] resize-y"
                placeholder="Any specific requirements..."
                rows={3}
                maxLength={500}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">{(form.message || '').length}/500</p>
          </div>

          {/* Terms */}
          <div className="sm:col-span-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (e.target.checked) setErrors((p) => ({ ...p, terms: '' }));
                }}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500 cursor-pointer flex-shrink-0"
              />
              <span className="text-xs text-gray-600 leading-relaxed">
                I have read and agree to the{' '}
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">Terms & Conditions</a>{' '}
                and{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">Privacy Policy</a>.
              </span>
            </label>
            {errors.terms && <p className="text-xs text-red-600 mt-1">{errors.terms}</p>}
          </div>

          {/* Submit */}
          <div className="sm:col-span-2">
            <button type="submit" disabled={loading} className="w-full btn-primary text-base">
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit Enquiry
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-success-title"
        >
          <div className="absolute inset-0 bg-sky-900/70 backdrop-blur-sm animate-fade-in" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="absolute block h-2 w-2 rounded-full animate-scale-in"
                style={{
                  top: `${10 + (i * 7) % 80}%`,
                  left: `${5 + (i * 13) % 90}%`,
                  backgroundColor: ['#0EA5E9', '#3B82F6', '#06B6D4', '#10B981', '#F59E0B', '#EC4899'][i % 6],
                  animationDelay: `${i * 40}ms`,
                  opacity: 0.85,
                }}
              />
            ))}
          </div>
          <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center transform transition-all duration-300 animate-scale-in">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="h-12 w-12 text-green-600"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="3"
                  style={{ strokeDasharray: 166, strokeDashoffset: 166, animation: 'checkmarkCircle 0.6s ease-in-out forwards' }}
                />
                <path
                  fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                  d="M14 27l7 7 16-16"
                  style={{ strokeDasharray: 50, strokeDashoffset: 50, animation: 'checkmarkCheck 0.4s 0.4s ease-in-out forwards' }}
                />
              </svg>
            </div>
            <h2 id="enquiry-success-title" className="font-display text-2xl font-extrabold text-gray-900 mb-2">
              Enquiry sent successfully!
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Our team will contact you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full btn-primary text-sm"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}