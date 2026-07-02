'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Star, Sparkles } from 'lucide-react';
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
      className={`group block relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className || ''}`}
    >
      {service.rating >= 4.8 && (
        <div className="absolute top-3 right-3 z-10">
          <span className="badge-accent text-[10px]">
            <Sparkles className="h-3 w-3" />
            Top Rated
          </span>
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-50">
        <Image
          src={service.images[0]}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="font-display font-semibold text-sm sm:text-base text-gray-900 line-clamp-2 mb-2 group-hover:text-sky-600 transition-colors min-h-[2.5rem]">
          {service.name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {service.description}
        </p>

        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="font-semibold">{service.rating}</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2 pt-3 border-t border-gray-100">
          <div>
            <div className="text-[10px] text-gray-500">Starting at</div>
            <div className="text-base sm:text-lg font-bold text-gradient">
              {formatPrice(service.startingPrice)}
              <span className="text-[10px] font-normal text-gray-500"> onwards</span>
            </div>
          </div>
          <div className="text-[10px] text-gray-500 group-hover:text-sky-600 transition-colors flex items-center gap-1 font-semibold">
            <span>Book Now</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}