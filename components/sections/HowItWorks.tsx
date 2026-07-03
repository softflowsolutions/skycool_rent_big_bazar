import { Search, Calendar, MessageCircle, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose Product',
    description: 'Browse our wide range of ACs and Fridges',
  },
  {
    icon: Calendar,
    title: 'Select Plan',
    description: 'Pick duration & quantity',
  },
  {
    icon: MessageCircle,
    title: 'Place Order',
    description: 'Confirm via WhatsApp or Call',
  },
  {
    icon: Truck,
    title: 'Get Delivered',
    description: 'Free delivery & installation',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-app">
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Rent in 4 Easy Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            From selection to delivery in less than 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative text-center">
                <div className="relative inline-block mb-3">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gray-900 text-white mx-auto">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-gray-900 text-gray-900 font-bold text-xs">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}