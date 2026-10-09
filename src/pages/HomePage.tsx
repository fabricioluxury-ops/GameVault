import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { gamesData } from '../data/gamesData';
import { genresData } from '../data/genresData';
import { GameCard } from '../components/game/GameCard';
import { Search, Sparkles, Flame, Trophy, Clock, ArrowRight, Gamepad2, ShieldCheck, Compass } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/explorar?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/explorar');
    }
  };

  // Filtrado de secciones
  const featuredGames = gamesData.filter((g) => g.isFeatured).slice(0, 4);
  const popularGames = gamesData.filter((g) => g.isPopular).slice(0, 8);
  const topRatedGames = [...gamesData].sort((a, b) => b.rating - a.rating).slice(0, 8);
  const recentGames = gamesData.filter((g) => g.isRecent).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-violet-600/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 text-xs font-semibold shadow-neon animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>La enciclopedia definitiva de videojuegos en español</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] animate-fade-in">
            Descubre tu próximo <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 text-glow">
              videojuego favorito
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explora cientos de videojuegos, descubre nuevas experiencias y encuentra el juego perfecto para ti.
          </p>

          {/* Search Bar Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-2xl mx-auto pt-2 relative flex items-center"
          >
            <div className="relative w-full">
              <Search className="w-5 h-5 text-violet-400 absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar videojuegos..."
                className="w-full pl-12 sm:pl-14 pr-36 sm:pr-44 py-4 rounded-2xl bg-dark-900/90 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-2xl backdrop-blur-xl text-sm sm:text-base"
              />
              <button
                type="submit"
                className="absolute right-2 sm:right-2.5 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm transition-all shadow-neon hover:shadow-neon-hover active:scale-95"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* Quick Genre Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
            <span className="text-slate-400 mr-1">Populares:</span>
            {genresData.slice(0, 6).map((g) => (
              <Link
                key={g.id}
                to={`/explorar?genero=${encodeURIComponent(g.name)}`}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-violet-600/20 hover:text-violet-300 text-slate-300 border border-white/10 hover:border-violet-500/40 transition-all font-medium"
              >
                {g.name}
              </Link>
            ))}
          </div>

          {/* Primary CTA Button */}
          <div className="pt-4">
            <Link
              to="/explorar"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold text-base transition-all shadow-neon hover:shadow-neon-hover active:scale-95 group"
            >
              <Compass className="w-5 h-5 text-white group-hover:rotate-45 transition-transform" />
              <span>Explorar videojuegos</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto border-t border-white/10 mt-8">
            <div className="p-3 rounded-xl bg-dark-900/50 border border-white/5">
              <span className="block text-2xl font-black text-white">+44</span>
              <span className="text-xs text-slate-400">Juegos Analizados</span>
            </div>
            <div className="p-3 rounded-xl bg-dark-900/50 border border-white/5">
              <span className="block text-2xl font-black text-violet-400">12</span>
              <span className="text-xs text-slate-400">Géneros Temáticos</span>
            </div>
            <div className="p-3 rounded-xl bg-dark-900/50 border border-white/5">
              <span className="block text-2xl font-black text-cyan-400">9</span>
              <span className="text-xs text-slate-400">Plataformas Clave</span>
            </div>
            <div className="p-3 rounded-xl bg-dark-900/50 border border-white/5">
              <span className="block text-2xl font-black text-emerald-400">100%</span>
              <span className="text-xs text-slate-400">Español Latino</span>
            </div>
          </div>
        </div>
      </section>

      {/* JUEGOS DESTACADOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Selección Editorial</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Juegos destacados
            </h2>
          </div>
          <Link
            to="/explorar"
            className="text-sm font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* MÁS POPULARES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4" />
              <span>Tendencias de la Comunidad</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Más populares
            </h2>
          </div>
          <Link
            to="/explorar?orden=popular"
            className="text-sm font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Ver más populares</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* MEJOR VALORADOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Trophy className="w-4 h-4" />
              <span>Obras Maestras Aclamadas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Mejor valorados
            </h2>
          </div>
          <Link
            to="/explorar?orden=rating-desc"
            className="text-sm font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Ver ranking completo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRatedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* LANZAMIENTOS RECIENTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Clock className="w-4 h-4" />
              <span>Última Generación</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Lanzamientos recientes
            </h2>
          </div>
          <Link
            to="/explorar?orden=recent"
            className="text-sm font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Ver más recientes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};
