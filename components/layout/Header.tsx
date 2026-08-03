'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Snowflake } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn, generateCallLink } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-md border-b border-sky-100'
            : 'bg-white/70 backdrop-blur-sm'
        )}
      >
        <div className="container-app">
          <div className="flex h-20 lg:h-28 items-center justify-between gap-3">
            {/* Logo — large enough that the embedded brand name is clearly
                legible. The logo file already contains the wordmark so we
                don't render the brand text separately. */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label={`${SITE_CONFIG.name} home`}
            >
              <div className="relative h-14 w-32 sm:h-16 sm:w-40 lg:h-24 lg:w-56 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo/logo.png"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 224px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-semibold rounded-lg transition-all',
                      isActive
                        ? 'text-sky-600'
                        : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gray-900" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={generateCallLink(SITE_CONFIG.phone)}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors"
                aria-label="Call AC on Rent Near Me"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-sky-900/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex h-16 items-center justify-between px-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9">
                <Image
                  src="/images/logo/logo.png"
                  alt="AC on Rent Near Me"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-gray-900">AC on Rent</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all',
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs">→</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
                Quick Actions
              </p>
              <div className="space-y-2">
                <a
                  href={generateCallLink(SITE_CONFIG.phone)}
                  className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white rounded-xl py-3 font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  Call: {SITE_CONFIG.phone.replace('+91', '+91 ')}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
                Cities We Serve
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Pune'].map((city) => (
                  <span
                    key={city}
                    className="text-xs px-2 py-1 rounded-md bg-sky-50 text-sky-700 font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-28" />
    </>
  );
}