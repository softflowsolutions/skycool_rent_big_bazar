import type { Product, Service, Testimonial, FAQ, Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'ac',
    name: 'AC Rentals',
    slug: 'ac',
    parent: 'rent',
    icon: 'Snowflake',
    description: 'Window, Split, Inverter & Portable ACs for rent',
    image: 'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
  },
  {
    id: 'fridge',
    name: 'Fridge Rentals',
    slug: 'fridge',
    parent: 'rent',
    icon: 'Refrigerator',
    description: 'Single Door, Double Door & Side-by-Side Fridges',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
  },
  {
    id: 'combo',
    name: 'Combo Deals',
    slug: 'combo',
    parent: 'rent',
    icon: 'Package',
    description: 'AC + Fridge combo packages with extra savings',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 'ac-service',
    name: 'AC Service',
    slug: 'ac',
    parent: 'service',
    icon: 'Wrench',
    description: 'AC repair, installation, gas refill, deep cleaning',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
  {
    id: 'fridge-service',
    name: 'Fridge Service',
    slug: 'fridge',
    parent: 'service',
    icon: 'Wrench',
    description: 'Fridge repair, gas refill, deep cleaning',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
  },
];

export const PRODUCTS: Product[] = [
  // AC Products - Window
  {
    id: 'ac-001',
    slug: '1-ton-window-ac-non-inverter',
    name: '1 Ton Window AC (Non-Inverter)',
    category: 'ac',
    subCategory: 'window',
    brand: 'Voltas',
    images: [
      'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
      'https://images.unsplash.com/photo-1614633833026-0820552978d5?w=800&q=80',
      'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&q=80',
    ],
    description: 'Affordable 1 Ton Window AC perfect for small rooms up to 120 sq ft.',
    longDescription:
      'Keep your small room cool and comfortable with our reliable 1 Ton Window AC from Voltas. This non-inverter AC is energy-efficient and perfect for bedrooms, study rooms, and small offices. Features include turbo cooling, anti-bacteria filter, and eco-friendly refrigerant.',
    specifications: {
      Brand: 'Voltas',
      Type: 'Window AC',
      Capacity: '1 Ton',
      'Star Rating': '3 Star',
      'Power Consumption': '985 Watts',
      'Cooling Capacity': '3500 W',
      'Noise Level': '52 dB',
      Warranty: '12 months on product, 60 months on compressor',
      Dimensions: '600 x 560 x 380 mm',
      Weight: '47 kg',
      Color: 'White',
      Refrigerant: 'R-32',
    },
    pricing: { monthly: 999, quarterly: 2758, halfYearly: 5275, yearly: 9590 },
    deposit: 0,
    rating: 4.6,
    reviewCount: 312,
    inStock: true,
    tags: ['window', '1-ton', 'budget', 'bedroom'],
    features: [
      'Turbo cooling for instant relief',
      'Anti-bacteria and dust filter',
      'Eco-friendly R-32 refrigerant',
      'Self-diagnosis for easy maintenance',
      'Sleep mode for energy saving',
    ],
    energyRating: '3 Star',
    warranty: '1 Year',
    capacity: '1 Ton',
    type: 'Window AC',
  },
  {
    id: 'ac-002',
    slug: '1-5-ton-window-ac-inverter',
    name: '1.5 Ton Window AC (Inverter)',
    category: 'ac',
    subCategory: 'window',
    brand: 'LG',
    images: [
      'https://images.unsplash.com/photo-1614633833026-0820552978d5?w=800&q=80',
      'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
    ],
    description: 'Energy-efficient 1.5 Ton Window AC with inverter technology.',
    longDescription:
      'The LG 1.5 Ton Window Inverter AC delivers superior cooling with up to 40% energy savings. Perfect for medium-sized rooms up to 200 sq ft. Dual inverter compressor ensures quieter operation and longer lifespan.',
    specifications: {
      Brand: 'LG',
      Type: 'Window AC (Inverter)',
      Capacity: '1.5 Ton',
      'Star Rating': '5 Star',
      'Power Consumption': '1170 Watts',
      'Cooling Capacity': '5000 W',
      'Noise Level': '48 dB',
      Warranty: '12 months comprehensive, 120 months on compressor',
      Dimensions: '660 x 580 x 420 mm',
      Weight: '55 kg',
      Color: 'White',
      Refrigerant: 'R-32',
    },
    pricing: { monthly: 1299, quarterly: 3587, halfYearly: 6861, yearly: 12470 },
    deposit: 0,
    rating: 4.8,
    reviewCount: 256,
    inStock: true,
    tags: ['window', '1.5-ton', 'inverter', 'energy-efficient'],
    features: [
      'Dual Inverter Compressor',
      '5 Star energy rating',
      '10-year compressor warranty',
      'Anti-corrosion copper condenser',
      'Wi-Fi enabled smart control',
    ],
    energyRating: '5 Star',
    warranty: '1 Year',
    capacity: '1.5 Ton',
    type: 'Window AC',
  },
  // AC Products - Split
  {
    id: 'ac-003',
    slug: '1-ton-split-ac-inverter',
    name: '1 Ton Split AC (Inverter)',
    category: 'ac',
    subCategory: 'split',
    brand: 'Samsung',
    images: [
      'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&q=80',
      'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
    ],
    description: 'Premium 1 Ton Split Inverter AC with Wi-Fi connectivity.',
    longDescription:
      'Experience premium cooling with this Samsung 1 Ton Split Inverter AC. Wi-Fi enabled for remote control via your smartphone. Convertible 5-in-1 cooling modes adapt to any weather condition. Perfect for modern homes and offices.',
    specifications: {
      Brand: 'Samsung',
      Type: 'Split AC (Inverter)',
      Capacity: '1 Ton',
      'Star Rating': '5 Star',
      'Power Consumption': '940 Watts',
      'Cooling Capacity': '3400 W',
      'Noise Level': '42 dB (Indoor)',
      Warranty: '12 months on product, 120 months on compressor',
      'Indoor Dimensions': '820 x 299 x 215 mm',
      'Outdoor Dimensions': '720 x 548 x 265 mm',
      Weight: 'Indoor: 9 kg, Outdoor: 28 kg',
      Color: 'White',
      Refrigerant: 'R-32',
    },
    pricing: { monthly: 1499, quarterly: 4139, halfYearly: 7917, yearly: 14390 },
    deposit: 0,
    rating: 4.9,
    reviewCount: 428,
    inStock: true,
    tags: ['split', '1-ton', 'inverter', 'smart', 'wifi'],
    features: [
      'Wi-Fi enabled with SmartThings app',
      'Convertible 5-in-1 cooling modes',
      'Triple Protection Plus',
      'Anti-bacteria PM 1.0 filter',
      'Auto clean (self-cleaning)',
    ],
    energyRating: '5 Star',
    warranty: '1 Year',
    capacity: '1 Ton',
    type: 'Split AC',
  },
  {
    id: 'ac-004',
    slug: '1-5-ton-split-ac-inverter',
    name: '1.5 Ton Split AC (Inverter)',
    category: 'ac',
    subCategory: 'split',
    brand: 'Daikin',
    images: [
      'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
      'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&q=80',
    ],
    description: 'Best-selling 1.5 Ton Split Inverter AC from Daikin.',
    longDescription:
      'Daikin 1.5 Ton 5 Star Inverter Split AC - the gold standard in residential cooling. Patented inverter technology, dew clean feature, and PM 2.5 filter for healthy air. Ideal for rooms 150-200 sq ft.',
    specifications: {
      Brand: 'Daikin',
      Type: 'Split AC (Inverter)',
      Capacity: '1.5 Ton',
      'Star Rating': '5 Star',
      'Power Consumption': '1145 Watts',
      'Cooling Capacity': '5000 W',
      'Noise Level': '38 dB (Indoor)',
      Warranty: '12 months on product, 120 months on compressor',
      'Indoor Dimensions': '885 x 298 x 229 mm',
      'Outdoor Dimensions': '845 x 595 x 300 mm',
      Weight: 'Indoor: 11 kg, Outdoor: 35 kg',
      Color: 'White',
      Refrigerant: 'R-32',
    },
    pricing: { monthly: 1799, quarterly: 4967, halfYearly: 9500, yearly: 17270 },
    deposit: 0,
    rating: 4.8,
    reviewCount: 567,
    inStock: true,
    tags: ['split', '1.5-ton', 'inverter', 'bestseller'],
    features: [
      'Dew Clean Technology',
      'PM 2.5 Filter',
      'Triple Display',
      'Powerful Mode for extreme heat',
      'Good Sleep Timer',
    ],
    energyRating: '5 Star',
    warranty: '1 Year',
    capacity: '1.5 Ton',
    type: 'Split AC',
  },
  {
    id: 'ac-005',
    slug: '2-ton-split-ac-inverter',
    name: '2 Ton Split AC (Inverter)',
    category: 'ac',
    subCategory: 'split',
    brand: 'Carrier',
    images: [
      'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&q=80',
    ],
    description: 'Powerful 2 Ton Split Inverter AC for large rooms.',
    longDescription:
      'The Carrier 2 Ton Split Inverter AC is designed for large rooms and halls up to 280 sq ft. Advanced inverter technology with 6-in-1 convertible modes, HD filter, and powerful cooling at 52°C ambient.',
    specifications: {
      Brand: 'Carrier',
      Type: 'Split AC (Inverter)',
      Capacity: '2 Ton',
      'Star Rating': '5 Star',
      'Power Consumption': '1490 Watts',
      'Cooling Capacity': '6800 W',
      'Noise Level': '42 dB (Indoor)',
      Warranty: '12 months on product, 120 months on compressor',
      'Indoor Dimensions': '970 x 315 x 240 mm',
      'Outdoor Dimensions': '900 x 700 x 350 mm',
      Weight: 'Indoor: 13 kg, Outdoor: 45 kg',
      Color: 'White',
      Refrigerant: 'R-32',
    },
    pricing: { monthly: 2299, quarterly: 6349, halfYearly: 12138, yearly: 22070 },
    deposit: 0,
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    tags: ['split', '2-ton', 'inverter', 'large-room'],
    features: [
      '6-in-1 Convertible Modes',
      'HD Filter with Anti-bacteria',
      'Cools at 52°C ambient',
      'Stabilizer-free operation',
      'Turbo cooling',
    ],
    energyRating: '5 Star',
    warranty: '1 Year',
    capacity: '2 Ton',
    type: 'Split AC',
  },
  // AC Products - Inverter (separate category as per PRD)
  {
    id: 'ac-006',
    slug: '1-5-ton-inverter-ac-vrf',
    name: '1.5 Ton VRF Inverter AC',
    category: 'ac',
    subCategory: 'inverter',
    brand: 'Hitachi',
    images: [
      'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=800&q=80',
    ],
    description: 'Industrial-grade VRF Inverter AC for premium cooling.',
    longDescription:
      'Hitachi VRF (Variable Refrigerant Flow) Inverter AC represents the pinnacle of cooling technology. Designed for premium apartments, offices, and commercial spaces. Whisen Wave motor for ultra-quiet operation.',
    specifications: {
      Brand: 'Hitachi',
      Type: 'VRF Inverter AC',
      Capacity: '1.5 Ton',
      'Star Rating': '5 Star',
      'Power Consumption': '1050 Watts',
      'Cooling Capacity': '5200 W',
      'Noise Level': '32 dB (Indoor)',
      Warranty: '24 months comprehensive, 120 months on compressor',
      'Indoor Dimensions': '1050 x 305 x 235 mm',
      Weight: 'Indoor: 14 kg, Outdoor: 38 kg',
      Color: 'Pearl White',
      Refrigerant: 'R-410A',
    },
    pricing: { monthly: 2499, quarterly: 6899, halfYearly: 13188, yearly: 23990 },
    deposit: 0,
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    tags: ['inverter', 'vrf', 'premium', 'silent'],
    features: [
      'Whisen Wave motor technology',
      'Tropical inverter compressor',
      'Auto-clean heat exchanger',
      'Long air throw (up to 25 ft)',
      'Pre-coated aluminum fins',
    ],
    energyRating: '5 Star',
    warranty: '2 Years',
    capacity: '1.5 Ton',
    type: 'VRF Inverter',
  },
  // AC Products - Portable
  {
    id: 'ac-007',
    slug: '1-ton-portable-ac',
    name: '1 Ton Portable AC',
    category: 'ac',
    subCategory: 'portable',
    brand: 'Blue Star',
    images: [
      'https://images.unsplash.com/photo-1614633833026-0820552978d5?w=800&q=80',
    ],
    description: 'Compact 1 Ton Portable AC - no installation required.',
    longDescription:
      'No installation needed! This Blue Star Portable AC is perfect for renters, frequent movers, and temporary setups. Roll it anywhere, plug it in, and enjoy instant cooling. Includes remote control and 24-hour timer.',
    specifications: {
      Brand: 'Blue Star',
      Type: 'Portable AC',
      Capacity: '1 Ton',
      'Star Rating': '3 Star',
      'Power Consumption': '1200 Watts',
      'Cooling Capacity': '3500 W',
      'Noise Level': '54 dB',
      Warranty: '12 months comprehensive',
      Dimensions: '440 x 740 x 380 mm',
      Weight: '32 kg',
      Color: 'White',
      Refrigerant: 'R-410A',
    },
    pricing: { monthly: 1299, quarterly: 3587, halfYearly: 6861, yearly: 12470 },
    deposit: 0,
    rating: 4.4,
    reviewCount: 187,
    inStock: true,
    tags: ['portable', '1-ton', 'no-installation', 'compact'],
    features: [
      'No installation required',
      'Self-evaporative system',
      '4-in-1 modes (Cool/Fan/Dry/Sleep)',
      'Easy-roll casters',
      'Window kit included',
    ],
    energyRating: '3 Star',
    warranty: '1 Year',
    capacity: '1 Ton',
    type: 'Portable AC',
  },
  // Fridge Products - Single Door
  {
    id: 'fr-001',
    slug: '190l-single-door-fridge',
    name: '190L Single Door Fridge',
    category: 'fridge',
    subCategory: 'single-door',
    brand: 'Whirlpool',
    images: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80',
    ],
    description: 'Compact 190L Single Door Fridge ideal for bachelors and small families.',
    longDescription:
      'The Whirlpool 190L Single Door Refrigerator is perfect for small families, bachelors, and students. Direct Cool technology with honeycomb moisture lock crisper keeps vegetables fresh longer.',
    specifications: {
      Brand: 'Whirlpool',
      Type: 'Single Door',
      Capacity: '190 Litres',
      'Star Rating': '4 Star',
      'Power Consumption': '175 kWh/year',
      'Cooling Technology': 'Direct Cool',
      Warranty: '12 months on product, 60 months on compressor',
      Dimensions: '536 x 619 x 1240 mm',
      Weight: '42 kg',
      Color: 'Silver',
      Defrost: 'Manual',
    },
    pricing: { monthly: 599, quarterly: 1654, halfYearly: 3163, yearly: 5750 },
    deposit: 0,
    rating: 4.5,
    reviewCount: 423,
    inStock: true,
    tags: ['single-door', 'compact', 'bachelor', 'direct-cool'],
    features: [
      'Honeycomb Moisture Lock',
      'Up to 12 hours cooling retention',
      'Insulated Capillary technology',
      'Large vegetable crisper',
      'Removable anti-bacterial gasket',
    ],
    energyRating: '4 Star',
    warranty: '1 Year',
    capacity: '190L',
    type: 'Single Door',
  },
  {
    id: 'fr-002',
    slug: '215l-single-door-fridge',
    name: '215L Single Door Fridge',
    category: 'fridge',
    subCategory: 'single-door',
    brand: 'Samsung',
    images: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80',
    ],
    description: 'Reliable 215L Single Door Fridge with digital inverter.',
    longDescription:
      'Samsung 215L Single Door Refrigerator with Digital Inverter Compressor for energy efficiency and quieter operation. All Round Cooling ensures even temperature throughout.',
    specifications: {
      Brand: 'Samsung',
      Type: 'Single Door',
      Capacity: '215 Litres',
      'Star Rating': '5 Star',
      'Power Consumption': '160 kWh/year',
      'Cooling Technology': 'Direct Cool',
      Warranty: '12 months on product, 120 months on compressor',
      Dimensions: '578 x 633 x 1320 mm',
      Weight: '46 kg',
      Color: 'Blue / Silver',
      Defrost: 'Manual',
    },
    pricing: { monthly: 699, quarterly: 1930, halfYearly: 3691, yearly: 6710 },
    deposit: 0,
    rating: 4.6,
    reviewCount: 298,
    inStock: true,
    tags: ['single-door', 'inverter', 'energy-efficient'],
    features: [
      'Digital Inverter Compressor',
      'All Round Cooling',
      '10-year compressor warranty',
      'Toughened glass shelves',
      'Anti-fungal door gasket',
    ],
    energyRating: '5 Star',
    warranty: '1 Year',
    capacity: '215L',
    type: 'Single Door',
  },
  // Fridge Products - Double Door
  {
    id: 'fr-003',
    slug: '260l-double-door-fridge',
    name: '260L Double Door Fridge',
    category: 'fridge',
    subCategory: 'double-door',
    brand: 'LG',
    images: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80',
    ],
    description: 'Frost-free 260L Double Door Fridge for families.',
    longDescription:
      'LG 260L Frost Free Double Door Refrigerator - the perfect family fridge. Multi Air Flow cooling, humidity controller, and door cooling+ for up to 35% faster cooling.',
    specifications: {
      Brand: 'LG',
      Type: 'Double Door (Frost Free)',
      Capacity: '260 Litres',
      'Star Rating': '4 Star',
      'Power Consumption': '230 kWh/year',
      'Cooling Technology': 'Frost Free',
      Warranty: '12 months on product, 120 months on compressor',
      Dimensions: '585 x 703 x 1575 mm',
      Weight: '58 kg',
      Color: 'Shiny Steel',
      Defrost: 'Automatic (Frost Free)',
    },
    pricing: { monthly: 999, quarterly: 2758, halfYearly: 5275, yearly: 9590 },
    deposit: 0,
    rating: 4.7,
    reviewCount: 512,
    inStock: true,
    tags: ['double-door', 'frost-free', 'family', 'bestseller'],
    features: [
      'Door Cooling+ (35% faster)',
      'Multi Air Flow vents',
      'Humidity Controller',
      'Smart Inverter Compressor',
      'LED lighting',
    ],
    energyRating: '4 Star',
    warranty: '1 Year',
    capacity: '260L',
    type: 'Double Door',
  },
  {
    id: 'fr-004',
    slug: '360l-double-door-fridge',
    name: '360L Double Door Fridge',
    category: 'fridge',
    subCategory: 'double-door',
    brand: 'Samsung',
    images: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    ],
    description: 'Spacious 360L Double Door Fridge for joint families.',
    longDescription:
      'Samsung 360L Frost Free Double Door Refrigerator with Twin Cooling Plus for independent cooling in fridge and freezer. Convertible 5-in-1 modes for flexible storage.',
    specifications: {
      Brand: 'Samsung',
      Type: 'Double Door (Frost Free)',
      Capacity: '360 Litres',
      'Star Rating': '3 Star',
      'Power Consumption': '320 kWh/year',
      'Cooling Technology': 'Frost Free',
      Warranty: '12 months on product, 120 months on compressor',
      Dimensions: '675 x 720 x 1825 mm',
      Weight: '73 kg',
      Color: 'Pebble Blue',
      Defrost: 'Automatic',
    },
    pricing: { monthly: 1399, quarterly: 3863, halfYearly: 7386, yearly: 13430 },
    deposit: 0,
    rating: 4.6,
    reviewCount: 287,
    inStock: true,
    tags: ['double-door', 'large', 'family', 'convertible'],
    features: [
      'Twin Cooling Plus',
      '5-in-1 Convertible',
      'Power Cool / Power Freeze',
      'Big Guard door bins',
      'Digital Inverter Technology',
    ],
    energyRating: '3 Star',
    warranty: '1 Year',
    capacity: '360L',
    type: 'Double Door',
  },
  // Fridge Products - Side by Side
  {
    id: 'fr-005',
    slug: '653l-side-by-side-fridge',
    name: '653L Side-by-Side Fridge',
    category: 'fridge',
    subCategory: 'side-by-side',
    brand: 'LG',
    images: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80',
    ],
    description: 'Premium 653L Side-by-Side Fridge with water dispenser.',
    longDescription:
      'LG 653L Side-by-Side Refrigerator with InstaView Door-in-Door and UVnano water dispenser. Smart ThinQ app connectivity. Perfect for premium homes and offices.',
    specifications: {
      Brand: 'LG',
      Type: 'Side-by-Side',
      Capacity: '653 Litres',
      'Star Rating': '4 Star',
      'Power Consumption': '485 kWh/year',
      'Cooling Technology': 'Frost Free',
      Warranty: '12 months on product, 120 months on compressor',
      Dimensions: '913 x 740 x 1790 mm',
      Weight: '108 kg',
      Color: 'Mirror Glass',
      Defrost: 'Automatic',
    },
    pricing: { monthly: 2999, quarterly: 8281, halfYearly: 15835, yearly: 28790 },
    deposit: 0,
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    tags: ['side-by-side', 'premium', 'water-dispenser', 'smart'],
    features: [
      'InstaView Door-in-Door',
      'UVnano water dispenser',
      'Smart ThinQ (Wi-Fi)',
      'Multi Air Flow cooling',
      'Hygiene Fresh+ air filter',
    ],
    energyRating: '4 Star',
    warranty: '1 Year',
    capacity: '653L',
    type: 'Side-by-Side',
  },
  // Combo Products
  {
    id: 'combo-001',
    slug: 'ac-fridge-combo-starter',
    name: 'AC + Fridge Combo (Starter)',
    category: 'ac',
    subCategory: 'combo',
    brand: 'Multiple',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
    description: '1 Ton Split AC + 215L Single Door Fridge combo.',
    longDescription:
      'Save ₹500/month with this essential combo - perfect for a new home or rental property. Includes delivery, installation, and free maintenance for the entire rental period.',
    specifications: {
      'Bundle Includes': '1 Ton Split AC + 215L Single Door Fridge',
      'Total Capacity': '215L Fridge + 1 Ton AC',
      'Energy Rating': '5 Star (Combined)',
      Warranty: '12 months comprehensive',
      Installation: 'Free installation included',
      Maintenance: 'Free maintenance for rental period',
    },
    pricing: {
      monthly: 1899,
      quarterly: 5243,
      halfYearly: 10026,
      yearly: 18230,
    },
    deposit: 0,
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    tags: ['combo', 'bundle', 'savings'],
    features: [
      'Save ₹500/month vs individual rentals',
      'Free installation of both units',
      'Free maintenance during rental',
      'Single point of contact',
      'Priority service for combo customers',
    ],
    energyRating: '5 Star',
    warranty: '1 Year',
    capacity: '1 Ton AC + 215L Fridge',
    type: 'Combo',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'svc-001',
    slug: 'ac-repair',
    name: 'AC Repair Service',
    category: 'ac',
    subCategory: 'repair',
    description: 'Expert AC repair for all brands - same day service.',
    longDescription:
      'Our certified technicians diagnose and fix all AC issues - cooling problems, water leakage, noise, electrical faults, and more. Service warranty included on all repairs.',
    startingPrice: 299,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      'Same day service available',
      'All brands serviced',
      '90-day service warranty',
      'Genuine spare parts',
      'Transparent pricing - no hidden charges',
    ],
    duration: '60-90 minutes',
    warranty: '90 days',
    rating: 4.8,
    reviewCount: 1248,
  },
  {
    id: 'svc-002',
    slug: 'ac-installation',
    name: 'AC Installation Service',
    category: 'ac',
    subCategory: 'installation',
    description: 'Professional AC installation with bracket and copper piping.',
    longDescription:
      'Complete AC installation service including wall mounting, copper piping (up to 3m), drainage setup, electrical connection, and gas pressure check. Old AC uninstallation also available.',
    startingPrice: 1499,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      'Up to 3m copper piping included',
      'Heavy-duty wall bracket',
      'Professional installation',
      'Electrical safety check',
      'Free old AC uninstallation',
    ],
    duration: '2-3 hours',
    warranty: '1 year on workmanship',
    rating: 4.9,
    reviewCount: 856,
  },
  {
    id: 'svc-003',
    slug: 'ac-gas-refill',
    name: 'AC Gas Refill Service',
    category: 'ac',
    subCategory: 'gas-refill',
    description: 'AC gas refill with leak detection - R22, R32, R410A.',
    longDescription:
      'Restore your AC\'s cooling performance with our professional gas refill service. Includes comprehensive leak detection, pressure testing, and use of genuine refrigerants (R-22, R-32, R-410A).',
    startingPrice: 1499,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      'Genuine refrigerant used',
      'Leak detection included',
      'All gas types (R22, R32, R410A)',
      'Pressure testing',
      '30-day cooling warranty',
    ],
    duration: '45-60 minutes',
    warranty: '30 days',
    rating: 4.7,
    reviewCount: 642,
  },
  {
    id: 'svc-004',
    slug: 'ac-deep-cleaning',
    name: 'AC Deep Cleaning Service',
    category: 'ac',
    subCategory: 'deep-cleaning',
    description: 'Complete jet-wash cleaning for split & window AC.',
    longDescription:
      'Restore cooling efficiency and improve air quality with our deep cleaning service. Includes complete disassembly, jet washing of coils, blower, and filters, plus anti-bacterial spray treatment.',
    startingPrice: 499,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      'Complete disassembly',
      'High-pressure jet washing',
      'Anti-bacterial treatment',
      'Filter cleaning/replacement',
      'Improves cooling by up to 30%',
    ],
    duration: '60-90 minutes',
    warranty: '14 days',
    rating: 4.8,
    reviewCount: 923,
  },
  {
    id: 'svc-005',
    slug: 'ac-amc',
    name: 'AC Annual Maintenance Contract (AMC)',
    category: 'ac',
    subCategory: 'amc',
    description: 'Yearly AMC - unlimited service calls + free gas top-up.',
    longDescription:
      'Get complete peace of mind with our Annual Maintenance Contract. Includes 4 scheduled services, unlimited breakdown calls, free gas top-up once a year, and priority service. Best value for AC owners.',
    startingPrice: 2499,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    features: [
      '4 scheduled services per year',
      'Unlimited breakdown visits',
      'Free gas top-up (1 time)',
      'Priority same-day service',
      'Up to 20% off on parts',
    ],
    duration: '12 months',
    warranty: 'Full year',
    rating: 4.9,
    reviewCount: 478,
  },
  {
    id: 'svc-006',
    slug: 'fridge-repair',
    name: 'Fridge Repair Service',
    category: 'fridge',
    subCategory: 'repair',
    description: 'Expert fridge repair - cooling, leakage, electrical issues.',
    longDescription:
      'Expert diagnosis and repair for all refrigerator problems - not cooling, water leakage, excessive noise, electrical issues, compressor faults. All brands serviced.',
    startingPrice: 299,
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    ],
    features: [
      'All brands and models',
      'Same day service available',
      '90-day service warranty',
      'Genuine spare parts',
      'Visiting charge waived on repair',
    ],
    duration: '60-90 minutes',
    warranty: '90 days',
    rating: 4.7,
    reviewCount: 687,
  },
  {
    id: 'svc-007',
    slug: 'fridge-gas-refill',
    name: 'Fridge Gas Refill',
    category: 'fridge',
    subCategory: 'gas-refill',
    description: 'Refrigerant gas refill with leak detection.',
    longDescription:
      'Restore your refrigerator\'s cooling performance with our gas refill service. Includes leak detection, capillary replacement if needed, and use of genuine refrigerants.',
    startingPrice: 1999,
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    ],
    features: [
      'R134a / R600a refrigerants',
      'Leak detection included',
      'Capillary filter check',
      '30-day cooling warranty',
      'Certified technicians',
    ],
    duration: '90-120 minutes',
    warranty: '30 days',
    rating: 4.6,
    reviewCount: 312,
  },
  {
    id: 'svc-008',
    slug: 'fridge-deep-cleaning',
    name: 'Fridge Deep Cleaning',
    category: 'fridge',
    subCategory: 'deep-cleaning',
    description: 'Complete fridge cleaning with defrosting.',
    longDescription:
      'Complete fridge deep cleaning service - defrost, remove all shelves, sanitize, deodorize, and reassemble. Improves hygiene and reduces electricity consumption.',
    startingPrice: 399,
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    ],
    features: [
      'Complete defrost',
      'Deep cleaning all compartments',
      'Anti-bacterial sanitization',
      'Door gasket cleaning',
      'Deodorizer treatment',
    ],
    duration: '60-90 minutes',
    warranty: '7 days',
    rating: 4.7,
    reviewCount: 245,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tst-001',
    name: 'Priya Sharma',
    city: 'Bangalore',
    rating: 5,
    text: 'Rented a 1.5 Ton Split AC from SkyCool for 6 months during my Bangalore stint. Excellent service, no hassle, and the AC was in perfect condition. Pickup was seamless too!',
    product: '1.5 Ton Split AC',
  },
  {
    id: 'tst-002',
    name: 'Rohan Verma',
    city: 'Delhi',
    rating: 5,
    text: 'As a student in Delhi, I can\'t afford to buy an AC. SkyCool\'s monthly rental is a lifesaver. Got my window AC delivered in 4 hours. Highly recommended for students!',
    product: '1 Ton Window AC',
  },
  {
    id: 'tst-003',
    name: 'Mr. Ahmed Khan',
    city: 'Hyderabad',
    rating: 5,
    text: 'I run a small restaurant and needed multiple fridges for a 3-month event. SkyCool offered flexible bulk pricing and the fridges were delivered on time. Professional team!',
    product: '3x Double Door Fridges',
  },
  {
    id: 'tst-004',
    name: 'Anjali Patel',
    city: 'Mumbai',
    rating: 5,
    text: 'AC broke down during peak summer in Mumbai. Called SkyCool for emergency repair - technician arrived within 3 hours and fixed it on the spot. Great service!',
    product: 'AC Repair Service',
  },
  {
    id: 'tst-005',
    name: 'Vikram Singh',
    city: 'Pune',
    rating: 5,
    text: 'Took their AMC plan for my home AC. Saves me from worrying about breakdowns. The 4 scheduled services keep my AC running like new. Worth every rupee.',
    product: 'AC AMC',
  },
  {
    id: 'tst-006',
    name: 'Sneha Reddy',
    city: 'Chennai',
    rating: 5,
    text: 'Rented AC + Fridge combo for my apartment. The combo savings are real - I save almost ₹500/month. Plus, the free installation is a great bonus!',
    product: 'AC + Fridge Combo',
  },
  {
    id: 'tst-007',
    name: 'Arjun Mehta',
    city: 'Kolkata',
    rating: 5,
    text: 'Was skeptical about renting appliances online, but SkyCool made it super easy. WhatsApp ordering is brilliant. The fridge works perfectly for my PG.',
    product: '190L Single Door Fridge',
  },
  {
    id: 'tst-008',
    name: 'Meera Joshi',
    city: 'Ahmedabad',
    rating: 5,
    text: 'My portable AC from SkyCool is amazing for my small studio. No installation needed - just plug and play. Perfect for renters who move frequently.',
    product: '1 Ton Portable AC',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-001',
    question: 'What is the minimum rental duration?',
    answer:
      'The minimum rental duration is 1 month. You can choose from 1, 3, 6, or 12-month plans. Longer durations come with attractive discounts.',
    category: 'rental',
  },
  {
    id: 'faq-002',
    question: 'Is there a security deposit?',
    answer:
      'No! All our products come with zero deposit rental options. You only pay the monthly rent - no hidden charges, no security deposits.',
    category: 'rental',
  },
  {
    id: 'faq-003',
    question: 'Do you provide free delivery and installation?',
    answer:
      'Yes, we provide free delivery and installation in all metro cities. For AC installations, up to 3 meters of copper piping is included at no extra cost.',
    category: 'rental',
  },
  {
    id: 'faq-004',
    question: 'What happens if the appliance breaks down?',
    answer:
      'If any appliance breaks down during the rental period, we will repair or replace it free of charge. Just call our 24/7 helpline and our technician will be at your doorstep.',
    category: 'rental',
  },
  {
    id: 'faq-005',
    question: 'How quickly can I get the appliance delivered?',
    answer:
      'For metro cities (Delhi, Mumbai, Bangalore, etc.), we offer same-day or next-day delivery. For other cities, delivery takes 2-3 business days.',
    category: 'rental',
  },
  {
    id: 'faq-006',
    question: 'Can I extend my rental period?',
    answer:
      'Yes! You can extend your rental anytime. Just let us know at least 7 days before your current plan ends, and we will renew it at the same or better rate.',
    category: 'rental',
  },
  {
    id: 'faq-007',
    question: 'What services do you offer?',
    answer:
      'We offer AC repair, AC installation, AC gas refill, AC deep cleaning, AC AMC, Fridge repair, Fridge gas refill, and Fridge deep cleaning. All services come with warranty.',
    category: 'service',
  },
  {
    id: 'faq-008',
    question: 'Do you provide same-day service?',
    answer:
      'Yes, we offer same-day service for repairs and maintenance in all metro cities. Just book before 2 PM and we will send a technician the same day.',
    category: 'service',
  },
  {
    id: 'faq-009',
    question: 'What payment methods do you accept?',
    answer:
      'We accept UPI (Google Pay, PhonePe, Paytm), debit cards, credit cards, net banking, and cash on delivery for monthly rentals. EMI options available for longer plans.',
    category: 'payments',
  },
  {
    id: 'faq-010',
    question: 'How do I cancel my order?',
    answer:
      'You can cancel your order within 24 hours of placing it for a full refund. After delivery, you can return the appliance as per our cancellation and refund policy.',
    category: 'payments',
  },
  {
    id: 'faq-011',
    question: 'Which cities do you operate in?',
    answer:
      'We currently serve 15+ cities including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Indore, Nagpur, Kochi, and Coimbatore.',
    category: 'general',
  },
  {
    id: 'faq-012',
    question: 'Is there a customer support helpline?',
    answer:
      'Yes, we have 24/7 customer support available via phone (1800-123-4567), WhatsApp, and email. Our support team is always ready to help.',
    category: 'general',
  },
];

export const POPULAR_CITIES = [
  'Delhi NCR',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category || p.subCategory === category);
}

export function getProductsBySubCategory(subCategory: string): Product[] {
  return PRODUCTS.filter((p) => p.subCategory === subCategory);
}

export function getServicesByCategory(category: string): Service[] {
  return SERVICES.filter((s) => s.category === category || s.subCategory === category);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return [];
  return PRODUCTS.filter(
    (p) =>
      p.id !== productId &&
      (p.category === product.category || p.subCategory === product.subCategory)
  ).slice(0, limit);
}

export function getPopularProducts(limit = 8): Product[] {
  return [...PRODUCTS]
    .sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount)
    .slice(0, limit);
}

export function getPopularServices(limit = 6): Service[] {
  return [...SERVICES]
    .sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount)
    .slice(0, limit);
}

export interface EnquiryOption {
  value: string;
  label: string;
}

interface EnquirySubTaxonomy {
  readonly [subCategory: string]: EnquiryOption[];
}

export type EnquiryTaxonomy = {
  readonly [topLevel: string]: EnquirySubTaxonomy;
};

export function getEnquiryTaxonomy(): EnquiryTaxonomy {
  const rentSubMap: Record<string, Set<string>> = {};
  const rentProductMap: Record<string, Set<string>> = {};

  for (const p of PRODUCTS) {
    if (!rentSubMap[p.category]) rentSubMap[p.category] = new Set();
    rentSubMap[p.category].add(p.subCategory);
    const key = `${p.category}__${p.subCategory}`;
    if (!rentProductMap[key]) rentProductMap[key] = new Set();
    rentProductMap[key].add(p.name);
  }

  const serviceSubMap: Record<string, Set<string>> = {};
  const serviceProductMap: Record<string, Set<string>> = {};

  for (const s of SERVICES) {
    if (!serviceSubMap[s.category]) serviceSubMap[s.category] = new Set();
    serviceSubMap[s.category].add(s.subCategory);
    const key = `${s.category}__${s.subCategory}`;
    if (!serviceProductMap[key]) serviceProductMap[key] = new Set();
    serviceProductMap[key].add(s.name);
  }

  const build = (
    subMap: Record<string, Set<string>>,
    productMap: Record<string, Set<string>>
  ): EnquirySubTaxonomy => {
    const result: Record<string, Record<string, EnquiryOption[]>> = {};
    for (const cat of Object.keys(subMap)) {
      const inner: Record<string, EnquiryOption[]> = {};
      for (const sub of subMap[cat]) {
        const key = `${cat}__${sub}`;
        inner[sub] = Array.from(productMap[key] || []).map((name) => ({
          value: name,
          label: name,
        }));
      }
      result[cat] = inner;
    }
    return result as unknown as EnquirySubTaxonomy;
  };

  const out: EnquiryTaxonomy = {
    rent: build(rentSubMap, rentProductMap),
    service: build(serviceSubMap, serviceProductMap),
  };
  return out;
}