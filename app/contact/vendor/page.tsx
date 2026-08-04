import Link from 'next/link';
import { ChevronLeft, Building2, Phone, MessageCircle, Mail } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { VendorRegistrationForm } from '@/components/forms/VendorRegistrationForm';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';
import { SEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: typeof SEO.contact = {
  ...SEO.contact,
  title: `Vendor Registration — Partner With Us | ${SITE_CONFIG.name}`,
  description:
    `Become a vendor partner with ${SITE_CONFIG.name}. Rent supply, AMC services, installation partners welcome. Partner across Pune and India.`,
  alternates: { canonical: `${SITE_CONFIG.url}/contact/vendor` },
};

export default function VendorRegistrationPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb
            items={[
              { label: 'Contact', href: '/contact' },
              { label: 'Vendor Registration' },
            ]}
          />
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-highlight text-white text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1.5 mb-4">
              <Building2 className="h-3.5 w-3.5" />
              Partner program
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Vendor Registration
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Become a partner vendor — appliance rentals, AMC services
              &amp; installation partners welcome. Submit your details below
              and our vendor management team will reach out within 5
              working days.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app py-8 lg:py-12">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <VendorRegistrationForm />
            <div className="mt-4 flex items-center justify-between">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Contact
              </Link>
              <Link
                href="/contact/technician"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
              >
                Apply as a technician instead →
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-base text-gray-900 mb-3">
                Why partner with us?
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Steady flow of jobs from a national brand',
                  'Weekly payouts — no 60-day wait',
                  'PAN-India fulfilment network',
                  'Marketing co-funding on partner listings',
                  'Free vendor onboarding & logistics support',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-highlight" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-5 shadow-lg">
              <h3 className="font-display font-bold text-lg mb-2">
                Talk to vendor management
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Discuss your business model and coverage area with us.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href={generateCallLink(SITE_CONFIG.phone)}
                  className="flex items-center gap-2 hover:text-brand-light"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={generateWhatsAppLink(
                    'Hi Rent BigBazar vendor team, I am interested in becoming a partner vendor.',
                    SITE_CONFIG.whatsapp
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp vendor team
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-red-300 break-all"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-center text-xs text-gray-500 hover:text-gray-700"
            >
              Looking for technician registration instead? →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
