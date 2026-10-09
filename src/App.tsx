import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { GameDetailPage } from './pages/GameDetailPage';
import { GenresPage } from './pages/GenresPage';
import { PlatformsPage } from './pages/PlatformsPage';
import { ComparePage } from './pages/ComparePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Componente para volver al inicio del scroll en cada cambio de ruta
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);

  return null;
};

export const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-dark-950 text-slate-100 selection:bg-violet-600 selection:text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explorar" element={<ExplorePage />} />
              <Route path="/juego/:slug" element={<GameDetailPage />} />
              <Route path="/generos" element={<GenresPage />} />
              <Route path="/plataformas" element={<PlatformsPage />} />
              <Route path="/comparar" element={<ComparePage />} />
              <Route path="/favoritos" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </FavoritesProvider>
  );
};

export default App;
