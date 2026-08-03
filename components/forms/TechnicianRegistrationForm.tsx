'use client';

import { useState } from 'react';
import {
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Briefcase,
  Loader2,
  Check,
  BadgeCheck,
} from 'lucide-react';
import { cn, validatePhone } from '@/lib/utils';
import { useToast } from '@/components/shared/Toast';
import type { RegistrationFields } from './registration-shared';

const SERVICES = [
  'AC Repair',
  'AC Installation',
  'AC Gas Refill',
  'AC Deep Cleaning',
  'Fridge Repair',
  'Washing Machine Repair',
  'Geyser Service',
  'Water Purifier Service',
  'General Appliance',
];

interface FormState extends RegistrationFields {}

const initial: FormState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  pincode: '',
  city: '',
  serviceType: '',
  experienceYears: '',
  certifications: '',
  availability: 'full-time',
  notes: '',
};

export function TechnicianRegistrationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { error: showError } = useToast();

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name || form.name.length < 2) e.name = 'Please enter your full name';
    if (!validatePhone(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.address || form.address.length < 5) e.address = 'Please enter your address';
    if (!form.pincode || !/^[1-9]\d{5}$/.test(form.pincode))
      e.pincode = 'Enter a valid 6-digit pincode';
    if (!form.city) e.city = 'Please enter your city';
    if (!form.serviceType) e.serviceType = 'Please choose a service type';
    if (!form.experienceYears) e.experienceYears = 'Please enter experience';
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
      const res = await fetch('/api/register-technician', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, kind: 'technician' }),
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
          Registration received!
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Thank you for signing up as a SkyCool technician. Our HR team will
          contact you within 3 working days to complete your onboarding.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary text-sm"
        >
          Register another technician
        </button>
      </div>
    );
  }

  const fieldClass = (k: keyof FormState) =>
    cn('input-base', errors[k] && 'border-red-400');

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8"
      noValidate
    >
      <div className="text-center mb-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand mb-3">
          <Wrench className="h-7 w-7 text-white" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1.5">
          Technician Registration
        </h2>
        <p className="text-sm text-gray-600">
          Join our network of certified AC &amp; appliance technicians across India.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Name */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Your full name"
              autoComplete="name"
              className={cn(fieldClass('name'), 'pl-10')}
            />
          </div>
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
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
              onChange={(e) => update('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="98765 43210"
              autoComplete="tel"
              className={cn(fieldClass('phone'), 'pl-10')}
            />
          </div>
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Email (optional)
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className={cn(fieldClass('email'), 'pl-10')}
            />
          </div>
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Address *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            <textarea
              value={form.address}
              onChange={(e) => update('address', e.target.value)}
              rows={2}
              placeholder="House no, street, locality"
              className={cn(fieldClass('address'), 'pl-10 resize-none')}
            />
          </div>
          {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
        </div>

        {/* Pincode */}
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
            className={fieldClass('pincode')}
          />
          {errors.pincode && <p className="text-xs text-red-600 mt-1">{errors.pincode}</p>}
        </div>

        {/* City */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            City *
          </label>
          <input
            value={form.city}
            onChange={(e) => update('city', e.target.value)}
            placeholder="Pune"
            className={fieldClass('city')}
          />
          {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
        </div>

        {/* Service type */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Service Type *
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <select
              value={form.serviceType}
              onChange={(e) => update('serviceType', e.target.value)}
              className={cn(fieldClass('serviceType'), 'pl-10 pr-8 appearance-none cursor-pointer')}
            >
              <option value="">Select your primary service…</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          {errors.serviceType && (
            <p className="text-xs text-red-600 mt-1">{errors.serviceType}</p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Years of Experience *
          </label>
          <input
            type="number"
            value={form.experienceYears}
            inputMode="numeric"
            onChange={(e) => update('experienceYears', e.target.value)}
            placeholder="e.g. 3"
            min="0"
            max="50"
            className={fieldClass('experienceYears')}
          />
          {errors.experienceYears && (
            <p className="text-xs text-red-600 mt-1">{errors.experienceYears}</p>
          )}
        </div>

        {/* Availability */}
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Availability
          </label>
          <select
            value={form.availability}
            onChange={(e) => update('availability', e.target.value)}
            className="input-base cursor-pointer pr-8 appearance-none"
          >
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="weekends">Weekends Only</option>
            <option value="on-call">On-Call / Emergency</option>
          </select>
        </div>

        {/* Certifications */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Certifications
          </label>
          <div className="relative">
            <BadgeCheck className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            <textarea
              value={form.certifications}
              onChange={(e) => update('certifications', e.target.value)}
              rows={2}
              placeholder="ITI / Diploma / NACT / OEM certifications (optional)"
              className="input-base pl-10 resize-none"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wider">
            Notes
          </label>
          <textarea
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
            rows={2}
            placeholder="Anything we should know about your background"
            className="input-base resize-none"
          />
        </div>

        <div className="sm:col-span-2 mt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white rounded-xl px-5 py-3 font-bold text-sm transition active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit application
              </>
            )}
          </button>
          <p className="text-[11px] text-gray-400 text-center mt-2">
            By submitting you consent to being contacted about onboarding.
          </p>
        </div>
      </div>
    </form>
  );
}
