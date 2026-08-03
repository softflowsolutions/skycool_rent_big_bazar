import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductCard } from '@/components/shared/ProductCard';
import { PRODUCTS, RENT_CATEGORY_SLUGS, resolveCategorySlug } from '@/lib/data';
import { capitalize, formatPrice, titleCase } from '@/lib/utils';
import { categorySeo } from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return RENT_CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return categorySeo({
    category: 'rent',
    slug: params.category,
    label: titleCase(params.category),
    description: `Rent ${titleCase(params.category)} in Pune and across India on monthly plans starting at ₹599/month with zero deposit, free delivery & installation.`,
  });
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
    { name: 'Window AC', slug: 'window-ac', description: 'Affordable window ACs', image: '/images/products/windo1.5.png' },
    { name: 'Split AC', slug: 'split-ac', description: 'Premium split ACs', image: '/images/products/split1.5.png' },
    { name: 'Inverter AC', slug: 'inverter-ac', description: 'Energy-efficient inverter', image: '/images/products/split1.5.png' },
    { name: 'Non-Inverter AC', slug: 'non-inverter-ac', description: 'Fixed-speed ACs', image: '/images/products/split1.png' },
    { name: 'Tower AC', slug: 'tower-ac', description: 'Floor-standing tower', image: '/images/products/tower%202%20ton.png' },
    { name: 'Portable AC', slug: 'portable-ac', description: 'No installation needed', image: '/images/products/Portable%20AC%201%20tone.png' },
    { name: 'Cassette AC', slug: 'cassette-ac', description: 'Ceiling cassette', image: '/images/products/tower%202%20ton.png' },
    { name: 'Ductable AC', slug: 'ductable-ac', description: 'Commercial ducted', image: '/images/products/tower%202%20ton.png' },
  ],
  'air-coolers': [
    { name: 'Personal Cooler', slug: 'personal-cooler', description: 'Compact & portable', image: '/images/newproductimages/ac-cooler-appliance.jpeg' },
    { name: 'Desert Cooler', slug: 'desert-cooler', description: 'High air delivery', image: '/images/newproductimages/ac-cooler-appliance.jpeg' },
    { name: 'Tower Cooler', slug: 'tower-cooler', description: 'Slim vertical', image: '/images/newproductimages/ac-cooler-appliance.jpeg' },
    { name: 'Window Cooler', slug: 'window-cooler', description: 'Window-mounted', image: '/images/newproductimages/ac-cooler-appliance.jpeg' },
    { name: 'Commercial Cooler', slug: 'commercial-cooler', description: 'Heavy-duty', image: '/images/newproductimages/ac-cooler-appliance.jpeg' },
    { name: 'Smart Cooler', slug: 'smart-air-cooler', description: 'IoT enabled', image: '/images/newproductimages/ac-cooler-appliance.jpeg' },
  ],
  'washing-machines': [
    { name: 'Front Load', slug: 'front-load-washer', description: 'Fully automatic', image: '/images/newproductimages/washing-machine.jpeg' },
    { name: 'Top Load', slug: 'top-load-washer', description: 'Fully automatic', image: '/images/newproductimages/washing-machine.jpeg' },
    { name: 'Semi Automatic', slug: 'semi-automatic-washer', description: 'Two-tub design', image: '/images/newproductimages/washing-machine.jpeg' },
  ],
  'refrigerators': [
    { name: 'Single Door', slug: 'single-door-fridge', description: 'Compact & direct cool', image: '/images/products/singledoor.png' },
    { name: 'Double Door', slug: 'double-door-fridge', description: 'Frost free family', image: '/images/products/dubbledoor.png' },
    { name: 'Triple Door', slug: 'triple-door-fridge', description: 'Triple-zone cooling', image: '/images/products/3door.png' },
    { name: 'Side by Side', slug: 'side-by-side-fridge', description: 'Premium side-by-side', image: '/images/products/sidebysidedoor.png' },
    { name: 'French Door', slug: 'french-door-fridge', description: 'Premium French door', image: '/images/products/frenchdoor.png' },
    { name: 'Mini Fridge', slug: 'mini-fridge', description: 'Compact mini', image: '/images/products/singledoor.png' },
    { name: 'Deep Freezer', slug: 'deep-freezer', description: 'Horizontal/Vertical', image: '/images/products/dubbledoor.png' },
    { name: 'Commercial', slug: 'commercial-fridge', description: 'Display & Beverage', image: '/images/products/dubbledoor.png' },
  ],
  'inverters': [
    { name: 'Home Inverter', slug: 'home-inverter', description: '600VA-2000VA', image: '/images/newproductimages/inverter-appliance.jpeg' },
    { name: 'Pure Sine Wave', slug: 'pure-sine-wave-inverter', description: 'Sine wave output', image: '/images/newproductimages/inverter-appliance.jpeg' },
    { name: 'Square Wave', slug: 'square-wave-inverter', description: 'Budget inverter', image: '/images/newproductimages/inverter-appliance.jpeg' },
    { name: 'Solar Inverter', slug: 'solar-inverter', description: 'Hybrid & Off-grid', image: '/images/newproductimages/inverter-appliance.jpeg' },
    { name: 'Inverter Battery', slug: 'inverter-battery', description: 'Tubular/Flat/Lithium', image: '/images/newproductimages/inverter-appliance.jpeg' },
    { name: 'UPS', slug: 'ups', description: 'Home & Office UPS', image: '/images/newproductimages/inverter-appliance.jpeg' },
  ],
  'geysers': [
    { name: 'Instant Geyser', slug: 'instant-geyser', description: '1L-5L instant', image: '/images/newproductimages/geysers-appliance.jpeg' },
    { name: 'Storage Geyser', slug: 'storage-geyser', description: '10L-35L storage', image: '/images/newproductimages/geysers-appliance.jpeg' },
    { name: 'Gas Geyser', slug: 'gas-geyser', description: 'LPG-based', image: '/images/newproductimages/geysers-appliance.jpeg' },
    { name: 'Solar Water Heater', slug: 'solar-water-heater', description: '200L solar', image: '/images/newproductimages/geysers-appliance.jpeg' },
    { name: 'Smart Geyser', slug: 'smart-geyser', description: 'IoT enabled', image: '/images/newproductimages/geysers-appliance.jpeg' },
  ],
  'water-purifiers': [
    { name: 'RO Purifier', slug: 'ro-purifier', description: 'RO + UV + UF', image: '/images/newproductimages/waterpurifier-appliance.jpeg' },
    { name: 'UV Purifier', slug: 'uv-purifier', description: 'UV-C sterilization', image: '/images/newproductimages/waterpurifier-appliance.jpeg' },
    { name: 'UF Purifier', slug: 'uf-purifier', description: 'UF membrane', image: '/images/newproductimages/waterpurifier-appliance.jpeg' },
    { name: 'Alkaline / Copper', slug: 'alkaline-copper-purifier', description: 'Mineral enriched', image: '/images/newproductimages/waterpurifier-appliance.jpeg' },
    { name: 'Smart Purifier', slug: 'smart-purifier', description: 'App connected', image: '/images/newproductimages/waterpurifier-appliance.jpeg' },
    { name: 'Commercial RO', slug: 'commercial-ro', description: 'Industrial scale', image: '/images/newproductimages/waterpurifier-appliance.jpeg' },
    { name: 'Water Dispenser', slug: 'water-dispenser', description: 'Hot & Cold', image: '/images/newproductimages/waterpurifier-appliance.jpeg' },
  ],
  'microwaves-ovens': [
    { name: 'Solo Microwave', slug: 'solo-microwave', description: '20-23L solo', image: '/images/newproductimages/microwave-appliance.jpeg' },
    { name: 'Grill Microwave', slug: 'grill-microwave', description: '25-28L grill', image: '/images/newproductimages/microwave-appliance.jpeg' },
    { name: 'Convection', slug: 'convection-microwave', description: '28-32L convection', image: '/images/newproductimages/microwave-appliance.jpeg' },
    { name: 'OTG Oven', slug: 'otg-oven', description: '19-60L OTG', image: '/images/newproductimages/microwave-appliance.jpeg' },
    { name: 'Built-in Oven', slug: 'built-in-oven', description: 'Premium built-in', image: '/images/newproductimages/microwave-appliance.jpeg' },
    { name: 'Air Fryer Oven', slug: 'air-fryer-oven', description: 'Oil-free frying', image: '/images/newproductimages/microwave-appliance.jpeg' },
  ],
  'room-heaters': [
    { name: 'Fan Heater', slug: 'fan-heater', description: 'Quick heat-up', image: '/images/newproductimages/room-heater-appliance.png' },
    { name: 'Quartz Heater', slug: 'quartz-heater', description: 'Instant warmth', image: '/images/newproductimages/room-heater-appliance.png' },
    { name: 'Halogen Heater', slug: 'halogen-heater', description: '3-rod halogen', image: '/images/newproductimages/room-heater-appliance.png' },
    { name: 'Oil Filled', slug: 'oil-filled-radiator', description: 'Fin-style radiator', image: '/images/newproductimages/room-heater-appliance.png' },
    { name: 'PTC Heater', slug: 'ptc-heater', description: 'Ceramic element', image: '/images/newproductimages/room-heater-appliance.png' },
    { name: 'Blower Heater', slug: 'blower-heater', description: 'Forced-air blower', image: '/images/newproductimages/room-heater-appliance.png' },
    { name: 'Smart Heater', slug: 'smart-heater', description: 'Wi-Fi enabled', image: '/images/newproductimages/room-heater-appliance.png' },
    { name: 'Industrial Heater', slug: 'industrial-heater', description: 'Heavy-duty', image: '/images/newproductimages/room-heater-appliance.png' },
  ],
  'induction-cooktops': [
    { name: 'Single Burner', slug: 'single-induction', description: '1200-2000W', image: '/images/newproductimages/induction%20cooktop.jpeg' },
    { name: 'Double Induction', slug: 'double-induction', description: 'Two burners', image: '/images/newproductimages/induction%20cooktop.jpeg' },
    { name: 'Infrared Cooktop', slug: 'infrared-cooktop', description: 'Any utensil', image: '/images/newproductimages/induction%20cooktop.jpeg' },
    { name: 'Built-in Induction', slug: 'built-in-induction', description: '4-burner built-in', image: '/images/newproductimages/induction%20cooktop.jpeg' },
    { name: 'Commercial', slug: 'commercial-induction', description: 'Restaurant grade', image: '/images/newproductimages/induction%20cooktop.jpeg' },
    { name: 'Smart Induction', slug: 'smart-induction', description: 'IoT enabled', image: '/images/newproductimages/induction%20cooktop.jpeg' },
  ],
  combo: [],
  /* ===== Legacy URLs (backwards-compat) ===== */
  ac: [
    { name: 'Window AC', slug: 'window-ac', description: 'Affordable window ACs', image: '/images/products/windo1.5.png' },
    { name: 'Split AC', slug: 'split-ac', description: 'Premium split ACs', image: '/images/products/split1.5.png' },
    { name: 'Inverter AC', slug: 'inverter-ac', description: 'Energy-efficient inverter', image: '/images/products/split1.5.png' },
    { name: 'Portable AC', slug: 'portable-ac', description: 'No installation needed', image: '/images/products/Portable%20AC%201%20tone.png' },
  ],
  fridge: [
    { name: 'Single Door', slug: 'single-door-fridge', description: 'Compact single door', image: '/images/products/singledoor.png' },
    { name: 'Double Door', slug: 'double-door-fridge', description: 'Family size double door', image: '/images/products/dubbledoor.png' },
    { name: 'Side-by-Side', slug: 'side-by-side-fridge', description: 'Premium side-by-side', image: '/images/products/sidebysidedoor.png' },
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
                className="group block overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200 bg-white"
              >
                {/* Background image — clean, no overlay */}
                <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-gray-50">
                  <Image
                    src={sub.image}
                    alt={sub.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Text BELOW the image — dark text on white */}
                <div className="p-3 sm:p-4">
                  <h3 className="font-display font-bold text-sm sm:text-base mb-1 text-gray-900">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                    {sub.description}
                  </p>
                  <div className="text-xs font-semibold text-sky-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
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