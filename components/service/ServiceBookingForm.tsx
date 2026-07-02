'use client';

import { useState } from 'react';
import { Calendar, Clock, Send, Loader2, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import type { Service } from '@/types';
import { CITIES, TIME_SLOTS } from '@/lib/constants';
import { cn, formatPrice, generateWhatsAppLink, validateEmail, validatePhone } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { useToast } from '@/components/shared/Toast';

interface ServiceBookingFormProps {
  service: Service;
}

export function ServiceBookingForm({ service }: ServiceBookingFormProps) {
  const { success, error: showError } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: CITIES[0],
    date: '',
    timeSlot: 'morning',
    problem: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name || form.name.length < 2) newErrors.name = 'Required';
    if (!validatePhone(form.phone)) newErrors.phone = 'Invalid phone';
    if (!validateEmail(form.email)) newErrors.email = 'Invalid email';
    if (!form.address || form.address.length < 10) newErrors.address = 'Address too short';
    if (!form.date) newErrors.date = 'Select date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showError('Please fix the errors', 'Check the highlighted fields.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);

    const message = `Hi SkyCool! 🛠️

SERVICE BOOKING

🔧 Service: ${service.name}
👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
📍 Address: ${form.address}, ${form.city}
📅 Date: ${form.date}
⏰ Time: ${TIME_SLOTS.find(t => t.value === form.timeSlot)?.label}
💬 Problem: ${form.problem || 'Not specified'}

Please confirm appointment.

---
Sent from: SkyCool Website`;

    window.open(generateWhatsAppLink(message, SITE_CONFIG.whatsapp), '_blank');
    success('Booking request sent!', 'We will confirm your appointment via WhatsApp/call.');
    setForm({
      name: '',
      phone: '',
      email: '',
      address: '',
      city: CITIES[0],
      date: '',
      timeSlot: 'morning',
      problem: '',
    });
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8"
    >
      <div className="text-center mb-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cool mb-3">
          <Calendar className="h-7 w-7 text-white" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1.5">
          Book This Service
        </h2>
        <p className="text-sm text-gray-600">
          Fill the form and we&apos;ll confirm your appointment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
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
              placeholder="Your name"
            />
          </div>
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

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

        <div>
          <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className={cn('input-base pl-10', errors.email && 'border-red-400')}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

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

        <div className="sm:col-span-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
            Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            <textarea
              value={form.address}
              onChange={(e) => update('address', e.target.value)}
              className={cn('input-base pl-10 min-h-[70px]', errors.address && 'border-red-400')}
              placeholder="Complete address"
              rows={2}
            />
          </div>
          {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={form.date}
            min={minDate}
            onChange={(e) => update('date', e.target.value)}
            className={cn('input-base', errors.date && 'border-red-400')}
          />
          {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
            Time Slot
          </label>
          <select
            value={form.timeSlot}
            onChange={(e) => update('timeSlot', e.target.value)}
            className="input-base cursor-pointer"
          >
            {TIME_SLOTS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1.5 block">
            Problem Description
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
            <textarea
              value={form.problem}
              onChange={(e) => update('problem', e.target.value)}
              className="input-base pl-10 min-h-[80px]"
              placeholder="Describe the issue you're facing..."
              rows={3}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="bg-gradient-cool text-white rounded-xl p-4 mb-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Estimated Cost</span>
              <span className="text-xl font-extrabold">{formatPrice(service.startingPrice)}+</span>
            </div>
            <p className="text-xs opacity-90 mt-1">
              Final price confirmed after inspection. No hidden charges.
            </p>
          </div>
          <button type="submit" disabled={loading} className="w-full btn-primary text-base">
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Book via WhatsApp
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}