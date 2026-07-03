import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — SkyCool Solutions',
  description: 'Get in touch with SkyCool Solutions. Phone, WhatsApp, email, and address for all your queries.',
  alternates: { canonical: '/contact' },
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: SITE_CONFIG.phone,
    href: generateCallLink(SITE_CONFIG.phone),
    description: 'Available 24/7',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat with us',
    href: generateWhatsAppLink('Hi SkyCool! I need help.', SITE_CONFIG.whatsapp),
    description: 'Reply within 5 mins',
  },
  {
    icon: Mail,
    title: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: 'Reply within 2 hours',
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
              Have questions? We&apos;re here to help. Reach out via phone, WhatsApp, email, or visit us.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {contactMethods.map((m) => {
            const Icon = m.icon;
            const isExternal = m.href.startsWith('http');
            return (
              <a
                key={m.title}
                href={m.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`group relative bg-white rounded-2xl p-5 sm:p-6 border-2 border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden`}
              >
                <div className={`relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gray-900 shadow-md mb-3`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-1">{m.title}</h3>
                <p className="text-sm font-semibold text-sky-600 break-all">{m.value}</p>
                <p className="text-xs text-gray-500 mt-1">{m.description}</p>
              </a>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Visit Us
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {SITE_CONFIG.address}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Working Hours</div>
                    <div className="text-gray-300 text-xs">{SITE_CONFIG.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                Service Cities
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {SITE_CONFIG.cities.map((city) => (
                  <span
                    key={city}
                    className="text-xs px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-display font-bold text-lg mb-2">Emergency?</h3>
              <p className="text-sm text-gray-300 mb-3">
                AC/Fridge broke down? We offer 24/7 emergency service.
              </p>
              <a
                href={generateCallLink(SITE_CONFIG.phone)}
                className="inline-flex items-center gap-2 bg-white text-gray-900 rounded-xl px-4 py-2.5 font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}