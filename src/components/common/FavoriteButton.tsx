import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';

interface FavoriteButtonProps {
  gameId: string;
  gameTitle?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  gameId,
  gameTitle = 'este videojuego',
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(gameId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(gameId);
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2.5 text-sm',
    lg: 'px-4 py-2.5 text-base',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
  };

  const labelText = active ? 'En favoritos' : 'Agregar a favoritos';
  const ariaText = active ? `Quitar ${gameTitle} de favoritos` : `Agregar ${gameTitle} a favoritos`;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaText}
      title={ariaText}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
        active
          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.3)] hover:bg-rose-500/30'
          : 'bg-dark-900/80 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/40'
      } ${sizeClasses[size]} ${className}`}
    >
      <Heart
        className={`${iconSizes[size]} transition-transform duration-200 group-hover:scale-110 ${
          active ? 'fill-rose-500 text-rose-500 animate-scale-in' : 'text-slate-400 group-hover:text-white'
        }`}
      />
      {showLabel && <span className="font-medium">{labelText}</span>}
    </button>
  );
};
