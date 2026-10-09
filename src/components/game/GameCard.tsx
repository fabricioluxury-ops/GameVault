import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../types/game';
import { RatingBadge } from '../common/RatingBadge';
import { FavoriteButton } from '../common/FavoriteButton';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Monitor, Tv, Smartphone, Layers } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  // Helper para agrupar plataformas en iconos limpios
  const hasPC = game.platforms.some((p) => p === 'PC');
  const hasConsole = game.platforms.some((p) =>
    p.includes('PlayStation') || p.includes('Xbox') || p.includes('Switch')
  );
  const hasMobile = game.platforms.some((p) => p === 'Android' || p === 'iOS');

  return (
    <div className="group relative flex flex-col rounded-2xl bg-dark-900 border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neon overflow-hidden">
      {/* Cover Artwork Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-dark-950">
        <Link
          to={`/juego/${game.slug}`}
          className="block w-full h-full"
          tabIndex={-1}
          aria-hidden="true"
        >
          <ImageWithFallback
            src={game.coverImage}
            alt={`Portada de ${game.title}`}
            fallbackTitle={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          {/* Main Genre */}
          <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-violet-300 border border-white/10">
            {game.genres[0]}
          </span>

          {/* Rating Badge */}
          <div className="pointer-events-auto">
            <RatingBadge rating={game.rating} size="sm" />
          </div>
        </div>

        {/* Favorite Button (top right over hover or direct) */}
        <div className="absolute bottom-3 right-3 z-10">
          <FavoriteButton
            gameId={game.id}
            gameTitle={game.title}
            size="sm"
            className="backdrop-blur-md"
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Title and Release Year */}
        <div className="flex items-baseline justify-between gap-2 mb-1.5">
          <Link
            to={`/juego/${game.slug}`}
            className="text-base sm:text-lg font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-1 focus-visible:outline-none focus-visible:underline"
          >
            {game.title}
          </Link>
          <span className="text-xs font-semibold text-slate-400 flex-shrink-0">
            {game.releaseYear}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-1">
          {game.shortDescription}
        </p>

        {/* Platform tags & View details CTA */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
          {/* Platform icons */}
          <div className="flex items-center gap-1.5 text-slate-400 text-xs" title={game.platforms.join(', ')}>
            {hasPC && (
              <span className="p-1 rounded bg-white/5 text-slate-300 hover:text-white" title="PC">
                <Monitor className="w-3.5 h-3.5" />
              </span>
            )}
            {hasConsole && (
              <span className="p-1 rounded bg-white/5 text-slate-300 hover:text-white" title="Consolas">
                <Tv className="w-3.5 h-3.5" />
              </span>
            )}
            {hasMobile && (
              <span className="p-1 rounded bg-white/5 text-slate-300 hover:text-white" title="Dispositivos Móviles">
                <Smartphone className="w-3.5 h-3.5" />
              </span>
            )}
            <span className="text-[11px] text-slate-400 ml-1 font-medium">
              {game.platforms.length} {game.platforms.length === 1 ? 'plataforma' : 'plataformas'}
            </span>
          </div>

          {/* View Details Link */}
          <Link
            to={`/juego/${game.slug}`}
            className="text-xs font-semibold text-violet-400 hover:text-violet-300 hover:underline flex items-center gap-1"
          >
            Ver detalles
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
