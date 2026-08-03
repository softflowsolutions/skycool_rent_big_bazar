/**
 * Homepage Promotional Banners
 * ============================
 *
 * The `<BannerCarousel />` now shows clean product photos with NO
 * overlay text or CTA button — those would be baked into the source
 * image, not rendered by the carousel. Pick images that already
 * look clean on their own (the existing /images/products/ set works).
 *
 * Title/subtitle/cta fields are kept here for future use (e.g. an
 * overlay layer that you can toggle on with one prop change).
 */

export interface Banner {
  /** Unique stable id used as React key. */
  id: string;
  /** Background image URL — should be a clean product photo. */
  image: string;
  /** Headline — not currently rendered. Kept for future overlay toggle. */
  title?: string;
  /** Supporting copy — not currently rendered. */
  subtitle?: string;
  /** CTA button label — not currently rendered. */
  ctaText?: string;
  /** CTA button link — not currently rendered. */
  ctaLink?: string;
  /** Optional badge — not currently rendered. */
  badge?: string;
}

/**
 * Autoplay interval (ms) for the banner carousel.
 */
export const BANNER_AUTOPLAY_MS = 4500;

export const BANNERS: Banner[] = [
  {
    id: 'summer-sale-2026',
    image: '/images/products/split1.5.png',
    title: 'Summer Sale 2026',
    subtitle:
      'Cool your home for less. Get up to 30% off on AC rentals this summer.',
    ctaText: 'Rent Now',
    ctaLink: '/rent',
    badge: 'Limited Time',
  },
  {
    id: 'zero-deposit',
    image: '/images/products/dubbledoor.png',
    title: 'Zero Deposit Rentals',
    subtitle: 'Premium ACs and Fridges with zero security deposit.',
    ctaText: 'Explore Rentals',
    ctaLink: '/rent',
    badge: 'New',
  },
  {
    id: 'ac-service-299',
    image: '/images/products/split1.png',
    title: 'AC Service @ ₹299',
    subtitle: 'Same-day AC repair by certified technicians.',
    ctaText: 'Book Service',
    ctaLink: '/service',
    badge: 'Top Rated',
  },
  {
    id: 'ac-fridge-combos',
    image: '/images/products/singledoor.png',
    title: 'AC + Fridge Combos',
    subtitle: 'Bundle AC and Fridge rentals and save ₹500/month.',
    ctaText: 'View Combos',
    ctaLink: '/rent/combo',
    badge: 'Save Big',
  },
  {
    id: 'amc-plans',
    image: '/images/products/windo1.5.png',
    title: 'Annual Maintenance Plans',
    subtitle: 'Year-round AC care starting at ₹1,999.',
    ctaText: 'See AMC Plans',
    ctaLink: '/service/ac/amc',
    badge: 'Best Value',
  },
];
