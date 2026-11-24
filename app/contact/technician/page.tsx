import Link from 'next/link';
import { ChevronLeft, Wrench, Phone, MessageCircle, Mail } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { TechnicianRegistrationForm } from '@/components/forms/TechnicianRegistrationForm';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';
import { SEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: typeof SEO.contact = {
  ...SEO.contact,
  title: `Technician Registration — Join Our Network | ${SITE_CONFIG.name}`,
  description:
    `Apply to join the ${SITE_CONFIG.name} certified technician network. AC repair, installation, gas refill, deep cleaning — work available across Pune and India. Same-day onboarding.`,
  alternates: { canonical: `${SITE_CONFIG.url}/contact/technician` },
};

export default function TechnicianRegistrationPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb
            items={[
              { label: 'Contact', href: '/contact' },
              { label: 'Technician Registration' },
            ]}
          />
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-brand text-white text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1.5 mb-4">
              <Wrench className="h-3.5 w-3.5" />
              We are hiring
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Technician Registration
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Join our network of certified AC and appliance technicians
              across India. Fill the application below and our HR team will
              reach out within 3 working days to complete your onboarding.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app py-8 lg:py-12">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <TechnicianRegistrationForm />
            <div className="mt-4 flex items-center justify-between">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Contact
              </Link>
              <Link
                href="/contact/vendor"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
              >
                Apply as a vendor instead →
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-base text-gray-900 mb-3">
                What we offer
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Same-day service assignments in your area',
                  'Transparent per-job pricing — paid weekly',
                  'Free uniform, ID card & onboarding kit',
                  '30-day paid trial period',
                  'Up-skilling workshops every quarter',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-5 shadow-lg">
              <h3 className="font-display font-bold text-lg mb-2">
                Questions before you apply?
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Talk to our HR team — we will guide you through the process.
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
                    `Hi ${SITE_CONFIG.name} HR team, I am interested in technician registration on ${SITE_CONFIG.name}.`,
                    SITE_CONFIG.whatsapp
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp HR
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
              Looking for vendor registration instead? →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
