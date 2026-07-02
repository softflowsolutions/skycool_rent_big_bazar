import { IndianRupee, Truck, Shield, Headphones, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Starting at ₹599/month with zero deposit. No hidden charges.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Truck,
    title: 'Free Delivery & Installation',
    description: 'Same-day delivery in metros. Free installation included.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: '100% tested appliances with manufacturer warranty.',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance via call & WhatsApp.',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Award,
    title: 'Trusted by 50,000+',
    description: 'India\'s most trusted rental & service platform.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Same-day repair service across all metro cities.',
    color: 'from-cyan-500 to-teal-600',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 section-padding">
      <div className="container-app">
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Why <span className="text-gradient">SkyCool</span> Solutions?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We make cooling simple, affordable, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}