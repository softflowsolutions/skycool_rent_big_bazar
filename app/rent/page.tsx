import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Package } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductCard } from '@/components/shared/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent AC, Fridge & Home Appliances in India — Starting at ₹599/month',
  description:
    'Rent premium ACs, Fridges, Washing Machines, Geysers & more in India. Window, Split, Inverter ACs. Single, Double, Side-by-Side Fridges. Starting at ₹599/month with free delivery.',
  alternates: {
    canonical: '/rent',
  },
};

export default function RentPage() {
  const rentCategories = CATEGORIES.filter((c) => c.parent === 'rent');
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* ===== Hero ===== */}
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

      {/* ===== Browse Categories — Rentomojo-style grid ===== */}
      <section className="container-app section-padding">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
              Browse Categories
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Pick a category to explore all sub-types and products
            </p>
          </div>
          <span className="text-sm text-gray-500 hidden sm:block">
            {rentCategories.length} categories
          </span>
        </div>

        {/* Responsive 2-column grid (matches 'Shop by Type' rhythm) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {rentCategories.map((cat) => {
            const productCount = PRODUCTS.filter(
              (p) => p.category === cat.slug || p.subCategory === cat.slug
            ).length;

            return (
              <Link
                key={cat.id}
                href={`/rent/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] sm:aspect-[5/4]"
              >
                {/* Background image — full bleed */}
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />

                {/* Text overlay */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white">
                  {/* Top — item count badge */}
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                      <Package className="h-3 w-3" />
                      {productCount} items
                    </span>
                  </div>

                  {/* Bottom — title, description, CTA */}
                  <div>
                    <h3 className="font-display font-extrabold text-base sm:text-lg lg:text-xl mb-1 drop-shadow-md">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-white/85 mb-3 line-clamp-2 drop-shadow-sm hidden sm:block">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-white group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== Featured Rentals ===== */}
      <section className="container-app section-padding">
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