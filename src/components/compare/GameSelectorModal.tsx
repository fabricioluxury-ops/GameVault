import React, { useState } from 'react';
import { Game } from '../../types/game';
import { gamesData } from '../../data/gamesData';
import { Search, X, Check } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { RatingBadge } from '../common/RatingBadge';

interface GameSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGame: (game: Game) => void;
  currentGameId?: string;
  slotNumber: 1 | 2;
}

export const GameSelectorModal: React.FC<GameSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectGame,
  currentGameId,
  slotNumber,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = gamesData.filter((g) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      g.title.toLowerCase().includes(q) ||
      g.genres.some((genre) => genre.toLowerCase().includes(q)) ||
      g.developer.toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Seleccionar videojuego para la posición ${slotNumber}`}
    >
      <div
        className="w-full max-w-xl bg-dark-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark-850">
          <div>
            <h3 className="text-base font-bold text-white">
              Seleccionar videojuego #{slotNumber}
            </h3>
            <p className="text-xs text-slate-400">
              Elige el juego que deseas colocar en esta columna
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-4 border-b border-white/5">
          <div className="relative">
            <Search className="w-4 h-4 text-violet-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filtrar por título, género o desarrollador..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              autoFocus
            />
          </div>
        </div>

        {/* List of games */}
        <div className="overflow-y-auto p-2 divide-y divide-white/5 flex-1">
          {filtered.length > 0 ? (
            filtered.map((game) => {
              const isSelected = game.id === currentGameId;
              return (
                <div
                  key={game.id}
                  onClick={() => {
                    onSelectGame(game);
                    onClose();
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-violet-600/20 border border-violet-500/30' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-12 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                    <ImageWithFallback
                      src={game.coverImage}
                      alt={game.title}
                      fallbackTitle={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{game.title}</h4>
                    <p className="text-xs text-slate-400 truncate">
                      {game.releaseYear} • {game.genres.join(', ')}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">{game.developer}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <RatingBadge rating={game.rating} size="sm" />
                    {isSelected && <Check className="w-4 h-4 text-violet-400" />}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-slate-400 text-sm">
              No se encontraron videojuegos con ese término de búsqueda.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
