import type { Product, Service, Testimonial, FAQ, Category } from '@/types';

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
    description: 'Window, Split, Inverter, Tower, Cassette & Ductable ACs',
    image: 'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
  },
  {
    id: 'rent-air-coolers',
    name: 'Air Coolers',
    slug: 'air-coolers',
    parent: 'rent',
    icon: 'Wind',
    description: 'Personal, Desert, Tower, Window & Commercial Coolers',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80',
  },
  {
    id: 'rent-washing-machines',
    name: 'Washing Machines',
    slug: 'washing-machines',
    parent: 'rent',
    icon: 'WashingMachine',
    description: 'Front Load, Top Load & Semi Automatic Washers',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
  },
  {
    id: 'rent-refrigerators',
    name: 'Refrigerators',
    slug: 'refrigerators',
    parent: 'rent',
    icon: 'Refrigerator',
    description: 'Single, Double, Triple, Side-by-Side & French Door Fridges',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
  },
  {
    id: 'rent-inverters',
    name: 'Inverters',
    slug: 'inverters',
    parent: 'rent',
    icon: 'Zap',
    description: 'Home, Solar, UPS & Inverter Batteries',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80',
  },
  {
    id: 'rent-geysers',
    name: 'Geysers',
    slug: 'geysers',
    parent: 'rent',
    icon: 'Flame',
    description: 'Instant, Storage, Gas, Solar & Smart Geysers',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80',
  },
  {
    id: 'rent-water-purifiers',
    name: 'Water Purifiers',
    slug: 'water-purifiers',
    parent: 'rent',
    icon: 'Droplet',
    description: 'RO, UV, UF, Alkaline, Copper & Smart Purifiers',
    image: 'https://images.unsplash.com/photo-1585514532046-5d8f3c0e2a8c?w=800&q=80',
  },
  {
    id: 'rent-microwaves-ovens',
    name: 'Microwave & Ovens',
    slug: 'microwaves-ovens',
    parent: 'rent',
    icon: 'UtensilsCrossed',
    description: 'Solo, Grill, Convection, OTG & Built-in Ovens',
    image: 'https://images.unsplash.com/photo-1585659722983-3b67509abf74?w=800&q=80',
  },
  {
    id: 'rent-room-heaters',
    name: 'Room Heaters',
    slug: 'room-heaters',
    parent: 'rent',
    icon: 'Thermometer',
    description: 'Fan, Quartz, Halogen, Oil, PTC & Smart Heaters',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
  },
  {
    id: 'rent-induction-cooktops',
    name: 'Induction Cooktops',
    slug: 'induction-cooktops',
    parent: 'rent',
    icon: 'Flame',
    description: 'Single, Double, Infrared, Built-in & Commercial Induction',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  /* -------- Combo placeholder (backwards-compat) -------- */
  {
    id: 'combo',
    name: 'Combo Deals',
    slug: 'combo',
    parent: 'rent',
    icon: 'Package',
    description: 'AC + Fridge combo packages with extra savings',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  /* -------- Legacy URLs (backwards-compat) -------- */
  {
    id: 'ac',
    name: 'AC Rentals',
    slug: 'ac',
    parent: 'rent',
    icon: 'Snowflake',
    description: 'Window, Split, Inverter & Portable ACs for rent',
    image: 'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
  },
  {
    id: 'fridge',
    name: 'Fridge Rentals',
    slug: 'fridge',
    parent: 'rent',
    icon: 'Refrigerator',
    description: 'Single Door, Double Door & Side-by-Side Fridges',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
  },
  {
    id: 'ac-service',
    name: 'AC Service',
    slug: 'ac',
    parent: 'service',
    icon: 'Wrench',
    description: 'AC repair, installation, gas refill, deep cleaning',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
  {
    id: 'fridge-service',
    name: 'Fridge Service',
    slug: 'fridge',
    parent: 'service',
    icon: 'Wrench',
    description: 'Fridge repair, gas refill, deep cleaning',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
  },
];

/* ===========================================================================
 *   IMAGE POOL — generic royalty-free Unsplash photo per category.
 *   Reused as the primary hero image for every product variant in that
 *   category, so the catalog renders cleanly without per-SKU photography.
 *   ========================================================================= */

const IMG = {
  acWindow: 'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
  acSplit: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&q=80',
  acIndoor: 'https://images.unsplash.com/photo-1614633833026-0820552978d5?w=800&q=80',
  cooler: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80',
  inverter: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80',
  geyser: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80',
  purifier: 'https://images.unsplash.com/photo-1585514532046-5d8f3c0e2a8c?w=800&q=80',
  microwave: 'https://images.unsplash.com/photo-1585659722983-3b67509abf74?w=800&q=80',
  heater: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
  induction: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  fridgeSingle: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
  fridgeDouble: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80',
  washingMachine: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
} as const;

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

/* ===========================================================================
 *   CATALOG — drives the auto-generated PRODUCTS array.
 *   =========================================================================
 *
 *   For each (main category × sub-category), we list the capacities that the
 *   PDF specifies and the brands it sells under that sub-type. The runtime
 *   builder in `buildProducts()` walks this table and emits one Product per
 *   (capacity × brand) combination, capped at 4 brands per cell so the
 *   resulting dataset stays compact but the rent grid still feels populated.
 *
 *   Compact form below — one row per sub-category.
 */

interface Catalog {
  category: string;
  sub: string;
  label: string;
  type: string;
  img: string;
  energy: string;
  warranty: string;
  caps: Array<{ v: number; l: string }>;
  brands: string[];
  features: string[];
}

const CATALOG: Catalog[] = [
  /* ===== 1. Air Conditioners ===== */
  { category: 'air-conditioners', sub: 'window-ac', label: 'Window AC', type: 'Window AC', img: IMG.acWindow, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 0.75, l: '0.75 Ton' }, { v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }, { v: 2, l: '2 Ton' }],
    brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi', 'Panasonic', 'Carrier', 'Lloyd', 'Whirlpool'],
    features: ['Turbo cooling', 'Anti-bacteria filter', 'Eco-friendly R-32 refrigerant', 'Sleep mode', 'Auto restart'] },
  { category: 'air-conditioners', sub: 'split-ac', label: 'Split AC', type: 'Split AC', img: IMG.acSplit, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }, { v: 2, l: '2 Ton' }, { v: 3, l: '3 Ton' }],
    brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi', 'Panasonic', 'Carrier', 'Lloyd', 'Whirlpool'],
    features: ['Wi-Fi enabled', 'Convertible modes', 'Anti-corrosion copper condenser', 'Turbo cooling', 'Self-clean'] },
  { category: 'air-conditioners', sub: 'inverter-ac', label: 'Inverter Split AC', type: 'Inverter Split AC', img: IMG.acSplit, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }, { v: 2, l: '2 Ton' }],
    brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi', 'Panasonic', 'Carrier', 'Lloyd', 'Whirlpool'],
    features: ['Inverter compressor', '5 Star energy rating', '10-year compressor warranty', 'Wi-Fi smart control', 'Silent operation'] },
  { category: 'air-conditioners', sub: 'non-inverter-ac', label: 'Non-Inverter AC', type: 'Non-Inverter AC', img: IMG.acSplit, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton' }, { v: 1.5, l: '1.5 Ton' }, { v: 2, l: '2 Ton' }],
    brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi'],
    features: ['Fixed speed compressor', 'Eco mode', 'Sleep mode', 'Anti-bacteria filter', 'Turbo cooling'] },
  { category: 'air-conditioners', sub: 'tower-ac', label: 'Tower AC', type: 'Commercial Tower AC', img: IMG.acIndoor, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2 Ton' }, { v: 2.5, l: '2.5 Ton' }, { v: 3, l: '3 Ton' }, { v: 4, l: '4 Ton' }],
    brands: ['Voltas', 'LG', 'Daikin', 'Blue Star', 'Hitachi', 'Carrier'],
    features: ['Floor-standing design', 'Wide air throw', 'Cools large halls', 'Heavy-duty compressor', 'Remote control'] },
  { category: 'air-conditioners', sub: 'portable-ac', label: 'Portable AC', type: 'Portable AC', img: IMG.acIndoor, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 1, l: '1 Ton Smart Portable' }, { v: 1.5, l: '1.5 Ton Compact Portable' }],
    brands: ['Blue Star', 'LG', 'Voltas', 'Whirlpool'],
    features: ['No installation required', 'Self-evaporative', '4-in-1 modes', 'Easy-roll casters', 'Window kit included'] },
  { category: 'air-conditioners', sub: 'cassette-ac', label: 'Cassette AC', type: 'Cassette AC', img: IMG.acIndoor, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2 Ton' }, { v: 3, l: '3 Ton' }, { v: 4, l: '4 Way Cassette' }],
    brands: ['Daikin', 'LG', 'Voltas', 'Blue Star', 'Hitachi', 'Carrier'],
    features: ['4-way air swing', 'Ceiling-mounted', 'Wide airflow coverage', 'Inverter compressor', 'Group control'] },
  { category: 'air-conditioners', sub: 'ductable-ac', label: 'Ductable AC', type: 'Ductable AC', img: IMG.acIndoor, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2 Ton' }, { v: 3, l: '3 Ton' }, { v: 4, l: '4 Ton' }],
    brands: ['Daikin', 'LG', 'Voltas', 'Blue Star', 'Hitachi', 'Carrier'],
    features: ['Ducted installation', 'Commercial-grade', 'Quiet operation', 'Remote monitoring', 'Heavy-duty build'] },

  /* ===== 2. Air Coolers ===== */
  { category: 'air-coolers', sub: 'personal-cooler', label: 'Personal Cooler', type: 'Personal Air Cooler', img: IMG.cooler, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 7, l: 'Mini' }, { v: 12, l: 'Portable' }, { v: 18, l: 'Personal' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Kenstar', 'Orient'],
    features: ['Compact design', 'Low power', 'Honeycomb pads', 'Castor wheels', 'Ice chamber'] },
  { category: 'air-coolers', sub: 'desert-cooler', label: 'Desert Cooler', type: 'Desert Air Cooler', img: IMG.cooler, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 20, l: '20L' }, { v: 25, l: '25L' }, { v: 35, l: '35L' }, { v: 40, l: '40L' },
           { v: 45, l: '45L' }, { v: 50, l: '50L' }, { v: 60, l: '60L' }, { v: 65, l: '65L' },
           { v: 75, l: '75L' }, { v: 90, l: '90L' }, { v: 120, l: '120L' }, { v: 150, l: '150L' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Kenstar', 'Orient'],
    features: ['High air delivery', 'Wood-wool cooling pads', 'Large tank', 'Auto-fill option', 'Inverter compatible'] },
  { category: 'air-coolers', sub: 'tower-cooler', label: 'Tower Cooler', type: 'Tower Cooler', img: IMG.cooler, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 20, l: 'Slim Tower' }, { v: 30, l: 'Premium Tower' }, { v: 40, l: 'Premium Tower+' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Orient'],
    features: ['Vertical slim', 'Space-saving', 'Remote control', 'Honeycomb cooling', 'Multi-stage speed'] },
  { category: 'air-coolers', sub: 'window-cooler', label: 'Window Cooler', type: 'Window Cooler', img: IMG.cooler, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 30, l: 'Plastic Window' }, { v: 50, l: 'Metal Window' }, { v: 70, l: 'Metal Window+' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells', 'Orient'],
    features: ['Window mounting', 'Powerful airflow', 'Durable body', 'Easy maintenance', 'Multiple speed'] },
  { category: 'air-coolers', sub: 'commercial-cooler', label: 'Commercial Cooler', type: 'Commercial Air Cooler', img: IMG.cooler, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 100, l: 'Jumbo' }, { v: 150, l: 'Industrial' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells'],
    features: ['High-capacity cooling', 'Industrial-grade', 'Wide coverage', 'Heavy-duty motor', 'Continuous operation'] },
  { category: 'air-coolers', sub: 'smart-air-cooler', label: 'Smart Air Cooler', type: 'Smart Air Cooler', img: IMG.cooler, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 40, l: 'WiFi Cooler' }, { v: 60, l: 'Remote Control Cooler' }],
    brands: ['Symphony', 'Bajaj', 'Crompton', 'Havells'],
    features: ['Wi-Fi enabled', 'Voice assistant', 'App control', 'Auto humidity control', 'Programmable timer'] },

  /* ===== 3. Washing Machines ===== */
  { category: 'washing-machines', sub: 'front-load-washer', label: 'Front Load Fully Automatic', type: 'Front Load Fully Automatic', img: IMG.washingMachine, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 6, l: '6 Kg' }, { v: 7, l: '7 Kg' }, { v: 8, l: '8 Kg' }, { v: 9, l: '9 Kg' }],
    brands: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Bosch', 'Panasonic', 'Godrej', 'Haier'],
    features: ['Inverter direct drive', 'Steam wash', 'Anti-bacterial cycle', 'Smart diagnosis', '15+ wash programs'] },
  { category: 'washing-machines', sub: 'top-load-washer', label: 'Top Load Fully Automatic', type: 'Top Load Fully Automatic', img: IMG.washingMachine, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 6, l: '6 Kg' }, { v: 7, l: '7 Kg' }, { v: 8, l: '8 Kg' }, { v: 10, l: '10 Kg' }],
    brands: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Bosch', 'Panasonic', 'Godrej', 'Haier'],
    features: ['Turbo drum', 'Punch+ 3 waterfall', 'Auto tub clean', 'Anti-rust body', 'Smart inverter'] },
  { category: 'washing-machines', sub: 'semi-automatic-washer', label: 'Semi Automatic', type: 'Semi Automatic', img: IMG.washingMachine, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 6.5, l: '6.5 Kg' }, { v: 7.5, l: '7.5 Kg' }, { v: 8, l: '8 Kg' }, { v: 9, l: '9 Kg' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Panasonic', 'Godrej', 'Haier'],
    features: ['Two-tub design', 'High spin motor', 'Lint filter', 'Buzzer end indicator', 'Rust-proof body'] },

  /* ===== 4. Refrigerators ===== */
  { category: 'refrigerators', sub: 'single-door-fridge', label: 'Single Door', type: 'Single Door', img: IMG.fridgeSingle, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 180, l: '180L' }, { v: 190, l: '190L' }, { v: 200, l: '200L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Godrej', 'Panasonic', 'Voltas Beko'],
    features: ['Direct cool', 'Honeycomb moisture lock', 'Large crisper', 'Anti-bacterial gasket', 'Insulated capillary'] },
  { category: 'refrigerators', sub: 'double-door-fridge', label: 'Double Door', type: 'Double Door (Frost Free)', img: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 240, l: '240L' }, { v: 260, l: '260L' }, { v: 300, l: '300L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Godrej', 'Panasonic', 'Voltas Beko'],
    features: ['Frost free', 'Multi air flow', 'Smart inverter compressor', 'Large vegetable box', 'Humidity controller'] },
  { category: 'refrigerators', sub: 'triple-door-fridge', label: 'Triple Door', type: 'Triple Door', img: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 300, l: '300L' }, { v: 350, l: '350L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier'],
    features: ['Triple-zone cooling', 'Independent compartments', 'Smart inverter', 'Energy efficient', 'Toughened glass shelves'] },
  { category: 'refrigerators', sub: 'side-by-side-fridge', label: 'Side by Side', type: 'Side-by-Side', img: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 500, l: '500L' }, { v: 600, l: '600L' }],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier'],
    features: ['Side-by-side doors', 'Water & ice dispenser', 'Smart diagnosis', 'Wide storage', 'Frost free'] },
  { category: 'refrigerators', sub: 'french-door-fridge', label: 'French Door', type: 'French Door', img: IMG.fridgeDouble, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 600, l: 'Premium Refrigerator' }],
    brands: ['LG', 'Samsung', 'Whirlpool'],
    features: ['Multi-door design', 'InstaView panel', 'Linear inverter', 'UVnano dispenser', 'Smart ThinQ'] },
  { category: 'refrigerators', sub: 'mini-fridge', label: 'Mini Refrigerator', type: 'Mini Refrigerator', img: IMG.fridgeSingle, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 45, l: '45L' }, { v: 90, l: '90L' }],
    brands: ['LG', 'Samsung', 'Haier', 'Godrej', 'Whirlpool'],
    features: ['Compact size', 'Cooling retention', 'Low power', 'Portable', 'Toughened glass shelf'] },
  { category: 'refrigerators', sub: 'deep-freezer', label: 'Deep Freezer', type: 'Deep Freezer', img: IMG.fridgeDouble, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 300, l: 'Horizontal Freezer' }, { v: 500, l: 'Vertical Freezer' }],
    brands: ['Whirlpool', 'Haier', 'Godrej', 'Voltas Beko'],
    features: ['Fast freeze', 'Heavy-duty compressor', 'Lock & key', 'PUF insulation', 'Wide temperature range'] },
  { category: 'refrigerators', sub: 'commercial-fridge', label: 'Commercial Refrigerator', type: 'Commercial Refrigerator', img: IMG.fridgeDouble, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 350, l: 'Display Cooler' }, { v: 400, l: 'Beverage Cooler' }],
    brands: ['Whirlpool', 'Haier', 'Godrej', 'Voltas Beko'],
    features: ['Glass display', 'Bright LED lighting', 'Lockable', 'Continuous cooling', 'Energy-efficient'] },

  /* ===== 5. Inverters ===== */
  { category: 'inverters', sub: 'home-inverter', label: 'Home Inverter', type: 'Home Inverter', img: IMG.inverter, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 600, l: '600VA' }, { v: 900, l: '900VA' }, { v: 1100, l: '1100VA' }, { v: 1500, l: '1500VA' }, { v: 2000, l: '2000VA' }],
    brands: ['Luminous', 'Microtek', 'Exide', 'Livguard', 'Amaron', 'V-Guard'],
    features: ['Pure sine wave output', 'DSP-based design', 'Smart overload protection', 'LCD display', 'Bypass switch'] },
  { category: 'inverters', sub: 'pure-sine-wave-inverter', label: 'Pure Sine Wave', type: 'Pure Sine Wave Inverter', img: IMG.inverter, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 1100, l: '1100VA' }, { v: 1500, l: '1500VA' }],
    brands: ['Luminous', 'Microtek', 'Exide', 'Livguard', 'Amaron', 'V-Guard'],
    features: ['Pure sine wave', 'Low harmonic distortion', 'Smart charging', 'MCB protection', 'Digital display'] },
  { category: 'inverters', sub: 'square-wave-inverter', label: 'Square Wave', type: 'Square Wave Inverter', img: IMG.inverter, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 800, l: 'Budget Inverter' }],
    brands: ['Luminous', 'Microtek', 'V-Guard'],
    features: ['Affordable pricing', 'Basic protection', 'LED indicators', 'Compact body', 'Easy to install'] },
  { category: 'inverters', sub: 'solar-inverter', label: 'Solar Inverter', type: 'Solar Inverter', img: IMG.inverter, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 3000, l: 'Hybrid Solar' }, { v: 5000, l: 'Off Grid' }],
    brands: ['Luminous', 'Microtek', 'Exide', 'Livguard', 'V-Guard'],
    features: ['MPPT charger', 'Mobile monitoring', 'Zero grid export', 'IP65 protection', 'Long life cycle'] },
  { category: 'inverters', sub: 'inverter-battery', label: 'Inverter Battery', type: 'Inverter Battery', img: IMG.inverter, energy: '4 Star', warranty: '3 Years',
    caps: [{ v: 150, l: 'Tall Tubular' }, { v: 220, l: 'Flat Plate' }, { v: 100, l: 'Lithium' }],
    brands: ['Luminous', 'Exide', 'Amaron', 'Livguard'],
    features: ['Long backup', 'Fast charging', 'Low maintenance', 'Tubular plates', 'Spill-proof design'] },
  { category: 'inverters', sub: 'ups', label: 'UPS', type: 'UPS', img: IMG.inverter, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 600, l: 'Home UPS' }, { v: 1000, l: 'Office UPS' }],
    brands: ['Microtek', 'Luminous', 'V-Guard'],
    features: ['Zero transfer time', 'Surge protection', 'Smart battery management', 'Compact tower', 'LCD display'] },

  /* ===== 6. Geysers ===== */
  { category: 'geysers', sub: 'instant-geyser', label: 'Instant Geyser', type: 'Instant Water Heater', img: IMG.geyser, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 1, l: '1L' }, { v: 2, l: '2L' }, { v: 3, l: '3L' }, { v: 5, l: '5L' }],
    brands: ['AO Smith', 'Havells', 'Bajaj', 'Racold', 'Crompton', 'V-Guard'],
    features: ['Instant heating', 'Copper element', 'LED indicator', 'Auto cut-off', 'Rust-proof'] },
  { category: 'geysers', sub: 'storage-geyser', label: 'Storage Geyser', type: 'Storage Water Heater', img: IMG.geyser, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 10, l: '10L' }, { v: 15, l: '15L' }, { v: 25, l: '25L' }, { v: 35, l: '35L' }],
    brands: ['AO Smith', 'Havells', 'Bajaj', 'Racold', 'Crompton', 'V-Guard'],
    features: ['PUF insulation', 'Adjustable thermostat', 'Multi-function valve', 'Blue glass-lined tank', 'Anti-siphon'] },
  { category: 'geysers', sub: 'gas-geyser', label: 'Gas Geyser', type: 'Gas Water Heater', img: IMG.geyser, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 6, l: '6L' }],
    brands: ['AO Smith', 'Bajaj', 'Havells', 'V-Guard'],
    features: ['LPG compatibility', 'Auto ignition', 'Copper heat exchanger', 'Safety valve', 'Compact'] },
  { category: 'geysers', sub: 'solar-water-heater', label: 'Solar Water Heater', type: 'Solar Water Heater', img: IMG.geyser, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 200, l: '200L' }],
    brands: ['AO Smith', 'Havells', 'Racold', 'V-Guard'],
    features: ['ETC collectors', 'Vacuum tube tech', 'Zero electricity cost', 'Eco-friendly', 'Free installation'] },
  { category: 'geysers', sub: 'smart-geyser', label: 'Smart Geyser', type: 'Smart Water Heater', img: IMG.geyser, energy: '5 Star', warranty: '5 Years',
    caps: [{ v: 15, l: '15L' }, { v: 25, l: '25L' }],
    brands: ['AO Smith', 'Havells', 'Racold', 'V-Guard'],
    features: ['Wi-Fi enabled', 'Mobile app', 'Voice assistant', 'Auto scheduling', 'Energy tracker'] },

  /* ===== 7. Water Purifiers ===== */
  { category: 'water-purifiers', sub: 'ro-purifier', label: 'RO Water Purifier', type: 'RO Water Purifier', img: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 8, l: 'RO + UV' }, { v: 10, l: 'RO + UV + UF' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'AO Smith', 'Pureit', 'Blue Star'],
    features: ['Multi-stage purification', 'TDS controller', 'Mineral guard', 'UV sterilization', 'UF filter'] },
  { category: 'water-purifiers', sub: 'uv-purifier', label: 'UV Purifier', type: 'UV Water Purifier', img: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 8, l: 'UV' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'Pureit', 'Blue Star'],
    features: ['UV-C LED', 'Chemical-free', 'Municipal water compatible', 'Compact', 'Auto shut-off'] },
  { category: 'water-purifiers', sub: 'uf-purifier', label: 'UF Purifier', type: 'UF Water Purifier', img: IMG.purifier, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 10, l: 'UF' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'Pureit', 'Blue Star'],
    features: ['UF membrane', 'No electricity', 'Sediment filter', 'Taste enhancer', 'Compact'] },
  { category: 'water-purifiers', sub: 'alkaline-copper-purifier', label: 'Alkaline / Copper Purifier', type: 'Alkaline / Copper Water Purifier', img: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 10, l: 'Alkaline' }, { v: 12, l: 'Copper' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'AO Smith', 'Pureit'],
    features: ['Alkaline booster', 'Copper + RO', 'Revitalizer', 'Mineral cartridge', 'pH balance'] },
  { category: 'water-purifiers', sub: 'smart-purifier', label: 'Smart Purifier', type: 'Smart Water Purifier', img: IMG.purifier, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 12, l: 'Smart' }],
    brands: ['Kent', 'Aquaguard', 'AO Smith', 'Pureit'],
    features: ['Wi-Fi enabled', 'App integration', 'Filter change alert', 'TDS display', 'IoT ready'] },
  { category: 'water-purifiers', sub: 'commercial-ro', label: 'Commercial RO Plant', type: 'Commercial RO Plant', img: IMG.purifier, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 250, l: '250 LPH' }],
    brands: ['Kent', 'Aquaguard', 'Livpure', 'AO Smith', 'Blue Star'],
    features: ['High output', 'Multi-stage filtration', 'Stainless body', 'Auto backwash', 'Industrial pump'] },
  { category: 'water-purifiers', sub: 'water-dispenser', label: 'Water Dispenser', type: 'Water Dispenser', img: IMG.purifier, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 5, l: 'Hot & Cold' }, { v: 5, l: 'Bottom Loading' }],
    brands: ['AO Smith', 'Kent', 'Aquaguard', 'Blue Star'],
    features: ['Hot and cold taps', 'Child lock', 'Bottom-loading design', 'Removable drip tray', 'Eco mode'] },

  /* ===== 8. Microwave & Ovens ===== */
  { category: 'microwaves-ovens', sub: 'solo-microwave', label: 'Solo Microwave', type: 'Solo Microwave', img: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 20, l: '20L' }, { v: 23, l: '23L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Panasonic', 'Morphy Richards', 'Bajaj'],
    features: ['Reheat & defrost', '5 power levels', 'Mechanical knob', 'Anti-bacterial cavity', 'Child lock'] },
  { category: 'microwaves-ovens', sub: 'grill-microwave', label: 'Grill Microwave', type: 'Grill Microwave', img: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 25, l: '25L' }, { v: 28, l: '28L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Panasonic', 'Bajaj'],
    features: ['Grill rack', 'Combination cooking', 'Auto cook menus', 'Tactile buttons', 'Stainless interior'] },
  { category: 'microwaves-ovens', sub: 'convection-microwave', label: 'Convection Microwave', type: 'Convection Microwave', img: IMG.microwave, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 28, l: '28L' }, { v: 32, l: '32L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Panasonic', 'Morphy Richards', 'Bajaj'],
    features: ['Convection + grill + microwave', 'Auto cook menus', 'Tact + jog dial', 'Steam clean', 'Multi-stage'] },
  { category: 'microwaves-ovens', sub: 'otg-oven', label: 'OTG Oven', type: 'OTG Oven', img: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 19, l: '19L' }, { v: 30, l: '30L' }, { v: 42, l: '42L' }, { v: 60, l: '60L' }],
    brands: ['Morphy Richards', 'Bajaj', 'Philips', 'Panasonic', 'LG', 'IFB'],
    features: ['Toast, grill, bake', 'Rotisserie', 'Accessories included', 'Temperature control', 'Stay-on timer'] },
  { category: 'microwaves-ovens', sub: 'built-in-oven', label: 'Built-in Oven', type: 'Electric Built-in Oven', img: IMG.microwave, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 60, l: '60L' }],
    brands: ['LG', 'IFB', 'Samsung', 'Bosch'],
    features: ['Convection heating', 'Multi-rack', 'Air-fry ready', 'Self-cleaning', 'Triple-glazed door'] },
  { category: 'microwaves-ovens', sub: 'air-fryer-oven', label: 'Air Fryer Oven', type: 'Air Fryer Oven', img: IMG.microwave, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 25, l: '25L' }],
    brands: ['Philips', 'Morphy Richards', 'Bajaj', 'Havells', 'Prestige'],
    features: ['Rapid air technology', 'Oil-free frying', 'Digital presets', 'Non-stick basket', 'Cool-touch handle'] },

  /* ===== 9. Room Heaters ===== */
  { category: 'room-heaters', sub: 'fan-heater', label: 'Fan Heater', type: 'Fan Heater', img: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Usha', 'Havells', 'Bajaj', 'Orient', 'Morphy Richards', 'Crompton'],
    features: ['Quick heat-up', 'Cool/warm/hot settings', 'Built-in thermostat', 'Tip-over cut-off', 'Portable handle'] },
  { category: 'room-heaters', sub: 'quartz-heater', label: 'Quartz Heater', type: 'Quartz Heater', img: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Usha', 'Bajaj', 'Orient', 'Havells'],
    features: ['Quartz tubes', 'Instant warmth', 'Two heat settings', 'Tip-over switch', 'Safe-touch grille'] },
  { category: 'room-heaters', sub: 'halogen-heater', label: 'Halogen Heater', type: 'Halogen Heater', img: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 3, l: '3-Rod' }],
    brands: ['Usha', 'Bajaj', 'Orient', 'Morphy Richards'],
    features: ['Halogen tubes', 'Three heat settings', 'Oscillating', 'Tip-over safety', 'Silent'] },
  { category: 'room-heaters', sub: 'oil-filled-radiator', label: 'Oil Filled Radiator', type: 'Oil Filled Radiator', img: IMG.heater, energy: '4 Star', warranty: '2 Years',
    caps: [{ v: 9, l: '9 Fin' }, { v: 11, l: '11 Fin' }],
    brands: ['Usha', 'Havells', 'Bajaj', 'Morphy Richards', 'Crompton'],
    features: ['Fin-style design', 'Thermostat control', 'Castor wheels', 'PTC option', 'Silent'] },
  { category: 'room-heaters', sub: 'ptc-heater', label: 'PTC Heater', type: 'PTC Heater', img: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Havells', 'Usha', 'Bajaj', 'Morphy Richards'],
    features: ['PTC ceramic element', 'Fast heating', 'Auto tip-over', 'Overheat protection', 'Compact'] },
  { category: 'room-heaters', sub: 'blower-heater', label: 'Blower Heater', type: 'Blower Heater', img: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Usha', 'Bajaj', 'Havells', 'Crompton'],
    features: ['Powerful blower', 'Forced-air heating', 'Multiple heat settings', 'Overheat safety', 'Sturdy body'] },
  { category: 'room-heaters', sub: 'smart-heater', label: 'Smart Heater', type: 'Smart Heater', img: IMG.heater, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: 'Smart 2000W' }],
    brands: ['Havells', 'Morphy Richards', 'Bajaj', 'Usha'],
    features: ['Wi-Fi enabled', 'App control', 'Voice compatible', 'Eco mode', 'Programmable'] },
  { category: 'room-heaters', sub: 'industrial-heater', label: 'Industrial Heater', type: 'Industrial Heater', img: IMG.heater, energy: '3 Star', warranty: '1 Year',
    caps: [{ v: 5, l: '5kW' }],
    brands: ['Bajaj', 'Usha', 'Morphy Richards'],
    features: ['High CFM', 'Industrial-grade motor', 'Tough body', 'Heavy wheels', 'Continuous duty'] },

  /* ===== 10. Induction Cooktops ===== */
  { category: 'induction-cooktops', sub: 'single-induction', label: 'Single Burner', type: 'Single Burner Induction', img: IMG.induction, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 1200, l: '1200W' }, { v: 1600, l: '1600W' }, { v: 2000, l: '2000W' }],
    brands: ['Philips', 'Prestige', 'Pigeon', 'Havells', 'Usha', 'Bajaj', 'Lifelong'],
    features: ['Push-button controls', 'Indian menu options', 'Auto voltage regulator', 'Crystal glass top', 'Cool-touch'] },
  { category: 'induction-cooktops', sub: 'double-induction', label: 'Double Induction', type: 'Double Induction Cooktop', img: IMG.induction, energy: '5 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W + 2000W' }],
    brands: ['Prestige', 'Pigeon', 'Philips', 'Havells'],
    features: ['Two burners', 'Independent controls', 'Auto timer', 'Feather-touch panel', 'Dual crystal glass'] },
  { category: 'induction-cooktops', sub: 'infrared-cooktop', label: 'Infrared Cooktop', type: 'Infrared Cooktop', img: IMG.induction, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 2, l: '2000W' }],
    brands: ['Bajaj', 'Prestige', 'Pigeon', 'Philips'],
    features: ['Any utensil', 'High-temperature', 'Cool-touch body', 'Variable heat', 'Easy clean'] },
  { category: 'induction-cooktops', sub: 'built-in-induction', label: 'Built-in Induction', type: 'Built-in Induction', img: IMG.induction, energy: '5 Star', warranty: '2 Years',
    caps: [{ v: 4, l: '4 Burner' }],
    brands: ['Faber', 'Elica', 'Bosch', 'Havells'],
    features: ['Built-in design', 'Vitreous ceramic top', 'Auto heat-up', 'Touch slider', 'Child lock'] },
  { category: 'induction-cooktops', sub: 'commercial-induction', label: 'Commercial Induction', type: 'Commercial Induction', img: IMG.induction, energy: '4 Star', warranty: '1 Year',
    caps: [{ v: 3, l: '3000W' }],
    brands: ['Bajaj', 'Prestige', 'Pigeon'],
    features: ['Restaurant-grade', 'Heavy-duty coil', 'Continuous use', 'Stainless body', 'High durability'] },
  { category: 'induction-cooktops', sub: 'smart-induction', label: 'Smart Induction', type: 'Smart Induction', img: IMG.induction, energy: '5 Star', warranty: '1 Year',
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
        const monthly = monthlyPrice(cat.category, cap.v);
        const pricing = {
          monthly,
          quarterly: quarterlyFromMonthly(monthly),
          halfYearly: halfYearlyFromMonthly(monthly),
          yearly: yearlyFromMonthly(monthly),
        };

        let slug = slugifyProduct(brand, `${cap.l} ${cat.label}`);
        if (seenSlugs.has(slug)) slug = `${slug}-${counter}`;
        seenSlugs.add(slug);

        const name = `${brand} ${cap.l} ${cat.label}`;

        out.push({
          id,
          slug,
          name,
          category: cat.category as Product['category'],
          subCategory: cat.sub,
          brand,
          images: [cat.img, IMG.acIndoor],
          description: `${cap.l} ${cat.type} from ${brand} — reliable rental-grade appliance with warranty, free delivery & installation, and zero deposit.`,
          longDescription: `This ${brand} ${cap.l} ${cat.type.toLowerCase()} is curated for SkyCool customers looking for hassle-free monthly rentals. ${cat.features.slice(0, 4).join('; ')}. Every rental includes free delivery, installation, and full warranty coverage during the rental period.`,
          specifications: {
            Brand: brand,
            Type: cat.type,
            Capacity: cap.l,
            'Star Rating': cat.energy,
            Warranty: cat.warranty + ' on product, longer on compressor',
            Color: 'White',
          },
          pricing,
          deposit: 0,
          rating: 4.4 + ((counter * 7) % 6) * 0.1,
          reviewCount: 80 + (counter % 9) * 53,
          inStock: true,
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
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      'Same day service available',
      'All brands serviced',
      '90-day service warranty',
      'Genuine spare parts',
      'Transparent pricing - no hidden charges',
    ],
    duration: '60-90 minutes',
    warranty: '90 days',
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
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      'Up to 3m copper piping included',
      'Heavy-duty wall bracket',
      'Professional installation',
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
    startingPrice: 1499,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      'Genuine refrigerant used',
      'Leak detection included',
      'All gas types (R22, R32, R410A)',
      'Pressure testing',
      '30-day cooling warranty',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 642,
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
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
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
    description: 'Yearly AMC - unlimited service calls + free gas top-up.',
    longDescription:
      'Get complete peace of mind with our Annual Maintenance Contract. Includes 4 scheduled services, unlimited breakdown calls, free gas top-up once a year, and priority service. Best value for AC owners.',
    startingPrice: 2499,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      '4 scheduled services per year',
      'Unlimited breakdown visits',
      'Free gas top-up (1 time)',
      'Priority same-day service',
      'Up to 20% off on parts',
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
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    ],
    features: [
      'All brands and models',
      'Same day service available',
      '90-day service warranty',
      'Genuine spare parts',
      'Visiting charge waived on repair',
    ],
    duration: '60-90 minutes',
    warranty: '90 days',
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
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tst-001',
    name: 'Priya Sharma',
    city: 'Bangalore',
    rating: 5,
    text: 'Rented a 1.5 Ton Split AC from SkyCool for 6 months during my Bangalore stint. Excellent service, no hassle, and the AC was in perfect condition. Pickup was seamless too!',
    product: '1.5 Ton Split AC',
  },
  {
    id: 'tst-002',
    name: 'Rohan Verma',
    city: 'Delhi',
    rating: 5,
    text: 'As a student in Delhi, I can\'t afford to buy an AC. SkyCool\'s monthly rental is a lifesaver. Got my window AC delivered in 4 hours. Highly recommended for students!',
    product: '1 Ton Window AC',
  },
  {
    id: 'tst-003',
    name: 'Mr. Ahmed Khan',
    city: 'Hyderabad',
    rating: 5,
    text: 'I run a small restaurant and needed multiple fridges for a 3-month event. SkyCool offered flexible bulk pricing and the fridges were delivered on time. Professional team!',
    product: '3x Double Door Fridges',
  },
  {
    id: 'tst-004',
    name: 'Anjali Patel',
    city: 'Mumbai',
    rating: 5,
    text: 'AC broke down during peak summer in Mumbai. Called SkyCool for emergency repair - technician arrived within 3 hours and fixed it on the spot. Great service!',
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
    text: 'Rented AC + Fridge combo for my apartment. The combo savings are real - I save almost ₹500/month. Plus, the free installation is a great bonus!',
    product: 'AC + Fridge Combo',
  },
  {
    id: 'tst-007',
    name: 'Arjun Mehta',
    city: 'Kolkata',
    rating: 5,
    text: 'Was skeptical about renting appliances online, but SkyCool made it super easy. WhatsApp ordering is brilliant. The fridge works perfectly for my PG.',
    product: '190L Single Door Fridge',
  },
  {
    id: 'tst-008',
    name: 'Meera Joshi',
    city: 'Ahmedabad',
    rating: 5,
    text: 'My portable AC from SkyCool is amazing for my small studio. No installation needed - just plug and play. Perfect for renters who move frequently.',
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
    question: 'Do you provide free delivery and installation?',
    answer:
      'Yes, we provide free delivery and installation in all metro cities. For AC installations, up to 3 meters of copper piping is included at no extra cost.',
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
  return SERVICES.filter((s) => s.category === category || s.subCategory === category);
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
    const sub = p.subCategory;
    if (!rentSubMap[sub]) rentSubMap[sub] = new Set();
    const key = sub;
    if (!rentProductMap[key]) rentProductMap[key] = new Set();
    rentProductMap[key].add(p.name);
  }

  const serviceSubMap: Record<string, Set<string>> = {};
  const serviceProductMap: Record<string, Set<string>> = {};

  for (const s of SERVICES) {
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