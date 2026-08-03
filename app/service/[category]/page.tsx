import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SERVICES, resolveServiceCategorySlug } from '@/lib/data';
import { capitalize, formatPrice, titleCase } from '@/lib/utils';
import { categorySeo } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return [
    { category: 'air-conditioners' },
    { category: 'air-coolers' },
    { category: 'washing-machines' },
    { category: 'refrigerators' },
    { category: 'inverters' },
    { category: 'geysers' },
    { category: 'water-purifiers' },
    { category: 'microwaves-ovens' },
    { category: 'room-heaters' },
    { category: 'induction-cooktops' },
    { category: 'ac' },
    { category: 'fridge' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = resolveServiceCategorySlug(params.category);
  return categorySeo({
    category: 'service',
    slug: params.category,
    label: titleCase(resolved),
    description: `Professional ${resolved.replace(/-/g, ' ')} service — repair, installation, gas refill, deep cleaning. Same-day service available across Pune and India.`,
  });
}

export default function ServiceCategoryPage({ params }: PageProps) {
  const target = resolveServiceCategorySlug(params.category);
  const services = SERVICES.filter(
    (s) => resolveServiceCategorySlug(s.category) === target
  );

  if (services.length === 0) notFound();

  const minPrice = Math.min(...services.map((s) => s.startingPrice));
  const heroService = services[0];

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Service', href: '/service' }, { label: capitalize(params.category) }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              {capitalize(params.category)} Services Near You
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              {services.length} services • Starting from{' '}
              <span className="font-bold text-sky-600">{formatPrice(minPrice)}</span>
            </p>
            {heroService && (
              <p className="text-xs text-gray-500 mt-2">
                Most popular:{' '}
                <span className="font-semibold text-gray-700">{heroService.name}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
