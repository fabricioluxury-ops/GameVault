import React from 'react';
import { Star } from 'lucide-react';

interface RatingBadgeProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  showMax?: boolean;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({
  rating,
  size = 'md',
  showIcon = true,
  showMax = false,
}) => {
  // Determinar paleta según el puntaje
  let colorClasses = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
  let iconColor = 'text-emerald-400 fill-emerald-400';

  if (rating >= 90) {
    colorClasses = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]';
    iconColor = 'text-emerald-400 fill-emerald-400';
  } else if (rating >= 80) {
    colorClasses = 'bg-violet-500/15 text-violet-400 border-violet-500/30 shadow-[0_0_12px_rgba(139,92,246,0.2)]';
    iconColor = 'text-violet-400 fill-violet-400';
  } else if (rating >= 70) {
    colorClasses = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
    iconColor = 'text-amber-400 fill-amber-400';
  } else {
    colorClasses = 'bg-red-500/15 text-red-400 border-red-500/30';
    iconColor = 'text-red-400 fill-red-400';
  }

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1 font-semibold',
    md: 'text-sm px-2.5 py-1 gap-1.5 font-bold',
    lg: 'text-base px-3.5 py-1.5 gap-2 font-extrabold',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  };

  return (
    <div
      className={`inline-flex items-center rounded-lg border backdrop-blur-md transition-all ${colorClasses} ${sizeClasses[size]}`}
      title={`Calificación: ${rating}/100`}
      aria-label={`Calificación de ${rating} sobre 100`}
    >
      {showIcon && <Star className={`${iconSizes[size]} ${iconColor}`} />}
      <span>
        {rating}
        {showMax && <span className="text-[10px] opacity-75 font-normal ml-0.5">/100</span>}
      </span>
    </div>
  );
};
