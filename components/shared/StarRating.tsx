'use client';

import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showCount?: boolean;
}

export function StarRating({
  rating,
  reviewCount,
  size = 'sm',
  className,
  showCount = true,
}: StarRatingProps) {
  const sizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => {
          if (rating >= i) {
            return (
              <Star
                key={i}
                className={cn(sizes[size], 'fill-amber-400 text-amber-400')}
              />
            );
          }
          if (rating >= i - 0.5) {
            return (
              <StarHalf
                key={i}
                className={cn(sizes[size], 'fill-amber-400 text-amber-400')}
              />
            );
          }
          return (
            <Star
              key={i}
              className={cn(sizes[size], 'text-gray-300')}
            />
          );
        })}
      </div>
      <span className={cn('font-semibold text-gray-700', textSizes[size])}>
        {rating.toFixed(1)}
      </span>
      {showCount && reviewCount !== undefined && (
        <span className={cn('text-gray-500', textSizes[size])}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
}