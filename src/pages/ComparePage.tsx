import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gamesData } from '../data/gamesData';
import { Game } from '../types/game';
import { ComparisonTable } from '../components/compare/ComparisonTable';
import { Scale, Sparkles } from 'lucide-react';

export const ComparePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const slug1 = searchParams.get('juego1');
  const slug2 = searchParams.get('juego2');

  const defaultGame1 = gamesData.find((g) => g.slug === slug1) || gamesData[5]; // Elden Ring
  const defaultGame2 =
    gamesData.find((g) => g.slug === slug2) ||
    gamesData.find((g) => g.slug !== defaultGame1.slug) ||
    gamesData[3]; // Zelda Tears of the Kingdom

  const [game1, setGame1] = useState<Game>(defaultGame1);
  const [game2, setGame2] = useState<Game>(defaultGame2);

  // Sincronizar parámetros de URL
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('juego1', game1.slug);
    params.set('juego2', game2.slug);
    setSearchParams(params, { replace: true });
  }, [game1.slug, game2.slug, setSearchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 text-xs font-semibold">
          <Scale className="w-3.5 h-3.5 text-violet-400" />
          <span>Herramienta Cara a Cara</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Comparar videojuegos
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Selecciona dos títulos de nuestra base de datos para contrastar sus calificaciones, mecánicas, requisitos, plataformas y características clave lado a lado.
        </p>
      </div>

      {/* Comparison Matrix Component */}
      <ComparisonTable
        game1={game1}
        game2={game2}
        onSelectGame1={(g) => setGame1(g)}
        onSelectGame2={(g) => setGame2(g)}
      />
    </div>
  );
};
