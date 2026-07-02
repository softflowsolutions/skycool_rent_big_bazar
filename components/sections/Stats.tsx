import { Snowflake, Truck, Users, Star } from 'lucide-react';

const stats = [
  {
    icon: Snowflake,
    value: '50,000+',
    label: 'Happy Customers',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Truck,
    value: '15+',
    label: 'Cities Served',
    color: 'from-cyan-500 to-sky-500',
  },
  {
    icon: Users,
    value: '1,00,000+',
    label: 'Services Completed',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Star,
    value: '4.8/5',
    label: 'Customer Rating',
    color: 'from-amber-500 to-orange-500',
  },
];

export function Stats() {
  return (
    <section className="container-app mb-12 lg:mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:scale-150 transition-transform duration-500`} />
              <div className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} mb-2 sm:mb-3 shadow-md`}>
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}