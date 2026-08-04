import { Phone, Mail, MapPin, Clock, MessageCircle, Wrench, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';
import { SEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata = SEO.contact;

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: SITE_CONFIG.phone,
    href: generateCallLink(SITE_CONFIG.phone),
    description: 'Tap to call our support team',
    sub: 'Available 24×7 · same-day response in Pune',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    cta: 'Call now',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: SITE_CONFIG.phone,
    href: generateWhatsAppLink(
      'Hi Rent BigBazar! I need help with AC rentals and service.',
      SITE_CONFIG.whatsapp
    ),
    description: 'Chat with us for instant help',
    sub: 'Reply within 5 minutes',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    cta: 'WhatsApp now',
  },
  {
    icon: Mail,
    title: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: 'Drop us a line, we will reply',
    sub: 'Reply within 2 working hours',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    cta: 'Send email',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Have questions? We&apos;re here to help. Reach out via phone,
              WhatsApp, email, or visit us.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app py-8 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/*
            Mobile (lg:hidden=false): enquiry form first, contact cards second.
            Desktop: enquiry form on the LEFT (col-span 3), contact cards on
            the RIGHT (col-span 2). This removes the empty whitespace that
            used to appear at the bottom of the right column on desktop.
          */}
          <div className="lg:col-span-3 order-1">
            <EnquiryForm />
          </div>

          <div className="lg:col-span-2 order-2 flex flex-col gap-5 lg:gap-6">
            {/* Call / WhatsApp / Email — the three contact channels */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                const isExternal = m.href.startsWith('http');
                return (
                  <a
                    key={m.title}
                    href={m.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 overflow-hidden"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`shrink-0 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${m.iconBg} shadow-sm`}
                      >
                        <Icon
                          className={`h-5 w-5 sm:h-6 sm:w-6 ${m.iconColor}`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="font-display font-bold text-base sm:text-lg text-gray-900">
                            {m.title}
                          </h3>
                          <span
                            className={`text-xs font-semibold ${m.iconColor}`}
                          >
                            {m.cta} →
                          </span>
                        </div>
                        <p
                          className={`text-sm font-semibold break-all ${m.iconColor}`}
                        >
                          {m.value}
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">
                          {m.description}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {m.sub}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Visit Us — hours + address */}
            <div className="bg-gray-900 text-white rounded-2xl p-5 sm:p-6 shadow-lg">
              <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 shrink-0" />
                Visit Us
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {SITE_CONFIG.address}
              </p>
              <div className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gray-300" />
                <div>
                  <div className="font-semibold">Working Hours</div>
                  <div className="text-gray-300 text-xs">
                    {SITE_CONFIG.workingHours}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-gray-300">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  We serve
                </span>
                {['Pune'].map((city) => (
                  <span
                    key={city}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Emergency card stays at the bottom of the right column */}
            <div className="bg-highlight text-white rounded-2xl p-5 sm:p-6 shadow-lg">
              <h3 className="font-display font-bold text-lg mb-1">
                Emergency?
              </h3>
              <p className="text-sm text-white/90 mb-3">
                AC/Fridge broke down? We offer 24/7 emergency service.
              </p>
              <a
                href={generateCallLink(SITE_CONFIG.phone)}
                className="inline-flex items-center gap-2 bg-white text-highlight rounded-xl px-4 py-2.5 font-bold text-sm hover:bg-white/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with us — two deep-link cards to the dedicated
          registration pages. The forms themselves only render on
          /contact/technician and /contact/vendor (not here). */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">
              Partner with us
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
              Join the SkyCool Network
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Are you a certified appliance technician or a business
              interested in partnering with us? Open the right form below
              to register on its own dedicated page.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
            <Link
              href="/contact/technician"
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-6 sm:p-8"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-md mb-4 transition-transform group-hover:scale-110">
                <Wrench className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 mb-2">
                Technician Registration
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                For certified AC and home-appliance technicians.
                Onboarding within 3 working days.
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5 mb-5">
                {[
                  'Name, phone, address, pincode',
                  'Service type & experience',
                  'Availability & certifications',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                    {line}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2 transition-all">
                Open registration form
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/contact/vendor"
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-6 sm:p-8"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-highlight text-white shadow-md mb-4 transition-transform group-hover:scale-110">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 mb-2">
                Vendor Registration
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                For partner businesses — rental supply, AMC, installation
                or service partners.
              </p>
              <ul className="text-sm text-gray-700 space-y-1.5 mb-5">
                {[
                  'Business name, GSTIN, contact person',
                  'Service categories & coverage area',
                  'Pricing model & team size',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-highlight" />
                    {line}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-highlight group-hover:gap-2 transition-all">
                Open registration form
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
