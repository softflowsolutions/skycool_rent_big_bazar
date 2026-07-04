import Link from 'next/link';
import Image from 'next/image';
import { Wrench, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SERVICES, CATEGORIES } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AC & Fridge Service — Repair, Installation, AMC | SkyCool Solutions',
  description:
    'Professional AC and Fridge service in India. Repair, installation, gas refill, deep cleaning, and AMC plans. Same-day service available.',
  alternates: { canonical: '/service' },
};

export default function ServicePage() {
  const serviceCategories = CATEGORIES.filter((c) => c.parent === 'service');

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Service' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <Wrench className="h-3.5 w-3.5 text-gray-700" />
              <span className="text-xs font-semibold text-gray-700">Expert Technicians</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              AC & Fridge Services
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
          {serviceCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/service/${cat.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-56 bg-gray-100">
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">{cat.name}</h3>
                  <p className="text-sm text-white/90">{cat.description}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-sky-600 group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  View Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
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
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white section-padding">
        <div className="container-app">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 lg:mb-10">
            Why Our Service?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-3">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Same-Day Service</h3>
              <p className="text-sm text-gray-300">Book before 2 PM, get same-day service in metros.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-3">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">90-Day Warranty</h3>
              <p className="text-sm text-gray-300">All repairs come with 90-day service warranty.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-3">
                <Star className="h-7 w-7 fill-white text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">4.8/5 Rated</h3>
              <p className="text-sm text-gray-300">Trusted by 50,000+ customers across India.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
