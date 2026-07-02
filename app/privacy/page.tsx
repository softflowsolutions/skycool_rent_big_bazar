import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — SkyCool Solutions',
  description: 'Privacy policy of SkyCool Solutions - how we collect, use, and protect your data.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect the following types of information:

Personal Information:
• Name, phone number, email address
• Delivery address
• ID proof (for verification)

Usage Information:
• Browsing behavior on our website
• Search queries
• Product preferences

Technical Information:
• IP address
• Device type and browser
• Cookies and similar tracking technologies`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use your information to:
• Process and fulfill your orders
• Provide customer support
• Send you order updates and notifications
• Improve our services and website
• Send promotional offers (only with your consent)
• Comply with legal obligations`,
  },
  {
    title: '3. Information Sharing',
    content: `We do NOT sell your personal information to third parties.

We may share information with:
• Delivery and installation partners (only necessary details)
• Payment processors (for transaction processing)
• Service technicians (for service appointments)
• Legal authorities (when required by law)
• Analytics providers (in aggregated form)`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures including:
• SSL encryption for all data transmission
• Secure servers with restricted access
• Regular security audits
• PCI-DSS compliance for payment processing
• Employee training on data protection

However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: '5. Cookies',
    content: `We use cookies and similar technologies for:
• Essential cookies (required for website functionality)
• Analytics cookies (to understand usage patterns)
• Marketing cookies (to show relevant ads)

You can control cookies through your browser settings.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:
• Access your personal information
• Correct inaccurate data
• Request deletion of your data
• Opt-out of marketing communications
• Withdraw consent at any time

To exercise these rights, contact us at ${SITE_CONFIG.email}.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain your personal information for as long as necessary to:
• Provide our services
• Comply with legal obligations
• Resolve disputes
• Enforce agreements

Order history is retained for 7 years for tax and legal purposes.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: 'Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.',
  },
  {
    title: '9. Third-Party Links',
    content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites.',
  },
  {
    title: '10. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via email or website notification.',
  },
  {
    title: '11. Contact Us',
    content: `For privacy-related questions:
• Email: ${SITE_CONFIG.email}
• Phone: ${SITE_CONFIG.phone}
• Address: ${SITE_CONFIG.address}`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container-app py-8">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="container-app py-8 lg:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-5 sm:p-8 lg:p-10">
          {sections.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
                {section.title}
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}