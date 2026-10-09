import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Gamepad2, ArrowRight } from 'lucide-react';
import { gamesData } from '../../data/gamesData';
import { Game } from '../../types/game';
import { RatingBadge } from './RatingBadge';
import { ImageWithFallback } from './ImageWithFallback';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Game[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }

    const filtered = gamesData.filter((g) => {
      const matchTitle = g.title.toLowerCase().includes(trimmed);
      const matchGenre = g.genres.some((genre) => genre.toLowerCase().includes(trimmed));
      const matchDev = g.developer.toLowerCase().includes(trimmed);
      const matchPub = g.publisher.toLowerCase().includes(trimmed);
      const matchPlatform = g.platforms.some((p) => p.toLowerCase().includes(trimmed));
      return matchTitle || matchGenre || matchDev || matchPub || matchPlatform;
    });

    setResults(filtered.slice(0, 8));
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectGame = (slug: string) => {
    onClose();
    navigate(`/juego/${slug}`);
  };

  const handleGoToCatalog = () => {
    onClose();
    navigate(`/explorar?q=${encodeURIComponent(query)}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Búsqueda global de videojuegos"
    >
      <div
        className="w-full max-w-2xl bg-dark-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-dark-850">
          <Search className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar videojuegos por nombre, género, desarrollador o plataforma..."
            className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white rounded-md mr-1"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Search Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-slate-400">
              <Gamepad2 className="w-10 h-10 mx-auto text-violet-500/40 mb-3" />
              <p className="text-sm font-medium text-slate-300">Escribe algo para comenzar a buscar</p>
              <p className="text-xs text-slate-500 mt-1">Prueba con "Elden Ring", "Nintendo", "RPG", "Capcom" o "PC"</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Videojuegos encontrados ({results.length})
              </div>
              {results.map((game) => (
                <div
                  key={game.id}
                  onClick={() => handleSelectGame(game.slug)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group"
                >
                  <div className="w-12 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                    <ImageWithFallback
                      src={game.coverImage}
                      alt={game.title}
                      fallbackTitle={game.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white truncate group-hover:text-violet-400 transition-colors">
                        {game.title}
                      </h4>
                      <span className="text-xs text-slate-400">({game.releaseYear})</span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {game.genres.join(', ')} • {game.developer}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                      {game.platforms.slice(0, 3).map((p) => (
                        <span key={p} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                          {p}
                        </span>
                      ))}
                      {game.platforms.length > 3 && (
                        <span className="text-[10px] text-slate-400">+{game.platforms.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-2">
                    <RatingBadge rating={game.rating} size="sm" />
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}

              {results.length >= 8 && (
                <button
                  type="button"
                  onClick={handleGoToCatalog}
                  className="w-full text-center py-2.5 text-xs text-violet-400 hover:text-violet-300 font-semibold border-t border-white/5 mt-2"
                >
                  Ver todos los resultados en el catálogo →
                </button>
              )}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-10 h-10 mx-auto text-slate-600 mb-3" />
              <p className="text-sm font-semibold text-slate-300">No encontramos videojuegos que coincidan con tu búsqueda.</p>
              <p className="text-xs text-slate-500 mt-1">Verifica la ortografía o intenta buscar por otro término.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
