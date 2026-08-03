import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Linkedin,
  Shield,
  Wrench,
  Headphones,
  Award,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200 mt-12 lg:mt-20">
      {/* Trust badges */}
      <div className="border-b border-gray-200">
        <div className="container-app py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200">
                <Award className="h-5 w-5 text-sky-600" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">50,000+</div>
                <div className="text-xs text-gray-500">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200">
                <Wrench className="h-5 w-5 text-sky-600" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">Same-Day</div>
                <div className="text-xs text-gray-500">Expert Service</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200">
                <Shield className="h-5 w-5 text-sky-600" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">90-Day</div>
                <div className="text-xs text-gray-500">Service Warranty</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200">
                <Headphones className="h-5 w-5 text-sky-600" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">24/7 Support</div>
                <div className="text-xs text-gray-500">Always Here</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-app py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            {/* The logo file already contains the full wordmark, so no
                separate brand text is rendered beside it. */}
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="relative h-16 w-40 sm:h-20 sm:w-52">
                <Image
                  src="/images/logo/logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="(max-width: 640px) 160px, 208px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              India&apos;s most trusted AC & Fridge rental and service platform.
              Affordable monthly rentals starting at ₹599/month with free delivery
              and installation across 15+ cities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Rent AC', href: '/rent/ac' },
                { label: 'Rent Fridge', href: '/rent/fridge' },
                { label: 'Combo Deals', href: '/rent/combo' },
                { label: 'AC Service', href: '/service/ac' },
                { label: 'Fridge Service', href: '/service/fridge' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-sky-600 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">
              Legal
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Cancellation & Refund', href: '/refund-policy' },
                { label: 'Shipping Policy', href: '/terms#shipping' },
                { label: 'Rental Agreement', href: '/terms#rental' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-sky-600 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-sky-600" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-gray-700 hover:text-sky-600"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-sky-600" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-700 hover:text-sky-600 break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-sky-600" />
                <span className="text-gray-700">{SITE_CONFIG.address}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                Connect With Us
              </p>
              <div className="flex gap-2">
                {[
                  { icon: Youtube, href: SITE_CONFIG.socials.youtube, label: 'YouTube' },
                  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
                <a
                  href={SITE_CONFIG.justdial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all"
                  aria-label="JustDial"
                  title="JustDial"
                >
                  <span className="text-[10px] font-extrabold">JD</span>
                </a>
                <a
                  href={SITE_CONFIG.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all"
                  aria-label="Google Maps"
                  title="Google Maps"
                >
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — clearance for the fixed BottomNav + FloatingCallButton
          on small screens so the © credit and payment badges stay visible. */}
      <div className="border-t border-gray-200">
        <div className="container-app py-5 pb-24 lg:pb-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
              Developed by{' '}
              <a
                href={SITE_CONFIG.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 font-semibold hover:underline"
              >
                Softflow Solutions
              </a>
              .
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs text-gray-500 mr-2">We accept:</span>
              {['UPI', 'Visa', 'MasterCard', 'RuPay', 'Net Banking'].map((method) => (
                <span
                  key={method}
                  className="text-[10px] font-semibold px-2 py-1 rounded bg-white border border-gray-200 text-gray-700"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
