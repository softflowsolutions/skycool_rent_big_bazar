import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'AC Rentals',
    subtitle: 'Window, Split, Inverter & Portable',
    image: 'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=600&q=80',
    href: '/rent/ac',
  },
  {
    title: 'Fridge Rentals',
    subtitle: 'Single, Double & Side-by-Side',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80',
    href: '/rent/fridge',
  },
  {
    title: 'Combo Deals',
    subtitle: 'AC + Fridge bundles — Save ₹500/mo',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    href: '/rent/combo',
  },
  {
    title: 'AC Service',
    subtitle: 'Repair, Installation, Gas Refill',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    href: '/service/ac',
  },
];

export function CategoriesGrid() {
  return (
    <section className="container-app section-padding">
      <div className="text-center mb-8 lg:mb-10">
        <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
          Explore Our Services
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
          What are you looking for?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Choose from our wide range of AC & Fridge rentals and professional services.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            {/* Image area */}
            <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content area */}
            <div className="p-4 sm:p-5">
              <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-1">
                {cat.subtitle}
              </p>
              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-sky-600 group-hover:gap-2 transition-all">
                <span>Explore</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
