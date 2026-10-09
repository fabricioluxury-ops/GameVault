import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (gameId: string) => void;
  removeFavorite: (gameId: string) => void;
  toggleFavorite: (gameId: string) => void;
  isFavorite: (gameId: string) => boolean;
  clearFavorites: () => void;
  favoritesCount: number;
}

const STORAGE_KEY = 'gamevault_favoritos';

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error al leer favoritos de localStorage', error);
      return [];
    }
  });

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error al guardar favoritos en localStorage', error);
    }
  }, [favorites]);

  // Escuchar cambios de almacenamiento en otras pestañas
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setFavorites(JSON.parse(e.newValue));
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addFavorite = (gameId: string) => {
    setFavorites((prev) => {
      if (prev.includes(gameId)) return prev;
      return [...prev, gameId];
    });
  };

  const removeFavorite = (gameId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== gameId));
  };

  const toggleFavorite = (gameId: string) => {
    setFavorites((prev) => {
      if (prev.includes(gameId)) {
        return prev.filter((id) => id !== gameId);
      } else {
        return [...prev, gameId];
      }
    });
  };

  const isFavorite = (gameId: string) => {
    return favorites.includes(gameId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        favoritesCount: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider');
  }
  return context;
};
