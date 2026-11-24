import type { Product, Service, Testimonial, FAQ, Category, RentalPlan } from '@/types';

/**
 * Top-level rent category slugs. These are the keys that appear in
 * `/rent/[category]` URLs and the `Product.category` field. The Home
 * Appliances brief lists 10 main categories; we keep `combo` as the
 * eleventh entry for backwards-compatibility with the existing route.
 *
 * Source of truth for both `generateStaticParams` in
 * `app/rent/[category]/page.tsx` and the CATEGORIES array below.
 */
export const RENT_CATEGORY_SLUGS = [
  'air-conditioners',
  'air-coolers',
  'washing-machines',
  'refrigerators',
  'inverters',
  'geysers',
  'water-purifiers',
  'microwaves-ovens',
  'room-heaters',
  'induction-cooktops',
  'combo',
  'ac',
  'fridge',
] as const;

export const CATEGORIES: Category[] = [
  /* -------- 10 main rent categories (Home Appliances brief) -------- */
  {
    id: 'rent-air-conditioners',
    name: 'Air Conditioners',
    slug: 'air-conditioners',
    parent: 'rent',
    icon: 'Snowflake',
    description: 'Window, Split, Inverter, Tower & Cassette ACs',
    image: '/images/product_images_v2/AC/1.5%20ton%20split.png',
  },
  {
    id: 'rent-air-coolers',
    name: 'Air Coolers',
    slug: 'air-coolers',
    parent: 'rent',
    icon: 'Wind',
    description: 'Desert & Jumbo Commercial Coolers (20L to 120L)',
    image: '/images/product_images_v2/cooler/80L.png',
  },
  {
    id: 'rent-washing-machines',
    name: 'Washing Machines',
    slug: 'washing-machines',
    parent: 'rent',
    icon: 'WashingMachine',
    description: 'Front Load, Top Load & Semi Automatic Washers',
    image: '/images/newproductimages/washing-machine.jpeg',
  },
  {
    id: 'rent-refrigerators',
    name: 'Refrigerators',
    slug: 'refrigerators',
    parent: 'rent',
    icon: 'Refrigerator',
    description: 'Single, Double, Triple, Side-by-Side & French Door Fridges',
    image: '/images/products/dubbledoor.png',
  },
  {
    id: 'rent-inverters',
    name: 'Inverters',
    slug: 'inverters',
    parent: 'rent',
    icon: 'Zap',
    description: 'Home, Solar, UPS & Inverter Batteries',
    image: '/images/newproductimages/inverter-appliance.jpeg',
  },
  {
    id: 'rent-geysers',
    name: 'Geysers',
    slug: 'geysers',
    parent: 'rent',
    icon: 'Flame',
    description: 'Instant, Storage, Gas, Solar & Smart Geysers',
    image: '/images/newproductimages/geysers-appliance.jpeg',
  },
  {
    id: 'rent-water-purifiers',
    name: 'Water Purifiers',
    slug: 'water-purifiers',
    parent: 'rent',
    icon: 'Droplet',
    description: 'RO, UV, UF, Alkaline, Copper & Smart Purifiers',
    image: '/images/newproductimages/waterpurifier-appliance.jpeg',
  },
  {
    id: 'rent-microwaves-ovens',
    name: 'Microwave & Ovens',
    slug: 'microwaves-ovens',
    parent: 'rent',
    icon: 'UtensilsCrossed',
    description: 'Solo, Grill, Convection, OTG & Built-in Ovens',
    image: '/images/newproductimages/microwave-appliance.jpeg',
  },
  {
    id: 'rent-room-heaters',
    name: 'Room Heaters',
    slug: 'room-heaters',
    parent: 'rent',
    icon: 'Thermometer',
    description: 'Fan, Quartz, Halogen, Oil, PTC & Smart Heaters',
    image: '/images/newproductimages/room-heater-appliance.png',
  },
  {
    id: 'rent-induction-cooktops',
    name: 'Induction Cooktops',
    slug: 'induction-cooktops',
    parent: 'rent',
    icon: 'Flame',
    description: 'Single, Double, Infrared, Built-in & Commercial Induction',
    image: '/images/newproductimages/induction%20cooktop.jpeg',
  },
  /* -------- Combo placeholder (backwards-compat) -------- */
  {
    id: 'combo',
    name: 'Combo Deals',
    slug: 'combo',
    parent: 'rent',
    icon: 'Package',
    description: 'AC + Fridge combo packages with extra savings',
    image: '/images/logo/logo4.png',
  },
  /* -------- Legacy URLs (backwards-compat) -------- */
  {
    id: 'ac',
    name: 'AC Rentals',
    slug: 'ac',
    parent: 'rent',
    icon: 'Snowflake',
    description: 'Window, Split, Inverter & Portable ACs for rent',
    image: '/images/logo/logo3.png',
  },
  {
    id: 'fridge',
    name: 'Fridge Rentals',
    slug: 'fridge',
    parent: 'rent',
    icon: 'Refrigerator',
    description: 'Single Door, Double Door & Side-by-Side Fridges',
    image: '/images/products/dubbledoor.png',
  },
  {
    id: 'ac-service',
    name: 'AC Service',
    slug: 'ac',
    parent: 'service',
    icon: 'Wrench',
    description: 'AC repair, installation, gas refill, deep cleaning',
    image: '/images/newproductimages/ac-repair.jpeg',
  },
  {
    id: 'fridge-service',
    name: 'Fridge Service',
    slug: 'fridge',
    parent: 'service',
    icon: 'Wrench',
    description: 'Fridge repair, gas refill, deep cleaning',
    image: '/images/products/dubbledoor.png',
  },
];

/* ===========================================================================
 *   IMAGE POOL — generic royalty-free Unsplash photo per category.
 *   Reused as the primary hero image for every product variant in that
 *   category, so the catalog renders cleanly without per-SKU photography.
 *   ========================================================================= */

/**
 * IMAGE POOL — local product PNGs (URL-encoded filenames with spaces).
 * Served from `public/images/products/`. The keys below are reused by the
 * `CATALOG` rows below and by `CATEGORIES[]` above; every product row also
 * declares its own `img2` fallback so the gallery never falls back to an
 * unrelated category image.
 */
const IMG = {
  /* ===== AC — V2 Product Images ===== */
  acWindow: '/images/product_images_v2/AC/1.5%20Ton%20windo.png',
  acSplit: '/images/product_images_v2/AC/1.5%20ton%20split.png',
  acInverter: '/images/product_images_v2/AC/1%20Ton.png',
  acTower: '/images/product_images_v2/AC/Tower%20AC%20Ton%202.5.png',
  acPortable: '/images/product_images_v2/AC/Blue%20Star%20Portable%20AC%201Ton.png',
  acCassette: '/images/product_images_v2/AC/cassete%20ac%202.png',
  acFallback: '/images/product_images_v2/AC/1.5%20ton%20split.png',
  /* ===== Cooler — V2 Product Images ===== */
  cooler: '/images/product_images_v2/cooler/80L.png',
  coolerDesert: '/images/product_images_v2/cooler/65L.png',
  coolerCommercial: '/images/product_images_v2/cooler/80L.png',
  /* ===== Washing Machines ===== */
  washingFront: '/images/newproductimages/washing-machine.jpeg',
  washingTop: '/images/newproductimages/washing-machine.jpeg',
  washingSemi: '/images/newproductimages/washing-machine.jpeg',
  /* ===== Refrigerators ===== */
  fridgeSingle: '/images/products/singledoor.png',
  fridgeDouble: '/images/products/dubbledoor.png',
  fridgeTriple: '/images/products/3door.png',
  fridgeSideBySide: '/images/products/sidebysidedoor.png',
  fridgeFrench: '/images/products/frenchdoor.png',
  /* ===== Inverters ===== */
  inverter: '/images/newproductimages/inverter-appliance.jpeg',
  inverterPortable: '/images/newproductimages/inverter-appliance.jpeg',
  /* ===== Geysers ===== */
  geyser: '/images/newproductimages/geysers-appliance.jpeg',
  geyserStorage: '/images/newproductimages/geysers-appliance.jpeg',
  /* ===== Water Purifiers ===== */
  purifier: '/images/newproductimages/waterpurifier-appliance.jpeg',
  /* ===== Microwave & Ovens ===== */
  microwave: '/images/newproductimages/microwave-appliance.jpeg',
  /* ===== Room Heaters ===== */
  heater: '/images/newproductimages/room-heater-appliance.png',
  /* ===== Induction Cooktops ===== */
  induction: '/images/newproductimages/induction%20cooktop.jpeg',
} as const;

/**
 * Exact capacity-specific product images from public/images/product_images_v2/.
 */
export const PRODUCT_V2_IMAGES: Record<string, Record<string, string>> = {
  'window-ac': {
    '1 Ton': '/images/product_images_v2/AC/1%20ton%20wind.png',
    '1.5 Ton': '/images/product_images_v2/AC/1.5%20Ton%20windo.png',
    '2 Ton': '/images/product_images_v2/AC/2%20Ton%20windw.png',
  },
  'split-ac': {
    '1 Ton': '/images/product_images_v2/AC/1%20Ton.png',
    '1.5 Ton': '/images/product_images_v2/AC/1.5%20ton%20split.png',
    '2 Ton': '/images/product_images_v2/AC/2%20ton%20spt.png',
  },
  'inverter-ac': {
    '1 Ton': '/images/product_images_v2/AC/1%20Ton.png',
    '1.5 Ton': '/images/product_images_v2/AC/1.5%20ton%20split.png',
    '2 Ton': '/images/product_images_v2/AC/2%20ton%20spt.png',
  },
  'tower-ac': {
    '2 Ton': '/images/product_images_v2/AC/Midea%20Tower%20AC%20Ton%202.png',
    '2.5 Ton': '/images/product_images_v2/AC/Tower%20AC%20Ton%202.5.png',
    '3 Ton': '/images/product_images_v2/AC/Tower%20AC%20Ton%203.png',
    '4 Ton': '/images/product_images_v2/AC/Tower%20AC%20Ton%204.png',
  },
  'portable-ac': {
    '1 Ton': '/images/product_images_v2/AC/Blue%20Star%20Portable%20AC%201Ton.png',
    '1 Ton Smart Portable': '/images/product_images_v2/AC/Blue%20Star%20Portable%20AC%201Ton.png',
    '1.5 Ton': '/images/product_images_v2/AC/croma%20Portable%20AC%20Ton%201.5.png',
    '1.5 Ton Compact Portable': '/images/product_images_v2/AC/croma%20Portable%20AC%20Ton%201.5.png',
  },
  'cassette-ac': {
    '2 Ton': '/images/product_images_v2/AC/cassete%20ac%202.png',
    '3 Ton': '/images/product_images_v2/AC/cassete%20ac%203.png',
    '4 Ton': '/images/product_images_v2/AC/cassete%20ac%204.png',
    '4 Way Cassette': '/images/product_images_v2/AC/cassete%20ac%204.png',
  },
  'desert-cooler': {
    '20L': '/images/product_images_v2/cooler/15L.png',
    '25L': '/images/product_images_v2/cooler/25L.png',
    '30L': '/images/product_images_v2/cooler/30L.png',
    '40L': '/images/product_images_v2/cooler/40L.png',
    '65L': '/images/product_images_v2/cooler/65L.png',
    '80L': '/images/product_images_v2/cooler/80L.png',
  },
  'commercial-cooler': {
    '80L Jumbo': '/images/product_images_v2/cooler/80L.png',
    '90L Jumbo': '/images/product_images_v2/cooler/80L.png',
    '100L Jumbo': '/images/product_images_v2/cooler/150%20litter.png',
    '120L Jumbo': '/images/product_images_v2/cooler/150%20litter.png',
  },
};

/**
 * Determines whether a product is currently active based on price_sheet.xlsx
 * and available images in public/images/product_images_v2/.
 * All other products are marked Coming Soon with disabled enquiry buttons.
 */
export function isProductActive(category: string, sub: string, capacityLabel: string): boolean {
  if (category === 'air-conditioners') {
    if (sub === 'window-ac') {
      return ['1 Ton', '1.5 Ton', '2 Ton'].includes(capacityLabel);
    }
    if (sub === 'split-ac') {
      return ['1 Ton', '1.5 Ton', '2 Ton'].includes(capacityLabel);
    }
    if (sub === 'inverter-ac') {
      return ['1 Ton', '1.5 Ton', '2 Ton'].includes(capacityLabel);
    }
    if (sub === 'tower-ac') {
      return ['2.5 Ton', '3 Ton', '4 Ton'].includes(capacityLabel);
    }
    if (sub === 'portable-ac') {
      return ['1 Ton', '1.5 Ton'].includes(capacityLabel);
    }
    if (sub === 'cassette-ac') {
      return ['2 Ton', '3 Ton', '4 Ton'].includes(capacityLabel);
    }
    return false;
  }
  if (category === 'air-coolers') {
    if (sub === 'desert-cooler') {
      return ['20L', '25L', '30L', '40L', '65L', '80L'].includes(capacityLabel);
    }
    if (sub === 'commercial-cooler') {
      return ['80L', '90L', '100L', '120L'].includes(capacityLabel);
    }
    return false;
  }
  return false;
}

/* ===========================================================================
 *   PRICING TIERS
 *   =========================================================================
 *
 *   Monthly rent is `base + perCapacity × capacity`, rounded to a friendly
 *   `step` so the product card shows clean numbers. The same 8%/12%/20%
 *   discount curve used by `getDurationDiscount` in lib/utils.ts is applied
 *   to quarterly/half-yearly/yearly tiers.
 */

const PRICE_TIERS: Record<string, { base: number; perCapacity: number; step: number }> = {
  'air-conditioners': { base: 999, perCapacity: 250, step: 100 },
  'air-coolers': { base: 449, perCapacity: 12, step: 50 },
  'washing-machines': { base: 799, perCapacity: 110, step: 50 },
  'refrigerators': { base: 599, perCapacity: 4, step: 50 },
  'inverters': { base: 549, perCapacity: 0.35, step: 100 },
  'geysers': { base: 199, perCapacity: 18, step: 25 },
  'water-purifiers': { base: 399, perCapacity: 80, step: 50 },
  'microwaves-ovens': { base: 449, perCapacity: 40, step: 50 },
  'room-heaters': { base: 299, perCapacity: 60, step: 25 },
  'induction-cooktops': { base: 299, perCapacity: 0.18, step: 25 },
  'combo': { base: 1899, perCapacity: 0, step: 50 },
};

function monthlyPrice(category: string, capacity: number): number {
  const tier = PRICE_TIERS[category];
  if (!tier) return 599;
  const raw = tier.base + tier.perCapacity * capacity;
  return Math.max(99, Math.round(raw / tier.step) * tier.step);
}

const quarterlyFromMonthly = (m: number) => Math.round(m * 3 * 0.92);
const halfYearlyFromMonthly = (m: number) => Math.round(m * 6 * 0.88);
const yearlyFromMonthly = (m: number) => Math.round(m * 12 * 0.8);

interface PriceOverrideEntry {
  monthly?: number;
  quarterly?: number;
  halfYearly?: number;
  yearly?: number;
  deposit?: number;
  plans?: RentalPlan[];
  pricingNote?: string;
  transportationNote?: string;
  dayPrice?: number;
  dayPriceUnit?: string;
}

/**
 * Explicit price overrides — updated directly from price_sheet.xlsx.
 * Window & Split AC: 4 Month, 6 Month, 12 Month packages.
 * Tower AC, Portable AC, Cassette AC, and Air Coolers include daily and multi-month packages.
 */
const PRICE_OVERRIDES: Record<string, Record<string, PriceOverrideEntry>> = {
  /* ===== Window AC ===== */
  'window-ac': {
    '1 Ton': {
      monthly: 3125, // 12500 / 4 months package
      quarterly: 12500,
      halfYearly: 13500,
      yearly: 17400,
      deposit: 0,
      pricingNote: 'All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 12500 },
        { label: '6 Months Package', days: 180, price: 13500 },
        { label: '12 Months Package', days: 365, price: 17400 },
      ],
    },
    '1.5 Ton': {
      monthly: 3250, // 13000 / 4 months package
      quarterly: 13000,
      halfYearly: 14500,
      yearly: 18800,
      deposit: 0,
      pricingNote: 'All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 13000 },
        { label: '6 Months Package', days: 180, price: 14500 },
        { label: '12 Months Package', days: 365, price: 18800 },
      ],
    },
    '2 Ton': {
      monthly: 3500, // 14000 / 4 months package
      quarterly: 14000,
      halfYearly: 15500,
      yearly: 19800,
      deposit: 0,
      pricingNote: 'All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 14000 },
        { label: '6 Months Package', days: 180, price: 15500 },
        { label: '12 Months Package', days: 365, price: 19800 },
      ],
    },
  },

  /* ===== Split AC ===== */
  'split-ac': {
    '1 Ton': {
      monthly: 3125,
      quarterly: 12500,
      halfYearly: 13500,
      yearly: 17400,
      deposit: 0,
      pricingNote: 'All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 12500 },
        { label: '6 Months Package', days: 180, price: 13500 },
        { label: '12 Months Package', days: 365, price: 17400 },
      ],
    },
    '1.5 Ton': {
      monthly: 3250,
      quarterly: 13000,
      halfYearly: 14500,
      yearly: 18800,
      deposit: 0,
      pricingNote: 'All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 13000 },
        { label: '6 Months Package', days: 180, price: 14500 },
        { label: '12 Months Package', days: 365, price: 18800 },
      ],
    },
    '2 Ton': {
      monthly: 3500,
      quarterly: 14000,
      halfYearly: 15500,
      yearly: 19800,
      deposit: 0,
      pricingNote: 'All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 14000 },
        { label: '6 Months Package', days: 180, price: 15500 },
        { label: '12 Months Package', days: 365, price: 19800 },
      ],
    },
  },

  /* ===== Split Inverter AC ===== */
  'inverter-ac': {
    '1 Ton': {
      monthly: 4125,
      quarterly: 16500,
      halfYearly: 18500,
      yearly: 20500,
      deposit: 0,
      pricingNote: 'Split Inverter AC - All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 16500 },
        { label: '6 Months Package', days: 180, price: 18500 },
        { label: '12 Months Package', days: 365, price: 20500 },
      ],
    },
    '1.5 Ton': {
      monthly: 4450,
      quarterly: 17800,
      halfYearly: 19600,
      yearly: 21500,
      deposit: 0,
      pricingNote: 'Split Inverter AC - All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 17800 },
        { label: '6 Months Package', days: 180, price: 19600 },
        { label: '12 Months Package', days: 365, price: 21500 },
      ],
    },
    '2 Ton': {
      monthly: 4650,
      quarterly: 18600,
      halfYearly: 20700,
      yearly: 23300,
      deposit: 0,
      pricingNote: 'Split Inverter AC - All brands same price',
      transportationNote: 'Transportation extra (chargeable as per actual distance)',
      plans: [
        { label: '4 Months Package', days: 120, price: 18600 },
        { label: '6 Months Package', days: 180, price: 20700 },
        { label: '12 Months Package', days: 365, price: 23300 },
      ],
    },
  },

  /* ===== Tower AC ===== */
  'tower-ac': {
    '2.5 Ton': {
      monthly: 24999,
      quarterly: 58000,
      halfYearly: 116000,
      yearly: 232000,
      deposit: 0,
      dayPrice: 12500,
      dayPriceUnit: 'per day (₹5,000/Ton/day)',
      pricingNote: 'Short-term event rate: ₹5,000 per Ton per Day',
      transportationNote: 'Transportation extra as per location',
      plans: [
        { label: '1 Day', days: 1, price: 12500 },
        { label: '1 Month', days: 30, price: 24999 },
        { label: '2 Months', days: 60, price: 45000 },
        { label: '3 Months', days: 90, price: 58000 },
      ],
    },
    '3 Ton': {
      monthly: 29999,
      quarterly: 63333,
      halfYearly: 126666,
      yearly: 253332,
      deposit: 0,
      dayPrice: 15000,
      dayPriceUnit: 'per day (₹5,000/Ton/day)',
      pricingNote: 'Short-term event rate: ₹5,000 per Ton per Day',
      transportationNote: 'Transportation extra as per location',
      plans: [
        { label: '1 Day', days: 1, price: 15000 },
        { label: '1 Month', days: 30, price: 29999 },
        { label: '2 Months', days: 60, price: 49999 },
        { label: '3 Months', days: 90, price: 63333 },
      ],
    },
    '4 Ton': {
      monthly: 33999,
      quarterly: 65999,
      halfYearly: 131998,
      yearly: 263996,
      deposit: 0,
      dayPrice: 20000,
      dayPriceUnit: 'per day (₹5,000/Ton/day)',
      pricingNote: 'Short-term event rate: ₹5,000 per Ton per Day',
      transportationNote: 'Transportation extra as per location',
      plans: [
        { label: '1 Day', days: 1, price: 20000 },
        { label: '1 Month', days: 30, price: 33999 },
        { label: '2 Months', days: 60, price: 55999 },
        { label: '3 Months', days: 90, price: 65999 },
      ],
    },
  },

  /* ===== Portable AC ===== */
  'portable-ac': {
    '1 Ton': {
      monthly: 3750,
      quarterly: 15000,
      halfYearly: 22500,
      yearly: 28500,
      deposit: 0,
      dayPrice: 2000,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 2000 },
        { label: '4 Months Package', days: 120, price: 15000 },
        { label: '6 Months Package', days: 180, price: 22500 },
        { label: '12 Months Package', days: 365, price: 28500 },
      ],
    },
    '1.5 Ton': {
      monthly: 4375,
      quarterly: 17500,
      halfYearly: 25500,
      yearly: 29500,
      deposit: 0,
      dayPrice: 2500,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 2500 },
        { label: '4 Months Package', days: 120, price: 17500 },
        { label: '6 Months Package', days: 180, price: 25500 },
        { label: '12 Months Package', days: 365, price: 29500 },
      ],
    },
  },

  /* ===== Cassette AC ===== */
  'cassette-ac': {
    '2 Ton': {
      monthly: 30999,
      quarterly: 60999,
      halfYearly: 120000,
      yearly: 240000,
      deposit: 0,
      pricingNote: 'Installation included',
      transportationNote: 'Transportation extra as per location',
      plans: [
        { label: '1 Month', days: 30, price: 30999 },
        { label: '2 Months', days: 60, price: 40000 },
        { label: '3 Months', days: 90, price: 60999 },
      ],
    },
    '3 Ton': {
      monthly: 35999,
      quarterly: 65999,
      halfYearly: 130000,
      yearly: 260000,
      deposit: 0,
      pricingNote: 'Installation included',
      transportationNote: 'Transportation extra as per location',
      plans: [
        { label: '1 Month', days: 30, price: 35999 },
        { label: '2 Months', days: 60, price: 45000 },
        { label: '3 Months', days: 90, price: 65999 },
      ],
    },
    '4 Ton': {
      monthly: 40999,
      quarterly: 69000,
      halfYearly: 138000,
      yearly: 276000,
      deposit: 0,
      pricingNote: 'Installation included',
      transportationNote: 'Transportation extra as per location',
      plans: [
        { label: '1 Month', days: 30, price: 40999 },
        { label: '2 Months', days: 60, price: 50000 },
        { label: '3 Months', days: 90, price: 69000 },
      ],
    },
  },

  /* ===== Air Coolers: Desert Cooler ===== */
  'desert-cooler': {
    '20L': {
      monthly: 1000,
      quarterly: 3000,
      halfYearly: 4800,
      yearly: 6200,
      deposit: 0,
      dayPrice: 300,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 300 },
        { label: '1 Month', days: 30, price: 1000 },
        { label: '4 Months Package', days: 120, price: 3000 },
        { label: '6 Months Package', days: 180, price: 4800 },
        { label: '12 Months Package', days: 365, price: 6200 },
      ],
    },
    '25L': {
      monthly: 1200,
      quarterly: 3500,
      halfYearly: 5500,
      yearly: 7200,
      deposit: 0,
      dayPrice: 400,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 400 },
        { label: '1 Month', days: 30, price: 1200 },
        { label: '4 Months Package', days: 120, price: 3500 },
        { label: '6 Months Package', days: 180, price: 5500 },
        { label: '12 Months Package', days: 365, price: 7200 },
      ],
    },
    '30L': {
      monthly: 1400,
      quarterly: 4000,
      halfYearly: 6000,
      yearly: 7800,
      deposit: 0,
      dayPrice: 500,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 500 },
        { label: '1 Month', days: 30, price: 1400 },
        { label: '4 Months Package', days: 120, price: 4000 },
        { label: '6 Months Package', days: 180, price: 6000 },
        { label: '12 Months Package', days: 365, price: 7800 },
      ],
    },
    '40L': {
      monthly: 1600,
      quarterly: 4500,
      halfYearly: 6500,
      yearly: 8200,
      deposit: 0,
      dayPrice: 600,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 600 },
        { label: '1 Month', days: 30, price: 1600 },
        { label: '4 Months Package', days: 120, price: 4500 },
        { label: '6 Months Package', days: 180, price: 6500 },
        { label: '12 Months Package', days: 365, price: 8200 },
      ],
    },
    '65L': {
      monthly: 1700,
      quarterly: 5400,
      halfYearly: 6900,
      yearly: 8500,
      deposit: 0,
      dayPrice: 700,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 700 },
        { label: '1 Month', days: 30, price: 1700 },
        { label: '4 Months Package', days: 120, price: 5400 },
        { label: '6 Months Package', days: 180, price: 6900 },
        { label: '12 Months Package', days: 365, price: 8500 },
      ],
    },
    '80L': {
      monthly: 1800,
      quarterly: 6500,
      halfYearly: 7500,
      yearly: 9500,
      deposit: 0,
      dayPrice: 800,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 800 },
        { label: '1 Month', days: 30, price: 1800 },
        { label: '4 Months Package', days: 120, price: 6500 },
        { label: '6 Months Package', days: 180, price: 7500 },
        { label: '12 Months Package', days: 365, price: 9500 },
      ],
    },
  },

  /* ===== Air Coolers: Jumbo Commercial Cooler ===== */
  'commercial-cooler': {
    '80L': {
      monthly: 4000,
      quarterly: 8000,
      halfYearly: 10500,
      yearly: 12500,
      deposit: 0,
      dayPrice: 1500,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 1500 },
        { label: '1 Month', days: 30, price: 4000 },
        { label: '4 Months Package', days: 120, price: 8000 },
        { label: '6 Months Package', days: 180, price: 10500 },
        { label: '12 Months Package', days: 365, price: 12500 },
      ],
    },
    '90L': {
      monthly: 4500,
      quarterly: 9000,
      halfYearly: 11000,
      yearly: 13000,
      deposit: 0,
      dayPrice: 1700,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 1700 },
        { label: '1 Month', days: 30, price: 4500 },
        { label: '4 Months Package', days: 120, price: 9000 },
        { label: '6 Months Package', days: 180, price: 11000 },
        { label: '12 Months Package', days: 365, price: 13000 },
      ],
    },
    '100L': {
      monthly: 5000,
      quarterly: 10000,
      halfYearly: 12500,
      yearly: 13500,
      deposit: 0,
      dayPrice: 2700,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 2700 },
        { label: '1 Month', days: 30, price: 5000 },
        { label: '4 Months Package', days: 120, price: 10000 },
        { label: '6 Months Package', days: 180, price: 12500 },
        { label: '12 Months Package', days: 365, price: 13500 },
      ],
    },
    '120L': {
      monthly: 5500,
      quarterly: 11000,
      halfYearly: 13000,
      yearly: 14000,
      deposit: 0,
      dayPrice: 3000,
      dayPriceUnit: 'per day',
      transportationNote: 'Transportation not included',
      plans: [
        { label: '1 Day', days: 1, price: 3000 },
        { label: '1 Month', days: 30, price: 5500 },
        { label: '4 Months Package', days: 120, price: 11000 },
        { label: '6 Months Package', days: 180, price: 13000 },
        { label: '12 Months Package', days: 365, price: 14000 },
      ],
    },
  },
};

interface ResolvedPricing {
  monthly: number;
  quarterly: number;
  halfYearly: number;
  yearly: number;
  deposit: number;
  plans: RentalPlan[];
  pricingNote?: string;
  transportationNote?: string;
  dayPrice?: number;
  dayPriceUnit?: string;
}

/**
 * Resolve the final price for a product. If an override exists for the
 * `(subCategory, capacityLabel)` pair, it wins; otherwise the formula from
 * PRICE_TIERS is used.
 */
function resolvePricing(
  category: string,
  subCategory: string,
  capacityLabel: string,
  capacityValue: number
): ResolvedPricing {
  const override = PRICE_OVERRIDES[subCategory]?.[capacityLabel];

  if (override) {
    const monthly =
      override.monthly !== undefined
        ? override.monthly
        : override.plans && override.plans.length > 0
        ? Math.round(override.plans[0].price / Math.max(1, Math.round(override.plans[0].days / 30)))
        : 1000;

    const quarterly =
      override.quarterly !== undefined
        ? override.quarterly
        : quarterlyFromMonthly(monthly);
    const halfYearly =
      override.halfYearly !== undefined
        ? override.halfYearly
        : halfYearlyFromMonthly(monthly);
    const yearly =
      override.yearly !== undefined
        ? override.yearly
        : yearlyFromMonthly(monthly);
    const deposit =
      override.deposit !== undefined
        ? override.deposit
        : category === 'refrigerators' || category === 'washing-machines'
        ? 2000
        : 0;

    const plans =
      override.plans && override.plans.length > 0
        ? override.plans
        : [
            { label: '3 Months', days: 90, price: quarterly },
            { label: '6 Months', days: 180, price: halfYearly },
            { label: '12 Months', days: 365, price: yearly },
          ];

    return {
      monthly,
      quarterly,
      halfYearly,
      yearly,
      deposit,
      plans,
      pricingNote: override.pricingNote,
      transportationNote: override.transportationNote,
      dayPrice: override.dayPrice,
      dayPriceUnit: override.dayPriceUnit,
    };
  }

  // Fallback: formula-based pricing.
  const monthly = monthlyPrice(category, capacityValue);
  const quarterly = quarterlyFromMonthly(monthly);
  const halfYearly = halfYearlyFromMonthly(monthly);
  const yearly = yearlyFromMonthly(monthly);
  const deposit =
    category === 'refrigerators' || category === 'washing-machines' ? 2000 : 0;
  return {
    monthly,
    quarterly,
    halfYearly,
    yearly,
    deposit,
    plans: [
      { label: '1 Month', days: 30, price: monthly },
      { label: '3 Months', days: 90, price: quarterly },
      { label: '6 Months', days: 180, price: halfYearly },
      { label: '12 Months', days: 365, price: yearly },
    ],
  };
}

interface Catalog {
  category: string;
  sub: string;
  label: string;
  type: string;
  img: string;
  img2: string;
  energy: string;
  warranty: string;
  caps: Array<{ v: number; l: string }>;
  brands: string[];
  features: string[];
}

const CATALOG: Catalog[] = [
  /* ===== 1. Air Conditioners ===== */
  { category: 'air-conditioners', sub: 'window-ac', label: 'Window AC', type: 'Window AC', img: IMG.acWindow, img2: IMG.acFallback, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }, { v: 2, l: '2 Ton' }],
    brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi', 'Panasonic', 'Carrier', 'Lloyd', 'Whirlpool'],
    features: ['Turbo cooling', 'Anti-bacteria filter', 'Eco-friendly R-32 refrigerant', 'Sleep mode', 'Auto restart'] },
  { category: 'air-conditioners', sub: 'split-ac', label: 'Split AC', type: 'Split AC', img: IMG.acSplit, img2: IMG.acFallback, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }, { v: 2, l: '2 Ton' }],
    brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi', 'Panasonic', 'Carrier', 'Lloyd', 'Whirlpool'],
    features: ['Wi-Fi enabled', 'Convertible modes', 'Anti-corrosion copper condenser', 'Turbo cooling', 'Self-clean'] },
  { category: 'air-conditioners', sub: 'inverter-ac', label: 'Split Inverter AC', type: 'Split Inverter AC', img: IMG.acInverter, img2: IMG.acFallback, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }, { v: 2, l: '2 Ton' }],
    brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi', 'Panasonic', 'Carrier', 'Lloyd', 'Whirlpool'],
    features: ['Inverter compressor', '5 Star energy rating', '10-year compressor warranty', 'Wi-Fi smart control', 'Silent operation'] },
  { category: 'air-conditioners', sub: 'tower-ac', label: 'Tower AC', type: 'Commercial Tower AC', img: IMG.acTower, img2: IMG.acFallback, energy: '3 Star', warranty: '1 Year',
    caps: [ { v: 2.5, l: '2.5 Ton' }, { v: 3, l: '3 Ton' }, { v: 4, l: '4 Ton' }],
    brands: ['Voltas', 'LG', 'Daikin', 'Blue Star', 'Hitachi', 'Carrier'],
    features: ['Floor-standing design', 'Wide air throw', 'Cools large halls', 'Heavy-duty compressor', 'Remote control'] },
  { category: 'air-conditioners', sub: 'portable-ac', label: 'Portable AC', type: 'Portable AC', img: IMG.acPortable, img2: IMG.acFallback, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }],
    brands: ['Blue Star', 'LG', 'Voltas', 'Whirlpool'],
    features: ['No installation required', 'Self-evaporative', '4-in-1 modes', 'Easy-roll casters', 'Window kit included'] },
  { category: 'air-conditioners', sub: 'cassette-ac', label: 'Cassette AC', type: 'Cassette AC', img: IMG.acCassette, img2: IMG.acFallback, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2 Ton' }, { v: 3, l: '3 Ton' }, { v: 4, l: '4 Ton' }],
    brands: ['Daikin', 'LG', 'Voltas', 'Blue Star', 'Hitachi', 'Carrier'],
    features: ['4-way air swing', 'Ceiling-mounted', 'Wide airflow coverage', 'Inverter compressor', 'Group control'] },

  /* ===== 2. Air Coolers ===== */
  { category: 'air-coolers', sub: 'personal-cooler', label: 'Personal Cooler', type: 'Personal Air Cooler', img: IMG.cooler, img2: IMG.cooler, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 7, l: 'Mini' }, { v: 12, l: 'Portable' }, { v: 18, l: 'Personal' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Kenstar', 'Orient'],
    features: ['Compact design', 'Low power', 'Honeycomb pads', 'Castor wheels', 'Ice chamber'] },
  { category: 'air-coolers', sub: 'desert-cooler', label: 'Desert Cooler', type: 'Desert Air Cooler', img: IMG.coolerDesert, img2: IMG.coolerDesert, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 20, l: '20L' }, { v: 25, l: '25L' }, { v: 30, l: '30L' }, { v: 40, l: '40L' }, { v: 65, l: '65L' }, { v: 80, l: '80L' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Kenstar', 'Orient'],
    features: ['High air delivery', 'Wood-wool cooling pads', 'Large tank', 'Auto-fill option', 'Inverter compatible'] },
  { category: 'air-coolers', sub: 'tower-cooler', label: 'Tower Cooler', type: 'Tower Cooler', img: IMG.cooler, img2: IMG.cooler, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 20, l: 'Slim Tower' }, { v: 30, l: 'Premium Tower' }, { v: 40, l: 'Premium Tower+' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Orient'],
    features: ['Vertical slim', 'Space-saving', 'Remote control', 'Honeycomb cooling', 'Multi-stage speed'] },
  { category: 'air-coolers', sub: 'window-cooler', label: 'Window Cooler', type: 'Window Cooler', img: IMG.cooler, img2: IMG.cooler, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 30, l: 'Plastic Window' }, { v: 50, l: 'Metal Window' }, { v: 70, l: 'Metal Window+' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Orient'],
    features: ['Window mounting', 'Powerful airflow', 'Durable body', 'Easy maintenance', 'Multiple speed'] },
  { category: 'air-coolers', sub: 'commercial-cooler', label: 'Jumbo Cooler', type: 'Jumbo Commercial Air Cooler', img: IMG.coolerCommercial, img2: IMG.coolerCommercial, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 80, l: '80L' }, { v: 90, l: '90L' }, { v: 100, l: '100L' }, { v: 120, l: '120L' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells'],
    features: ['High-capacity cooling', 'Industrial-grade', 'Wide coverage', 'Heavy-duty motor', 'Continuous operation'] },
  { category: 'air-coolers', sub: 'smart-air-cooler', label: 'Smart Air Cooler', type: 'Smart Air Cooler', img: IMG.cooler, img2: IMG.cooler, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 40, l: 'WiFi Cooler' }, { v: 60, l: 'Remote Control Cooler' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells'],
    features: ['Wi-Fi enabled', 'Voice assistant', 'App control', 'Auto humidity control', 'Programmable timer'] },

  /* ===== 3. Washing Machines ===== */
  { category: 'washing-machines', sub: 'front-load-washer', label: 'Front Load Fully Automatic', type: 'Front Load Fully Automatic', img: IMG.washingFront, img2: IMG.washingFront, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 6, l: '6 Kg' }, { v: 7, l: '7 Kg' }, { v: 8, l: '8 Kg' }, { v: 9, l: '9 Kg' }],
    brands: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Bosch', 'Panasonic', 'Godrej', 'Haier'],
    features: ['Inverter direct drive', 'Steam wash', 'Anti-bacterial cycle', 'Smart diagnosis', '15+ wash programs'] },
  { category: 'washing-machines', sub: 'top-load-washer', label: 'Top Load Fully Automatic', type: 'Top Load Fully Automatic', img: IMG.washingTop, img2: IMG.washingTop, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 6, l: '6 Kg' }, { v: 7, l: '7 Kg' }, { v: 8, l: '8 Kg' }, { v: 10, l: '10 Kg' }],
    brands: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Bosch', 'Panasonic', 'Godrej', 'Haier'],
    features: ['Turbo drum', 'Punch+ 3 waterfall', 'Auto tub clean', 'Anti-rust body', 'Smart inverter'] },
  { category: 'washing-machines', sub: 'semi-automatic-washer', label: 'Semi Automatic', type: 'Semi Automatic', img: IMG.washingSemi, img2: IMG.washingSemi, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 6.5, l: '6.5 Kg' }, { v: 7.5, l: '7.5 Kg' }, { v: 8, l: '8 Kg' }, { v: 9, l: '9 Kg' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Panasonic', 'Godrej', 'Haier'],
    features: ['Two-tub design', 'High spin motor', 'Lint filter', 'Buzzer end indicator', 'Rust-proof body'] },

  /* ===== 4. Refrigerators ===== */
  { category: 'refrigerators', sub: 'single-door-fridge', label: 'Single Door', type: 'Single Door', img: IMG.fridgeSingle, img2: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 180, l: '180L' }, { v: 190, l: '190L' }, { v: 200, l: '200L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Godrej', 'Panasonic', 'Voltas Beko'],
    features: ['Direct cool', 'Honeycomb moisture lock', 'Large crisper', 'Anti-bacterial gasket', 'Insulated capillary'] },
  { category: 'refrigerators', sub: 'double-door-fridge', label: 'Double Door', type: 'Double Door (Frost Free)', img: IMG.fridgeDouble, img2: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 240, l: '240L' }, { v: 260, l: '260L' }, { v: 300, l: '300L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Godrej', 'Panasonic', 'Voltas Beko'],
    features: ['Frost free', 'Multi air flow', 'Smart inverter compressor', 'Large vegetable box', 'Humidity controller'] },
  { category: 'refrigerators', sub: 'triple-door-fridge', label: 'Triple Door', type: 'Triple Door', img: IMG.fridgeTriple, img2: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 300, l: '300L' }, { v: 350, l: '350L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier'],
    features: ['Triple-zone cooling', 'Independent compartments', 'Smart inverter', 'Energy efficient', 'Toughened glass shelves'] },
  { category: 'refrigerators', sub: 'side-by-side-fridge', label: 'Side by Side', type: 'Side-by-Side', img: IMG.fridgeSideBySide, img2: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 500, l: '500L' }, { v: 600, l: '600L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier'],
    features: ['Side-by-side doors', 'Water & ice dispenser', 'Smart diagnosis', 'Wide storage', 'Frost free'] },
  { category: 'refrigerators', sub: 'french-door-fridge', label: 'French Door', type: 'French Door', img: IMG.fridgeFrench, img2: IMG.fridgeDouble, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 600, l: 'Premium Refrigerator' }],
    brands: ['LG', 'Samsung', 'Whirlpool'],
    features: ['Multi-door design', 'InstaView panel', 'Linear inverter', 'UVnano dispenser', 'Smart ThinQ'] },
  { category: 'refrigerators', sub: 'mini-fridge', label: 'Mini Refrigerator', type: 'Mini Refrigerator', img: IMG.fridgeSingle, img2: IMG.fridgeSingle, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 45, l: '45L' }, { v: 90, l: '90L' }],
    brands: ['LG', 'Samsung', 'Haier', 'Godrej', 'Whirlpool'],
    features: ['Compact size', 'Cooling retention', 'Low power', 'Portable', 'Toughened glass shelf'] },
  { category: 'refrigerators', sub: 'deep-freezer', label: 'Deep Freezer', type: 'Deep Freezer', img: IMG.fridgeDouble, img2: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 300, l: 'Horizontal Freezer' }, { v: 500, l: 'Vertical Freezer' }],
    brands: ['Whirlpool', 'Haier', 'Godrej', 'Voltas Beko'],
    features: ['Fast freeze', 'Heavy-duty compressor', 'Lock & key', 'PUF insulation', 'Wide temperature range'] },
  { category: 'refrigerators', sub: 'commercial-fridge', label: 'Commercial Refrigerator', type: 'Commercial Refrigerator', img: IMG.fridgeDouble, img2: IMG.fridgeDouble, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 350, l: 'Display Cooler' }, { v: 400, l: 'Beverage Cooler' }],
    brands: ['Whirlpool', 'Haier', 'Godrej', 'Voltas Beko'],
    features: ['Glass display', 'Bright LED lighting', 'Lockable', 'Continuous cooling', 'Energy-efficient'] },

  /* ===== 5. Inverters ===== */
  { category: 'inverters', sub: 'home-inverter', label: 'Home Inverter', type: 'Home Inverter', img: IMG.inverter, img2: IMG.inverter, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 600, l: '600VA' }, { v: 900, l: '900VA' }, { v: 1100, l: '1100VA' }, { v: 1500, l: '1500VA' }, { v: 2000, l: '2000VA' }],
    brands: ['Luminous', 'Microtek', 'Exide', 'Livguard', 'Amaron', 'V-Guard'],
    features: ['Pure sine wave output', 'DSP-based design', 'Smart overload protection', 'LCD display', 'Bypass switch'] },
  { category: 'inverters', sub: 'pure-sine-wave-inverter', label: 'Pure Sine Wave', type: 'Pure Sine Wave Inverter', img: IMG.inverter, img2: IMG.inverter, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 1100, l: '1100VA' }, { v: 1500, l: '1500VA' }],
    brands: ['Luminous', 'Microtek', 'Exide', 'Livguard', 'Amaron', 'V-Guard'],
    features: ['Pure sine wave', 'Low harmonic distortion', 'Smart charging', 'MCB protection', 'Digital display'] },
  { category: 'inverters', sub: 'square-wave-inverter', label: 'Square Wave', type: 'Square Wave Inverter', img: IMG.inverter, img2: IMG.inverter, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 800, l: 'Budget Inverter' }],
    brands: ['Luminous', 'Microtek', 'V-Guard'],
    features: ['Affordable pricing', 'Basic protection', 'LED indicators', 'Compact body', 'Easy to install'] },
  { category: 'inverters', sub: 'solar-inverter', label: 'Solar Inverter', type: 'Solar Inverter', img: IMG.inverter, img2: IMG.inverter, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 3000, l: 'Hybrid Solar' }, { v: 5000, l: 'Off Grid' }],
    brands: ['Luminous', 'Microtek', 'Exide', 'Livguard', 'V-Guard'],
    features: ['MPPT charger', 'Mobile monitoring', 'Zero grid export', 'IP65 protection', 'Long life cycle'] },
  { category: 'inverters', sub: 'inverter-battery', label: 'Inverter Battery', type: 'Inverter Battery', img: IMG.inverter, img2: IMG.inverter, energy: '4 Star', warranty: '3 Years',
    caps: [{ v: 150, l: 'Tall Tubular' }, { v: 220, l: 'Flat Plate' }, { v: 100, l: 'Lithium' }],
    brands: ['Luminous', 'Exide', 'Amaron', 'Livguard'],
    features: ['Long backup', 'Fast charging', 'Low maintenance', 'Tubular plates', 'Spill-proof design'] },
  { category: 'inverters', sub: 'ups', label: 'UPS', type: 'UPS', img: IMG.inverterPortable, img2: IMG.inverterPortable, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 600, l: 'Home UPS' }, { v: 1000, l: 'Office UPS' }],
    brands: ['Microtek', 'Luminous', 'V-Guard'],
    features: ['Zero transfer time', 'Surge protection', 'Smart battery management', 'Compact tower', 'LCD display'] },

  /* ===== 6. Geysers ===== */
  { category: 'geysers', sub: 'instant-geyser', label: 'Instant Geyser', type: 'Instant Water Heater', img: IMG.geyser, img2: IMG.geyserStorage, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 1, l: '1L' }, { v: 2, l: '2L' }, { v: 3, l: '3L' }, { v: 5, l: '5L' }],
    brands: ['AO Smith', 'Havells', 'Bajaj', 'Racold', 'Crompton', 'V-Guard'],
    features: ['Instant heating', 'Copper element', 'LED indicator', 'Auto cut-off', 'Rust-proof'] },
  { category: 'geysers', sub: 'storage-geyser', label: 'Storage Geyser', type: 'Storage Water Heater', img: IMG.geyserStorage, img2: IMG.geyserStorage, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 10, l: '10L' }, { v: 15, l: '15L' }, { v: 25, l: '25L' }, { v: 35, l: '35L' }],
    brands: ['AO Smith', 'Havells', 'Bajaj', 'Racold', 'Crompton', 'V-Guard'],
    features: ['PUF insulation', 'Adjustable thermostat', 'Multi-function valve', 'Blue glass-lined tank', 'Anti-siphon'] },
  { category: 'geysers', sub: 'gas-geyser', label: 'Gas Geyser', type: 'Gas Water Heater', img: IMG.geyser, img2: IMG.geyserStorage, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 6, l: '6L' }],
    brands: ['AO Smith', 'Bajaj', 'Havells', 'V-Guard'],
    features: ['LPG compatibility', 'Auto ignition', 'Copper heat exchanger', 'Safety valve', 'Compact'] },
  { category: 'geysers', sub: 'solar-water-heater', label: 'Solar Water Heater', type: 'Solar Water Heater', img: IMG.geyserStorage, img2: IMG.geyserStorage, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 200, l: '200L' }],
    brands: ['AO Smith', 'Havells', 'Racold', 'V-Guard'],
    features: ['ETC collectors', 'Vacuum tube tech', 'Zero electricity cost', 'Eco-friendly', 'Free installation'] },
  { category: 'geysers', sub: 'smart-geyser', label: 'Smart Geyser', type: 'Smart Water Heater', img: IMG.geyserStorage, img2: IMG.geyserStorage, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 15, l: '15L' }, { v: 25, l: '25L' }],
    brands: ['AO Smith', 'Havells', 'Racold', 'V-Guard'],
    features: ['Wi-Fi enabled', 'Mobile app', 'Voice assistant', 'Auto scheduling', 'Energy tracker'] },

  /* ===== 7. Water Purifiers ===== */
  { category: 'water-purifiers', sub: 'ro-purifier', label: 'RO Water Purifier', type: 'RO Water Purifier', img: IMG.purifier, img2: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 8, l: 'RO + UV' }, { v: 10, l: 'RO + UV + UF' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'AO Smith', 'Pureit', 'Blue Star'],
    features: ['Multi-stage purification', 'TDS controller', 'Mineral guard', 'UV sterilization', 'UF filter'] },
  { category: 'water-purifiers', sub: 'uv-purifier', label: 'UV Purifier', type: 'UV Water Purifier', img: IMG.purifier, img2: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 8, l: 'UV' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'Pureit', 'Blue Star'],
    features: ['UV-C LED', 'Chemical-free', 'Municipal water compatible', 'Compact', 'Auto shut-off'] },
  { category: 'water-purifiers', sub: 'uf-purifier', label: 'UF Purifier', type: 'UF Water Purifier', img: IMG.purifier, img2: IMG.purifier, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 10, l: 'UF' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'Pureit', 'Blue Star'],
    features: ['UF membrane', 'No electricity', 'Sediment filter', 'Taste enhancer', 'Compact'] },
  { category: 'water-purifiers', sub: 'alkaline-copper-purifier', label: 'Alkaline / Copper Purifier', type: 'Alkaline / Copper Water Purifier', img: IMG.purifier, img2: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 10, l: 'Alkaline' }, { v: 12, l: 'Copper' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'AO Smith', 'Pureit'],
    features: ['Alkaline booster', 'Copper + RO', 'Revitalizer', 'Mineral cartridge', 'pH balance'] },
  { category: 'water-purifiers', sub: 'smart-purifier', label: 'Smart Purifier', type: 'Smart Water Purifier', img: IMG.purifier, img2: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 12, l: 'Smart' }],
    brands: ['Kent', 'Aquaguard', 'AO Smith', 'Pureit'],
    features: ['Wi-Fi enabled', 'App integration', 'Filter change alert', 'TDS display', 'IoT ready'] },
  { category: 'water-purifiers', sub: 'commercial-ro', label: 'Commercial RO Plant', type: 'Commercial RO Plant', img: IMG.purifier, img2: IMG.purifier, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 250, l: '250 LPH' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'AO Smith', 'Blue Star'],
    features: ['High output', 'Multi-stage filtration', 'Stainless body', 'Auto backwash', 'Industrial pump'] },
  { category: 'water-purifiers', sub: 'water-dispenser', label: 'Water Dispenser', type: 'Water Dispenser', img: IMG.purifier, img2: IMG.purifier, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 5, l: 'Hot & Cold' }, { v: 5, l: 'Bottom Loading' }],
    brands: ['AO Smith', 'Kent', 'Aquaguard', 'Blue Star'],
    features: ['Hot and cold taps', 'Child lock', 'Bottom-loading design', 'Removable drip tray', 'Eco mode'] },

  /* ===== 8. Microwave & Ovens ===== */
  { category: 'microwaves-ovens', sub: 'solo-microwave', label: 'Solo Microwave', type: 'Solo Microwave', img: IMG.microwave, img2: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 20, l: '20L' }, { v: 23, l: '23L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Panasonic', 'Morphy Richards', 'Bajaj'],
    features: ['Reheat & defrost', '5 power levels', 'Mechanical knob', 'Anti-bacterial cavity', 'Child lock'] },
  { category: 'microwaves-ovens', sub: 'grill-microwave', label: 'Grill Microwave', type: 'Grill Microwave', img: IMG.microwave, img2: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 25, l: '25L' }, { v: 28, l: '28L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Panasonic', 'Bajaj'],
    features: ['Grill rack', 'Combination cooking', 'Auto cook menus', 'Tactile buttons', 'Stainless interior'] },
  { category: 'microwaves-ovens', sub: 'convection-microwave', label: 'Convection Microwave', type: 'Convection Microwave', img: IMG.microwave, img2: IMG.microwave, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 28, l: '28L' }, { v: 32, l: '32L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Panasonic', 'Morphy Richards', 'Bajaj'],
    features: ['Convection + grill + microwave', 'Auto cook menus', 'Tact + jog dial', 'Steam clean', 'Multi-stage'] },
  { category: 'microwaves-ovens', sub: 'otg-oven', label: 'OTG Oven', type: 'OTG Oven', img: IMG.microwave, img2: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 19, l: '19L' }, { v: 30, l: '30L' }, { v: 42, l: '42L' }, { v: 60, l: '60L' }],
    brands: ['Morphy Richards', 'Bajaj', 'Philips', 'Panasonic', 'LG', 'IFB'],
    features: ['Toast, grill, bake', 'Rotisserie', 'Accessories included', 'Temperature control', 'Stay-on timer'] },
  { category: 'microwaves-ovens', sub: 'built-in-oven', label: 'Built-in Oven', type: 'Electric Built-in Oven', img: IMG.microwave, img2: IMG.microwave, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 60, l: '60L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Bosch'],
    features: ['Convection heating', 'Multi-rack', 'Air-fry ready', 'Self-cleaning', 'Triple-glazed door'] },
  { category: 'microwaves-ovens', sub: 'air-fryer-oven', label: 'Air Fryer Oven', type: 'Air Fryer Oven', img: IMG.microwave, img2: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 25, l: '25L' }],
    brands: ['Philips', 'Morphy Richards', 'Bajaj', 'Havells', 'Prestige'],
    features: ['Rapid air technology', 'Oil-free frying', 'Digital presets', 'Non-stick basket', 'Cool-touch handle'] },

  /* ===== 9. Room Heaters ===== */
  { category: 'room-heaters', sub: 'fan-heater', label: 'Fan Heater', type: 'Fan Heater', img: IMG.heater, img2: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Usha', 'Havells', 'Bajaj', 'Orient', 'Morphy Richards', 'Crompton'],
    features: ['Quick heat-up', 'Cool/warm/hot settings', 'Built-in thermostat', 'Tip-over cut-off', 'Portable handle'] },
  { category: 'room-heaters', sub: 'quartz-heater', label: 'Quartz Heater', type: 'Quartz Heater', img: IMG.heater, img2: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Usha', 'Bajaj', 'Orient', 'Havells'],
    features: ['Quartz tubes', 'Instant warmth', 'Two heat settings', 'Tip-over switch', 'Safe-touch grille'] },
  { category: 'room-heaters', sub: 'halogen-heater', label: 'Halogen Heater', type: 'Halogen Heater', img: IMG.heater, img2: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 3, l: '3-Rod' }],
    brands: ['Usha', 'Bajaj', 'Orient', 'Morphy Richards'],
    features: ['Halogen tubes', 'Three heat settings', 'Oscillating', 'Tip-over safety', 'Silent'] },
  { category: 'room-heaters', sub: 'oil-filled-radiator', label: 'Oil Filled Radiator', type: 'Oil Filled Radiator', img: IMG.heater, img2: IMG.heater, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 9, l: '9 Fin' }, { v: 11, l: '11 Fin' }],
    brands: ['Usha', 'Havells', 'Bajaj', 'Morphy Richards', 'Crompton'],
    features: ['Fin-style design', 'Thermostat control', 'Castor wheels', 'PTC option', 'Silent'] },
  { category: 'room-heaters', sub: 'ptc-heater', label: 'PTC Heater', type: 'PTC Heater', img: IMG.heater, img2: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Havells', 'Usha', 'Bajaj', 'Morphy Richards'],
    features: ['PTC ceramic element', 'Fast heating', 'Auto tip-over', 'Overheat protection', 'Compact'] },
  { category: 'room-heaters', sub: 'blower-heater', label: 'Blower Heater', type: 'Blower Heater', img: IMG.heater, img2: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Usha', 'Bajaj', 'Havells', 'Crompton'],
    features: ['Powerful blower', 'Forced-air heating', 'Multiple heat settings', 'Overheat safety', 'Sturdy body'] },
  { category: 'room-heaters', sub: 'smart-heater', label: 'Smart Heater', type: 'Smart Heater', img: IMG.heater, img2: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: 'Smart 2000W' }],
    brands: ['Havells', 'Morphy Richards', 'Bajaj', 'Usha'],
    features: ['Wi-Fi enabled', 'App control', 'Voice compatible', 'Eco mode', 'Programmable'] },
  { category: 'room-heaters', sub: 'industrial-heater', label: 'Industrial Heater', type: 'Industrial Heater', img: IMG.heater, img2: IMG.heater, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 5, l: '5kW' }],
    brands: ['Bajaj', 'Usha', 'Morphy Richards'],
    features: ['High CFM', 'Industrial-grade motor', 'Tough body', 'Heavy wheels', 'Continuous duty'] },

  /* ===== 10. Induction Cooktops ===== */
  { category: 'induction-cooktops', sub: 'single-induction', label: 'Single Burner', type: 'Single Burner Induction', img: IMG.induction, img2: IMG.induction, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 1200, l: '1200W' }, { v: 1600, l: '1600W' }, { v: 2000, l: '2000W' }],
    brands: ['Philips', 'Prestige', 'Pigeon', 'Havells', 'Usha', 'Bajaj', 'Lifelong'],
    features: ['Push-button controls', 'Indian menu options', 'Auto voltage regulator', 'Crystal glass top', 'Cool-touch'] },
  { category: 'induction-cooktops', sub: 'double-induction', label: 'Double Induction', type: 'Double Induction Cooktop', img: IMG.induction, img2: IMG.induction, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W + 2000W' }],
    brands: ['Prestige', 'Pigeon', 'Philips', 'Havells'],
    features: ['Two burners', 'Independent controls', 'Auto timer', 'Feather-touch panel', 'Dual crystal glass'] },
  { category: 'induction-cooktops', sub: 'infrared-cooktop', label: 'Infrared Cooktop', type: 'Infrared Cooktop', img: IMG.induction, img2: IMG.induction, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Bajaj', 'Prestige', 'Pigeon', 'Philips'],
    features: ['Any utensil', 'High-temperature', 'Cool-touch body', 'Variable heat', 'Easy clean'] },
  { category: 'induction-cooktops', sub: 'built-in-induction', label: 'Built-in Induction', type: 'Built-in Induction', img: IMG.induction, img2: IMG.induction, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 4, l: '4 Burner' }],
    brands: ['Faber', 'Elica', 'Bosch', 'Havells'],
    features: ['Built-in design', 'Vitreous ceramic top', 'Auto heat-up', 'Touch slider', 'Child lock'] },
  { category: 'induction-cooktops', sub: 'commercial-induction', label: 'Commercial Induction', type: 'Commercial Induction', img: IMG.induction, img2: IMG.induction, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 3, l: '3000W' }],
    brands: ['Bajaj', 'Prestige', 'Pigeon'],
    features: ['Restaurant-grade', 'Heavy-duty coil', 'Continuous use', 'Stainless body', 'High durability'] },
  { category: 'induction-cooktops', sub: 'smart-induction', label: 'Smart Induction', type: 'Smart Induction', img: IMG.induction, img2: IMG.induction, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Philips', 'Havells', 'Prestige', 'Bajaj'],
    features: ['App connectivity', 'Voice assistant', 'Recipe library', 'Auto weight sensing', 'IoT enabled'] },
];

/* ===========================================================================
 *   PRODUCT BUILDER
 *   =========================================================================
 *
 *   Walks CATALOG and emits one Product per (capacity × brand) combination,
 *   capping to 4 brands per cell so the dataset stays compact (~150 rows)
 *   while still giving every (sub-category, capacity) a healthy mix.
 */

function slugifyProduct(brand: string, label: string): string {
  return `${brand} ${label}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildProducts(): Product[] {
  const out: Product[] = [];
  let counter = 0;
  const seenSlugs = new Set<string>();

  for (const cat of CATALOG) {
    for (const cap of cat.caps) {
      const brandsForCombo = cat.brands.slice(0, 4);
      for (const brand of brandsForCombo) {
        counter++;
        const id = `p-${String(counter).padStart(4, '0')}`;
        const active = isProductActive(cat.category, cat.sub, cap.l);
        const resolved = resolvePricing(cat.category, cat.sub, cap.l, cap.v);

        const pricing = active
          ? {
              monthly: resolved.monthly,
              quarterly: resolved.quarterly,
              halfYearly: resolved.halfYearly,
              yearly: resolved.yearly,
            }
          : {
              monthly: 0,
              quarterly: 0,
              halfYearly: 0,
              yearly: 0,
            };
        const deposit = active ? resolved.deposit : 0;
        const plans = active ? resolved.plans : [];

        let slug = slugifyProduct(brand, `${cap.l} ${cat.label}`);
        if (seenSlugs.has(slug)) slug = `${slug}-${counter}`;
        seenSlugs.add(slug);

        const name = `${brand} ${cap.l} ${cat.label}`;
        const depositNotice = deposit > 0 ? ` Refundable deposit: ₹${deposit}.` : ' Zero deposit.';

        const v2Img = PRODUCT_V2_IMAGES[cat.sub]?.[cap.l] || cat.img;
        const images = active ? [v2Img, v2Img] : [cat.img, cat.img2];

        out.push({
          id,
          slug,
          name,
          category: cat.category as Product['category'],
          subCategory: cat.sub,
          brand,
          images,
          description: active
            ? `${cap.l} ${cat.type} from ${brand} — reliable rental-grade appliance with warranty. Transport extra.${depositNotice}`
            : `${cap.l} ${cat.type} from ${brand} — Coming Soon! Bookings will open shortly.`,
          longDescription: active
            ? `This ${brand} ${cap.l} ${cat.type.toLowerCase()} is curated for Rent BigBazar customers looking for hassle-free rentals. ${cat.features.slice(0, 4).join('; ')}. Full warranty coverage during rental. Transport extra.${depositNotice}`
            : `This ${brand} ${cap.l} ${cat.type.toLowerCase()} will be available for rent soon. Please check back for launch pricing and booking availability.`,
          specifications: {
            Brand: brand,
            Type: cat.type,
            Capacity: cap.l,
            'Star Rating': cat.energy,
            Warranty: cat.warranty + ' on product, longer on compressor',
            Color: 'White',
          },
          pricing,
          plans,
          deposit,
          rating: 4.4 + ((counter * 7) % 6) * 0.1,
          reviewCount: 80 + (counter % 9) * 53,
          inStock: active,
          comingSoon: !active,
          pricingNote: active ? resolved.pricingNote : 'Coming Soon',
          transportationNote: active ? resolved.transportationNote : 'Coming Soon',
          dayPrice: active ? resolved.dayPrice : undefined,
          dayPriceUnit: active ? resolved.dayPriceUnit : undefined,
          tags: [
            cat.sub.replace(/-/g, ' '),
            cap.l.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            brand.toLowerCase(),
          ],
          features: cat.features,
          energyRating: cat.energy,
          warranty: cat.warranty,
          capacity: cap.l,
          type: cat.type,
        });
      }
    }
  }

  return out;
}
export const PRODUCTS: Product[] = buildProducts();


export const SERVICES: Service[] = [
  {
    id: 'svc-001',
    slug: 'ac-repair',
    name: 'AC Repair Service',
    category: 'ac',
    subCategory: 'repair',
    description: 'Expert AC repair for all brands - same day service.',
    longDescription:
      'Our certified technicians diagnose and fix all AC issues - cooling problems, water leakage, noise, electrical faults, and more. Service warranty included on all repairs.',
    startingPrice: 299,
    images: [
      '/images/newproductimages/ac-repair.jpeg',
    ],
    features: [
      'Same day service available',
      'All brands serviced',
      '30-day service warranty',
      'Genuine spare parts',
      'Transparent pricing - starting @ ₹299',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.8,
    reviewCount: 1248,
  },
  {
    id: 'svc-002',
    slug: 'ac-installation',
    name: 'AC Installation Service',
    category: 'ac',
    subCategory: 'installation',
    description: 'Professional AC installation with bracket and copper piping.',
    longDescription:
      'Complete AC installation service including wall mounting, copper piping (up to 3m), drainage setup, electrical connection, and gas pressure check. Old AC uninstallation also available.',
    startingPrice: 1499,
    images: [
      '/images/newproductimages/ac-installation.jpeg',
    ],
    features: [
      'Up to 3m copper piping included',
      'Heavy-duty wall bracket',
      'Professional installation @ ₹1,499',
      'Electrical safety check',
      'Free old AC uninstallation',
    ],
    duration: '2-3 hours',
    warranty: '1 year on workmanship',
    rating: 4.9,
    reviewCount: 856,
  },
  {
    id: 'svc-003',
    slug: 'ac-gas-refill',
    name: 'AC Gas Refill Service',
    category: 'ac',
    subCategory: 'gas-refill',
    description: 'AC gas refill with leak detection - R22, R32, R410A.',
    longDescription:
      'Restore your AC\'s cooling performance with our professional gas refill service. Includes comprehensive leak detection, pressure testing, and use of genuine refrigerants (R-22, R-32, R-410A).',
    startingPrice: 2499,
    images: [
      '/images/newproductimages/ac-gas-refill.jpeg',
    ],
    features: [
      'Genuine refrigerant used',
      'R22 Gas refill @ ₹2,499',
      'R32 / R410A Gas refill @ ₹2,849',
      'Leak detection included',
      '30-day cooling warranty',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 642,
  },
  {
    id: 'svc-ac-leakage',
    slug: 'ac-water-leakage',
    name: 'AC Water Leakage Problem Repair',
    category: 'ac',
    subCategory: 'repair',
    description: 'Fix indoor AC water dripping, drain blockage, and pipe issues.',
    longDescription:
      'Water leaking from your AC can damage walls and flooring. Our experts resolve drain tray blockage, pipe clogs, improper leveling, and filter issues with same-day doorstep service.',
    startingPrice: 349,
    images: [
      '/images/newproductimages/ac-repair.jpeg',
    ],
    features: [
      'Drain line flush & cleaning @ ₹349',
      'Drain tray inspection & sealing',
      'Indoor unit leveling check',
      'Same day doorstep repair',
      '30-day service warranty',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.8,
    reviewCount: 512,
  },
  {
    id: 'svc-004',
    slug: 'ac-deep-cleaning',
    name: 'AC Deep Cleaning Service',
    category: 'ac',
    subCategory: 'deep-cleaning',
    description: 'Complete jet-wash cleaning for split & window AC.',
    longDescription:
      'Restore cooling efficiency and improve air quality with our deep cleaning service. Includes complete disassembly, jet washing of coils, blower, and filters, plus anti-bacterial spray treatment.',
    startingPrice: 499,
    comingSoon: true,
    images: [
      '/images/newproductimages/ac-deep-clean.jpeg',
    ],
    features: [
      'Complete disassembly',
      'High-pressure jet washing',
      'Anti-bacterial treatment',
      'Filter cleaning/replacement',
      'Improves cooling by up to 30%',
    ],
    duration: '60-90 minutes',
    warranty: '14 days',
    rating: 4.8,
    reviewCount: 923,
  },
  {
    id: 'svc-005',
    slug: 'ac-amc',
    name: 'AC Annual Maintenance Contract (AMC)',
    category: 'ac',
    subCategory: 'amc',
    description: 'Yearly AMC for 1 Ton, 1.5 Ton, 2 Ton & Commercial AC.',
    longDescription:
      'Get complete peace of mind with our 1-Year Annual Maintenance Contract. Includes regular scheduled services, breakdown visits, gas check, and priority service.',
    startingPrice: 4750,
    images: [
      '/images/newproductimages/ac-annual-maintainace.jpeg',
    ],
    features: [
      '1 Year AMC - 1 Ton AC: ₹4,750',
      '1 Year AMC - 1.5 Ton AC: ₹5,750',
      '1 Year AMC - 2 Ton AC: ₹6,750',
      'Commercial & Industrial AC: Contact Us',
      'Priority same-day service & genuine parts',
    ],
    duration: '12 months',
    warranty: 'Full year',
    rating: 4.9,
    reviewCount: 478,
  },
  {
    id: 'svc-006',
    slug: 'fridge-repair',
    name: 'Fridge Repair Service',
    category: 'fridge',
    subCategory: 'repair',
    description: 'Expert fridge repair - cooling, leakage, electrical issues.',
    longDescription:
      'Expert diagnosis and repair for all refrigerator problems - not cooling, water leakage, excessive noise, electrical issues, compressor faults. All brands serviced.',
    startingPrice: 299,
    comingSoon: true,
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    ],
    features: [
      'All brands and models',
      'Same day service available',
      '30-day service warranty',
      'Genuine spare parts',
      'Visiting charge waived on repair',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 687,
  },
  {
    id: 'svc-007',
    slug: 'fridge-gas-refill',
    name: 'Fridge Gas Refill',
    category: 'fridge',
    subCategory: 'gas-refill',
    description: 'Refrigerant gas refill with leak detection.',
    longDescription:
      'Restore your refrigerator\'s cooling performance with our gas refill service. Includes leak detection, capillary replacement if needed, and use of genuine refrigerants.',
    startingPrice: 1999,
    comingSoon: true,
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    ],
    features: [
      'R134a / R600a refrigerants',
      'Leak detection included',
      'Capillary filter check',
      '30-day cooling warranty',
      'Certified technicians',
    ],
    duration: '90-120 minutes',
    warranty: '30 days',
    rating: 4.6,
    reviewCount: 312,
  },
  {
    id: 'svc-008',
    slug: 'fridge-deep-cleaning',
    name: 'Fridge Deep Cleaning',
    category: 'fridge',
    subCategory: 'deep-cleaning',
    description: 'Complete fridge cleaning with defrosting.',
    longDescription:
      'Complete fridge deep cleaning service - defrost, remove all shelves, sanitize, deodorize, and reassemble. Improves hygiene and reduces electricity consumption.',
    startingPrice: 399,
    comingSoon: true,
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    ],
    features: [
      'Complete defrost',
      'Deep cleaning all compartments',
      'Anti-bacterial sanitization',
      'Door gasket cleaning',
      'Deodorizer treatment',
    ],
    duration: '60-90 minutes',
    warranty: '7 days',
    rating: 4.7,
    reviewCount: 245,
  },

  /* ===== Air Coolers ===== */
  {
    id: 'svc-clr-001',
    slug: 'air-cooler-repair',
    name: 'Air Cooler Repair Service',
    category: 'air-coolers',
    subCategory: 'repair',
    description: 'Expert air cooler repair for all brands — same day service.',
    longDescription:
      'Our technicians diagnose and fix all air cooler issues — pump failure, motor issues, water leakage, cooling problems, and more. Service warranty included.',
    startingPrice: 249,
    comingSoon: true,
    images: ['/images/newproductimages/ac-cooler-appliance.jpeg'],
    features: [
      'Same day service available',
      'All brands serviced',
      '30-day service warranty',
      'Genuine spare parts',
      'Transparent pricing',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 421,
  },
  {
    id: 'svc-clr-002',
    slug: 'air-cooler-deep-cleaning',
    name: 'Air Cooler Deep Cleaning Service',
    category: 'air-coolers',
    subCategory: 'deep-cleaning',
    description: 'Complete descaling and pad cleaning for air coolers.',
    longDescription:
      "Restore your air cooler’s cooling efficiency with our deep cleaning service. Includes complete disassembly, pump cleaning, motor check, and pad replacement if needed.",
    startingPrice: 399,
    comingSoon: true,
    images: ['/images/newproductimages/ac-cooler-appliance.jpeg'],
    features: [
      'Complete pump descaling',
      'Cooling pad inspection',
      'Motor lubrication',
      'Anti-bacterial treatment',
      'Improves cooling by up to 40%',
    ],
    duration: '60-90 minutes',
    warranty: '14 days',
    rating: 4.6,
    reviewCount: 287,
  },

  /* ===== Washing Machines ===== */
  {
    id: 'svc-wm-001',
    slug: 'washing-machine-repair',
    name: 'Washing Machine Repair Service',
    category: 'washing-machines',
    subCategory: 'repair',
    description: 'Expert washing machine repair for all brands and types.',
    longDescription:
      'Diagnosis and repair for all washing machine issues — drainage problems, spin failure, water leakage, electrical faults, and more. Front-load, top-load, and semi-automatic all serviced.',
    startingPrice: 349,
    comingSoon: true,
    images: ['/images/newproductimages/washing-machine.jpeg'],
    features: [
      'Same day service',
      'All brands & types',
      '30-day service warranty',
      'Genuine spare parts',
      'Front-load, top-load, semi-automatic',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 538,
  },
  {
    id: 'svc-wm-002',
    slug: 'washing-machine-deep-cleaning',
    name: 'Washing Machine Deep Cleaning',
    category: 'washing-machines',
    subCategory: 'deep-cleaning',
    description: 'Drum and pipe descaling for fresh, hygienic laundry.',
    longDescription:
      'Remove limescale, detergent residue, and bacteria from your washing machine drum, pipes, and filter. Improves wash quality and extends machine life.',
    startingPrice: 599,
    comingSoon: true,
    images: ['/images/newproductimages/washing-machine.jpeg'],
    features: [
      'Drum descaling',
      'Pipe flushing',
      'Filter cleaning',
      'Anti-bacterial treatment',
      'Eliminates bad odors',
    ],
    duration: '60-90 minutes',
    warranty: '14 days',
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: 'svc-wm-003',
    slug: 'washing-machine-installation',
    name: 'Washing Machine Installation',
    category: 'washing-machines',
    subCategory: 'installation',
    description: 'Professional washing machine installation and setup.',
    longDescription:
      'Complete installation service including water inlet connection, drainage setup, leveling, electrical connection, and test run.',
    startingPrice: 299,
    comingSoon: true,
    images: ['/images/newproductimages/washing-machine.jpeg'],
    features: [
      'Water inlet connection',
      'Drainage setup',
      'Machine leveling',
      'Electrical safety check',
      'Free old machine uninstallation',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.6,
    reviewCount: 198,
  },

  /* ===== Inverters ===== */
  {
    id: 'svc-inv-001',
    slug: 'inverter-repair',
    name: 'Inverter Repair Service',
    category: 'inverters',
    subCategory: 'repair',
    description: 'Expert inverter repair for all brands and capacities.',
    longDescription:
      'Complete diagnosis and repair of home and commercial inverters — including power issues, charging faults, display problems, and component failures.',
    startingPrice: 399,
    comingSoon: true,
    images: ['/images/newproductimages/inverter-appliance.jpeg'],
    features: [
      'All brands serviced',
      'Same day diagnostics',
      'Genuine spare parts',
      '30-day warranty',
      'Battery health check included',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 264,
  },
  {
    id: 'svc-inv-002',
    slug: 'inverter-installation',
    name: 'Inverter Installation Service',
    category: 'inverters',
    subCategory: 'installation',
    description: 'Professional inverter setup with battery and wiring.',
    longDescription:
      'Complete inverter installation including battery connection, wiring, safety checks, and configuration for optimal performance.',
    startingPrice: 499,
    comingSoon: true,
    images: ['/images/newproductimages/inverter-appliance.jpeg'],
    features: [
      'Battery installation',
      'Proper wiring',
      'Safety checks',
      'Load configuration',
      '1 year workmanship warranty',
    ],
    duration: '2-3 hours',
    warranty: '1 year',
    rating: 4.8,
    reviewCount: 142,
  },
  {
    id: 'svc-inv-003',
    slug: 'inverter-battery-replacement',
    name: 'Inverter Battery Replacement',
    category: 'inverters',
    subCategory: 'battery-replacement',
    description: 'Battery swap with proper disposal of old batteries.',
    longDescription:
      'Replace your old or weak inverter battery with a new one. Includes safe disposal of old battery, proper connections, water top-up for tubular batteries, and warranty registration.',
    startingPrice: 1499,
    comingSoon: true,
    images: ['/images/newproductimages/inverter-appliance.jpeg'],
    features: [
      'Old battery disposal',
      'New battery setup',
      'Water top-up included',
      'Warranty registration',
      'Same day service',
    ],
    duration: '1-2 hours',
    warranty: 'As per battery',
    rating: 4.7,
    reviewCount: 189,
  },

  /* ===== Geysers ===== */
  {
    id: 'svc-gy-001',
    slug: 'geyser-repair',
    name: 'Geyser Repair Service',
    category: 'geysers',
    subCategory: 'repair',
    description: 'Expert geyser repair — heating, leakage, electrical issues.',
    longDescription:
      'Complete repair service for instant, storage, gas, and solar geysers. Fixes heating issues, water leakage, thermostat problems, and electrical faults.',
    startingPrice: 299,
    comingSoon: true,
    images: ['/images/newproductimages/gyser%20repair.jpeg'],
    features: [
      'All geyser types',
      'Same day service',
      'Element replacement',
      'Thermostat repair',
      '30-day warranty',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 412,
  },
  {
    id: 'svc-gy-002',
    slug: 'geyser-installation',
    name: 'Geyser Installation Service',
    category: 'geysers',
    subCategory: 'installation',
    description: 'Professional wall-mount geyser installation.',
    longDescription:
      'Safe wall-mount installation with proper plumbing connections, electrical wiring, and pressure relief valve setup. Includes bracket fitting and water line connections.',
    startingPrice: 599,
    comingSoon: true,
    images: ['/images/newproductimages/geysers-appliance.jpeg'],
    features: [
      'Wall mounting',
      'Plumbing connections',
      'Electrical wiring',
      'Safety valve setup',
      '1 year workmanship warranty',
    ],
    duration: '2-3 hours',
    warranty: '1 year',
    rating: 4.6,
    reviewCount: 178,
  },
  {
    id: 'svc-gy-003',
    slug: 'geyser-descaling',
    name: 'Geyser Descaling Service',
    category: 'geysers',
    subCategory: 'descaling',
    description: 'Remove limescale buildup for efficient heating.',
    longDescription:
      'Professional descaling of storage geysers to remove mineral buildup, improve heating efficiency, and extend tank life. Includes anode rod check.',
    startingPrice: 449,
    comingSoon: true,
    images: ['/images/newproductimages/geysers-appliance.jpeg'],
    features: [
      'Tank descaling',
      'Anode rod inspection',
      'Efficiency restoration',
      'Safety check',
      'Improves heating by 30%',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.6,
    reviewCount: 156,
  },

  /* ===== Water Purifiers ===== */
  {
    id: 'svc-wp-001',
    slug: 'water-purifier-filter-change',
    name: 'Water Purifier Filter Change',
    category: 'water-purifiers',
    subCategory: 'filter-change',
    description: 'RO/UV/UF filter replacement for all brands.',
    longDescription:
      'Genuine filter replacement for all water purifier brands — RO membrane, UV lamp, UF filter, sediment filter, carbon filter. Includes TDS check and sanitization.',
    startingPrice: 599,
    comingSoon: true,
    images: ['/images/newproductimages/waterpurifier-appliance.jpeg'],
    features: [
      'Genuine filters',
      'All brands & types',
      'TDS check',
      'Full sanitization',
      '30-day filter warranty',
    ],
    duration: '30-45 minutes',
    warranty: '30 days',
    rating: 4.8,
    reviewCount: 624,
  },
  {
    id: 'svc-wp-002',
    slug: 'water-purifier-repair',
    name: 'Water Purifier Repair',
    category: 'water-purifiers',
    subCategory: 'repair',
    description: 'RO/UV purifier repair for water leakage, no water, etc.',
    longDescription:
      'Diagnosis and repair of common water purifier issues — no water output, leakage, low pressure, bad taste, electrical faults, pump failure.',
    startingPrice: 399,
    comingSoon: true,
    images: ['/images/newproductimages/waterpurifier-appliance.jpeg'],
    features: [
      'All brands serviced',
      'Same day diagnosis',
      'Genuine parts',
      'Pump & valve repair',
      '30-day warranty',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 358,
  },
  {
    id: 'svc-wp-003',
    slug: 'water-purifier-installation',
    name: 'Water Purifier Installation',
    category: 'water-purifiers',
    subCategory: 'installation',
    description: 'Wall-mount RO/UV purifier installation.',
    longDescription:
      'Complete installation including wall mounting, water inlet connection, drain setup, electrical connection, and first-time filter flush.',
    startingPrice: 499,
    comingSoon: true,
    images: ['/images/newproductimages/waterpurifier-appliance.jpeg'],
    features: [
      'Wall mounting',
      'Inlet/drain connection',
      'Electrical setup',
      'Filter flush',
      '1 year workmanship warranty',
    ],
    duration: '45-60 minutes',
    warranty: '1 year',
    rating: 4.6,
    reviewCount: 213,
  },

  /* ===== Microwave & Ovens ===== */
  {
    id: 'svc-mw-001',
    slug: 'microwave-repair',
    name: 'Microwave & Oven Repair',
    category: 'microwaves-ovens',
    subCategory: 'repair',
    description: 'Expert repair for microwave, OTG, convection ovens.',
    longDescription:
      'Complete repair for solo, grill, convection microwaves, OTGs, and built-in ovens. Fixes heating issues, sparking, turntable problems, electrical faults.',
    startingPrice: 349,
    comingSoon: true,
    images: ['/images/newproductimages/microwave-appliance.jpeg'],
    features: [
      'All brands & types',
      'Same day repair',
      'Magnetron repair',
      'Control board fix',
      '30-day warranty',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 287,
  },
  {
    id: 'svc-mw-002',
    slug: 'microwave-deep-cleaning',
    name: 'Microwave Deep Cleaning',
    category: 'microwaves-ovens',
    subCategory: 'deep-cleaning',
    description: 'Complete interior cleaning for hygiene and odor removal.',
    longDescription:
      'Deep cleaning of microwave interior, cavity, turntable, vents, and filters. Removes grease, food residue, and odors for safe cooking.',
    startingPrice: 299,
    comingSoon: true,
    images: ['/images/newproductimages/microwave-appliance.jpeg'],
    features: [
      'Interior degreasing',
      'Cavity sanitization',
      'Turntable cleaning',
      'Vent filter wash',
      'Anti-bacterial treatment',
    ],
    duration: '30-45 minutes',
    warranty: '14 days',
    rating: 4.6,
    reviewCount: 142,
  },

  /* ===== Room Heaters ===== */
  {
    id: 'svc-rh-001',
    slug: 'room-heater-repair',
    name: 'Room Heater Repair',
    category: 'room-heaters',
    subCategory: 'repair',
    description: 'Repair for fan, quartz, halogen, oil heaters.',
    longDescription:
      'Expert repair of all room heater types — fan heaters, quartz heaters, halogen heaters, oil-filled radiators, PTC heaters. Fixes heating element issues, thermostat problems, electrical faults.',
    startingPrice: 299,
    comingSoon: true,
    images: ['/images/newproductimages/room-heater-appliance.png'],
    features: [
      'All heater types',
      'Element replacement',
      'Thermostat fix',
      'Same day repair',
      '30-day warranty',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.6,
    reviewCount: 178,
  },
  {
    id: 'svc-rh-002',
    slug: 'room-heater-servicing',
    name: 'Room Heater Servicing',
    category: 'room-heaters',
    subCategory: 'servicing',
    description: 'Pre-winter servicing and safety checks.',
    longDescription:
      'Complete pre-winter servicing including element check, thermostat calibration, safety switch testing, and deep cleaning. Get your heater winter-ready.',
    startingPrice: 399,
    comingSoon: true,
    images: ['/images/newproductimages/room-heater-appliance.png'],
    features: [
      'Element inspection',
      'Thermostat calibration',
      'Safety switch test',
      'Full cleaning',
      'Pre-winter checkup',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 124,
  },

  /* ===== Induction Cooktops ===== */
  {
    id: 'svc-ic-001',
    slug: 'induction-repair',
    name: 'Induction Cooktop Repair',
    category: 'induction-cooktops',
    subCategory: 'repair',
    description: 'Repair for single, double, infrared induction cooktops.',
    longDescription:
      'Expert repair for all induction cooktop types — single burner, double burner, infrared, built-in. Fixes heating issues, touch panel problems, electrical faults.',
    startingPrice: 349,
    comingSoon: true,
    images: ['/images/newproductimages/induction%20cooktop.jpeg'],
    features: [
      'All induction types',
      'Touch panel repair',
      'Coil replacement',
      'Same day service',
      '30-day warranty',
    ],
    duration: '60-90 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 196,
  },
  {
    id: 'svc-ic-002',
    slug: 'induction-servicing',
    name: 'Induction Cooktop Servicing',
    category: 'induction-cooktops',
    subCategory: 'servicing',
    description: 'Deep cleaning and performance check.',
    longDescription:
      'Complete servicing of induction cooktop — glass top polishing, fan cleaning, internal inspection, voltage check. Restores performance and extends life.',
    startingPrice: 299,
    comingSoon: true,
    images: ['/images/newproductimages/induction%20cooktop.jpeg'],
    features: [
      'Glass top polishing',
      'Fan cleaning',
      'Internal inspection',
      'Voltage check',
      'Performance restoration',
    ],
    duration: '30-45 minutes',
    warranty: '30 days',
    rating: 4.6,
    reviewCount: 112,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tst-001',
    name: 'Priya Sharma',
    city: 'Bangalore',
    rating: 5,
    text: 'Rented a 1.5 Ton Split AC from Rent BigBazar for 6 months during my Bangalore stint. Excellent service, no hassle, and the AC was in perfect condition. Pickup was seamless too!',
    product: '1.5 Ton Split AC',
  },
  {
    id: 'tst-002',
    name: 'Rohan Verma',
    city: 'Delhi',
    rating: 5,
    text: 'As a student in Delhi, I can\'t afford to buy an AC. Rent BigBazar\'s monthly rental is a lifesaver. Got my window AC delivered in 4 hours. Highly recommended for students!',
    product: '1 Ton Window AC',
  },
  {
    id: 'tst-003',
    name: 'Mr. Ahmed Khan',
    city: 'Hyderabad',
    rating: 5,
    text: 'I run a small restaurant and needed multiple fridges for a 3-month event. Rent BigBazar offered flexible bulk pricing and the fridges were delivered on time. Professional team!',
    product: '3x Double Door Fridges',
  },
  {
    id: 'tst-004',
    name: 'Anjali Patel',
    city: 'Mumbai',
    rating: 5,
    text: 'AC broke down during peak summer in Mumbai. Called Rent BigBazar for emergency repair - technician arrived within 3 hours and fixed it on the spot. Great service!',
    product: 'AC Repair Service',
  },
  {
    id: 'tst-005',
    name: 'Vikram Singh',
    city: 'Pune',
    rating: 5,
    text: 'Took their AMC plan for my home AC. Saves me from worrying about breakdowns. The 4 scheduled services keep my AC running like new. Worth every rupee.',
    product: 'AC AMC',
  },
  {
    id: 'tst-006',
    name: 'Sneha Reddy',
    city: 'Chennai',
    rating: 5,
    text: 'Rented AC + Fridge combo for my apartment. The combo savings are real - I save almost ₹500/month. Transparent pricing and reliable delivery.',
    product: 'AC + Fridge Combo',
  },
  {
    id: 'tst-007',
    name: 'Arjun Mehta',
    city: 'Kolkata',
    rating: 5,
    text: 'Was skeptical about renting appliances online, but Rent BigBazar made it super easy. WhatsApp ordering is brilliant. The fridge works perfectly for my PG.',
    product: '190L Single Door Fridge',
  },
  {
    id: 'tst-008',
    name: 'Meera Joshi',
    city: 'Ahmedabad',
    rating: 5,
    text: 'My portable AC from Rent BigBazar is amazing for my small studio. No installation needed - just plug and play. Perfect for renters who move frequently.',
    product: '1 Ton Portable AC',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-001',
    question: 'What is the minimum rental duration?',
    answer:
      'The minimum rental duration is 1 month. You can choose from 1, 3, 6, or 12-month plans. Longer durations come with attractive discounts.',
    category: 'rental',
  },
  {
    id: 'faq-002',
    question: 'Is there a security deposit?',
    answer:
      'No! All our products come with zero deposit rental options. You only pay the monthly rent - no hidden charges, no security deposits.',
    category: 'rental',
  },
  {
    id: 'faq-003',
    question: 'Do you provide delivery and installation?',
    answer:
      'Yes, we provide delivery and installation across all metro cities at transparent charges. For AC installations, up to 3 meters of copper piping is included in the standard installation charge.',
    category: 'rental',
  },
  {
    id: 'faq-004',
    question: 'What happens if the appliance breaks down?',
    answer:
      'If any appliance breaks down during the rental period, we will repair or replace it free of charge. Just call our 24/7 helpline and our technician will be at your doorstep.',
    category: 'rental',
  },
  {
    id: 'faq-005',
    question: 'How quickly can I get the appliance delivered?',
    answer:
      'For metro cities (Delhi, Mumbai, Bangalore, etc.), we offer same-day or next-day delivery. For other cities, delivery takes 2-3 business days.',
    category: 'rental',
  },
  {
    id: 'faq-006',
    question: 'Can I extend my rental period?',
    answer:
      'Yes! You can extend your rental anytime. Just let us know at least 7 days before your current plan ends, and we will renew it at the same or better rate.',
    category: 'rental',
  },
  {
    id: 'faq-007',
    question: 'What services do you offer?',
    answer:
      'We offer AC repair, AC installation, AC gas refill, AC deep cleaning, AC AMC, Fridge repair, Fridge gas refill, and Fridge deep cleaning. All services come with warranty.',
    category: 'service',
  },
  {
    id: 'faq-008',
    question: 'Do you provide same-day service?',
    answer:
      'Yes, we offer same-day service for repairs and maintenance in all metro cities. Just book before 2 PM and we will send a technician the same day.',
    category: 'service',
  },
  {
    id: 'faq-009',
    question: 'What payment methods do you accept?',
    answer:
      'We accept UPI (Google Pay, PhonePe, Paytm), debit cards, credit cards, net banking, and cash on delivery for monthly rentals. EMI options available for longer plans.',
    category: 'payments',
  },
  {
    id: 'faq-010',
    question: 'How do I cancel my order?',
    answer:
      'You can cancel your order within 24 hours of placing it for a full refund. After delivery, you can return the appliance as per our cancellation and refund policy.',
    category: 'payments',
  },
  {
    id: 'faq-011',
    question: 'Which cities do you operate in?',
    answer:
      'We currently serve 15+ cities including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Indore, Nagpur, Kochi, and Coimbatore.',
    category: 'general',
  },
  {
    id: 'faq-012',
    question: 'Is there a customer support helpline?',
    answer:
      'Yes, we have 24/7 customer support available via phone (1800-123-4567), WhatsApp, and email. Our support team is always ready to help.',
    category: 'general',
  },
];

export const POPULAR_CITIES = [
  'Delhi NCR',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
];

/**
 * Legacy category URL aliases. The marketing site has historically used
 * short slugs (`/rent/ac`, `/rent/fridge`) and the new catalog uses the
 * full Home Appliances slugs (`/rent/air-conditioners`, `/rent/refrigerators`).
 * To keep every existing URL working without redirect plumbing, we translate
 * the legacy slug to the canonical one before matching products.
 *
 * Anything not in this map is returned unchanged, so the function is safe
 * to call with the new slugs too — it just becomes a no-op.
 */
export const LEGACY_CATEGORY_MAP: Record<string, string> = {
  ac: 'air-conditioners',
  fridge: 'refrigerators',
};

/**
 * Resolve a category slug from a URL into the canonical product category.
 * Returns the input unchanged if it isn't a known legacy alias.
 */
export function resolveCategorySlug(slug: string): string {
  return LEGACY_CATEGORY_MAP[slug] || slug;
}

/**
 * Service-side alias map. Mirrors `LEGACY_CATEGORY_MAP` but is kept as a
 * separate constant so service routing can resolve independently of the
 * rent catalog if those alias directions ever diverge.
 */
export const SERVICE_LEGACY_CATEGORY_MAP: Record<string, string> = {
  ac: 'air-conditioners',
  fridge: 'refrigerators',
};

/**
 * Resolve a service category slug from a URL into its canonical slug.
 * `/service/ac` and `/service/fridge` keep working alongside the new
 * `/service/air-conditioners` and `/service/refrigerators` URLs.
 */
export function resolveServiceCategorySlug(slug: string): string {
  return SERVICE_LEGACY_CATEGORY_MAP[slug] || slug;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  const resolved = resolveCategorySlug(category);
  return PRODUCTS.filter(
    (p) => p.category === resolved || p.subCategory === resolved
  );
}

export function getProductsBySubCategory(subCategory: string): Product[] {
  return PRODUCTS.filter((p) => p.subCategory === subCategory);
}

export function getServicesByCategory(category: string): Service[] {
  const resolved = resolveServiceCategorySlug(category);
  return SERVICES.filter(
    (s) => s.category === resolved || s.subCategory === resolved
  );
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return [];
  return PRODUCTS.filter(
    (p) =>
      p.id !== productId &&
      (p.category === product.category || p.subCategory === product.subCategory)
  ).slice(0, limit);
}

export function getPopularProducts(limit = 8): Product[] {
  return [...PRODUCTS]
    .sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount)
    .slice(0, limit);
}

export function getPopularServices(limit = 6): Service[] {
  return [...SERVICES]
    .sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount)
    .slice(0, limit);
}

export interface EnquiryOption {
  value: string;
  label: string;
}

interface EnquirySubTaxonomy {
  readonly [subCategory: string]: EnquiryOption[];
}

export type EnquiryTaxonomy = {
  readonly [topLevel: string]: EnquirySubTaxonomy;
};

export function getEnquiryTaxonomy(): EnquiryTaxonomy {
  const rentSubMap: Record<string, Set<string>> = {};
  const rentProductMap: Record<string, Set<string>> = {};

  for (const p of PRODUCTS) {
    if (p.comingSoon) continue;
    const sub = p.subCategory;
    if (!rentSubMap[sub]) rentSubMap[sub] = new Set();
    const key = sub;
    if (!rentProductMap[key]) rentProductMap[key] = new Set();
    rentProductMap[key].add(p.name);
  }

  const serviceSubMap: Record<string, Set<string>> = {};
  const serviceProductMap: Record<string, Set<string>> = {};

  for (const s of SERVICES) {
    if (s.comingSoon) continue;
    const sub = s.subCategory;
    if (!serviceSubMap[sub]) serviceSubMap[sub] = new Set();
    const key = sub;
    if (!serviceProductMap[key]) serviceProductMap[key] = new Set();
    serviceProductMap[key].add(s.name);
  }

  const build = (
    subMap: Record<string, Set<string>>,
    productMap: Record<string, Set<string>>
  ): EnquirySubTaxonomy => {
    const result: Record<string, EnquiryOption[]> = {};
    for (const sub of Object.keys(subMap)) {
      result[sub] = Array.from(productMap[sub] || []).map((name) => ({
        value: name,
        label: name,
      }));
    }
    return result as unknown as EnquirySubTaxonomy;
  };

  const out: EnquiryTaxonomy = {
    rent: build(rentSubMap, rentProductMap),
    service: build(serviceSubMap, serviceProductMap),
  };
  return out;
}