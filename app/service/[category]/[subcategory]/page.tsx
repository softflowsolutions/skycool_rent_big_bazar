import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SERVICES, resolveServiceCategorySlug } from '@/lib/data';
import { capitalize, titleCase } from '@/lib/utils';
import { categorySeo } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string; subcategory: string };
}

/**
 * Generate `(category, subcategory)` pairs from every service. We dedupe on
 * the *resolved* category so legacy slugs (`ac`, `fridge`) emit pairs that
 * match their canonical counterparts as well — `/service/ac/repair` and
 * `/service/air-conditioners/repair` both resolve to the same data.
 */
export async function generateStaticParams() {
  const params: Array<{ category: string; subcategory: string }> = [];
  const seen = new Set<string>();
  SERVICES.forEach((s) => {
    if (!s.subCategory || !s.category) return;
    const resolved = resolveServiceCategorySlug(s.category);
    [s.category, resolved].forEach((cat) => {
      const key = `${cat}::${s.subCategory}`;
      if (seen.has(key)) return;
      seen.add(key);
      params.push({ category: cat, subcategory: s.subCategory });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const subName = titleCase(params.subcategory.replace(/-/g, ' '));
  return categorySeo({
    category: 'service',
    slug: `${params.category}-${params.subcategory}`,
    label: subName,
    description: `Professional ${subName} service in Pune & across India starting at affordable prices. Same-day service, 90-day warranty, certified technicians.`,
  });
}

export default function ServiceSubCategoryPage({ params }: PageProps) {
  // Resolve the legacy alias on both sides of the filter so `/service/ac/repair`
  // and `/service/air-conditioners/repair` both show the same list.
  const target = resolveServiceCategorySlug(params.category);
  const services = SERVICES.filter(
    (s) =>
      s.subCategory === params.subcategory &&
      resolveServiceCategorySlug(s.category) === target
  );

  if (services.length === 0) notFound();

  const subName = capitalize(params.subcategory.replace(/-/g, ' '));

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb
            items={[
              { label: 'Service', href: '/service' },
              { label: capitalize(target), href: `/service/${params.category}` },
              { label: subName },
            ]}
          />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            {subName} Services
          </h1>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex"
          >
            Book a Service
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}