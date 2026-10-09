import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Heart, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-dark-950/80 backdrop-blur-md text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-flex" aria-label="GameVault">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center shadow-neon">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Game<span className="text-violet-400">Vault</span>
              </span>
            </Link>
            <p className="text-base text-slate-300 font-medium">
              Tu biblioteca de videojuegos.
            </p>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Explora cientos de videojuegos, descubre nuevas experiencias, compara tus títulos preferidos y mantén organizado tu catálogo de favoritos en un solo lugar.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldAlert className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>
                GameVault es un catálogo y enciclopedia independiente. No está afiliado, respaldado ni asociado con ningún desarrollador ni editor de videojuegos.
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-violet-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/explorar" className="hover:text-violet-400 transition-colors">
                  Explorar
                </Link>
              </li>
              <li>
                <Link to="/generos" className="hover:text-violet-400 transition-colors">
                  Géneros
                </Link>
              </li>
              <li>
                <Link to="/plataformas" className="hover:text-violet-400 transition-colors">
                  Plataformas
                </Link>
              </li>
              <li>
                <Link to="/comparar" className="hover:text-violet-400 transition-colors">
                  Comparar
                </Link>
              </li>
              <li>
                <Link to="/favoritos" className="hover:text-violet-400 transition-colors">
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Genres / Discovery */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Descubrimiento
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/explorar?orden=rating-desc" className="hover:text-violet-400 transition-colors">
                  Mejor valorados
                </Link>
              </li>
              <li>
                <Link to="/explorar?orden=popular" className="hover:text-violet-400 transition-colors">
                  Más populares
                </Link>
              </li>
              <li>
                <Link to="/explorar?orden=recent" className="hover:text-violet-400 transition-colors">
                  Lanzamientos recientes
                </Link>
              </li>
              <li>
                <Link to="/explorar?genero=RPG" className="hover:text-violet-400 transition-colors">
                  Juegos de Rol (RPG)
                </Link>
              </li>
              <li>
                <Link to="/explorar?genero=Acción" className="hover:text-violet-400 transition-colors">
                  Juegos de Acción
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GameVault. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Hecho con pasión gamer</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para Latinoamérica</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
