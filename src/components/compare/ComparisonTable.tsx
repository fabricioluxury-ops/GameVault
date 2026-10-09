import React, { useState } from 'react';
import { Game } from '../../types/game';
import { RatingBadge } from '../common/RatingBadge';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { GameSelectorModal } from './GameSelectorModal';
import { RefreshCw, CheckCircle2, Clock, Calendar, Building2, Layers, Gamepad2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComparisonTableProps {
  game1: Game;
  game2: Game;
  onSelectGame1: (game: Game) => void;
  onSelectGame2: (game: Game) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  game1,
  game2,
  onSelectGame1,
  onSelectGame2,
}) => {
  const [modalSlot, setModalSlot] = useState<1 | 2 | null>(null);

  const rows = [
    {
      title: 'Calificación',
      icon: Layers,
      render: () => (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <RatingBadge rating={game1.rating} size="md" showMax />
          </div>
          <div className="flex items-center gap-2">
            <RatingBadge rating={game2.rating} size="md" showMax />
          </div>
        </div>
      ),
    },
    {
      title: 'Géneros',
      icon: Layers,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="flex flex-wrap gap-1.5">
            {game1.genres.map((g) => (
              <span key={g} className="px-2 py-0.5 rounded-md bg-white/5 text-violet-300 font-medium border border-white/5">
                {g}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {game2.genres.map((g) => (
              <span key={g} className="px-2 py-0.5 rounded-md bg-white/5 text-violet-300 font-medium border border-white/5">
                {g}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Fecha de lanzamiento',
      icon: Calendar,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
          <div>{game1.releaseDate} ({game1.releaseYear})</div>
          <div>{game2.releaseDate} ({game2.releaseYear})</div>
        </div>
      ),
    },
    {
      title: 'Desarrollador',
      icon: Building2,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
          <div>{game1.developer}</div>
          <div>{game2.developer}</div>
        </div>
      ),
    },
    {
      title: 'Distribuidor',
      icon: Building2,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
          <div>{game1.publisher}</div>
          <div>{game2.publisher}</div>
        </div>
      ),
    },
    {
      title: 'Plataformas',
      icon: Gamepad2,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="flex flex-wrap gap-1">
            {game1.platforms.map((p) => (
              <span key={p} className="px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-white/5">
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {game2.platforms.map((p) => (
              <span key={p} className="px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-white/5">
                {p}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Modos de juego',
      icon: Users,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
          <div>{game1.modes.join(', ')}</div>
          <div>{game2.modes.join(', ')}</div>
        </div>
      ),
    },
    {
      title: 'Tiempo promedio de juego',
      icon: Clock,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-slate-200">
          <div className="flex items-center gap-1.5 text-violet-300">
            <Clock className="w-4 h-4 text-violet-400 flex-shrink-0" />
            {game1.averagePlaytime}
          </div>
          <div className="flex items-center gap-1.5 text-violet-300">
            <Clock className="w-4 h-4 text-violet-400 flex-shrink-0" />
            {game2.averagePlaytime}
          </div>
        </div>
      ),
    },
    {
      title: 'Descripción',
      icon: Layers,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>{game1.shortDescription}</p>
          <p>{game2.shortDescription}</p>
        </div>
      ),
    },
    {
      title: 'Características clave',
      icon: CheckCircle2,
      render: () => (
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
          <ul className="space-y-2">
            {game1.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {game2.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Sticky Header with Game Covers and Selection */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 bg-dark-900 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
        {/* Game 1 Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-24 sm:w-32 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
            <ImageWithFallback
              src={game1.coverImage}
              alt={game1.title}
              fallbackTitle={game1.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Link
              to={`/juego/${game1.slug}`}
              className="text-base sm:text-xl font-bold text-white hover:text-violet-400 transition-colors line-clamp-1"
            >
              {game1.title}
            </Link>
            <span className="text-xs text-slate-400">{game1.releaseYear}</span>
          </div>
          <button
            type="button"
            onClick={() => setModalSlot(1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 text-xs font-semibold border border-violet-500/30 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Cambiar juego 1
          </button>
        </div>

        {/* Game 2 Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-24 sm:w-32 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
            <ImageWithFallback
              src={game2.coverImage}
              alt={game2.title}
              fallbackTitle={game2.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Link
              to={`/juego/${game2.slug}`}
              className="text-base sm:text-xl font-bold text-white hover:text-violet-400 transition-colors line-clamp-1"
            >
              {game2.title}
            </Link>
            <span className="text-xs text-slate-400">{game2.releaseYear}</span>
          </div>
          <button
            type="button"
            onClick={() => setModalSlot(2)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 text-xs font-semibold border border-violet-500/30 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Cambiar juego 2
          </button>
        </div>
      </div>

      {/* Comparison Rows */}
      <div className="rounded-2xl bg-dark-900 border border-white/10 overflow-hidden divide-y divide-white/5">
        {rows.map((row, index) => {
          const Icon = row.icon;
          return (
            <div key={index} className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-violet-400" />
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                  {row.title}
                </h4>
              </div>
              <div>{row.render()}</div>
            </div>
          );
        })}
      </div>

      {/* Selector Modal */}
      {modalSlot !== null && (
        <GameSelectorModal
          isOpen={true}
          slotNumber={modalSlot}
          currentGameId={modalSlot === 1 ? game1.id : game2.id}
          onClose={() => setModalSlot(null)}
          onSelectGame={(selected) => {
            if (modalSlot === 1) onSelectGame1(selected);
            else onSelectGame2(selected);
          }}
        />
      )}
    </div>
  );
};
