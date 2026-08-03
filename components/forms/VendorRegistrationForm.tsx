'use client';

import { useState } from 'react';
import {
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Building2,
  FileText,
  Globe,
  IndianRupee,
  Loader2,
  Check,
  Layers,
} from 'lucide-react';
import { cn, validatePhone } from '@/lib/utils';
import { useToast } from '@/components/shared/Toast';

const SERVICE_CATEGORIES = [
  'AC',
  'Fridge',
  'Washing Machine',
  'Air Cooler',
  'Geyser',
  'Water Purifier',
  'Microwave',
  'Room Heater',
  'Induction Cooktop',
];

interface FormState {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  gstin: string;
  yearsInBusiness: string;
  serviceCategories: string[];
  coverageArea: string;
  pricingModel: 'per-job' | 'monthly' | 'hybrid';
  teamSize: string;
  website: string;
  notes: string;
}

const initial: FormState = {
  businessName: '',
  contactName: '',
  phone: '',
  email: '',
  address: '',
  pincode: '',
  city: '',
  state: '',
  gstin: '',
  yearsInBusiness: '',
  serviceCategories: [],
  coverageArea: '',
  pricingModel: 'per-job',
  teamSize: '',
  website: '',
  notes: '',
};

export function VendorRegistrationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { error: showError } = useToast();

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as string]) setErrors((prev) => ({ ...prev, [key as string]: '' }));
  };

  const toggleCat = (cat: string) => {
    setForm((prev) => {
      const has = prev.serviceCategories.includes(cat);
      const next = has
        ? prev.serviceCategories.filter((c) => c !== cat)
        : [...prev.serviceCategories, cat];
      return { ...prev, serviceCategories: next };
    });
    if (errors.serviceCategories) {
      setErrors((prev) => ({ ...prev, serviceCategories: '' }));
    }
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.businessName || form.businessName.length < 2)
      e.businessName = 'Please enter your business name';
    if (!form.contactName || form.contactName.length < 2)
      e.contactName = "Please enter the contact person's name";
    if (!validatePhone(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.address || form.address.length < 5) e.address = 'Please enter your address';
    if (!form.pincode || !/^[1-9]\d{5}$/.test(form.pincode))
      e.pincode = 'Enter a valid 6-digit pincode';
    if (!form.city) e.city = 'Please enter your city';
    if (!form.state) e.state = 'Please enter your state';
    if (form.gstin && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(form.gstin))
      e.gstin = 'Enter a valid 15-character GSTIN';
    if (!form.yearsInBusiness) e.yearsInBusiness = 'Please enter years in business';
    if (form.serviceCategories.length === 0)
      e.serviceCategories = 'Please pick at least one service category';
    if (!form.coverageArea) e.coverageArea = 'Please enter your service area';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showError('Please fix the errors', 'Check the highlighted fields and try again.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/register-vendor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, kind: 'vendor' }),
      });
      if (!res.ok) throw new Error('Network error');
      setSubmitted(true);
      setForm(initial);
    } catch {
      showError('Submission failed', 'Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center">
        <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-10 w-10 text-green-600" strokeWidth={3} />
        </div>
        <h2 className="font-display text-2xl font-extrabold text-gray-900 mb-2">
          Vendor registration received!
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Thanks for your interest in partnering with SkyCool. Our vendor
          management team will reach out within 5 working days.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-primary text-sm">
          Register another business
        </button>
      </div>
    );
  }

  const fc = (k: keyof FormState) =>
    cn('input-base', errors[k as string] && 'border-red-400');

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8"
      noValidate
    >
      <div className="text-center mb-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-highlight mb-3">
          <Building2 className="h-7 w-7 text-white" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1.5">
          Vendor Registration
        </h2>
        <p className="text-sm text-gray-600">
          Become a partner vendor — rent supply, AMC services &amp; installation partners welcome.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Business */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Business Name *
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              value={form.businessName}
              onChange={(e) => update('businessName', e.target.value)}
              placeholder="ACME Appliances Pvt Ltd"
              className={cn(fc('businessName'), 'pl-10')}
            />
          </div>
          {errors.businessName && (
            <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>
          )}
        </div>

        {/* Contact person */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Contact Person *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              value={form.contactName}
              onChange={(e) => update('contactName', e.target.value)}
              placeholder="Your full name"
              autoComplete="name"
              className={cn(fc('contactName'), 'pl-10')}
            />
          </div>
          {errors.contactName && (
            <p className="text-xs text-red-600 mt-1">{errors.contactName}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Phone *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="tel"
              inputMode="numeric"
              value={form.phone}
              onChange={(e) =>
                update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))
              }
              placeholder="98765 43210"
              autoComplete="tel"
              className={cn(fc('phone'), 'pl-10')}
            />
          </div>
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@business.com"
              autoComplete="email"
              className={cn(fc('email'), 'pl-10')}
            />
          </div>
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Business Address *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            <textarea
              value={form.address}
              onChange={(e) => update('address', e.target.value)}
              rows={2}
              placeholder="Building, street, locality"
              className={cn(fc('address'), 'pl-10 resize-none')}
            />
          </div>
          {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
        </div>

        {/* Pin / City / State */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Pincode *
          </label>
          <input
            value={form.pincode}
            inputMode="numeric"
            onChange={(e) => update('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="411048"
            maxLength={6}
            className={fc('pincode')}
          />
          {errors.pincode && <p className="text-xs text-red-600 mt-1">{errors.pincode}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            City *
          </label>
          <input
            value={form.city}
            onChange={(e) => update('city', e.target.value)}
            placeholder="Pune"
            className={fc('city')}
          />
          {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            State *
          </label>
          <input
            value={form.state}
            onChange={(e) => update('state', e.target.value)}
            placeholder="Maharashtra"
            className={fc('state')}
          />
          {errors.state && <p className="text-xs text-red-600 mt-1">{errors.state}</p>}
        </div>

        {/* GSTIN */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            GSTIN (optional)
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              value={form.gstin}
              maxLength={15}
              onChange={(e) => update('gstin', e.target.value.toUpperCase())}
              placeholder="22AAAAA0000A1Z5"
              className={cn(fc('gstin'), 'pl-10 uppercase')}
            />
          </div>
          {errors.gstin && <p className="text-xs text-red-600 mt-1">{errors.gstin}</p>}
        </div>

        {/* Years / Team */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Years in Business *
          </label>
          <input
            type="number"
            value={form.yearsInBusiness}
            inputMode="numeric"
            onChange={(e) => update('yearsInBusiness', e.target.value)}
            placeholder="e.g. 5"
            min="0"
            max="100"
            className={fc('yearsInBusiness')}
          />
          {errors.yearsInBusiness && (
            <p className="text-xs text-red-600 mt-1">{errors.yearsInBusiness}</p>
          )}
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Team Size
          </label>
             <input
            value={form.teamSize}
            onChange={(e) => update('teamSize', e.target.value)}
            placeholder="e.g. 10 technicians"
            className={fc('teamSize')}
          />
        </div>

        {/* Service categories — multi-select chips */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Service Categories *
          </label>
          <div className="flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((c) => {
              const active = form.serviceCategories.includes(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleCat(c)}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold border-2 transition',
                    active
                      ? 'bg-brand text-white border-transparent'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-brand'
                  )}
                >
                  {active && <Check className="h-3 w-3" strokeWidth={3} />}
                  {c}
                </button>
              );
            })}
          </div>
          {errors.serviceCategories && (
            <p className="text-xs text-red-600 mt-1">{errors.serviceCategories}</p>
          )}
        </div>

        {/* Coverage area */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Coverage Area *
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              value={form.coverageArea}
              onChange={(e) => update('coverageArea', e.target.value)}
              placeholder="Pune · Mumbai · Bangalore"
              className={cn(fc('coverageArea'), 'pl-10')}
            />
          </div>
          {errors.coverageArea && (
            <p className="text-xs text-red-600 mt-1">{errors.coverageArea}</p>
          )}
        </div>

        {/* Pricing model */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Pricing Model
          </label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <select
              value={form.pricingModel}
              onChange={(e) => update('pricingModel', e.target.value as FormState['pricingModel'])}
              className="input-base pl-10 pr-8 appearance-none cursor-pointer"
            >
              <option value="per-job">Per Job / Service</option>
              <option value="monthly">Monthly Retainer</option>
              <option value="hybrid">Hybrid (Both)</option>
            </select>
          </div>
        </div>

        {/* Website (optional) */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Website (optional)
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              value={form.website}
              onChange={(e) => update('website', e.target.value)}
              placeholder="https://your-business.com"
              className="input-base pl-10"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Notes
          </label>
          <div className="relative">
            <Layers className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              rows={2}
              placeholder="Anything else we should know"
              className="input-base pl-10 resize-none"
            />
          </div>
        </div>

        <div className="sm:col-span-2 mt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-highlight hover:bg-highlight-dark text-white rounded-xl px-5 py-3 font-bold text-sm transition active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit vendor application
              </>
            )}
          </button>
          <p className="text-[11px] text-gray-400 text-center mt-2">
            By submitting you consent to being contacted about vendor onboarding.
          </p>
        </div>
      </div>
    </form>
  );
}
