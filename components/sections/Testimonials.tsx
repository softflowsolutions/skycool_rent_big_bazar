'use client';

import { useEffect, useState, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container-app">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real reviews from real customers across India.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div ref={scrollRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === current ? 'w-6 bg-gray-900' : 'w-1.5 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 6).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 h-full">
      <Quote className="h-6 w-6 text-gray-300 mb-2" />
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-4">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-gray-900 truncate">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-500 truncate">
            {testimonial.city} · {testimonial.product}
          </div>
        </div>
      </div>
    </div>
  );
}