import React from 'react';
import { Link } from 'react-router-dom';
import { genresData } from '../data/genresData';
import { gamesData } from '../data/gamesData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { Layers, ArrowRight } from 'lucide-react';

export const GenresPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="text-center sm:text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-violet-400" />
          <span>Categorías y Estilos</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Explora por géneros
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Desde profundas aventuras de rol hasta disparos vertiginosos y simuladores de vida relajantes. Encuentra juegos según la experiencia que buscas.
        </p>
      </div>

      {/* Genres Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {genresData.map((genre) => {
          const gameCount = gamesData.filter((g) => g.genres.includes(genre.name)).length;

          return (
            <Link
              key={genre.id}
              to={`/explorar?genero=${encodeURIComponent(genre.name)}`}
              className="group relative flex flex-col rounded-2xl bg-dark-900 border border-white/10 overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neon"
            >
              {/* Artwork Banner */}
              <div className="relative w-full h-44 overflow-hidden bg-dark-950">
                <ImageWithFallback
                  src={genre.image}
                  alt={`Género ${genre.name}`}
                  fallbackTitle={genre.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                {/* Badge Count */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs font-bold text-violet-300 border border-white/10">
                    {gameCount} {gameCount === 1 ? 'videojuego' : 'videojuegos'}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    {genre.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                    {genre.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-violet-400 group-hover:text-violet-300">
                  <span>Ver catálogo de {genre.name}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
