import { IndianRupee, Truck, Shield, Headphones, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Starting at ₹599/month with zero deposit. No hidden charges.',
  },
  {
    icon: Truck,
    title: 'Free Delivery & Installation',
    description: 'Same-day delivery in metros. Free installation included.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: '100% tested appliances with manufacturer warranty.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance via call & WhatsApp.',
  },
  {
    icon: Award,
    title: 'Trusted by 50,000+',
    description: "India's most trusted rental & service platform.",
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Same-day repair service across all metro cities.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container-app">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Why SkyCool Solutions?
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
                className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 mb-3">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1.5">
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