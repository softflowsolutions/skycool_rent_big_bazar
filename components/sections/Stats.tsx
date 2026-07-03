import { Snowflake, Truck, Users, Star } from 'lucide-react';

const stats = [
  { icon: Snowflake, value: '50,000+', label: 'Happy Customers' },
  { icon: Truck, value: '15+', label: 'Cities Served' },
  { icon: Users, value: '1,00,000+', label: 'Services Completed' },
  { icon: Star, value: '4.8/5', label: 'Customer Rating' },
];

export function Stats() {
  return (
    <section className="container-app py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-md bg-gray-100 text-gray-900 flex-shrink-0">
                <Icon className="h-5 w-5 sm:h-5 sm:w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}