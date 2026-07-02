import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SERVICES } from '@/lib/data';
import { capitalize } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string; subcategory: string };
}

export async function generateStaticParams() {
  const params: Array<{ category: string; subcategory: string }> = [];
  const subCats = new Set<string>();
  SERVICES.forEach((s) => {
    if (s.subCategory && s.category) {
      subCats.add(s.subCategory);
    }
  });
  subCats.forEach((sub) => {
    const service = SERVICES.find((s) => s.subCategory === sub);
    if (service) {
      params.push({ category: service.category, subcategory: sub });
    }
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const subName = params.subcategory.replace(/-/g, ' ');
  return {
    title: `${capitalize(subName)} Service in India | SkyCool Solutions`,
    description: `Professional ${subName} service starting at affordable prices. Same-day service available.`,
  };
}

export default function ServiceSubCategoryPage({ params }: PageProps) {
  const services = SERVICES.filter(
    (s) => s.subCategory === params.subcategory && s.category === params.category
  );

  if (services.length === 0) notFound();

  const subName = capitalize(params.subcategory.replace(/-/g, ' '));

  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb
            items={[
              { label: 'Service', href: '/service' },
              { label: capitalize(params.category), href: `/service/${params.category}` },
              { label: subName },
            ]}
          />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            {subName} <span className="text-gradient">Services</span>
          </h1>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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