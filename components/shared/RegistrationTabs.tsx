'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TabDef {
  key: string;
  label: string;
  icon: React.ReactNode;
  /** Standalone page URL — clicking "Open full page" routes there. */
  href: string;
  /** Inline form panel rendered when this tab is active. */
  panel: React.ReactNode;
}

interface RegistrationTabsProps {
  tabs: TabDef[];
  /** Optional className for the outer wrapper. */
  className?: string;
}

/**
 * Tabbed switcher for the Technician / Vendor registration panels.
 * Each tab keeps an active visual state and links to its own dedicated
 * page (`/contact/technician` or `/contact/vendor`) so the user can
 * share a deep link or hit it directly from search.
 */
export function RegistrationTabs({ tabs, className }: RegistrationTabsProps) {
  const [active, setActive] = useState(tabs[0]?.key ?? '');
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  if (!current) return null;

  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8',
        className
      )}
    >
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Registration type"
        className="flex gap-2 mb-6 p-1 bg-gray-50 rounded-xl"
      >
        {tabs.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${t.key}`}
              onClick={() => setActive(t.key)}
              className={cn(
                'flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-sm font-bold transition-all',
                isActive
                  ? 'bg-white text-brand shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              <span className="inline-flex h-5 w-5 items-center justify-center">
                {t.icon}
              </span>
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div
        role="tabpanel"
        id={`tab-panel-${current.key}`}
        aria-labelledby={`tab-${current.key}`}
      >
        {current.panel}
      </div>

      {/* "Open full page" footer link */}
      <div className="mt-6 pt-5 border-t border-gray-100 text-center">
        <Link
          href={current.href}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
        >
          Open {current.label.toLowerCase()} page →
        </Link>
      </div>
    </div>
  );
}
