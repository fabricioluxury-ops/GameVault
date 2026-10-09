import React from 'react';
import { Filter, RotateCcw, ChevronDown, Check } from 'lucide-react';
import { Genre, Platform, GameMode, SortOption } from '../../types/game';

interface FilterPanelProps {
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
  selectedMode: string;
  onSelectMode: (mode: string) => void;
  selectedSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
  onResetFilters: () => void;
  totalResults: number;
  isFiltered: boolean;
}

const genresList: Genre[] = [
  'Acción',
  'Aventura',
  'RPG',
  'Estrategia',
  'Terror',
  'Deportes',
  'Carreras',
  'Simulación',
  'Plataformas',
  'Indie',
  'Shooter',
  'Sandbox',
];

const platformsList: Platform[] = [
  'PC',
  'PlayStation 5',
  'PlayStation 4',
  'Xbox Series X|S',
  'Xbox One',
  'Nintendo Switch',
  'Nintendo Switch 2',
  'Android',
  'iOS',
];

const modesList: GameMode[] = ['Un jugador', 'Multijugador', 'Cooperativo'];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'Más relevantes' },
  { value: 'rating-desc', label: 'Mejor valorados' },
  { value: 'popular', label: 'Más populares' },
  { value: 'recent', label: 'Más recientes' },
  { value: 'name-asc', label: 'Nombre A-Z' },
  { value: 'name-desc', label: 'Nombre Z-A' },
];

export const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedGenre,
  onSelectGenre,
  selectedPlatform,
  onSelectPlatform,
  selectedMode,
  onSelectMode,
  selectedSort,
  onSelectSort,
  onResetFilters,
  totalResults,
  isFiltered,
}) => {
  return (
    <div className="w-full bg-dark-900/80 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl mb-8 space-y-6">
      {/* Header with Result Count & Reset Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Filtros y Ordenamiento</h3>
            <p className="text-xs text-violet-400 font-semibold mt-0.5">
              {totalResults} {totalResults === 1 ? 'videojuego encontrado' : 'videojuegos encontrados'}
            </p>
          </div>
        </div>

        {/* Action Controls: Reset & Sort */}
        <div className="flex flex-wrap items-center gap-3">
          {isFiltered && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-violet-400" />
              Limpiar filtros
            </button>
          )}

          {/* Sort Dropdown */}
          <div className="relative inline-flex items-center">
            <span className="text-xs text-slate-400 mr-2 hidden sm:inline">Ordenar por:</span>
            <select
              value={selectedSort}
              onChange={(e) => onSelectSort(e.target.value as SortOption)}
              className="bg-dark-850 hover:bg-dark-800 text-slate-200 text-xs font-semibold px-3 py-2 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors cursor-pointer appearance-none pr-8"
              aria-label="Criterio de ordenamiento"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-dark-900 text-white">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filter Options Grid */}
      <div className="space-y-4">
        {/* Genre Pills */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Género
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => onSelectGenre('')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedGenre === ''
                  ? 'bg-violet-600 text-white shadow-neon'
                  : 'bg-dark-800 hover:bg-dark-700 text-slate-300 border border-white/5'
              }`}
            >
              Todos los géneros
            </button>
            {genresList.map((g) => {
              const active = selectedGenre === g;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => onSelectGenre(active ? '' : g)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-violet-600 text-white shadow-neon'
                      : 'bg-dark-800 hover:bg-dark-700 text-slate-300 border border-white/5 hover:border-violet-500/30'
                  }`}
                >
                  {active && <Check className="w-3 h-3" />}
                  {g}
                </button>
              );
            })}
          </div>
        </div>

        {/* Platform Pills */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Plataforma
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => onSelectPlatform('')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedPlatform === ''
                  ? 'bg-violet-600 text-white shadow-neon'
                  : 'bg-dark-800 hover:bg-dark-700 text-slate-300 border border-white/5'
              }`}
            >
              Todas las plataformas
            </button>
            {platformsList.map((p) => {
              const active = selectedPlatform === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => onSelectPlatform(active ? '' : p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-violet-600 text-white shadow-neon'
                      : 'bg-dark-800 hover:bg-dark-700 text-slate-300 border border-white/5 hover:border-violet-500/30'
                  }`}
                >
                  {active && <Check className="w-3 h-3" />}
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        {/* Game Mode Pills */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Modo de juego
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => onSelectMode('')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedMode === ''
                  ? 'bg-violet-600 text-white shadow-neon'
                  : 'bg-dark-800 hover:bg-dark-700 text-slate-300 border border-white/5'
              }`}
            >
              Todos los modos
            </button>
            {modesList.map((m) => {
              const active = selectedMode === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => onSelectMode(active ? '' : m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-violet-600 text-white shadow-neon'
                      : 'bg-dark-800 hover:bg-dark-700 text-slate-300 border border-white/5 hover:border-violet-500/30'
                  }`}
                >
                  {active && <Check className="w-3 h-3" />}
                  {m}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
