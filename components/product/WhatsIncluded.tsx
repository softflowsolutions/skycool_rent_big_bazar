import { Truck, Wrench, MapPin, Headphones, RotateCcw, ShieldCheck } from 'lucide-react';

const includes = [
  { icon: Truck, text: 'Delivery & installation (charges applicable)' },
  { icon: Wrench, text: 'Maintenance support during rental' },
  { icon: MapPin, text: 'Relocation within city (charges applicable)' },
  { icon: Headphones, text: '24/7 customer support' },
  { icon: RotateCcw, text: 'Easy return policy' },
  { icon: ShieldCheck, text: 'Damage protection coverage' },
];

export function WhatsIncluded() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 h-fit">
      <h3 className="font-semibold text-lg text-gray-900 mb-2">
        What&apos;s Included
      </h3>
      <p className="text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1.5 mb-4">
        Charges applicable on delivery and installation.
      </p>
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