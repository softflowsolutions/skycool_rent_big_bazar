import Link from 'next/link';
import Image from 'next/image';
import { Wrench, ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SERVICES, CATEGORIES, resolveServiceCategorySlug } from '@/lib/data';
import { SITE_CONFIG } from '@/lib/constants';
import { SEO } from '@/lib/seo';

export const metadata = SEO.service;

// Service category tiles — each tile uses the SAME product image as the
// corresponding /service/[slug] page so the tile visibly matches the
// appliances it services (AC tile -> AC, fridge tile -> fridge, etc.).
// Per the new spec we no longer use the first service image because
// those are stock photos of technicians; use the appliance category image.
const SERVICE_CATEGORIES = CATEGORIES.filter(
  (c) =>
    c.parent === 'rent' &&
    c.slug !== 'combo' &&
    c.slug !== 'ac' &&
    c.slug !== 'fridge'
).map((c) => ({ ...c, tileImage: c.image }));

export default function ServicePage() {
  const featured = SERVICES.slice(0, 6);

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
              AC &amp; Home Appliance Service Near You
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Same-day AC repair, installation, gas refill, deep cleaning, AMC, fridge
              repair, washing-machine repair, geyser repair, water-purifier service and
              more — across {SITE_CONFIG.areasServed.join(', ')}.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Choose Appliance
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-12">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/service/${cat.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-40 sm:h-48 lg:h-56 bg-gray-50">
                <Image
                  src={cat.tileImage || '/placeholder.svg'}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-1">{cat.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">{cat.description}</p>
                <span className="text-xs sm:text-sm font-semibold text-sky-600 group-hover:gap-2 transition-all inline-flex items-center gap-1">
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
            href="/service/air-conditioners"
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
