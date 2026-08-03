'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import {
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronRight,
  Youtube,
  Linkedin,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { cn, generateCallLink, generateWhatsAppLink } from '@/lib/utils';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] lg:hidden transition-opacity duration-300',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-sky-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out max-h-[85vh] flex flex-col',
          open ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1.5 w-12 rounded-full bg-gray-300" />
        </div>

        <div className="flex items-center justify-between px-6 pb-4 border-b border-gray-100">
          <h2 className="font-display text-lg font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Quick Actions */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
              Browse
            </p>
            <div className="space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'Rent AC & Fridge', href: '/rent' },
                { label: 'AC Service', href: '/service/ac' },
                { label: 'Fridge Service', href: '/service/fridge' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Actions — Two distinct buttons */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
              Contact Us
            </p>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {/* Call Button */}
              <a
                href={generateCallLink(SITE_CONFIG.phone)}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-bold text-sm transition-colors active:scale-95"
                aria-label="Call AC on Rent Near Me"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              {/* WhatsApp Button */}
              <a
                href={generateWhatsAppLink(
                  `Hi AC on Rent Near Me! I'd like to know more about your AC rental and service offerings.`,
                  SITE_CONFIG.whatsapp
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-bold text-sm transition-colors active:scale-95"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            {/* Email + Address info */}
            <div className="space-y-2 bg-gray-50 rounded-2xl p-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-500" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                <span className="text-xs">{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Social — same set as desktop footer */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
              Connect With Us
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-colors font-extrabold text-[10px]"
                aria-label="JustDial"
              >
                JD
              </a>
              <a
                href={SITE_CONFIG.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
              Legal
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Refund', href: '/refund-policy' },
                { label: 'Shipping', href: '/terms#shipping' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-xs px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-gray-900 text-gray-700 font-medium text-center transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}