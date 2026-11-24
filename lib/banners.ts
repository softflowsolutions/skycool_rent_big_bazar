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
    image: '/images/product_images_v2/AC/1.5%20ton%20split.png',
    title: 'Summer Sale 2026',
    subtitle:
      'Cool your home for less. Get up to 30% off on AC rentals this summer.',
    ctaText: 'Rent Now',
    ctaLink: '/rent/air-conditioners',
    badge: 'Limited Time',
  },
  {
    id: 'cooler-deals',
    image: '/images/product_images_v2/cooler/80L.png',
    title: 'Desert & Jumbo Coolers',
    subtitle: 'Air Coolers from 20L to 120L on daily and monthly rental plans.',
    ctaText: 'Explore Coolers',
    ctaLink: '/rent/air-coolers',
    badge: 'New Rates',
  },
  {
    id: 'ac-service-299',
    image: '/images/newproductimages/ac-repair.jpeg',
    title: 'AC Service @ ₹299',
    subtitle: 'Same-day AC repair by certified technicians.',
    ctaText: 'Book Service',
    ctaLink: '/service/ac',
    badge: 'Top Rated',
  },
  {
    id: 'window-ac-plans',
    image: '/images/product_images_v2/AC/1.5%20Ton%20windo.png',
    title: 'Window AC Rentals',
    subtitle: '1 Ton, 1.5 Ton and 2 Ton Window ACs with zero deposit.',
    ctaText: 'View Window ACs',
    ctaLink: '/rent/air-conditioners/window-ac',
    badge: 'Save Big',
  },
  {
    id: 'amc-plans',
    image: '/images/newproductimages/ac-annual-maintainace.jpeg',
    title: 'Annual Maintenance Plans',
    subtitle: 'Year-round AC care starting at ₹4,750.',
    ctaText: 'See AMC Plans',
    ctaLink: '/service/ac/amc',
    badge: 'Best Value',
  },
];
