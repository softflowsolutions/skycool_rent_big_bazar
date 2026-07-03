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
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 h-fit">
      <h3 className="font-semibold text-lg text-gray-900 mb-4">
        What&apos;s Included
      </h3>
      <ul className="space-y-2.5">
        {includes.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li key={idx} className="flex items-start gap-2.5">
              <Icon className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}