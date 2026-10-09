import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Gamepad2, Search, Heart, Menu, X, Scale, Compass, Layers, Home } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';
import { SearchModal } from './SearchModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { favoritesCount } = useFavorites();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Atajo de teclado Ctrl+K o Cmd+K para abrir buscador
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/explorar', label: 'Explorar', icon: Compass },
    { to: '/generos', label: 'Géneros', icon: Layers },
    { to: '/plataformas', label: 'Plataformas', icon: Gamepad2 },
    { to: '/comparar', label: 'Comparar', icon: Scale },
    { to: '/favoritos', label: 'Favoritos', icon: Heart, badge: favoritesCount },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-dark-950/95 via-dark-950/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl"
            aria-label="GameVault - Ir a inicio"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center shadow-neon group-hover:scale-105 transition-transform">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                Game<span className="text-violet-400">Vault</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1 hidden sm:block">
                Base de Videojuegos
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegación principal">
            {navLinks.map(({ to, label, icon: Icon, badge }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                    isActive
                      ? 'bg-violet-600/15 text-violet-300 border border-violet-500/30 shadow-[0_0_12px_rgba(139,92,246,0.15)] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`
                }
              >
                <Icon className="w-4 h-4 opacity-80" />
                <span>{label}</span>
                {typeof badge === 'number' && badge > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-violet-600 text-white text-[11px] font-bold min-w-[18px] text-center animate-pulse">
                    {badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Search trigger & Mobile hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-dark-900 hover:bg-dark-850 border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Abrir buscador global"
              title="Buscar (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-violet-400" />
              <span className="hidden lg:inline text-xs text-slate-400">Buscar videojuegos...</span>
              <kbd className="hidden sm:inline-flex items-center text-[10px] text-slate-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-mono">
                Ctrl K
              </kbd>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:bg-dark-850 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-dark-950/95 backdrop-blur-2xl animate-fade-in px-4 pt-3 pb-6 space-y-1">
            {navLinks.map(({ to, label, icon: Icon, badge }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-violet-400" />
                  <span>{label}</span>
                </div>
                {typeof badge === 'number' && badge > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-violet-600 text-white text-xs font-bold">
                    {badge}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-violet-600/15 border border-violet-500/30 text-violet-300 text-sm font-semibold"
              >
                <Search className="w-4 h-4" />
                <span>Buscar videojuegos...</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </>
  );
};
