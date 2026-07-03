/**
 * Homepage Promotional Banners
 * ============================
 *
 * Edit this file to control which promotional banners appear in the
 * homepage `<BannerCarousel />` component.
 *
 * Each banner renders full-width with a background image, a plain dark
 * overlay for legibility, an optional badge, a title, subtitle and
 * a CTA link.
 *
 * HOW TO EDIT
 * -----------
 * 1. Add, remove or reorder entries in `BANNERS`. The order here
 *    determines rotation order in the carousel.
 * 2. `image` should be an absolute URL (we currently use Unsplash photos
 *    for consistency with the rest of the site). Use the `?w=1920&q=80`
 *    query string for optimal Next.js image optimization.
 * 3. `ctaText` is rendered as the call-to-action button label.
 *    `ctaLink` should be an internal Next.js route starting with `/`.
 * 4. `badge` is optional — leave it out (or set to undefined) to hide it.
 * 5. The overlay is a fixed `bg-black/40` for legibility — kept solid
 *    per project design (no gradient effects).
 *
 * Tips
 * ----
 * - Keep titles punchy (under ~40 chars) so they don't wrap awkwardly
 *   on mobile.
 * - Subtitles work best at ~80–120 chars.
 * - Aim for 4–6 banners total; more can feel spammy and slows the
 *   network on first load.
 */

export interface Banner {
  /** Unique stable id used as React key. */
  id: string;
  /** Background image URL. */
  image: string;
  /** Headline. */
  title: string;
  /** Supporting copy below the title. */
  subtitle: string;
  /** CTA button label. */
  ctaText: string;
  /** CTA button link (internal route like `/rent`). */
  ctaLink: string;
  /** Optional badge above the title (e.g. "Limited Time"). */
  badge?: string;
  /** Optional overlay — kept as plain dark for solid colors only. */
  gradient?: string;
}

/**
 * Autoplay interval (ms) for the banner carousel.
 * 4.5s gives readers enough time to absorb each slide without feeling slow.
 */
export const BANNER_AUTOPLAY_MS = 4500;

export const BANNERS: Banner[] = [
  {
    id: 'summer-sale-2026',
    image:
      'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=1920&q=80',
    title: 'Summer Sale 2026',
    subtitle:
      'Cool your home for less. Get up to 30% off on AC rentals this summer. Free delivery & installation.',
    ctaText: 'Rent Now',
    ctaLink: '/rent',
    badge: 'Limited Time',
    gradient: 'bg-black/40',
  },
  {
    id: 'zero-deposit',
    image:
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=1920&q=80',
    title: 'Zero Deposit Rentals',
    subtitle:
      'Premium ACs and Fridges with zero security deposit. Quality assured, ready to use — just plug and play.',
    ctaText: 'Explore Rentals',
    ctaLink: '/rent',
    badge: 'New',
    gradient: 'bg-black/40',
  },
  {
    id: 'ac-service-299',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
    title: 'AC Service @ ₹299',
    subtitle:
      'Same-day AC repair by certified technicians. Deep cleaning, gas refill and full inspection — all in one visit.',
    ctaText: 'Book Service',
    ctaLink: '/service',
    badge: 'Top Rated',
    gradient: 'bg-black/40',
  },
  {
    id: 'ac-fridge-combos',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
    title: 'AC + Fridge Combos',
    subtitle:
      'Bundle AC and Fridge rentals and save ₹500/month on your monthly bill. Limited combo offers this month.',
    ctaText: 'View Combos',
    ctaLink: '/rent/combo',
    badge: 'Save Big',
    gradient: 'bg-black/40',
  },
  {
    id: 'amc-plans',
    image:
      'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=1920&q=80',
    title: 'Annual Maintenance Plans',
    subtitle:
      'Year-round AC care starting at ₹1,999. Free visits, priority support and zero labour charges.',
    ctaText: 'See AMC Plans',
    ctaLink: '/service/ac/amc',
    badge: 'Best Value',
    gradient: 'bg-black/40',
  },
];
