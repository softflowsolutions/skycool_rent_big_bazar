'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS, SERVICES } from '@/lib/data';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Array<{ type: string; name: string; href: string; price?: number }>>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const productResults = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
      .slice(0, 5)
      .map((p) => ({
        type: 'rent',
        name: p.name,
        href: `/rent/${p.category}/${p.subCategory}/${p.slug}`,
        price: p.pricing.monthly,
      }));
    const serviceResults = SERVICES.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.subCategory.toLowerCase().includes(q)
    )
      .slice(0, 3)
      .map((s) => ({
        type: 'service',
        name: s.name,
        href: `/service/${s.category}/${s.subCategory}/${s.slug}`,
        price: s.startingPrice,
      }));
    setResults([...productResults, ...serviceResults]);
  }, [query]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <section className="container-app -mt-4 lg:-mt-8 relative z-20 mb-8 lg:mb-12">
      <div ref={ref} className="relative max-w-3xl mx-auto">
        <div className="relative">
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-1.5 flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 flex-shrink-0">
              <Search className="h-5 w-5 text-white" />
            </div>
            <input
              type="search"
              placeholder="Search AC, Fridge, Service..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              className="flex-1 bg-transparent outline-none text-sm sm:text-base placeholder:text-gray-400 py-2"
              aria-label="Search"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  setResults([]);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Suggestions */}
        {isOpen && (query || results.length > 0) && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-sky-100 overflow-hidden z-30 max-h-96 overflow-y-auto">
            {results.length === 0 && query && (
              <div className="p-6 text-center text-sm text-gray-500">
                No results found for &quot;{query}&quot;
              </div>
            )}
            {results.length > 0 && (
              <div className="divide-y divide-gray-100">
                {results.map((r, idx) => (
                  <Link
                    key={idx}
                    href={r.href}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery('');
                    }}
                    className="flex items-center justify-between px-4 py-3 hover:bg-sky-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`badge text-[10px] flex-shrink-0 ${
                          r.type === 'rent' ? 'badge-primary' : 'badge-accent'
                        }`}
                      >
                        {r.type === 'rent' ? 'Rent' : 'Service'}
                      </span>
                      <span className="text-sm font-medium text-gray-800 truncate">
                        {r.name}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                ))}
              </div>
            )}
            {!query && (
              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {['1 Ton Split AC', 'Double Door Fridge', 'AC Repair', 'Window AC', 'AMC Service'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs px-3 py-1.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-medium transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}