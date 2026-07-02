'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpecificationsProps {
  specs: Record<string, string>;
}

export function Specifications({ specs }: SpecificationsProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5"
        aria-expanded={expanded}
      >
        <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900">
          Full Specifications
        </h3>
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-transform',
            expanded && 'rotate-180 bg-sky-500 text-white'
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <div
        className={cn(
          'grid transition-all duration-300',
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 sm:pb-6">
            <div className="divide-y divide-gray-100">
              {Object.entries(specs).map(([key, value], idx) => (
                <div
                  key={key}
                  className={`flex items-center justify-between py-2.5 ${idx % 2 === 0 ? 'sm:bg-sky-50/30 sm:-mx-2 sm:px-2 rounded-lg' : ''}`}
                >
                  <span className="text-sm font-semibold text-gray-700">{key}</span>
                  <span className="text-sm text-gray-900 text-right max-w-[60%]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}