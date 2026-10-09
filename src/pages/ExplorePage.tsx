import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gamesData } from '../data/gamesData';
import { Game, SortOption } from '../types/game';
import { FilterPanel } from '../components/game/FilterPanel';
import { GameGrid } from '../components/game/GameGrid';
import { Search, Compass, Sparkles } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Estados de filtro sincronizados con URL
  const initialSearch = searchParams.get('q') || '';
  const initialGenre = searchParams.get('genero') || '';
  const initialPlatform = searchParams.get('plataforma') || '';
  const initialMode = searchParams.get('modo') || '';
  const initialSort = (searchParams.get('orden') as SortOption) || 'relevance';

  const [searchInput, setSearchInput] = useState(initialSearch);
  const debouncedSearch = useDebounce(searchInput, 250);

  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedPlatform, setSelectedPlatform] = useState(initialPlatform);
  const [selectedMode, setSelectedMode] = useState(initialMode);
  const [selectedSort, setSelectedSort] = useState<SortOption>(initialSort);
  const [visibleCount, setVisibleCount] = useState(12);

  // Sincronizar hacia URL cuando cambien los filtros
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearch.trim()) params.set('q', debouncedSearch.trim());
    if (selectedGenre) params.set('genero', selectedGenre);
    if (selectedPlatform) params.set('plataforma', selectedPlatform);
    if (selectedMode) params.set('modo', selectedMode);
    if (selectedSort !== 'relevance') params.set('orden', selectedSort);

    setSearchParams(params, { replace: true });
    setVisibleCount(12); // reset pagination when filters change
  }, [debouncedSearch, selectedGenre, selectedPlatform, selectedMode, selectedSort, setSearchParams]);

  // Filtrado reactivo y ordenamiento
  const filteredGames = useMemo(() => {
    return gamesData
      .filter((game) => {
        // Filtro de búsqueda textual
        if (debouncedSearch.trim()) {
          const q = debouncedSearch.toLowerCase().trim();
          const matchTitle = game.title.toLowerCase().includes(q);
          const matchGenre = game.genres.some((g) => g.toLowerCase().includes(q));
          const matchDev = game.developer.toLowerCase().includes(q);
          const matchPub = game.publisher.toLowerCase().includes(q);
          const matchPlat = game.platforms.some((p) => p.toLowerCase().includes(q));
          if (!matchTitle && !matchGenre && !matchDev && !matchPub && !matchPlat) {
            return false;
          }
        }

        // Filtro de género
        if (selectedGenre && !game.genres.includes(selectedGenre as any)) {
          return false;
        }

        // Filtro de plataforma
        if (selectedPlatform && !game.platforms.includes(selectedPlatform as any)) {
          return false;
        }

        // Filtro de modo de juego
        if (selectedMode && !game.modes.includes(selectedMode as any)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (selectedSort) {
          case 'rating-desc':
            return b.rating - a.rating;
          case 'popular':
            return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.rating - a.rating;
          case 'recent':
            return b.releaseYear - a.releaseYear;
          case 'name-asc':
            return a.title.localeCompare(b.title);
          case 'name-desc':
            return b.title.localeCompare(a.title);
          case 'relevance':
          default:
            return 0; // Orden original del catálogo
        }
      });
  }, [debouncedSearch, selectedGenre, selectedPlatform, selectedMode, selectedSort]);

  const handleResetFilters = () => {
    setSearchInput('');
    setSelectedGenre('');
    setSelectedPlatform('');
    setSelectedMode('');
    setSelectedSort('relevance');
    setVisibleCount(12);
  };

  const isFiltered =
    searchInput.trim() !== '' ||
    selectedGenre !== '' ||
    selectedPlatform !== '' ||
    selectedMode !== '' ||
    selectedSort !== 'relevance';

  const displayedGames = filteredGames.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center sm:text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5 text-violet-400" />
          <span>Catálogo de Videojuegos</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Explorar videojuegos
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Navega a través de todo nuestro catálogo, filtra por género, plataforma o modo de juego y encuentra tu próxima gran historia interactiva.
        </p>
      </div>

      {/* Prominent Search Input */}
      <div className="relative w-full">
        <Search className="w-5 h-5 text-violet-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Buscar videojuegos por nombre, género, desarrollador o plataforma..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-dark-900 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-xl text-sm sm:text-base"
        />
      </div>

      {/* Filter & Sorting Controls */}
      <FilterPanel
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
        selectedPlatform={selectedPlatform}
        onSelectPlatform={setSelectedPlatform}
        selectedMode={selectedMode}
        onSelectMode={setSelectedMode}
        selectedSort={selectedSort}
        onSelectSort={setSelectedSort}
        onResetFilters={handleResetFilters}
        totalResults={filteredGames.length}
        isFiltered={isFiltered}
      />

      {/* Games Grid with dynamic results */}
      <GameGrid
        games={displayedGames}
        emptyTitle="No encontramos videojuegos que coincidan con tu búsqueda."
        emptyDescription="Prueba cambiando los filtros seleccionados o ingresando un término de búsqueda diferente."
        emptyActionText="Limpiar todos los filtros"
        onEmptyAction={handleResetFilters}
      />

      {/* Load More Button */}
      {visibleCount < filteredGames.length && (
        <div className="text-center pt-8 pb-4">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-dark-850 hover:bg-dark-800 text-white font-bold text-sm border border-white/10 hover:border-violet-500/40 shadow-xl transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span>Cargar más videojuegos ({filteredGames.length - visibleCount} restantes)</span>
          </button>
        </div>
      )}
    </div>
  );
};
