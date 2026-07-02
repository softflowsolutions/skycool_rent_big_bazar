import Link from 'next/link';
import { Wrench, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SERVICES } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AC & Fridge Service — Repair, Installation, AMC | SkyCool Solutions',
  description:
    'Professional AC and Fridge service in India. Repair, installation, gas refill, deep cleaning, and AMC plans. Same-day service available.',
  alternates: { canonical: '/service' },
};

const serviceTypes = [
  {
    title: 'AC Service',
    slug: 'ac',
    description: 'Repair, Installation, Gas Refill, Deep Cleaning, AMC',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'from-sky-50 to-blue-50',
    icon: '❄️',
  },
  {
    title: 'Fridge Service',
    slug: 'fridge',
    description: 'Repair, Gas Refill, Deep Cleaning',
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'from-cyan-50 to-teal-50',
    icon: '🧊',
  },
];

export default function ServicePage() {
  const featured = SERVICES.slice(0, 6);

  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Service' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <Wrench className="h-3.5 w-3.5 text-sky-600" />
              <span className="text-xs font-semibold text-gray-700">Expert Technicians</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              AC & Fridge <span className="text-gradient">Services</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Professional repair, installation, and maintenance by certified technicians.
              Same-day service available across India.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Choose Service Type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-12">
          {serviceTypes.map((s) => (
            <Link
              key={s.slug}
              href={`/service/${s.slug}`}
              className={`group relative bg-gradient-to-br ${s.bgColor} rounded-2xl p-6 sm:p-8 border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.color} opacity-10 group-hover:scale-150 transition-transform duration-500`} />
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{s.description}</p>
              <div className="flex items-center gap-1 text-sm font-semibold text-sky-600 group-hover:gap-2 transition-all">
                <span>View Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
            Popular Services
          </h2>
          <Link
            href="/service/ac"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {featured.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-900 via-blue-900 to-cyan-900 text-white section-padding">
        <div className="container-app">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 lg:mb-10">
            Why Our Service?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-3">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Same-Day Service</h3>
              <p className="text-sm text-sky-100">Book before 2 PM, get same-day service in metros.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 mb-3">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">90-Day Warranty</h3>
              <p className="text-sm text-sky-100">All repairs come with 90-day service warranty.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 mb-3">
                <Star className="h-7 w-7 fill-white text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">4.8/5 Rated</h3>
              <p className="text-sm text-sky-100">Trusted by 50,000+ customers across India.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}