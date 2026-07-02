import Link from 'next/link';
import { Snowflake, Refrigerator, Package, Wrench, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'AC Rentals',
    subtitle: 'Window, Split, Inverter & Portable',
    icon: Snowflake,
    href: '/rent/ac',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'from-sky-50 to-blue-50',
  },
  {
    title: 'Fridge Rentals',
    subtitle: 'Single, Double & Side-by-Side',
    icon: Refrigerator,
    href: '/rent/fridge',
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'from-cyan-50 to-teal-50',
  },
  {
    title: 'Combo Deals',
    subtitle: 'AC + Fridge bundles — Save ₹500/mo',
    icon: Package,
    href: '/rent/combo',
    color: 'from-orange-500 to-pink-500',
    bgColor: 'from-orange-50 to-pink-50',
  },
  {
    title: 'AC Service',
    subtitle: 'Repair, Installation, Gas Refill',
    icon: Wrench,
    href: '/service/ac',
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'from-indigo-50 to-purple-50',
  },
];

export function CategoriesGrid() {
  return (
    <section className="container-app section-padding">
      <div className="text-center mb-8 lg:mb-12">
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group relative bg-gradient-to-br ${cat.bgColor} rounded-2xl p-4 sm:p-6 border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${cat.color} opacity-10 group-hover:scale-150 transition-transform duration-500`} />

              <div className={`relative inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-1">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                {cat.subtitle}
              </p>

              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-sky-600 group-hover:gap-2 transition-all">
                <span>Explore</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}