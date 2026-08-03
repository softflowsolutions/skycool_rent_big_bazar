import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Clock, Shield, Star, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceBookingForm } from '@/components/service/ServiceBookingForm';
import { ServiceJsonLd } from '@/components/seo/JsonLd';
import { SERVICES, getServiceBySlug, resolveServiceCategorySlug } from '@/lib/data';
import { capitalize, formatPrice, generateCallLink, generateWhatsAppLink } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { serviceSeo } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string; subcategory: string; service: string };
}

/**
 * Emit every (category, subcategory, service) combination. We emit both the
 * service's canonical category AND its legacy alias (e.g. `ac`) so older
 * URLs keep resolving statically.
 */
export async function generateStaticParams() {
  const params: Array<{ category: string; subcategory: string; service: string }> = [];
  const seen = new Set<string>();
  SERVICES.forEach((s) => {
    const resolved = resolveServiceCategorySlug(s.category);
    [s.category, resolved].forEach((cat) => {
      const key = `${cat}::${s.subCategory}::${s.slug}`;
      if (seen.has(key)) return;
      seen.add(key);
      params.push({ category: cat, subcategory: s.subCategory, service: s.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  if (!service) return { title: 'Service Not Found' };

  const base = serviceSeo({
    name: service.name,
    category: service.category,
    description: `${service.description} Starting at ₹${service.startingPrice}. Same-day service available in Pune and across India.`,
    price: service.startingPrice,
  });
  return {
    ...base,
    alternates: {
      canonical: `${SITE_CONFIG.url}/service/${params.category}/${params.subcategory}/${params.service}`,
    },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.service);

  if (!service) notFound();

  const subName = capitalize(service.subCategory.replace(/-/g, ' '));
  const message = `Hi AC on Rent Near Me! 🛠️

I'd like to book the following service:

🔧 Service: ${service.name}
📂 Category: ${capitalize(service.category)} > ${subName}
💰 Starting at: ${formatPrice(service.startingPrice)}

Please share availability and pricing.

---
Sent from: AC on Rent Near Me website`;

  return (
    <>
      <ServiceJsonLd service={service} />
      <section className="bg-gray-50">
        <div className="container-app py-6 lg:py-8">
          <Breadcrumb
            items={[
              { label: 'Service', href: '/service' },
              { label: capitalize(service.category), href: `/service/${service.category}` },
              { label: subName, href: `/service/${service.category}/${service.subCategory}` },
              { label: service.name },
            ]}
          />
        </div>
      </section>

      <section className="container-app py-6 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={service.images[0]}
              alt={service.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="badge-primary">{capitalize(service.category)}</span>
                <span className="badge-success">
                  <Shield className="h-3 w-3" />
                  Verified Service
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
                {service.name}
              </h1>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">{service.rating}</span>
                <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.longDescription}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-sky-50 rounded-xl p-3 text-center">
                <Clock className="h-5 w-5 text-sky-600 mx-auto mb-1" />
                <div className="text-[10px] text-gray-500 uppercase">Duration</div>
                <div className="text-xs font-bold text-gray-900 mt-0.5">{service.duration}</div>
              </div>
              <div className="bg-cyan-50 rounded-xl p-3 text-center">
                <Shield className="h-5 w-5 text-cyan-600 mx-auto mb-1" />
                <div className="text-[10px] text-gray-500 uppercase">Warranty</div>
                <div className="text-xs font-bold text-gray-900 mt-0.5">{service.warranty}</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400 mx-auto mb-1" />
                <div className="text-[10px] text-gray-500 uppercase">Rating</div>
                <div className="text-xs font-bold text-gray-900 mt-0.5">{service.rating}/5</div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 text-white">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xs opacity-90">Starting at</span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-extrabold">{formatPrice(service.startingPrice)}</span>
                <span className="text-sm opacity-90">onwards</span>
              </div>
              <p className="text-xs opacity-90 mb-4">
                Final pricing depends on inspection. No hidden charges.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={generateWhatsAppLink(message, SITE_CONFIG.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-green-600 rounded-xl px-4 py-3 font-bold text-sm hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
                <a
                  href={generateCallLink(SITE_CONFIG.phone)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-3 font-bold text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-3">Service Includes</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="container-app py-8 lg:py-12">
        <ServiceBookingForm service={service} />
      </section>
    </>
  );
}