'use client';

import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  message: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'compact';
  onClick?: () => void;
}

export function WhatsAppButton({
  message,
  className,
  children,
  variant = 'primary',
  onClick,
}: WhatsAppButtonProps) {
  const link = generateWhatsAppLink(message, SITE_CONFIG.whatsapp);

  const variants = {
    primary:
      'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg',
    outline:
      'bg-white text-green-600 border-2 border-green-500 hover:bg-green-50',
    compact:
      'bg-green-500 text-white hover:bg-green-600',
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-95',
        variant === 'compact' ? 'h-10 w-10' : 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base',
        variants[variant],
        className
      )}
    >
      <MessageCircle className={cn(variant === 'compact' ? 'h-5 w-5' : 'h-4 w-4 sm:h-5 sm:w-5')} />
      {children || (variant !== 'compact' && 'Order on WhatsApp')}
    </a>
  );
}