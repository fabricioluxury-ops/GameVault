import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 sm:py-32 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-violet-600/15 border border-violet-500/30 flex items-center justify-center text-violet-400 mx-auto shadow-neon">
        <Ghost className="w-10 h-10 animate-bounce" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Esta página no existe
        </h1>
        <p className="text-base text-slate-400 max-w-md mx-auto">
          Parece que te has aventurado fuera del mapa explorado o este enlace fue movido a otra dimensión.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold shadow-neon transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
        <Link
          to="/explorar"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white text-sm font-semibold border border-white/10 transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Explorar videojuegos</span>
        </Link>
      </div>
    </div>
  );
};
