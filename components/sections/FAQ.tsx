'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<string | null>(FAQS[0]?.id || null);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-app">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know about our rentals & services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {FAQS.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  'bg-white border rounded-md overflow-hidden transition-colors',
                  isOpen ? 'border-gray-900' : 'border-gray-200'
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 flex-shrink-0 text-gray-500 transition-transform duration-200',
                      isOpen && 'rotate-180 text-gray-900'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-200',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}