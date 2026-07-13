import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductCard } from '@/components/shared/ProductCard';
import { PRODUCTS, RENT_CATEGORY_SLUGS, resolveCategorySlug } from '@/lib/data';
import { capitalize, formatPrice, titleCase } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return RENT_CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Rent ${titleCase(params.category)} in India | SkyCool Solutions`,
    description: `Browse ${titleCase(params.category)} rentals starting at ₹599/month. Free delivery & installation.`,
  };
}

/**
 * Sub-category cards shown above the product grid on each top-level rent
 * page. Each key corresponds to a slug in `RENT_CATEGORY_SLUGS`.
 *
 * Image source: Unsplash (already whitelisted in next.config.js).
 * Layout: Full-bleed image background with white text overlay.
 */
const subCategoryMap: Record<string, Array<{ name: string; slug: string; description: string; image: string }>> = {
  /* ===== 10 main PDF categories ===== */
  'air-conditioners': [
    { name: 'Window AC', slug: 'window-ac', description: 'Affordable window ACs', image: 'https://images.unsplash.com/photo-1631545806609-cad74ce4ad8b?w=600&h=400&fit=crop' },
    { name: 'Split AC', slug: 'split-ac', description: 'Premium split ACs', image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=600&h=400&fit=crop' },
    { name: 'Inverter AC', slug: 'inverter-ac', description: 'Energy-efficient inverter', image: 'https://images.unsplash.com/photo-1614633836183-0d77f95bbefa?w=600&h=400&fit=crop' },
    { name: 'Non-Inverter AC', slug: 'non-inverter-ac', description: 'Fixed-speed ACs', image: 'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&h=400&fit=crop' },
    { name: 'Tower AC', slug: 'tower-ac', description: 'Floor-standing tower', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop' },
    { name: 'Portable AC', slug: 'portable-ac', description: 'No installation needed', image: 'https://images.unsplash.com/photo-1614633836183-0d77f95bbefa?w=600&h=400&fit=crop' },
    { name: 'Cassette AC', slug: 'cassette-ac', description: 'Ceiling cassette', image: 'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&h=400&fit=crop' },
    { name: 'Ductable AC', slug: 'ductable-ac', description: 'Commercial ducted', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop' },
  ],
  'air-coolers': [
    { name: 'Personal Cooler', slug: 'personal-cooler', description: 'Compact & portable', image: 'https://images.unsplash.com/photo-1628744876497-eb3049be9d50?w=600&h=400&fit=crop' },
    { name: 'Desert Cooler', slug: 'desert-cooler', description: 'High air delivery', image: 'https://images.unsplash.com/photo-1631545806609-cad74ce4ad8b?w=600&h=400&fit=crop' },
    { name: 'Tower Cooler', slug: 'tower-cooler', description: 'Slim vertical', image: 'https://images.unsplash.com/photo-1628744876497-eb3049be9d50?w=600&h=400&fit=crop' },
    { name: 'Window Cooler', slug: 'window-cooler', description: 'Window-mounted', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop' },
    { name: 'Commercial Cooler', slug: 'commercial-cooler', description: 'Heavy-duty', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop' },
    { name: 'Smart Cooler', slug: 'smart-air-cooler', description: 'IoT enabled', image: 'https://images.unsplash.com/photo-1614633836183-0d77f95bbefa?w=600&h=400&fit=crop' },
  ],
  'washing-machines': [
    { name: 'Front Load', slug: 'front-load-washer', description: 'Fully automatic', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&h=400&fit=crop' },
    { name: 'Top Load', slug: 'top-load-washer', description: 'Fully automatic', image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&h=400&fit=crop' },
    { name: 'Semi Automatic', slug: 'semi-automatic-washer', description: 'Two-tub design', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop' },
  ],
  'refrigerators': [
    { name: 'Single Door', slug: 'single-door-fridge', description: 'Compact & direct cool', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=400&fit=crop' },
    { name: 'Double Door', slug: 'double-door-fridge', description: 'Frost free family', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop' },
    { name: 'Triple Door', slug: 'triple-door-fridge', description: 'Triple-zone cooling', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop' },
    { name: 'Side by Side', slug: 'side-by-side-fridge', description: 'Premium side-by-side', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=400&fit=crop' },
    { name: 'French Door', slug: 'french-door-fridge', description: 'Premium French door', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop' },
    { name: 'Mini Fridge', slug: 'mini-fridge', description: 'Compact mini', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop' },
    { name: 'Deep Freezer', slug: 'deep-freezer', description: 'Horizontal/Vertical', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop' },
    { name: 'Commercial', slug: 'commercial-fridge', description: 'Display & Beverage', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop' },
  ],
  'inverters': [
    { name: 'Home Inverter', slug: 'home-inverter', description: '600VA-2000VA', image: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?w=600&h=400&fit=crop' },
    { name: 'Pure Sine Wave', slug: 'pure-sine-wave-inverter', description: 'Sine wave output', image: 'https://images.unsplash.com/photo-1559302995-f1d7e5c1d4ce?w=600&h=400&fit=crop' },
    { name: 'Square Wave', slug: 'square-wave-inverter', description: 'Budget inverter', image: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?w=600&h=400&fit=crop' },
    { name: 'Solar Inverter', slug: 'solar-inverter', description: 'Hybrid & Off-grid', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop' },
    { name: 'Inverter Battery', slug: 'inverter-battery', description: 'Tubular/Flat/Lithium', image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop' },
    { name: 'UPS', slug: 'ups', description: 'Home & Office UPS', image: 'https://images.unsplash.com/photo-1559302995-f1d7e5c1d4ce?w=600&h=400&fit=crop' },
  ],
  'geysers': [
    { name: 'Instant Geyser', slug: 'instant-geyser', description: '1L-5L instant', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
    { name: 'Storage Geyser', slug: 'storage-geyser', description: '10L-35L storage', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop' },
    { name: 'Gas Geyser', slug: 'gas-geyser', description: 'LPG-based', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
    { name: 'Solar Water Heater', slug: 'solar-water-heater', description: '200L solar', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop' },
    { name: 'Smart Geyser', slug: 'smart-geyser', description: 'IoT enabled', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop' },
  ],
  'water-purifiers': [
    { name: 'RO Purifier', slug: 'ro-purifier', description: 'RO + UV + UF', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop' },
    { name: 'UV Purifier', slug: 'uv-purifier', description: 'UV-C sterilization', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop' },
    { name: 'UF Purifier', slug: 'uf-purifier', description: 'UF membrane', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop' },
    { name: 'Alkaline / Copper', slug: 'alkaline-copper-purifier', description: 'Mineral enriched', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop' },
    { name: 'Smart Purifier', slug: 'smart-purifier', description: 'App connected', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop' },
    { name: 'Commercial RO', slug: 'commercial-ro', description: 'Industrial scale', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop' },
    { name: 'Water Dispenser', slug: 'water-dispenser', description: 'Hot & Cold', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop' },
  ],
  'microwaves-ovens': [
    { name: 'Solo Microwave', slug: 'solo-microwave', description: '20-23L solo', image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&h=400&fit=crop' },
    { name: 'Grill Microwave', slug: 'grill-microwave', description: '25-28L grill', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop' },
    { name: 'Convection', slug: 'convection-microwave', description: '28-32L convection', image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&h=400&fit=crop' },
    { name: 'OTG Oven', slug: 'otg-oven', description: '19-60L OTG', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop' },
    { name: 'Built-in Oven', slug: 'built-in-oven', description: 'Premium built-in', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop' },
    { name: 'Air Fryer Oven', slug: 'air-fryer-oven', description: 'Oil-free frying', image: 'https://images.unsplash.com/photo-1626509653291-18d9a934b9db?w=600&h=400&fit=crop' },
  ],
  'room-heaters': [
    { name: 'Fan Heater', slug: 'fan-heater', description: 'Quick heat-up', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
    { name: 'Quartz Heater', slug: 'quartz-heater', description: 'Instant warmth', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
    { name: 'Halogen Heater', slug: 'halogen-heater', description: '3-rod halogen', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
    { name: 'Oil Filled', slug: 'oil-filled-radiator', description: 'Fin-style radiator', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
    { name: 'PTC Heater', slug: 'ptc-heater', description: 'Ceramic element', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
    { name: 'Blower Heater', slug: 'blower-heater', description: 'Forced-air blower', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
    { name: 'Smart Heater', slug: 'smart-heater', description: 'Wi-Fi enabled', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
    { name: 'Industrial Heater', slug: 'industrial-heater', description: 'Heavy-duty', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
  ],
  'induction-cooktops': [
    { name: 'Single Burner', slug: 'single-induction', description: '1200-2000W', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop' },
    { name: 'Double Induction', slug: 'double-induction', description: 'Two burners', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop' },
    { name: 'Infrared Cooktop', slug: 'infrared-cooktop', description: 'Any utensil', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop' },
    { name: 'Built-in Induction', slug: 'built-in-induction', description: '4-burner built-in', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop' },
    { name: 'Commercial', slug: 'commercial-induction', description: 'Restaurant grade', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop' },
    { name: 'Smart Induction', slug: 'smart-induction', description: 'IoT enabled', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop' },
  ],
  combo: [],
  /* ===== Legacy URLs (backwards-compat) ===== */
  ac: [
    { name: 'Window AC', slug: 'window-ac', description: 'Affordable window ACs', image: 'https://images.unsplash.com/photo-1631545806609-cad74ce4ad8b?w=600&h=400&fit=crop' },
    { name: 'Split AC', slug: 'split-ac', description: 'Premium split ACs', image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=600&h=400&fit=crop' },
    { name: 'Inverter AC', slug: 'inverter-ac', description: 'Energy-efficient inverter', image: 'https://images.unsplash.com/photo-1614633836183-0d77f95bbefa?w=600&h=400&fit=crop' },
    { name: 'Portable AC', slug: 'portable-ac', description: 'No installation needed', image: 'https://images.unsplash.com/photo-1614633836183-0d77f95bbefa?w=600&h=400&fit=crop' },
  ],
  fridge: [
    { name: 'Single Door', slug: 'single-door-fridge', description: 'Compact single door', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=400&fit=crop' },
    { name: 'Double Door', slug: 'double-door-fridge', description: 'Family size double door', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop' },
    { name: 'Side-by-Side', slug: 'side-by-side-fridge', description: 'Premium side-by-side', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=400&fit=crop' },
  ],
};

export default function CategoryPage({ params }: PageProps) {
  const category = params.category;
  // Legacy URLs like `/rent/ac` arrive with category === 'ac'. Translate
  // to the canonical product category before filtering, so the existing
  // URL structure keeps working without redirects.
  const canonicalCategory = resolveCategorySlug(category);

  const products = PRODUCTS.filter(
    (p) => p.category === canonicalCategory || p.subCategory === canonicalCategory
  );

  if (products.length === 0 && !subCategoryMap[category]) {
    notFound();
  }

  const subCategories = subCategoryMap[category] || [];
  const minPrice = products.length > 0 ? Math.min(...products.map((p) => p.pricing.monthly)) : 0;
  const maxPrice = products.length > 0 ? Math.max(...products.map((p) => p.pricing.monthly)) : 0;
  const friendlyName = titleCase(canonicalCategory);

  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Rent', href: '/rent' }, { label: friendlyName }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Rent {friendlyName}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
              {products.length} products available • Starting from{' '}
              <span className="font-bold text-sky-600">{formatPrice(minPrice)}/month</span>
            </p>
          </div>
        </div>
      </section>

      {subCategories.length > 0 && (
        <section className="container-app py-8">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 mb-5">
            Shop by Type
          </h2>
          <div className={`grid gap-3 sm:gap-4 ${
            subCategories.length === 2 ? 'grid-cols-2' :
            subCategories.length === 3 ? 'grid-cols-2 sm:grid-cols-3' :
            'grid-cols-2 sm:grid-cols-4'
          }`}>
            {subCategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/rent/${category}/${sub.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200 aspect-[4/3] sm:aspect-[5/4]"
              >
                {/* Background image — full bleed */}
                <Image
                  src={sub.image}
                  alt={sub.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/85 transition-all duration-300" />
                {/* Text overlay */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                  <h3 className="font-display font-bold text-base sm:text-lg mb-1 drop-shadow-md">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-white/90 drop-shadow-sm mb-2 line-clamp-1">
                    {sub.description}
                  </p>
                  <div className="text-xs font-semibold text-white inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Browse <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container-app section-padding">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900">
            All {friendlyName} Rentals
          </h2>
          <span className="text-sm text-gray-500">{products.length} products</span>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl">
            <p className="text-gray-500">No products in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}