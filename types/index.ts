/**
 * A bookable rental plan — a duration and the total price for that whole
 * duration. `days` is the duration length (1 = single day, 30 = month,
 * 90 = quarter, 120 = 4 months, 365 = year). Products sourced from the
 * client price list carry exactly the plans in that list (including
 * day-rate and event plans); everything else falls back to the standard
 * 1 / 3 / 6 / 12 month curve.
 */
export interface RentalPlan {
  days: number;
  price: number;
  label: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  brand: string;
  images: string[];
  description: string;
  longDescription: string;
  specifications: Record<string, string>;
  pricing: {
    monthly: number;
    quarterly: number;
    halfYearly: number;
    yearly: number;
  };
  /** Bookable plans — the source of truth for the pricing UI. */
  plans: RentalPlan[];
  deposit: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  comingSoon?: boolean;
  pricingNote?: string;
  transportationNote?: string;
  dayPrice?: number;
  dayPriceUnit?: string;
  tags: string[];
  features: string[];
  energyRating: string;
  warranty: string;
  capacity: string;
  type: string;
}

/**
 * Top-level rent category slug. The Home Appliances brief lists 10 main
 * categories plus a `combo` placeholder; legacy `'ac' | 'fridge'` are kept
 * so the older `/rent/ac` and `/rent/fridge` URLs continue to render.
 *
 * `Service.category` deliberately does NOT use this union — services are
 * only ever grouped under `'ac'` (cool/heat) or `'fridge'` (cold storage).
 */
export type ProductCategory =
  | 'air-conditioners'
  | 'air-coolers'
  | 'washing-machines'
  | 'refrigerators'
  | 'inverters'
  | 'geysers'
  | 'water-purifiers'
  | 'microwaves-ovens'
  | 'room-heaters'
  | 'induction-cooktops'
  | 'combo'
  | 'ac'
  | 'fridge';

/**
 * Slugs accepted on `/service/[category]`. The new appliance URLs use the
 * full Home Appliances slugs (`air-conditioners`, `refrigerators`, etc.).
 * Legacy `'ac'` and `'fridge'` are kept so older links keep resolving.
 */
export type ServiceCategorySlug =
  | 'air-conditioners'
  | 'air-coolers'
  | 'washing-machines'
  | 'refrigerators'
  | 'inverters'
  | 'geysers'
  | 'water-purifiers'
  | 'microwaves-ovens'
  | 'room-heaters'
  | 'induction-cooktops'
  | 'ac'
  | 'fridge';

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategorySlug;
  subCategory: string;
  description: string;
  longDescription: string;
  startingPrice: number;
  comingSoon?: boolean;
  images: string[];
  features: string[];
  duration: string;
  warranty: string;
  rating: number;
  reviewCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  avatar?: string;
  product?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'rental' | 'service' | 'payments' | 'general';
}

export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  address: string;
  category: 'rent' | 'service';
  subCategory: string;
  parentCategory?: string;
  product: string;
  quantity?: number;
  duration?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  city?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent: string | null;
  icon: string;
  description?: string;
  image?: string;
}