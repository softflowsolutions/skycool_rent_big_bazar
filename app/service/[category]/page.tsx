import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SERVICES, resolveServiceCategorySlug } from '@/lib/data';
import { capitalize, formatPrice } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string };
}

/**
 * Statically generate every service category slug — the 10 Home Appliances
 * categories plus the two legacy aliases (`ac`, `fridge`). This mirrors the
 * Rent page so every appliance tile on /service has a working landing page.
 */
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
    // Legacy aliases kept so older links keep resolving.
    { category: 'ac' },
    { category: 'fridge' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = resolveServiceCategorySlug(params.category);
  return {
    title: `${capitalize(resolved)} Service in India | SkyCool Solutions`,
    description: `Professional ${resolved.replace(/-/g, ' ')} service - repair, installation, gas refill, cleaning. Same-day service available.`,
  };
}

export default function ServiceCategoryPage({ params }: PageProps) {
  // Resolve both the URL slug AND the service's stored category so legacy
  // URLs (`/service/ac`, `/service/fridge`) and canonical URLs
  // (`/service/air-conditioners`) match the same services.
  const target = resolveServiceCategorySlug(params.category);
  const services = SERVICES.filter(
    (s) => resolveServiceCategorySlug(s.category) === target
  );

  if (services.length === 0) notFound();

  const minPrice = Math.min(...services.map((s) => s.startingPrice));

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Service', href: '/service' }, { label: capitalize(params.category) }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              {capitalize(params.category)} Services
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              {services.length} services • Starting from{' '}
              <span className="font-bold text-sky-600">{formatPrice(minPrice)}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}