import { Search, Calendar, MessageCircle, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose Product',
    description: 'Browse our wide range of ACs and Fridges',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Calendar,
    title: 'Select Plan',
    description: 'Pick duration & quantity',
    color: 'from-cyan-500 to-sky-600',
  },
  {
    icon: MessageCircle,
    title: 'Place Order',
    description: 'Confirm via WhatsApp or Call',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Truck,
    title: 'Get Delivered',
    description: 'Free delivery & installation',
    color: 'from-orange-500 to-red-600',
  },
];

export function HowItWorks() {
  return (
    <section className="container-app section-padding">
      <div className="text-center mb-10 lg:mb-14">
        <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
          Simple Process
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
          Rent in 4 Easy Steps
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          From selection to delivery in less than 24 hours.
        </p>
      </div>

      <div className="relative">
        {/* Connection line - desktop */}
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sky-200 via-cyan-200 to-orange-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Connector arrow - mobile */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-sky-200 to-cyan-200" />
                )}
                <div className="text-center">
                  <div className="relative inline-block mb-3 lg:mb-4">
                    <div className={`flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${step.color} shadow-xl mx-auto relative z-10`}>
                      <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border-2 border-sky-100 font-bold text-sm text-gray-900 z-20">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}