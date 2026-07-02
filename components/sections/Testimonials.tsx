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
    <section className="bg-gradient-to-br from-sky-900 via-blue-900 to-cyan-900 text-white section-padding overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-app relative">
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">
            What Our Customers Say
          </h2>
          <p className="text-sky-100 max-w-2xl mx-auto text-sm sm:text-base">
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
                  idx === current ? 'w-8 bg-cyan-400' : 'w-1.5 bg-white/30'
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
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all h-full">
      <Quote className="h-8 w-8 text-cyan-400 mb-3" />
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-sky-50 leading-relaxed mb-4 line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-cool text-white font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-white truncate">
            {testimonial.name}
          </div>
          <div className="text-xs text-sky-200 truncate">
            {testimonial.city} • {testimonial.product}
          </div>
        </div>
      </div>
    </div>
  );
}