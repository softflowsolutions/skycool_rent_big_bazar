import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — SkyCool Solutions',
  description: 'Terms and conditions governing the use of SkyCool Solutions services.',
  alternates: { canonical: '/terms' },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the services provided by ${SITE_CONFIG.name} ("we," "our," or "us"), including our website and rental services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.`,
  },
  {
    title: '2. Eligibility',
    content: 'You must be at least 18 years of age and a resident of India to use our services. By using our services, you represent that you meet these requirements.',
  },
  {
    title: '3. Rental Agreement',
    content: `All rentals are subject to a separate rental agreement which will be provided at the time of delivery. The rental agreement outlines specific terms including duration, payment schedule, maintenance responsibility, and return conditions. The standard terms include:

• Minimum rental duration: 1 month
• Payment: Monthly in advance
• Maintenance: Free maintenance during rental period
• Relocation: Free one-time relocation within the same city
• Return: 7 days notice required for return`,
  },
  {
    title: '4. Pricing & Payment',
    content: `Prices listed on our website are subject to change without prior notice. Confirmed orders will be honored at the price agreed upon at the time of order confirmation.

Payment methods accepted:
• UPI (Google Pay, PhonePe, Paytm, etc.)
• Debit/Credit Cards
• Net Banking
• Cash on Delivery (for select cities)

Late payment may attract a penalty of ₹100 per day after the due date.`,
  },
  {
    title: '5. Security Deposit',
    content: 'Most products are available with ZERO security deposit. For select premium products, a refundable security deposit may be required, which will be refunded within 7 business days after the return of the appliance in good condition.',
  },
  {
    title: '6. Delivery & Installation',
    content: `• Free delivery within 15km of city center in metro cities
• Free installation for AC units (up to 3 meters of copper piping)
• Delivery timeline: Same-day/Next-day in metros, 2-3 days in other cities
• Customer must be present at the delivery address with valid ID proof`,
  },
  {
    title: '7. Damage & Liability',
    content: `Customers are responsible for:
• Damage caused by misuse, negligence, or unauthorized modification
• Loss or theft of the appliance
• Damage from natural disasters (acts of God)

${SITE_CONFIG.name} is responsible for:
• Manufacturing defects
• Normal wear and tear
• Technical faults during the rental period`,
  },
  {
    title: '8. Cancellation Policy',
    content: `• Order can be cancelled within 24 hours of placement for a full refund
• After delivery but within 7 days: 50% refund of first month rent
• After 7 days of delivery: No refund, but rental can be terminated with 7 days notice
• No refund on services already availed`,
  },
  {
    title: '9. Service Warranty',
    content: `• Repair services: 90-day warranty
• Installation: 1-year warranty on workmanship
• Gas refill: 30-day cooling warranty
• Warranty does not cover damage from misuse or external factors`,
  },
  {
    title: '10. Privacy',
    content: 'Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.',
  },
  {
    title: '11. Governing Law',
    content: `These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in ${SITE_CONFIG.address.split(',').pop()?.trim() || 'New Delhi'}.`,
  },
  {
    title: '12. Contact',
    content: `For any questions regarding these terms, please contact us at:
• Email: ${SITE_CONFIG.email}
• Phone: ${SITE_CONFIG.phone}
• Address: ${SITE_CONFIG.address}`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="container-app py-8 lg:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-5 sm:p-8 lg:p-10">
          <div className="prose prose-sky max-w-none">
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
        </div>
      </section>
    </>
  );
}