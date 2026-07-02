'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<string | null>(FAQS[0]?.id || null);

  return (
    <section className="container-app section-padding">
      <div className="text-center mb-10 lg:mb-14">
        <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">
          Got Questions?
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Everything you need to know about our rentals & services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq) => {
          const isOpen = open === faq.id;
          return (
            <div
              key={faq.id}
              className={cn(
                'bg-white rounded-2xl border transition-all overflow-hidden',
                isOpen ? 'border-sky-300 shadow-lg' : 'border-gray-200 shadow-sm hover:shadow-md'
              )}
            >
              <button
                onClick={() => setOpen(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm sm:text-base text-gray-900">
                  {faq.question}
                </span>
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600 flex-shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-180 bg-sky-500 text-white'
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}