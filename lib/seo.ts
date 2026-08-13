import type { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

/**
 * SINGLE FILE FOR ALL SITE-WIDE SEO.
 *
 * Edit the maps below to update titles / descriptions / keywords for every
 * page on the site. Each entry follows Next.js `Metadata` shape, so you can
 * drop them straight into a page's `export const metadata`.
 *
 * Local-keyword SEO is baked into the descriptions and keywords — phrases
 * like "AC on rent near me", "AC on rent in Pune" etc. are useful for
 * matching long-tail search queries that matter most to this brand.
 */

type PageSeo = Pick<Metadata, 'title' | 'description' | 'keywords' | 'alternates' | 'openGraph' | 'twitter'>;

const KW_HOME = [
  'AC on rent near me',
  'AC on rent',
  'AC rental near me',
  'rent AC online',
  'affordable AC rental',
  'window AC on rent',
  'split AC on rent',
  'inverter AC on rent',
  'tower AC on rent',
  'cassette AC on rent',
  'ductable AC on rent',
  'AC without deposit',
  'AC on monthly rent',
];

const KW_RENT = [
  'rent AC',
  'AC rental',
  'rent window AC',
  'rent split AC',
  'rent inverter AC',
  'rent tower AC',
  'rent cassette AC',
  'rent ductable AC',
  'rent AC in Pune',
  'rent AC near me',
  'AC on rent without deposit',
  'rent fridge in Pune',
  'rent washing machine',
  'rent cooler',
  'rent geyser',
  'rent water purifier',
  'rent microwave',
];

const KW_RENT_CATEGORY = (slug: string, label: string): string[] => [
  `rent ${slug}`,
  `${slug} on rent`,
  `${slug} rental`,
  `${slug} on rent near me`,
  `${slug} on rent in Pune`,
  `affordable ${slug} rental`,
  `${label} on monthly rent`,
  `${slug} without deposit`,
];

const KW_SERVICE = [
  'AC service near me',
  'AC repair near me',
  'AC installation near me',
  'AC gas refill',
  'AC deep cleaning',
  'AC AMC',
  'fridge repair near me',
  'washing machine repair',
  'geyser repair',
  'home appliance service',
  'same day AC service in Pune',
];

const KW_SERVICE_CATEGORY = (slug: string, label: string): string[] => [
  `${slug} service near me`,
  `${slug} repair`,
  `${slug} installation`,
  `${slug} service in Pune`,
  `${label} repair near me`,
  `professional ${slug} service`,
];

const KW_CONTACT = [
  'contact AC on rent near me',
  'AC rental contact number',
  'AC rental Pune contact',
  'Pune AC rental phone number',
  'call for AC on rent',
];

const KW_ABOUT = [
  'about AC on rent near me',
  'Rent BigBazar company',
  'Pune AC rental service',
  'trusted AC rental brand',
];

const KW_PRIVACY = [
  'AC on rent near me privacy policy',
  'rental service privacy',
  'data protection',
];

const KW_TERMS = [
  'AC on rent near me terms',
  'rental terms and conditions',
  'AC rental agreement',
];

const KW_REFUND = [
  'AC on rent near me cancellation refund policy',
  'rental cancellation policy',
  'rental refund policy',
];

/** Helper to build OpenGraph + Twitter cards that pick up the brand name. */
function og(title: string, description: string): NonNullable<PageSeo['openGraph']> {
  return {
    type: 'website',
    url: SITE_CONFIG.url,
    title,
    description,
    siteName: SITE_CONFIG.name,
    locale: 'en_IN',
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
}

export const SEO: Record<string, PageSeo> = {
  home: {
    title: `${SITE_CONFIG.name} — Rent ACs Near You from ₹599/month`,
    description: `${SITE_CONFIG.name} — India's most trusted AC rental platform. Rent window, split, inverter, tower, cassette and ductable ACs with zero deposit. Charges applicable on delivery & installation. Available across Pune, Mumbai, Bangalore, Delhi NCR, Hyderabad and Chennai.`,
    keywords: KW_HOME,
    alternates: { canonical: SITE_CONFIG.url },
    openGraph: og(
      `${SITE_CONFIG.name} — Rent ACs Near You from ₹599/month`,
      `Rent ACs near you with zero deposit. Charges applicable on delivery. Available across Pune, Mumbai, Bangalore, Delhi NCR, Hyderabad and Chennai.`,
    ),
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_CONFIG.name} — Rent ACs Near You`,
      description: 'Rent ACs near you from ₹599/month. Zero deposit. Charges applicable on delivery.',
    },
  },
  rent: {
    title: `Rent AC, Fridge & Home Appliances in India — ${SITE_CONFIG.name}`,
    description: `Rent AC, fridge, washing machine, cooler, geyser, water purifier, microwave & more home appliances across India. Window, split, inverter, tower, cassette and ductable ACs on flexible monthly plans starting at ₹599/month with zero deposit. Charges applicable on delivery & installation.`,
    keywords: KW_RENT,
    alternates: { canonical: `${SITE_CONFIG.url}/rent` },
    openGraph: og(
      `Rent AC, Fridge & Home Appliances — ${SITE_CONFIG.name}`,
      'Rent ACs and home appliances with zero deposit. Charges applicable on delivery & installation.',
    ),
  },
  service: {
    title: `AC & Home Appliance Service Near You — Repair, Installation, AMC | ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.name} offers professional AC & home appliance service near you — AC repair, installation, gas refill, deep cleaning, AMC, fridge repair, washing machine repair, geyser repair, water purifier service. Same-day service in Pune, Mumbai and beyond.`,
    keywords: KW_SERVICE,
    alternates: { canonical: `${SITE_CONFIG.url}/service` },
    openGraph: og(
      `AC & Home Appliance Service — ${SITE_CONFIG.name}`,
      'Same-day AC repair, installation, gas refill, deep cleaning and AMC service.',
    ),
  },
  contact: {
    title: `Contact Us — ${SITE_CONFIG.name}`,
    description: `Get in touch with ${SITE_CONFIG.name}. Phone ${SITE_CONFIG.phone}, WhatsApp, email ${SITE_CONFIG.email}, address ${SITE_CONFIG.address}. Available across Pune and India.`,
    keywords: KW_CONTACT,
    alternates: { canonical: `${SITE_CONFIG.url}/contact` },
    openGraph: og(
      `Contact Us — ${SITE_CONFIG.name}`,
      `Phone ${SITE_CONFIG.phone} • Email ${SITE_CONFIG.email} • ${SITE_CONFIG.address}`,
    ),
  },
  about: {
    title: `About Us — ${SITE_CONFIG.name}`,
    description: `Learn about ${SITE_CONFIG.name}, India's most trusted AC on rent near me brand. Serving 50,000+ customers across ${SITE_CONFIG.areasServed.join(', ')}.`,
    keywords: KW_ABOUT,
    alternates: { canonical: `${SITE_CONFIG.url}/about` },
    openGraph: og(
      `About Us — ${SITE_CONFIG.name}`,
      'Affordable AC on rent in India. 50,000+ happy customers across 6 cities.',
    ),
  },
  privacy: {
    title: `Privacy Policy — ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.name} privacy policy — how we collect, store and protect your personal information.`,
    keywords: KW_PRIVACY,
    alternates: { canonical: `${SITE_CONFIG.url}/privacy` },
  },
  terms: {
    title: `Terms & Conditions — ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.name} rental terms & conditions — placing an order with us, usage, customer responsibilities.`,
    keywords: KW_TERMS,
    alternates: { canonical: `${SITE_CONFIG.url}/terms` },
  },
  refund: {
    title: `Rental Terms, Cancellation & Refund Policy — ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.name} rental terms, order modification, cancellation and refund policy — transparent, fair and hassle-free.`,
    keywords: KW_REFUND,
    alternates: { canonical: `${SITE_CONFIG.url}/refund-policy` },
  },
  gallery: {
    title: `Gallery — Warehouse & Products | ${SITE_CONFIG.name}`,
    description: `Browse real photos of ${SITE_CONFIG.name} warehouses, rental-ready inventory, and on-site service across India. See what we deliver before you order.`,
    keywords: [
      `${SITE_CONFIG.name} gallery`,
      'Rent BigBazar warehouse photos',
      'rental appliance inventory',
      'AC on rent warehouse',
      'fridge on rent inventory',
    ],
    alternates: { canonical: `${SITE_CONFIG.url}/gallery` },
    openGraph: og(
      `Gallery — ${SITE_CONFIG.name}`,
      `Real warehouse and product photos from ${SITE_CONFIG.name}.`,
    ),
  },
};

/** Build a per-product page metadata block. */
export function productSeo(opts: {
  name: string;
  brand: string;
  category: string;
  capacity?: string;
  description?: string;
}): PageSeo {
  const { name, brand, category, capacity, description } = opts;
  const slug = category.replace(/-/g, ' ');
  const pretty = `${brand} ${capacity ?? ''} ${name}`.trim();
  const kwBase = KW_RENT_CATEGORY(category, name);
  const local = [
    `${pretty} on rent in Pune`,
    `${pretty} on rent near me`,
    `rent ${brand} ${category} in Pune`,
    `${brand} ${category} rental Pune`,
  ];
  return {
    title: `${pretty} on Rent in Pune — ${SITE_CONFIG.name}`,
    description:
      description ??
      `Rent ${pretty} on monthly plans with zero deposit. Charges applicable on delivery & installation. ${brand} ${category} rental in Pune and across India.`,
    keywords: [...kwBase, ...local],
    openGraph: og(`${pretty} on Rent`, `${pretty} on Rent — ${SITE_CONFIG.name}`),
  };
}

/** Build a per-service page metadata block. */
export function serviceSeo(opts: {
  name: string;
  category: string;
  description?: string;
  price?: number;
}): PageSeo {
  const { name, category, description, price } = opts;
  const slug = category.replace(/-/g, ' ');
  const kwBase = KW_SERVICE_CATEGORY(slug, name);
  const local = [
    `${name} near me`,
    `${name} in Pune`,
    `${name} Pune price`,
    price ? `${name} starting at ₹${price}` : `${name} affordable price`,
  ];
  return {
    title: `${name} in Pune — ${SITE_CONFIG.name}`,
    description:
      description ??
      `${name} — professional, same-day ${slug} service near you in Pune. Certified technicians, transparent pricing, 30-day warranty.`,
    keywords: [...kwBase, ...local],
    openGraph: og(`${name} — ${SITE_CONFIG.name}`, `${name} in Pune starting at ₹${price ?? ''}`),
  };
}

/** Build a per-category page metadata block. */
export function categorySeo(opts: {
  category: 'rent' | 'service';
  slug: string;
  label: string;
  description?: string;
}): PageSeo {
  const { category, slug, label, description } = opts;
  const readable = slug.replace(/-/g, ' ');
  const baseKw =
    category === 'rent' ? KW_RENT_CATEGORY(readable, label) : KW_SERVICE_CATEGORY(readable, label);
  const local = [
    `${label} in Pune`,
    `${label} near me`,
    `${label} ${readable} Pune`,
    `best ${label} ${readable} service near me`,
  ];
  const pathPrefix = category === 'rent' ? '/rent' : '/service';
  const titleSlug = category === 'rent' ? 'on Rent' : 'Service';
  return {
    title: `${label} ${titleSlug} in Pune — ${SITE_CONFIG.name}`,
    description:
      description ??
      `${label} ${titleSlug.toLowerCase()} in Pune & across India. ${readable} on monthly plans with zero deposit. Charges applicable on delivery & installation. ${SITE_CONFIG.name}.`,
    keywords: [...baseKw, ...local],
    alternates: { canonical: `${SITE_CONFIG.url}${pathPrefix}/${slug}` },
    openGraph: og(`${label} ${titleSlug} — ${SITE_CONFIG.name}`, `${label} ${titleSlug.toLowerCase()} in Pune.`),
  };
}
