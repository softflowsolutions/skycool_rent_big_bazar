import { Truck, Wrench, MapPin, Headphones, RotateCcw, ShieldCheck } from 'lucide-react';

const includes = [
  { icon: Truck, text: 'Free delivery & installation' },
  { icon: Wrench, text: 'Free maintenance during rental' },
  { icon: MapPin, text: 'Free relocation within city' },
  { icon: Headphones, text: '24/7 customer support' },
  { icon: RotateCcw, text: 'Easy return policy' },
  { icon: ShieldCheck, text: 'Damage protection coverage' },
];

export function WhatsIncluded() {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-5 sm:p-6 border border-sky-100 h-fit">
      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-4">
        What&apos;s Included
      </h3>
      <ul className="space-y-3">
        {includes.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li key={idx} className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-cool shadow-sm flex-shrink-0">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 pt-1.5">{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}