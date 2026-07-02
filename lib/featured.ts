/**
 * Featured Product / Service Lists
 * =================================
 *
 * Controls the curated sets of products and services shown on the
 * homepage. We keep these explicit (vs. just "top rated by review count")
 * for a few reasons:
 *
 *   1. We want a specific marketing mix on the homepage — e.g. always
 *      show a "hero" inverter split alongside a couple of value options.
 *   2. We want a stable ordering that doesn't jiggle every time a new
 *      review comes in.
 *   3. We want to be able to A/B test specific arrangements without
 *      touching the database.
 *
 * HOW TO EDIT
 * -----------
 * - To re-order the homepage, just reorder the IDs in
 *   `POPULAR_PRODUCT_IDS` / `POPULAR_SERVICE_IDS`. Unknown IDs are
 *   silently skipped by the getters.
 * - To add a "featured price" override (e.g. drop the displayed monthly
 *   price for a promotion), add `ac-003: 1099` to `FEATURED_PRICES`.
 *   Anything not in this map falls back to `product.pricing.monthly`.
 *
 * The getters gracefully **backfill** when the explicit list is shorter
 * than the limit: missing slots are filled with the next-highest-rated
 * items from `PRODUCTS` / `SERVICES`. So feel free to keep the list
 * short if you only want to pin a few "must-show" entries.
 */

import type { Product, Service } from '@/types';
import { PRODUCTS, SERVICES } from './data';

/** Hard cap on popular products on the homepage. */
export const POPULAR_PRODUCT_LIMIT = 8;

/** Hard cap on popular services on the homepage. */
export const POPULAR_SERVICE_LIMIT = 6;

/**
 * Hand-curated product IDs in display order. Anything missing from
 * PRODUCTS (e.g. legacy IDs) is skipped by getFeaturedProducts().
 */
export const POPULAR_PRODUCT_IDS: string[] = [
  'ac-003',
  'ac-004',
  'fr-002',
  'fr-003',
  'ac-005',
  'fr-004',
  'ac-002',
  'fr-005',
];

/**
 * Hand-curated service IDs in display order.
 */
export const POPULAR_SERVICE_IDS: string[] = [
  'svc-001',
  'svc-002',
  'svc-004',
  'svc-006',
  'svc-003',
  'svc-008',
];

/**
 * Optional per-product price overrides for featured placements.
 * Empty by default — add entries like `ac-003: 1099` when running a promo.
 */
export const FEATURED_PRICES: Record<string, number> = {};

/**
 * Returns the curated list of featured products, backfilling with
 * top-rated items if the explicit list has fewer than `limit`.
 */
export function getFeaturedProducts(
  limit: number = POPULAR_PRODUCT_LIMIT
): Product[] {
  const byId = new Map(PRODUCTS.map((p) => [p.id, p] as const));
  const picked: Product[] = [];
  const pickedIds = new Set<string>();

  // Phase 1: honor the explicit order from POPULAR_PRODUCT_IDS.
  for (const id of POPULAR_PRODUCT_IDS) {
    if (picked.length >= limit) break;
    const product = byId.get(id);
    if (product && !pickedIds.has(product.id)) {
      picked.push(product);
      pickedIds.add(product.id);
    }
  }

  // Phase 2: fill the rest with top-rated items we haven't shown yet.
  if (picked.length < limit) {
    const sorted = [...PRODUCTS].sort(
      (a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount
    );
    for (const product of sorted) {
      if (picked.length >= limit) break;
      if (!pickedIds.has(product.id)) {
        picked.push(product);
        pickedIds.add(product.id);
      }
    }
  }

  return picked;
}

/**
 * Returns the curated list of featured services, backfilling with
 * top-rated services if the explicit list has fewer than `limit`.
 */
export function getFeaturedServices(
  limit: number = POPULAR_SERVICE_LIMIT
): Service[] {
  const byId = new Map(SERVICES.map((s) => [s.id, s] as const));
  const picked: Service[] = [];
  const pickedIds = new Set<string>();

  for (const id of POPULAR_SERVICE_IDS) {
    if (picked.length >= limit) break;
    const service = byId.get(id);
    if (service && !pickedIds.has(service.id)) {
      picked.push(service);
      pickedIds.add(service.id);
    }
  }

  if (picked.length < limit) {
    const sorted = [...SERVICES].sort(
      (a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount
    );
    for (const service of sorted) {
      if (picked.length >= limit) break;
      if (!pickedIds.has(service.id)) {
        picked.push(service);
        pickedIds.add(service.id);
      }
    }
  }

  return picked;
}

/**
 * Returns the featured monthly price for a product, falling back to the
 * product's regular monthly price. Safe to call with any product —
 * missing IDs return the regular price.
 */
export function getFeaturedPrice(product: Product): number {
  const override = FEATURED_PRICES[product.id];
  if (typeof override === 'number' && !Number.isNaN(override)) {
    return override;
  }
  return product.pricing.monthly;
}
