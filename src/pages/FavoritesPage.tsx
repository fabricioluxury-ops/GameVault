import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { gamesData } from '../data/gamesData';
import { GameGrid } from '../components/game/GameGrid';
import { Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FavoritesPage: React.FC = () => {
  const { favorites, clearFavorites } = useFavorites();

  const favoriteGames = gamesData.filter((game) => favorites.includes(game.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-2">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Colección Personal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mis videojuegos favoritos
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-1">
            {favoriteGames.length === 0
              ? 'Guarda los videojuegos que más te gusten para consultarlos cuando quieras.'
              : `Tienes ${favoriteGames.length} ${
                  favoriteGames.length === 1 ? 'juego guardado' : 'juegos guardados'
                } en tu biblioteca local.`}
          </p>
        </div>

        {favoriteGames.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearFavorites}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 text-xs font-semibold border border-white/10 hover:border-rose-500/30 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpiar lista</span>
            </button>
            <Link
              to="/explorar"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-neon transition-colors"
            >
              Explorar más juegos
            </Link>
          </div>
        )}
      </div>

      {/* Grid or Empty State */}
      <GameGrid
        games={favoriteGames}
        emptyTitle="Todavía no tienes videojuegos favoritos."
        emptyDescription="Explora nuestro catálogo, haz clic en el corazón de cualquier tarjeta de juego y aparecerá aquí automáticamente."
        emptyActionText="Explorar videojuegos"
        emptyActionHref="/explorar"
      />
    </div>
  );
};
