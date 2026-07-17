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
    { name: 'Personal Cooler', slug: 'personal-cooler', description: 'Compact & portable', image: '/images/products/split1.5.png' },
    { name: 'Desert Cooler', slug: 'desert-cooler', description: 'High air delivery', image: '/images/products/split1.5.png' },
    { name: 'Tower Cooler', slug: 'tower-cooler', description: 'Slim vertical', image: '/images/products/split1.5.png' },
    { name: 'Window Cooler', slug: 'window-cooler', description: 'Window-mounted', image: '/images/products/split1.5.png' },
    { name: 'Commercial Cooler', slug: 'commercial-cooler', description: 'Heavy-duty', image: '/images/products/split1.5.png' },
    { name: 'Smart Cooler', slug: 'smart-air-cooler', description: 'IoT enabled', image: '/images/products/split1.5.png' },
  ],
  'washing-machines': [
    { name: 'Front Load', slug: 'front-load-washer', description: 'Fully automatic', image: '/images/products/front%20load%20washingmachine.png' },
    { name: 'Top Load', slug: 'top-load-washer', description: 'Fully automatic', image: '/images/products/topload%20washing%20machine.png' },
    { name: 'Semi Automatic', slug: 'semi-automatic-washer', description: 'Two-tub design', image: '/images/products/semi%20automatic%20washing%20machine.png' },
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
    { name: 'Home Inverter', slug: 'home-inverter', description: '600VA-2000VA', image: '/images/products/homeinvetor.png' },
    { name: 'Pure Sine Wave', slug: 'pure-sine-wave-inverter', description: 'Sine wave output', image: '/images/products/homeinvetor.png' },
    { name: 'Square Wave', slug: 'square-wave-inverter', description: 'Budget inverter', image: '/images/products/homeinvetor.png' },
    { name: 'Solar Inverter', slug: 'solar-inverter', description: 'Hybrid & Off-grid', image: '/images/products/homeinvetor.png' },
    { name: 'Inverter Battery', slug: 'inverter-battery', description: 'Tubular/Flat/Lithium', image: '/images/products/homeinvetor.png' },
    { name: 'UPS', slug: 'ups', description: 'Home & Office UPS', image: '/images/products/portableinvertor.png' },
  ],
  'geysers': [
    { name: 'Instant Geyser', slug: 'instant-geyser', description: '1L-5L instant', image: '/images/products/instantgyzer.png' },
    { name: 'Storage Geyser', slug: 'storage-geyser', description: '10L-35L storage', image: '/images/products/storagegyzer.png' },
    { name: 'Gas Geyser', slug: 'gas-geyser', description: 'LPG-based', image: '/images/products/instantgyzer.png' },
    { name: 'Solar Water Heater', slug: 'solar-water-heater', description: '200L solar', image: '/images/products/storagegyzer.png' },
    { name: 'Smart Geyser', slug: 'smart-geyser', description: 'IoT enabled', image: '/images/products/storagegyzer.png' },
  ],
  'water-purifiers': [
    { name: 'RO Purifier', slug: 'ro-purifier', description: 'RO + UV + UF', image: '/images/products/waterpurifier.png' },
    { name: 'UV Purifier', slug: 'uv-purifier', description: 'UV-C sterilization', image: '/images/products/waterpurifier.png' },
    { name: 'UF Purifier', slug: 'uf-purifier', description: 'UF membrane', image: '/images/products/waterpurifier.png' },
    { name: 'Alkaline / Copper', slug: 'alkaline-copper-purifier', description: 'Mineral enriched', image: '/images/products/waterpurifier.png' },
    { name: 'Smart Purifier', slug: 'smart-purifier', description: 'App connected', image: '/images/products/waterpurifier.png' },
    { name: 'Commercial RO', slug: 'commercial-ro', description: 'Industrial scale', image: '/images/products/waterpurifier.png' },
    { name: 'Water Dispenser', slug: 'water-dispenser', description: 'Hot & Cold', image: '/images/products/waterpurifier.png' },
  ],
  'microwaves-ovens': [
    { name: 'Solo Microwave', slug: 'solo-microwave', description: '20-23L solo', image: '/images/products/oven.png' },
    { name: 'Grill Microwave', slug: 'grill-microwave', description: '25-28L grill', image: '/images/products/oven.png' },
    { name: 'Convection', slug: 'convection-microwave', description: '28-32L convection', image: '/images/products/oven.png' },
    { name: 'OTG Oven', slug: 'otg-oven', description: '19-60L OTG', image: '/images/products/oven.png' },
    { name: 'Built-in Oven', slug: 'built-in-oven', description: 'Premium built-in', image: '/images/products/oven.png' },
    { name: 'Air Fryer Oven', slug: 'air-fryer-oven', description: 'Oil-free frying', image: '/images/products/oven.png' },
  ],
  'room-heaters': [
    { name: 'Fan Heater', slug: 'fan-heater', description: 'Quick heat-up', image: '/images/products/roomheater.png' },
    { name: 'Quartz Heater', slug: 'quartz-heater', description: 'Instant warmth', image: '/images/products/roomheater.png' },
    { name: 'Halogen Heater', slug: 'halogen-heater', description: '3-rod halogen', image: '/images/products/roomheater.png' },
    { name: 'Oil Filled', slug: 'oil-filled-radiator', description: 'Fin-style radiator', image: '/images/products/roomheater.png' },
    { name: 'PTC Heater', slug: 'ptc-heater', description: 'Ceramic element', image: '/images/products/roomheater.png' },
    { name: 'Blower Heater', slug: 'blower-heater', description: 'Forced-air blower', image: '/images/products/roomheater.png' },
    { name: 'Smart Heater', slug: 'smart-heater', description: 'Wi-Fi enabled', image: '/images/products/roomheater.png' },
    { name: 'Industrial Heater', slug: 'industrial-heater', description: 'Heavy-duty', image: '/images/products/roomheater.png' },
  ],
  'induction-cooktops': [
    { name: 'Single Burner', slug: 'single-induction', description: '1200-2000W', image: '/images/products/induction.png' },
    { name: 'Double Induction', slug: 'double-induction', description: 'Two burners', image: '/images/products/induction.png' },
    { name: 'Infrared Cooktop', slug: 'infrared-cooktop', description: 'Any utensil', image: '/images/products/induction.png' },
    { name: 'Built-in Induction', slug: 'built-in-induction', description: '4-burner built-in', image: '/images/products/induction.png' },
    { name: 'Commercial', slug: 'commercial-induction', description: 'Restaurant grade', image: '/images/products/induction.png' },
    { name: 'Smart Induction', slug: 'smart-induction', description: 'IoT enabled', image: '/images/products/induction.png' },
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