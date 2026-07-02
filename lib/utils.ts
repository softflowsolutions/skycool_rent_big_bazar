import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calculateSavings(
  monthly: number,
  durationMonths: number,
  discountedTotal: number
): number {
  return monthly * durationMonths - discountedTotal;
}

export function getDurationDiscount(monthly: number, months: number): number {
  const basePrice = monthly * months;
  let discountPercent = 0;
  if (months >= 12) discountPercent = 0.2;
  else if (months >= 6) discountPercent = 0.12;
  else if (months >= 3) discountPercent = 0.08;
  return Math.round(basePrice * (1 - discountPercent));
}

export function generateWhatsAppLink(
  message: string,
  phone: string
): string {
  const encoded = encodeURIComponent(message);
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

export function generateCallLink(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  return `tel:+${cleanPhone}`;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}