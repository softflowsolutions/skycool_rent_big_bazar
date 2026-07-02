import Link from 'next/link';
import { Snowflake, Refrigerator, Package, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { PRODUCTS } from '@/lib/data';
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

const categoryCards = [
  {
    title: 'AC Rentals',
    slug: 'ac',
    icon: Snowflake,
    description: 'Window AC, Split AC, Inverter AC, Portable AC',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'from-sky-50 to-blue-50',
    count: PRODUCTS.filter((p) => p.category === 'ac').length,
  },
  {
    title: 'Fridge Rentals',
    slug: 'fridge',
    icon: Refrigerator,
    description: 'Single Door, Double Door, Side-by-Side Fridges',
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'from-cyan-50 to-teal-50',
    count: PRODUCTS.filter((p) => p.category === 'fridge').length,
  },
  {
    title: 'Combo Deals',
    slug: 'combo',
    icon: Package,
    description: 'AC + Fridge bundles with extra savings',
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50',
    count: PRODUCTS.filter((p) => p.subCategory === 'combo').length,
  },
];

export default function RentPage() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Rent' }]} />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Rent <span className="text-gradient">AC & Fridge</span>
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
          {categoryCards.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/rent/${cat.slug}`}
                className={`group relative bg-gradient-to-br ${cat.bgColor} rounded-2xl p-6 border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${cat.color} opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg mb-4`}>
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-1">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-700 bg-white px-2.5 py-1 rounded-full">
                    {cat.count} products
                  </span>
                  <span className="text-sm font-semibold text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
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