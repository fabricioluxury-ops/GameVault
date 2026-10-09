import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { gamesData } from '../data/gamesData';
import { RatingBadge } from '../components/common/RatingBadge';
import { FavoriteButton } from '../components/common/FavoriteButton';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { SystemRequirements } from '../components/game/SystemRequirements';
import { ScreenshotModal } from '../components/common/ScreenshotModal';
import { GameCard } from '../components/game/GameCard';
import {
  Calendar,
  Building2,
  Layers,
  Gamepad2,
  Users,
  Clock,
  Scale,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Maximize2
} from 'lucide-react';

export const GameDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number | null>(null);

  const game = gamesData.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">Videojuego no encontrado</h1>
        <p className="text-slate-400">El juego que estás buscando no existe en nuestra base de datos o fue movido.</p>
        <Link
          to="/explorar"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm shadow-neon"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </Link>
      </div>
    );
  }

  // Videojuegos relacionados (mismo género, excluyendo el actual)
  const relatedGames = gamesData
    .filter((g) => g.id !== game.id && g.genres.some((genre) => game.genres.includes(genre)))
    .slice(0, 4);

  return (
    <div className="min-h-screen pb-20">
      {/* HERO BANNER */}
      <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[550px] overflow-hidden bg-dark-950">
        <ImageWithFallback
          src={game.bannerImage}
          alt={`Banner de ${game.title}`}
          fallbackTitle={game.title}
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter blur-[1px]"
        />

        {/* Gradient overlays for cinematic contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/80 hover:bg-dark-800 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold border border-white/10 backdrop-blur-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-44 sm:-mt-56 lg:-mt-64 relative z-20 space-y-12">
        {/* Game Header Card */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 bg-dark-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
          {/* Cover Poster */}
          <div className="w-44 sm:w-60 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-violet-500/30 shadow-neon flex-shrink-0 mx-auto md:mx-0">
            <ImageWithFallback
              src={game.coverImage}
              alt={`Portada oficial de ${game.title}`}
              fallbackTitle={game.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Info */}
          <div className="flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              {/* Genres Pills & Visual Rating */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {game.genres.map((genre) => (
                    <Link
                      key={genre}
                      to={`/explorar?genero=${encodeURIComponent(genre)}`}
                      className="px-3 py-1 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30 text-xs font-bold hover:bg-violet-600/30 transition-colors"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
                <RatingBadge rating={game.rating} size="lg" showMax />
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {game.title}
              </h1>

              {/* Short Tagline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
                {game.shortDescription}
              </p>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">
                  Fecha de lanzamiento
                </span>
                <span className="text-white font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  {game.releaseDate}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">
                  Desarrollador
                </span>
                <span className="text-white font-medium flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-violet-400" />
                  {game.developer}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">
                  Distribuidor
                </span>
                <span className="text-white font-medium flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-violet-400" />
                  {game.publisher}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">
                  Tiempo de juego
                </span>
                <span className="text-violet-300 font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  {game.averagePlaytime}
                </span>
              </div>
            </div>

            {/* Action Buttons: Add to Favorites & Compare */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <FavoriteButton
                gameId={game.id}
                gameTitle={game.title}
                size="lg"
                showLabel={true}
              />
              <Link
                to={`/comparar?juego1=${game.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-200 hover:text-white text-sm font-semibold border border-white/10 hover:border-violet-500/40 transition-colors shadow-lg"
              >
                <Scale className="w-4 h-4 text-violet-400" />
                <span>Comparar este juego</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DETAILS GRID: Description, Platforms & Modes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Columns: Description & Features */}
          <div className="lg:col-span-2 space-y-8">
            {/* Descripción */}
            <section className="bg-dark-900 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                <span>Descripción</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                {game.fullDescription}
              </p>
            </section>

            {/* Características */}
            <section className="bg-dark-900 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
                <span>Características</span>
              </h2>
              <ul className="space-y-3">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                    <div className="p-1 rounded-full bg-violet-600/20 text-violet-400 mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requisitos del sistema */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-violet-400" />
                <span>Requisitos del sistema</span>
              </h2>
              <SystemRequirements requirements={game.systemRequirements} gameTitle={game.title} />
            </section>
          </div>

          {/* Right Column: Platforms, Modes, Technical Details */}
          <div className="space-y-6">
            {/* Plataformas */}
            <div className="bg-dark-900 border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-violet-400" />
                <span>Plataformas</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {game.platforms.map((platform) => (
                  <Link
                    key={platform}
                    to={`/explorar?plataforma=${encodeURIComponent(platform)}`}
                    className="px-3 py-1.5 rounded-xl bg-dark-800 hover:bg-violet-600/20 text-slate-300 hover:text-violet-300 border border-white/10 text-xs font-semibold transition-colors"
                  >
                    {platform}
                  </Link>
                ))}
              </div>
            </div>

            {/* Modos de juego */}
            <div className="bg-dark-900 border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-violet-400" />
                <span>Modos de juego</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {game.modes.map((mode) => (
                  <span
                    key={mode}
                    className="px-3 py-1.5 rounded-xl bg-dark-800 text-slate-300 border border-white/10 text-xs font-semibold"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>

            {/* Ficha técnica rápida */}
            <div className="bg-dark-900 border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white mb-2">Ficha Técnica</h3>
              <dl className="divide-y divide-white/5 text-xs sm:text-sm">
                <div className="py-2 flex justify-between">
                  <dt className="text-slate-400">Año de salida</dt>
                  <dd className="font-semibold text-white">{game.releaseYear}</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="text-slate-400">Puntaje Metacrítico</dt>
                  <dd className="font-bold text-emerald-400">{game.rating} / 100</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="text-slate-400">Idioma</dt>
                  <dd className="font-semibold text-white">Español Latino / Voces y Textos</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* CAPTURAS DE PANTALLA */}
        {game.screenshots.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <span>Capturas de pantalla</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {game.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedScreenshotIndex(idx)}
                  className="group relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-dark-900 cursor-pointer shadow-lg hover:border-violet-500/50 transition-all hover:-translate-y-1"
                >
                  <ImageWithFallback
                    src={shot}
                    alt={`Captura ${idx + 1} de ${game.title}`}
                    fallbackTitle={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-violet-600 text-white shadow-neon">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VIDEOJUEGOS RELACIONADOS */}
        {relatedGames.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Videojuegos relacionados
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Otros títulos que comparten géneros similares con {game.title}
                </p>
              </div>
              <Link
                to={`/explorar?genero=${encodeURIComponent(game.genres[0])}`}
                className="text-xs sm:text-sm font-semibold text-violet-400 hover:text-violet-300"
              >
                Ver más en {game.genres[0]} →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedGames.map((related) => (
                <GameCard key={related.id} game={related} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Screenshot Modal Viewer */}
      {selectedScreenshotIndex !== null && (
        <ScreenshotModal
          isOpen={true}
          screenshots={game.screenshots}
          currentIndex={selectedScreenshotIndex}
          onNavigate={(i) => setSelectedScreenshotIndex(i)}
          onClose={() => setSelectedScreenshotIndex(null)}
          gameTitle={game.title}
        />
      )}
    </div>
  );
};
