import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductCard } from '@/components/shared/ProductCard';
import { PRODUCTS, resolveCategorySlug, LEGACY_CATEGORY_MAP } from '@/lib/data';
import { formatPrice, titleCase } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string; subcategory: string };
}

export async function generateStaticParams() {
  const params: Array<{ category: string; subcategory: string }> = [];

  // Walk every product and emit the canonical (category, subcategory) pair,
  // plus every legacy alias that maps to the same product so the legacy
  // URLs continue to render statically.
  for (const p of PRODUCTS) {
    if (!p.subCategory || !p.category) continue;
    params.push({ category: p.category, subcategory: p.subCategory });
    for (const [legacy, canonical] of Object.entries(LEGACY_CATEGORY_MAP)) {
      if (canonical === p.category) {
        params.push({ category: legacy, subcategory: p.subCategory });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const subName = titleCase(params.subcategory);
  return {
    title: `Rent ${subName} in India | SkyCool Solutions`,
    description: `Browse ${subName} rentals starting at affordable monthly prices. Free delivery & installation.`,
  };
}

export default function SubCategoryPage({ params }: PageProps) {
  // Legacy URLs like `/rent/ac/window-ac` arrive with category === 'ac'.
  // Translate them to the canonical product category before filtering,
  // so the existing URL structure keeps working without redirects.
  const canonicalCategory = resolveCategorySlug(params.category);

  const products = PRODUCTS.filter(
    (p) => p.subCategory === params.subcategory && p.category === canonicalCategory
  );

  if (products.length === 0) {
    notFound();
  }

  const minPrice = Math.min(...products.map((p) => p.pricing.monthly));
  const subName = titleCase(params.subcategory);
  const displayCategory = titleCase(canonicalCategory);

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb
            items={[
              { label: 'Rent', href: '/rent' },
              { label: displayCategory, href: `/rent/${canonicalCategory}` },
              { label: subName },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              {subName} for Rent
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              {products.length} products • Starting from{' '}
              <span className="font-bold text-sky-600">{formatPrice(minPrice)}/month</span>
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}