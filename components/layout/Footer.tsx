import Link from 'next/link';
import Image from 'next/image';
import {
  Snowflake,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Shield,
  Truck,
  Headphones,
  Award,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 lg:mt-20">
      {/* Trust badges */}
      <div className="border-b border-white/10">
        <div className="container-app py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Award className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="font-semibold text-sm">50,000+</div>
                <div className="text-xs text-gray-400">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Truck className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="font-semibold text-sm">Pan-India</div>
                <div className="text-xs text-gray-400">Free Delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Shield className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="font-semibold text-sm">Zero Deposit</div>
                <div className="text-xs text-gray-400">No Hidden Charges</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Headphones className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="font-semibold text-sm">24/7 Support</div>
                <div className="text-xs text-gray-400">Always Here</div>
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
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-12 bg-white rounded-xl overflow-hidden">
                <Image
                  src="/images/logo/logo1.png"
                  alt="SkyCool Solutions"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="font-display text-xl font-bold">SkyCool</div>
                <div className="text-xs text-gray-400 -mt-0.5">Solutions</div>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              India&apos;s most trusted AC & Fridge rental and service platform.
              Affordable monthly rentals starting at ₹599/month with free delivery
              and installation across 15+ cities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
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
                    className="text-sm text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
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
                    className="text-sm text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-white"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-300 hover:text-white break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">{SITE_CONFIG.address}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
                Follow Us
              </p>
              <div className="flex gap-2">
                {[
                  { icon: Instagram, href: SITE_CONFIG.socials.instagram, label: 'Instagram' },
                  { icon: Facebook, href: SITE_CONFIG.socials.facebook, label: 'Facebook' },
                  { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: 'Twitter' },
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
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-white hover:text-sky-600 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-app py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
              Developed by Softflow Solutions.
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs text-gray-400 mr-2">We accept:</span>
              {['UPI', 'Visa', 'MasterCard', 'RuPay', 'Net Banking'].map((method) => (
                <span
                  key={method}
                  className="text-[10px] font-semibold px-2 py-1 rounded bg-white/10 text-white"
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