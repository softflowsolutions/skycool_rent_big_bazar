import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — SkyCool Solutions',
  description: 'Our cancellation and refund policy for rentals and services.',
  alternates: { canonical: '/refund-policy' },
};

const policies = [
  {
    title: 'Order Cancellation',
    items: [
      { time: 'Within 24 hours of order (before delivery)', refund: '100% refund' },
      { time: 'After delivery but within 7 days', refund: '50% of first month rent' },
      { time: 'After 7 days of delivery', refund: 'No refund' },
      { time: 'After using service', refund: 'No refund on completed service' },
    ],
  },
  {
    title: 'Refund Process',
    items: [
      { time: 'Refund method', refund: 'Original payment method within 7-10 business days' },
      { time: 'Processing time', refund: '3-5 business days after approval' },
      { time: 'Refund confirmation', refund: 'Email + SMS notification' },
    ],
  },
  {
    title: 'Service Cancellation',
    items: [
      { time: 'Before technician visit', refund: 'Full refund or reschedule' },
      { time: 'After technician visit, before work starts', refund: 'Visit charge of ₹199 may apply' },
      { time: 'After service is performed', refund: 'No refund, but warranty applies' },
    ],
  },
  {
    title: 'Security Deposit Refund',
    items: [
      { time: 'Within 7 days of appliance return', refund: 'Full refund (no deductions for normal wear)' },
      { time: 'Damage beyond normal wear', refund: 'Repair/replacement cost deducted' },
      { time: 'Refund processing', refund: '5-7 business days' },
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container-app py-8">
          <Breadcrumb items={[{ label: 'Cancellation & Refund Policy' }]} />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Cancellation & <span className="text-gradient">Refund</span> Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="container-app py-8 lg:py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {policies.map((policy, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 sm:p-8"
            >
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cool text-white text-sm">
                  {idx + 1}
                </span>
                {policy.title}
              </h2>
              <div className="space-y-3">
                {policy.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-2.5 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-sm font-semibold text-gray-700">{item.time}</span>
                    <span className="text-sm font-bold text-sky-600 sm:text-right">{item.refund}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gradient-cool text-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold mb-2">
              Need Help with Refund?
            </h2>
            <p className="text-sky-100 text-sm mb-4">
              Contact our support team. We process refunds within 24 hours of approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 rounded-xl px-5 py-2.5 font-semibold hover:bg-sky-50 transition-colors"
              >
                📞 {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white border border-white/30 rounded-xl px-5 py-2.5 font-semibold hover:bg-white/30 transition-colors"
              >
                ✉️ {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}