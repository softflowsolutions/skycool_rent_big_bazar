'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Wrench, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export function BottomNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Rent', href: '/rent', icon: Package },
    { label: 'Service', href: '/service', icon: Wrench },
    { label: 'Menu', icon: Menu, action: () => setMenuOpen(true) },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden safe-bottom">
        <div className="relative">
          {/* Gradient blur background */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-sky-100 shadow-2xl" />
          <div className="relative container-app">
            <ul className="flex items-center justify-around h-16 px-1">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = item.href ? pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) : false;

                const content = (
                  <>
                    <Icon
                      className={cn(
                        'h-5 w-5 transition-colors',
                        isActive ? 'text-gray-900' : 'text-gray-500'
                      )}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span
                      className={cn(
                        'text-[10px] font-semibold transition-colors',
                        isActive ? 'text-gray-900' : 'text-gray-500'
                      )}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-1 w-8 rounded-b-full bg-gray-900" />
                    )}
                  </>
                );

                if (item.action) {
                  return (
                    <li key={item.label}>
                      <button
                        onClick={item.action}
                        className="relative flex flex-col items-center justify-center gap-0.5 min-w-[60px] h-full active:scale-95 transition-transform"
                        aria-label={item.label}
                      >
                        {content}
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href!}
                      className="relative flex flex-col items-center justify-center gap-0.5 min-w-[60px] h-full active:scale-95 transition-transform"
                      aria-label={item.label}
                    >
                      {content}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}