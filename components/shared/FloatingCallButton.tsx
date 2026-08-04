'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { cn, generateCallLink } from '@/lib/utils';

export function FloatingCallButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={generateCallLink(SITE_CONFIG.phone)}
      className={cn(
        'fixed bottom-24 lg:bottom-6 right-4 z-30 flex items-center justify-center h-14 w-14 rounded-full bg-accent text-brand shadow-2xl hover:bg-accent-dark hover:shadow-lg hover:scale-110 transition-all duration-300',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="Call Rent BigBazar"
    >
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
      <Phone className="h-6 w-6 relative z-10" strokeWidth={2.5} />
    </a>
  );
}