import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductCard } from '@/components/shared/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { capitalize, formatPrice } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return [
    { category: 'ac' },
    { category: 'fridge' },
    { category: 'combo' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Rent ${capitalize(params.category)} in India | SkyCool Solutions`,
    description: `Browse ${params.category} rentals starting at ₹599/month. Free delivery & installation.`,
  };
}

const subCategoryMap: Record<string, Array<{ name: string; slug: string; description: string; icon: string }>> = {
  ac: [
    { name: 'Window AC', slug: 'window', description: 'Affordable window ACs', icon: '🪟' },
    { name: 'Split AC', slug: 'split', description: 'Premium split ACs', icon: '❄️' },
    { name: 'Inverter AC', slug: 'inverter', description: 'Energy-efficient inverter', icon: '⚡' },
    { name: 'Portable AC', slug: 'portable', description: 'No installation needed', icon: '🎒' },
  ],
  fridge: [
    { name: 'Single Door', slug: 'single-door', description: 'Compact single door', icon: '🚪' },
    { name: 'Double Door', slug: 'double-door', description: 'Family size double door', icon: '🚪🚪' },
    { name: 'Side-by-Side', slug: 'side-by-side', description: 'Premium side-by-side', icon: '🏢' },
  ],
  combo: [],
};

export default function CategoryPage({ params }: PageProps) {
  const category = params.category;
  const products = PRODUCTS.filter(
    (p) => p.category === category || p.subCategory === category
  );

  if (products.length === 0 && !subCategoryMap[category]) {
    notFound();
  }

  const subCategories = subCategoryMap[category] || [];
  const minPrice = products.length > 0 ? Math.min(...products.map((p) => p.pricing.monthly)) : 0;
  const maxPrice = products.length > 0 ? Math.max(...products.map((p) => p.pricing.monthly)) : 0;

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Rent', href: '/rent' }, { label: capitalize(category) }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Rent {capitalize(category)}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
              {products.length} products available • Starting from{' '}
              <span className="font-bold text-sky-600">{formatPrice(minPrice)}/month</span>
            </p>
          </div>
        </div>
      </section>

      {subCategories.length > 0 && (
        <section className="container-app py-8">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 mb-5">
            Shop by Type
          </h2>
          <div className={`grid gap-3 sm:gap-4 ${
            subCategories.length === 2 ? 'grid-cols-2' :
            subCategories.length === 3 ? 'grid-cols-2 sm:grid-cols-3' :
            'grid-cols-2 sm:grid-cols-4'
          }`}>
            {subCategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/rent/${category}/${sub.slug}`}
                className="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-sky-200"
              >
                <div className="text-3xl sm:text-4xl mb-2">{sub.icon}</div>
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 group-hover:text-sky-600 transition-colors">
                  {sub.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{sub.description}</p>
                <div className="mt-2 text-xs font-semibold text-sky-600 inline-flex items-center gap-1">
                  Browse <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container-app section-padding">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900">
            All {capitalize(category)} Rentals
          </h2>
          <span className="text-sm text-gray-500">{products.length} products</span>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl">
            <p className="text-gray-500">No products in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}