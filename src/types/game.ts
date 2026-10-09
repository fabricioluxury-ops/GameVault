export type Platform =
  | 'PC'
  | 'PlayStation 5'
  | 'PlayStation 4'
  | 'Xbox Series X|S'
  | 'Xbox One'
  | 'Nintendo Switch'
  | 'Nintendo Switch 2'
  | 'Android'
  | 'iOS';

export type Genre =
  | 'Acción'
  | 'Aventura'
  | 'RPG'
  | 'Estrategia'
  | 'Terror'
  | 'Deportes'
  | 'Carreras'
  | 'Simulación'
  | 'Plataformas'
  | 'Indie'
  | 'Shooter'
  | 'Sandbox';

export type GameMode = 'Un jugador' | 'Multijugador' | 'Cooperativo';

export type SortOption =
  | 'relevance'
  | 'rating-desc'
  | 'popular'
  | 'recent'
  | 'name-asc'
  | 'name-desc';

export interface SystemSpecs {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
  directX?: string;
}

export interface SystemRequirements {
  minimum: SystemSpecs;
  recommended: SystemSpecs;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  rating: number; // 0 to 100
  releaseDate: string; // Formato amigable en español, ej. "12 de mayo de 2023"
  releaseYear: number;
  developer: string;
  publisher: string;
  genres: Genre[];
  platforms: Platform[];
  modes: GameMode[];
  averagePlaytime: string;
  features: string[];
  systemRequirements?: SystemRequirements;
  coverImage: string;
  bannerImage: string;
  screenshots: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
  isRecent?: boolean;
}

export interface GenreInfo {
  id: string;
  name: Genre;
  description: string;
  image: string;
  color: string;
}

export interface PlatformInfo {
  id: string;
  name: Platform;
  shortName: string;
  description: string;
  image: string;
  manufacturer: string;
  generation: string;
}
