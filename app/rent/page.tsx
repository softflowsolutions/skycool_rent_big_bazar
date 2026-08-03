import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Package } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductCard } from '@/components/shared/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { SEO } from '@/lib/seo';

export const metadata = SEO.rent;

export default function RentPage() {
  // Exclude the legacy / backwards-compat placeholder sections
  // (combo, ac-rentals, fridge-rentals). Those used to render as their own
  // tiles and were removed from the homepage catalog.
  const rentCategories = CATEGORIES.filter(
    (c) =>
      c.parent === 'rent' &&
      c.slug !== 'combo' &&
      c.slug !== 'ac' &&
      c.slug !== 'fridge'
  );
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Rent' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Rent AC &amp; Home Appliances
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Rent ACs, Fridges, Washing Machines, Geysers &amp; more home appliances on
              affordable monthly plans. Zero deposit, free delivery &amp; installation.
              <strong> AC on Rent Near Me</strong> — starting at ₹599/month.
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
                className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background image — clean, no overlay */}
                <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-gray-50">
                  <Image
                    src={cat.image || '/placeholder.svg'}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text BELOW the image — dark text on white */}
                <div className="p-3 sm:p-4 text-gray-900">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-display font-extrabold text-sm sm:text-base lg:text-lg leading-tight">
                      {cat.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full shrink-0">
                      <Package className="h-3 w-3" />
                      {productCount} items
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2 hidden sm:block">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-sky-600 group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
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
            href="/rent/air-conditioners"
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
