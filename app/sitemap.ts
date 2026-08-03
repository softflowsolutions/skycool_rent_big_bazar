import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import {
  PRODUCTS,
  SERVICES,
  RENT_CATEGORY_SLUGS,
  resolveServiceCategorySlug,
} from '@/lib/data';

/**
 * Fully dynamic sitemap — covers home, section roots, every rent
 * category + sub-category + product + service and every service
 * category + sub-category + service, plus static legal pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  const now = new Date();

  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/rent`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/service`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const rentCategories: MetadataRoute.Sitemap = RENT_CATEGORY_SLUGS.map((cat) => ({
    url: `${base}/rent/${cat}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dedupe (category, subCategory) pairs — products share sub-categories.
  const rentSubPairs = new Set<string>();
  PRODUCTS.forEach((p) => {
    if (p.category && p.subCategory) {
      rentSubPairs.add(`${p.category}::${p.subCategory}`);
    }
  });
  const rentSubcategories: MetadataRoute.Sitemap = Array.from(rentSubPairs).map((key) => {
    const [category, subcategory] = key.split('::');
    return {
      url: `${base}/rent/${category}/${subcategory}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  const productPaths: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${base}/rent/${p.category}/${p.subCategory}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // Dedupe service (category, subCategory) pairs after resolving legacy aliases.
  const serviceCatPairs = new Set<string>();
  SERVICES.forEach((s) => {
    if (s.category && s.subCategory) {
      const resolved = resolveServiceCategorySlug(s.category);
      serviceCatPairs.add(`${resolved}::${s.subCategory}`);
    }
  });
  const serviceSubcategories: MetadataRoute.Sitemap = Array.from(serviceCatPairs).map((pair) => {
    const [category, subcategory] = pair.split('::');
    return {
      url: `${base}/service/${category}/${subcategory}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  // Dedupe resolved service categories.
  const serviceCategories = new Set<string>();
  SERVICES.forEach((s) => {
    if (s.category) serviceCategories.add(resolveServiceCategorySlug(s.category));
  });
  const serviceCategoryPaths: MetadataRoute.Sitemap = Array.from(serviceCategories).map(
    (cat) => ({
      url: `${base}/service/${cat}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  );

  const servicePaths: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/service/${resolveServiceCategorySlug(s.category)}/${s.subCategory}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    ...staticPaths,
    ...rentCategories,
    ...rentSubcategories,
    ...productPaths,
    ...serviceCategoryPaths,
    ...serviceSubcategories,
    ...servicePaths,
  ];
}
