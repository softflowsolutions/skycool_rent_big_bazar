import Link from 'next/link';
import Image from 'next/image';
import { Wrench } from 'lucide-react';
import type { Service } from '@/types';
import { formatPrice } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const href = `/service/${service.category}/${service.subCategory}/${service.slug}`;

  return (
    <Link
      href={href}
      className={`group block bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-md ${className || ''}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        {service.comingSoon && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded">
              Coming Soon
            </span>
          </div>
        )}
        <Image
          src={service.images[0]}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3.5">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1 leading-snug min-h-[2.5rem] group-hover:text-gray-700">
          {service.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2 min-h-[2rem]">
          {service.description}
        </p>
        {service.comingSoon ? (
          <div className="flex items-center gap-1.5 mb-2">
            <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
              Coming Soon
            </span>
          </div>
        ) : (
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-base font-bold text-gray-900">₹{service.startingPrice}</span>
            <span className="text-xs text-gray-500">onwards</span>
          </div>
        )}
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">{service.duration}</span>
          {service.comingSoon ? (
            <span className="inline-flex items-center gap-1 font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded cursor-not-allowed">
              Coming Soon
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
              <Wrench className="h-3.5 w-3.5" />
              Book
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}