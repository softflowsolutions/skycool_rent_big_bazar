/**
 * Gallery image registry — single source of truth for the /gallery page.
 *
 * Drop the actual image files into `public/images/gallery/` and add the
 * entry here. The page renders every entry in array order.
 *
 * Field guide:
 *   src        — path under `/public` (leading slash, URL-safe filename).
 *   alt        — short, descriptive text for screen readers + SEO.
 *   category   — group shown as a chip on the card and used for filtering.
 *   title      — optional overlay title (omit to use alt text).
 *
 * Aspect: keep each image 4:3 (1200×900 JPEG, ≤ 200 KB) for a uniform grid.
 */
export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Warehouse' | 'Products' | 'Team' | 'Service' | 'Events';
  title?: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  // ===== Placeholders — replace these with real warehouse & product photos =====
  {
    src: '/images/gallery/warehouse-1.jpg',
    alt: 'Rent BigBazar warehouse — AC units stacked and ready for dispatch',
    category: 'Warehouse',
    title: 'Main Warehouse — Pune',
  },
  {
    src: '/images/gallery/warehouse-2.jpg',
    alt: 'Inventory of refrigerators and washing machines at the warehouse',
    category: 'Warehouse',
    title: 'Appliance Inventory',
  },
  {
    src: '/images/gallery/products-1.jpg',
    alt: 'Range of split ACs available on rent',
    category: 'Products',
    title: 'Split AC Range',
  },
  {
    src: '/images/gallery/products-2.jpg',
    alt: 'Refrigerators and washing machines on display',
    category: 'Products',
    title: 'Home Appliances',
  },
  {
    src: '/images/gallery/team-1.jpg',
    alt: 'Rent BigBazar service team on the field',
    category: 'Team',
    title: 'Our Service Team',
  },
  {
    src: '/images/gallery/service-1.jpg',
    alt: 'Technician performing AC installation at a customer site',
    category: 'Service',
    title: 'On-site AC Installation',
  },
];

/** Unique categories for filter chips — derived from GALLERY_IMAGES. */
export const GALLERY_CATEGORIES: GalleryImage['category'][] = Array.from(
  new Set(GALLERY_IMAGES.map((img) => img.category))
);
