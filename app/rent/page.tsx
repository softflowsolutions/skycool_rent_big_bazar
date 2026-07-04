import Link from 'next/link';
import Image from 'next/image';
import { Snowflake, Refrigerator, Package, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/shared/ProductCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent AC & Fridge in India — Starting at ₹599/month',
  description:
    'Rent premium ACs and Fridges in India. Window, Split, Inverter, Portable ACs. Single, Double, Side-by-Side Fridges. Starting at ₹599/month with free delivery.',
  alternates: {
    canonical: '/rent',
  },
};

export default function RentPage() {
  const rentCategories = CATEGORIES.filter((c) => c.parent === 'rent');
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Rent' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Rent AC & Fridge
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Premium appliances on monthly rent. Zero deposit. Free delivery & installation.
              Starting at ₹599/month.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Browse Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {rentCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/rent/${cat.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48 bg-gray-100">
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-0.5">{cat.name}</h3>
                  <p className="text-xs text-white/85">{cat.description}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-xs font-semibold bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full">
                  {PRODUCTS.filter((p) => p.category === cat.slug || p.subCategory === cat.slug).length} products
                </span>
                <span className="text-sm font-semibold text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
            Featured Rentals
          </h2>
          <Link
            href="/rent/ac"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}