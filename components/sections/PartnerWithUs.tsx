import Link from 'next/link';
import { Wrench, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

const partnerTypes = [
  {
    icon: Wrench,
    title: 'Technician Registration',
    description:
      'Join our certified technician network and grow your business. Get consistent repair & installation jobs across India.',
    benefits: [
      'Steady job flow across service categories',
      'Transparent per-job payouts',
      'Onboarding support & skill upgrades',
    ],
    cta: 'Register as Technician',
    href: '/contact/technician',
    accent: 'bg-sky-50 text-sky-700 border-sky-100',
    iconBg: 'bg-sky-600',
  },
  {
    icon: Store,
    title: 'Vendor Registration',
    description:
      'List your rental inventory, warehouse stock, or branded products with us. Reach more customers without marketing spend.',
    benefits: [
      'Pan-India customer reach',
      'Zero lead-generation cost',
      'Dedicated vendor success manager',
    ],
    cta: 'Register as Vendor',
    href: '/contact/vendor',
    accent: 'bg-amber-50 text-amber-700 border-amber-100',
    iconBg: 'bg-amber-600',
  },
];

export function PartnerWithUs() {
  return (
    <section className="container-app py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 lg:mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
          Partner With Us
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          Grow With Rent BigBazar
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Whether you are a certified technician or a vendor with rental inventory,
          build a steady income stream by partnering with us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        {partnerTypes.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className={`rounded-2xl border ${p.accent} p-6 sm:p-8 bg-white`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${p.iconBg} text-white shadow-md flex-shrink-0`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md px-5 py-2.5 text-sm font-semibold transition-colors"
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
