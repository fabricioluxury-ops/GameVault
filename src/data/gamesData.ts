import { Game } from '../types/game';

export const gamesData: Game[] = [
  {
    id: '1',
    slug: 'minecraft',
    title: 'Minecraft',
    shortDescription: 'Construye cualquier cosa que imagines en un mundo infinito generado por bloques.',
    fullDescription: 'Minecraft es el fenómeno global de mundo abierto y construcción sandbox más exitoso de todos los tiempos. Explora mundos infinitos generados procedimentalmente, extrae recursos esenciales, fabrica herramientas y sobrevive a las criaturas de la noche en modo Supervivencia, o desata tu creatividad sin restricciones con recursos ilimitados en modo Creativo.',
    rating: 93,
    releaseDate: '18 de noviembre de 2011',
    releaseYear: 2011,
    developer: 'Mojang Studios',
    publisher: 'Xbox Game Studios',
    genres: ['Sandbox', 'Aventura', 'Simulación'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'Android', 'iOS'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '100+ horas',
    features: [
      'Generación infinita y procedural de biomas, cuevas y dimensiones.',
      'Libertad total de construcción bloque a bloque y circuitos con Redstone.',
      'Modos Creativo, Supervivencia, Aventura y Hardcore.',
      'Soporte multiplataforma (Cross-play) para jugar con amigos en cualquier consola o móvil.',
      'Comunidad masiva con miles de mods, texturas y mapas personalizados.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i3-3210 3.2 GHz / AMD A8-7600 APU 3.1 GHz',
        memory: '4 GB RAM',
        graphics: 'Intel HD Graphics 4000 / AMD Radeon R5 series',
        storage: '4 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11 (64-bit)',
        processor: 'Intel Core i5-4690 3.5GHz / AMD A10-7800 APU 3.5 GHz',
        memory: '8 GB RAM',
        graphics: 'GeForce 700 Series / AMD Radeon Rx 200 Series',
        storage: '8 GB de espacio disponible (SSD recomendado)',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: false
  },
  {
    id: '2',
    slug: 'grand-theft-auto-v',
    title: 'Grand Theft Auto V',
    shortDescription: 'Tres criminales muy diferentes planean una serie de atrevidos golpes en Los Santos.',
    fullDescription: 'Ambientado en la enorme y vibrante metrópolis de Los Santos y el condado circundante de Blaine, Grand Theft Auto V relata las historias entrelazadas de Franklin, Michael y Trevor. Lleva a cabo atracos meticulosos, domina el mundo del crimen y sumérgete en el universo en constante evolución de GTA Online.',
    rating: 97,
    releaseDate: '17 de septiembre de 2013',
    releaseYear: 2013,
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    genres: ['Acción', 'Aventura', 'Shooter'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador', 'Multijugador'],
    averagePlaytime: '35 - 80 horas',
    features: [
      'Tres protagonistas jugables con vidas y habilidades únicas.',
      'Mundo abierto masivo y detallado que recrea el sur de California.',
      'Misiones de atracos multimillonarios con planeación y ejecución táctica.',
      'Modo GTA Online con constantes actualizaciones, negocios y misiones cooperativas.',
      'Gráficos mejorados con trazado de rayos y soporte hasta 4K 60FPS en consolas modernas.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        processor: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core @ 2.5GHz',
        memory: '4 GB RAM',
        graphics: 'NVIDIA 9800 GT 1GB / AMD HD 4870 1GB',
        storage: '100 GB de espacio disponible',
        directX: 'Versión 10'
      },
      recommended: {
        os: 'Windows 10 / 11 64 Bit',
        processor: 'Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
        storage: '110 GB de espacio disponible (SSD)',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: false
  },
  {
    id: '3',
    slug: 'the-legend-of-zelda-breath-of-the-wild',
    title: 'The Legend of Zelda: Breath of the Wild',
    shortDescription: 'Despierta de un sueño centenario y explora un reino de Hyrule en ruinas con libertad sin precedentes.',
    fullDescription: 'Olvida todo lo que sabías sobre The Legend of Zelda. Entra en un mundo de descubrimientos, exploración y aventura en The Legend of Zelda: Breath of the Wild. Viaja a través de vastos campos, frondosos bosques y cimas de montañas mientras descubres qué fue del reino en ruinas de Hyrule.',
    rating: 97,
    releaseDate: '3 de marzo de 2017',
    releaseYear: 2017,
    developer: 'Nintendo EPD',
    publisher: 'Nintendo',
    genres: ['Aventura', 'Acción', 'RPG'],
    platforms: ['Nintendo Switch'],
    modes: ['Un jugador'],
    averagePlaytime: '50 - 120 horas',
    features: [
      'Motor de físicas y química revolucionario que permite resolver enigmas de múltiples formas.',
      'Libertad absoluta de escalada y planeo en cualquier superficie.',
      'Más de 100 santuarios ancestrales con acertijos mecánicos ingeniosos.',
      'Gran variedad de armas, vestimentas y elixires con efectos elementales.',
      'Banda sonora ambiental sutil al piano ganadora de múltiples premios.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: false
  },
  {
    id: '4',
    slug: 'the-legend-of-zelda-tears-of-the-kingdom',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    shortDescription: 'Una aventura épica por las tierras y los vastos cielos de Hyrule impulsada por tu propia inventiva.',
    fullDescription: 'En esta secuela de The Legend of Zelda: Breath of the Wild, emprenderás una travesía no solo por la superficie de Hyrule, sino también surcando sus cielos y adentrándote en sus misteriosas profundidades subterráneas. Domina nuevas habilidades como Ultramano y Combinación para crear vehículos y armas inimaginables.',
    rating: 96,
    releaseDate: '12 de mayo de 2023',
    releaseYear: 2023,
    developer: 'Nintendo EPD',
    publisher: 'Nintendo',
    genres: ['Aventura', 'Acción', 'RPG', 'Sandbox'],
    platforms: ['Nintendo Switch', 'Nintendo Switch 2'],
    modes: ['Un jugador'],
    averagePlaytime: '60 - 150 horas',
    features: [
      'Tres planos explorables superpuestos: Islas Celestes, Superficie y Subsuelo profundo.',
      'Habilidad Ultramano para fusionar objetos y construir botes, aviones y mecas de combate.',
      'Mecánica de Combinación que permite crear armas híbridas con propiedades elementales.',
      'Templos colosales con jefes desafiantes y poderes de los Sabios.',
      'Historia emotiva que profundiza en la fundación milenaria de Hyrule.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: true
  },
  {
    id: '5',
    slug: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    shortDescription: 'La conmovedora historia del forajido Arthur Morgan y la banda de Van der Linde en el ocaso del salvaje oeste.',
    fullDescription: 'Estados Unidos, 1899. El ocaso del salvaje oeste ha comenzado. Tras un fallido atraco en Blackwater, Arthur Morgan y la banda de Van der Linde se ven forzados a huir. Con agentes federales y cazarrecompensas pisándoles los talones, la banda deberá robar y luchar por sobrevivir en una aventura hiperrealista sobre lealtad, redención y destino.',
    rating: 97,
    releaseDate: '26 de octubre de 2018',
    releaseYear: 2018,
    developer: 'Rockstar Studios',
    publisher: 'Rockstar Games',
    genres: ['Acción', 'Aventura', 'Shooter'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador', 'Multijugador'],
    averagePlaytime: '60 - 120 horas',
    features: [
      'Nivel de detalle y físicas de entorno sin precedentes en la industria.',
      'Sistema de honor interactivo que altera las reacciones de la gente y los finales.',
      'Ecosistema con más de 200 especies animales con comportamiento realista.',
      'Mecánicas inmersivas de campamento, caza, pesca y personalización de armas.',
      'Narrativa aclamada universalmente como una de las mejores obras de ficción contemporánea.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 - April 2018 Update (v1803)',
        processor: 'Intel Core i5-2500K / AMD FX-6300',
        memory: '8 GB RAM',
        graphics: 'Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB',
        storage: '150 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11',
        processor: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
        memory: '12 GB RAM',
        graphics: 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
        storage: '150 GB de espacio disponible (SSD)',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: false
  },
  {
    id: '6',
    slug: 'elden-ring',
    title: 'Elden Ring',
    shortDescription: 'Alzate, Sinluz, y déjate guiar por la gracia para blandir el poder del Círculo de Elden en las Tierras Intermedias.',
    fullDescription: 'Desarrollado por FromSoftware bajo la dirección de Hidetaka Miyazaki y con la mitología de George R. R. Martin, Elden Ring es una obra maestra del RPG de acción. Recorre a pie o sobre tu corcel Torrentera un inmenso mundo abierto repleto de mazmorras colosales, misterios arcanos y jefes de escala titánica.',
    rating: 96,
    releaseDate: '25 de febrero de 2022',
    releaseYear: 2022,
    developer: 'FromSoftware Inc.',
    publisher: 'Bandai Namco Entertainment',
    genres: ['RPG', 'Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '60 - 130 horas',
    features: [
      'Mundo abierto imponente con diseño de niveles vertical y orgánico.',
      'Cientos de armas, hechizos, talismanes y cenizas de guerra para crear tu propio estilo.',
      'Jefes legendarios con patrones de ataque desafiantes y fases épicas.',
      'Modo multijugador cooperativo para explorar juntos o invasiones PvP.',
      'Ganador del premio Juego del Año (Game of the Year) en The Game Awards 2022.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'INTEL CORE I5-8400 o AMD RYZEN 3 3300X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GEFORCE GTX 1060 3 GB o AMD RADEON RX 580 4 GB',
        storage: '60 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 (64-bit)',
        processor: 'INTEL CORE I7-8700K o AMD RYZEN 5 3600X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GEFORCE GTX 1070 8 GB o AMD RADEON RX VEGA 56 8 GB',
        storage: '60 GB de espacio disponible (SSD)',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: false
  },
  {
    id: '7',
    slug: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    shortDescription: 'Conviértete en V, un mercenario urbano con implantes cibernéticos en la megalópolis futurista de Night City.',
    fullDescription: 'Cyberpunk 2077 es un RPG de acción y aventura en mundo abierto ambientado en Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y la modificación corporal. Con la actualización 2.0 y la aclamada expansión Phantom Liberty, experimenta combates viscerales, conducción frenética y una trama electrizante junto a Johnny Silverhand.',
    rating: 90,
    releaseDate: '10 de diciembre de 2020',
    releaseYear: 2020,
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    genres: ['RPG', 'Acción', 'Shooter'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    modes: ['Un jugador'],
    averagePlaytime: '40 - 90 horas',
    features: [
      'Night City: Una ciudad hiperdetallada en vertical con distritos socioculturales vivos.',
      'Sistema profundo de implantes cibernéticos, hackeo rápido y árboles de talentos rediseñados.',
      'Combate táctico que mezcla armas inteligentes, katanas reflectantes y fuerza bruta.',
      'Gráficos de vanguardia con soporte para Full Ray Tracing (Path Tracing) y DLSS 3.5.',
      'Misiones narrativas complejas con personajes memorables y múltiples desenlaces.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Core i7-6700 o Ryzen 5 1600',
        memory: '12 GB RAM',
        graphics: 'GeForce GTX 1060 6GB o Radeon RX 580 8GB',
        storage: '70 GB SSD',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Core i7-12700 o Ryzen 7 7800X3D',
        memory: '16 GB RAM',
        graphics: 'GeForce RTX 3070 o Radeon RX 6800 XT',
        storage: '70 GB SSD NVMe',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: false
  },
  {
    id: '8',
    slug: 'the-witcher-3-wild-hunt',
    title: 'The Witcher 3: Wild Hunt',
    shortDescription: 'Encarna a Geralt de Rivia, cazador de monstruos a sueldo, en busca de la Niña de la Profecía.',
    fullDescription: 'Eres Geralt de Rivia, cazador de monstruos a sueldo. Ante ti se extiende un continente asolado por la guerra y repleto de bestias letales que podrás explorar a tu antojo. Tu misión actual: encontrar a Ciri, la Niña de la Profecía, un arma viviente capaz de alterar la estructura misma del mundo.',
    rating: 94,
    releaseDate: '19 de mayo de 2015',
    releaseYear: 2015,
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    genres: ['RPG', 'Aventura', 'Acción'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    modes: ['Un jugador'],
    averagePlaytime: '50 - 150 horas',
    features: [
      'Mundo de fantasía oscura con dilemas morales sin respuestas en blanco o negro.',
      'Combate dinámico con dos espadas (acero y plata), señales mágicas y alquimia.',
      'Misiones secundarias con arcos argumentales de nivel cinematográfico.',
      'El adictivo minijuego de cartas coleccionables Gwent integrado en tabernas.',
      'Actualización de nueva generación con texturas 4K, trazado de rayos y modo foto.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel CPU Core i5-2500K 3.3GHz / AMD A10-5800K APU',
        memory: '6 GB RAM',
        graphics: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
        storage: '50 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11 (64-bit)',
        processor: 'Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz',
        memory: '8 GB RAM',
        graphics: 'Nvidia GPU GeForce GTX 1060 / AMD GPU Radeon RX 580',
        storage: '50 GB de espacio disponible (SSD)',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '9',
    slug: 'god-of-war-ragnarok',
    title: 'God of War Ragnarök',
    shortDescription: 'Kratos y Atreus deben viajar a cada uno de los Nueve Reinos en busca de respuestas ante la inminente profecía del fin del mundo.',
    fullDescription: 'Santa Monica Studio presenta la secuela del aclamado God of War (2018). El Fimbulvetr ya está en marcha. Kratos y Atreus deben emprender un viaje épico a través de los Nueve Reinos nórdicos mientras las fuerzas asgardianas se preparan para la batalla profetizada que acabará con el mundo.',
    rating: 94,
    releaseDate: '9 de noviembre de 2022',
    releaseYear: 2022,
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4'],
    modes: ['Un jugador'],
    averagePlaytime: '35 - 70 horas',
    features: [
      'Evolución del combate brutal combinando el Hacha Leviatán, las Espadas del Caos y la Lanza Draupnir.',
      'Exploración de los Nueve Reinos Nórdicos con acertijos ambientales y mitología viva.',
      'Madurez narrativa en la relación padre-hijo entre Kratos y Atreus.',
      'Modo roguelike gratuito de expansión: God of War Ragnarök Valhalla.',
      'Excelente integración háptica del control DualSense de PlayStation 5.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-4670k o AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 (6GB) o AMD RX 5500 XT (8GB)',
        storage: '190 GB SSD',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Intel i5-8600 o AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060 Super o AMD RX 5700',
        storage: '190 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: true
  },
  {
    id: '10',
    slug: 'god-of-war-2018',
    title: 'God of War (2018)',
    shortDescription: 'Un nuevo comienzo para Kratos. Como padre y mentor de Atreus, deberá luchar en las tierras salvajes de la mitología nórdica.',
    fullDescription: 'Habiendo dejado atrás su venganza contra los dioses del Olimpo, Kratos vive ahora en el reino de las deidades y los monstruos nórdicos. En este mundo despiadado debe luchar por sobrevivir y enseñarle a su hijo Atreus a no repetir los sangrientos errores del Fantasma de Esparta.',
    rating: 94,
    releaseDate: '20 de abril de 2018',
    releaseYear: 2018,
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4'],
    modes: ['Un jugador'],
    averagePlaytime: '25 - 50 horas',
    features: [
      'Cámara al hombro en un plano secuencia continuo sin cortes desde el inicio hasta el final.',
      'El Hacha Leviatán: arma icónica arrojadiza con retorno telequinético satisfactorio.',
      'Combate táctico con escudo, puñetazos espartanos y apoyo de flechas de Atreus.',
      'Desafío supremo opcional contra las ocho letales Valquirias y su reina Sigrun.',
      'Ganador absoluto del Juego del Año en The Game Awards 2018.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-2500k (4 core 3.3 GHz) o AMD Ryzen 3 1200 (4 core 3.1 GHz)',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 960 (4 GB) o AMD R9 290X (4 GB)',
        storage: '70 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel i5-6600k (4 core 3.5 GHz) o AMD Ryzen 5 2400 G (4 core 3.6 GHz)',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 (6 GB) o AMD RX 570 (4 GB)',
        storage: '70 GB SSD',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '11',
    slug: 'marvels-spider-man-2',
    title: "Marvel's Spider-Man 2",
    shortDescription: 'Peter Parker y Miles Morales regresan para una nueva aventura épica en una Nueva York de Marvel expandida.',
    fullDescription: 'Los dos Spider-Man, Peter Parker y Miles Morales, regresan para el siguiente capítulo de la aclamada franquicia. Balancéate, salta y planea con las nuevas alarañas por toda la ciudad de Nueva York mientras combates al letal Kraven el Cazador y al monstruoso simbionte Venom.',
    rating: 90,
    releaseDate: '20 de octubre de 2023',
    releaseYear: 2023,
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura'],
    platforms: ['PlayStation 5', 'PC'],
    modes: ['Un jugador'],
    averagePlaytime: '20 - 35 horas',
    features: [
      'Cambio instantáneo entre Peter Parker con poderes simbióticos y Miles Morales con bioelectricidad.',
      'Mapa de Nueva York duplicado con la incorporación de Brooklyn y Queens.',
      'Alas de telaraña para desplazarse a velocidades vertiginosas por los rascacielos.',
      'Combates espectaculares contra villanos icónicos: Kraven, Venom y Lizard.',
      'Carga ultrarrápida impulsada por la arquitectura SSD de PlayStation 5.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: true
  },
  {
    id: '12',
    slug: 'marvels-spider-man-remastered',
    title: "Marvel's Spider-Man Remastered",
    shortDescription: 'Experimenta la aclamada historia de Peter Parker protegiendo a la ciudad de Nueva York con balanceos fluidos.',
    fullDescription: 'En Marvel Spider-Man Remastered los mundos de Peter Parker y Spider-Man chocan en una historia original repleta de acción. Juega como un experimentado Peter Parker que lucha contra el crimen organizado y villanos icónicos en la vibrante ciudad de Nueva York.',
    rating: 87,
    releaseDate: '12 de noviembre de 2020',
    releaseYear: 2020,
    developer: 'Insomniac Games / Nixxes',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5'],
    modes: ['Un jugador'],
    averagePlaytime: '20 - 45 horas',
    features: [
      'Sistema de balanceo por telarañas intuitivo, acrobático y dinámico.',
      'Combate fluido con artilugios arácnidos ingeniosos y remates cinemáticos.',
      'Incluye el capítulo de historia completa La Ciudad que Nunca Duerme.',
      'Soporte completo para monitores ultrapanorámicos 21:9 y 32:9 en PC.',
      'Trazado de rayos en reflejos de cristal y agua con altas tasas de refresco.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-4160, 3.6 GHz o AMD equivalente',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 950 o AMD Radeon RX 470',
        storage: '75 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4670, 3.4 GHz o AMD Ryzen 5 1600, 3.2 GHz',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1060 6GB o AMD Radeon RX 580 8GB',
        storage: '75 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '13',
    slug: 'hogwarts-legacy',
    title: 'Hogwarts Legacy',
    shortDescription: 'Vive lo no escrito en el Colegio Hogwarts de Magia y Hechicería durante el siglo XIX.',
    fullDescription: 'Hogwarts Legacy es un RPG de acción inmersivo en mundo abierto ambientado en el universo de los libros de Harry Potter. Recorre libremente el castillo de Hogwarts, Hogsmeade, el Bosque Prohibido y las tierras altas circundantes. Descubre una rebelión secreta y decide el destino del mundo mágico.',
    rating: 84,
    releaseDate: '10 de febrero de 2023',
    releaseYear: 2023,
    developer: 'Avalanche Software',
    publisher: 'Warner Bros. Games',
    genres: ['RPG', 'Aventura', 'Acción'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    modes: ['Un jugador'],
    averagePlaytime: '35 - 75 horas',
    features: [
      'Creación completa de tu propio mago o bruja y asignación a una de las cuatro casas.',
      'Asiste a clases de Encantamientos, Defensa Contra las Artes Oscuras y Pociones.',
      'Vuelo libre en escoba mágica e hipogrifos sobre la campiña escocesa.',
      'Personalización de la Sala de los Menesteres y cuidado de criaturas fantásticas.',
      'Duelo mágico dinámico con combinaciones de hechizos y maldiciones imperdonables.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600 (3.3Ghz) o AMD Ryzen 5 1400 (3.2Ghz)',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 960 4GB o AMD Radeon RX 470 4GB',
        storage: '85 GB HDD / SSD',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Intel Core i7-8700 (3.2Ghz) o AMD Ryzen 5 3600 (3.6 Ghz)',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce 1080 Ti o AMD Radeon RX 5700 XT',
        storage: '85 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: true
  },
  {
    id: '14',
    slug: 'resident-evil-4-remake',
    title: 'Resident Evil 4 (Remake)',
    shortDescription: 'La supervivencia es solo el principio. Leon S. Kennedy viaja a una aldea aislada de Europa para rescatar a la hija del presidente.',
    fullDescription: 'Seis años después del desastre biológico de Raccoon City, Leon S. Kennedy es enviado a una remota villa europea para rescatar a la hija secuestrada del presidente de los Estados Unidos. Resident Evil 4 conserva la esencia del clásico revolucionario mientras moderniza el combate, la atmósfera de terror y los gráficos con el motor RE Engine.',
    rating: 93,
    releaseDate: '24 de marzo de 2023',
    releaseYear: 2023,
    developer: 'Capcom',
    publisher: 'Capcom',
    genres: ['Terror', 'Acción', 'Shooter'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'iOS'],
    modes: ['Un jugador'],
    averagePlaytime: '16 - 30 horas',
    features: [
      'Mecánica de desvío con cuchillo (parry) que añade una capa táctica al combate cuerpo a cuerpo.',
      'Gestión icónica del maletín de inventario con espacio por cuadrícula y amuletos.',
      'El carismático Buhonero para comprar armas, mejoras y recetas de fabricación.',
      'Reimaginación atmosférica del pueblo rural, el castillo gótico y la isla militar.',
      'Modo Los Mercenarios y expansión de historia Separate Ways con Ada Wong.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64 bit)',
        processor: 'AMD Ryzen 3 1200 / Intel Core i5-7500',
        memory: '8 GB RAM',
        graphics: 'AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM',
        storage: '60 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 (64 bit)',
        processor: 'AMD Ryzen 5 3600 / Intel Core i7 8700',
        memory: '16 GB RAM',
        graphics: 'AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070',
        storage: '60 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: true
  },
  {
    id: '15',
    slug: 'resident-evil-village',
    title: 'Resident Evil Village',
    shortDescription: 'Ethan Winters enfrenta una pesadilla gótica en un pueblo nevado dominado por cuatro jerarcas mutantes.',
    fullDescription: 'Ambientada unos años después de los terroríficos eventos de Resident Evil 7, la vida pacífica de Ethan Winters y su esposa Mia se hace añicos cuando Chris Redfield secuestra a su bebé recién nacida, Rosemary. Ethan deberá adentrarse en un pueblo remoto dominado por Lady Dimitrescu y los señores oscuros.',
    rating: 84,
    releaseDate: '7 de mayo de 2021',
    releaseYear: 2021,
    developer: 'Capcom',
    publisher: 'Capcom',
    genres: ['Terror', 'Acción', 'Shooter'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'iOS'],
    modes: ['Un jugador'],
    averagePlaytime: '12 - 25 horas',
    features: [
      'Perspectiva inmersiva en primera persona con opción de tercera persona en la Gold Edition.',
      'Exploración del monumental Castillo Dimitrescu y la perturbadora Casa Beneviento.',
      'El Duque: un misterioso mercader que cocina banquetes para mejorar tus estadísticas permanentes.',
      'Armamento variado con escopetas, rifles de francotirador y lanzagranadas.',
      'Excelente aprovechamiento del audio 3D espacial para amplificar los sustos.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64 bit)',
        processor: 'AMD Ryzen 3 1200 / Intel Core i5-7500',
        memory: '8 GB RAM',
        graphics: 'AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 1050 Ti 4GB',
        storage: '50 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 (64 bit)',
        processor: 'AMD Ryzen 5 3600 / Intel Core i7 8700',
        memory: '16 GB RAM',
        graphics: 'AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070',
        storage: '50 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '16',
    slug: 'silent-hill-2',
    title: 'Silent Hill 2 (Remake)',
    shortDescription: 'James Sunderland busca a su difunta esposa en el misterioso y brumoso pueblo de Silent Hill.',
    fullDescription: 'Habiendo recibido una carta de su difunta esposa Mary, James Sunderland se dirige al lugar donde compartieron tantos recuerdos: el enigmático pueblo de Silent Hill. Bloober Team reimagina la obra maestra del terror psicológico con Unreal Engine 5, cámaras al hombro y una fidelidad atmosférica estremecedora.',
    rating: 86,
    releaseDate: '8 de octubre de 2024',
    releaseYear: 2024,
    developer: 'Bloober Team',
    publisher: 'Konami',
    genres: ['Terror', 'Aventura'],
    platforms: ['PlayStation 5', 'PC'],
    modes: ['Un jugador'],
    averagePlaytime: '15 - 25 horas',
    features: [
      'Reconstrucción total con Unreal Engine 5 y trazado de rayos lumínico.',
      'Cámara moderna en tercera persona sobre el hombro que aumenta la claustrofobia.',
      'Acertijos ambientales clásicos y expandidos con dificultad ajustable.',
      'Enfrentamiento psicológico contra el icónico monstruo Pyramid Head.',
      'Banda sonora legendaria reorquestada por el compositor original Akira Yamaoka.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 x64',
        processor: 'Intel Core i7-6700K | AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1070 Ti o AMD Radeon RX 5700',
        storage: '50 GB SSD',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 11 x64',
        processor: 'Intel Core i7-8700K | AMD Ryzen 5 3600X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2080 o AMD Radeon 6800XT',
        storage: '50 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: true
  },
  {
    id: '17',
    slug: 'doom-eternal',
    title: 'DOOM Eternal',
    shortDescription: 'Los ejércitos del infierno han invadido la Tierra. Conviértete en el Slayer y aniquila demonios a un ritmo frenético.',
    fullDescription: 'Los ejércitos del infierno han arrasado la Tierra. Conviértete en el Slayer en una épica campaña monojugador para cruzarte en el camino de los demonios a través de dimensiones desconocidas y detener la destrucción definitiva de la humanidad. La cúspide de la velocidad y la potencia en disparos en primera persona.',
    rating: 88,
    releaseDate: '20 de marzo de 2020',
    releaseYear: 2020,
    developer: 'id Software',
    publisher: 'Bethesda Softworks',
    genres: ['Shooter', 'Acción'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    modes: ['Un jugador', 'Multijugador'],
    averagePlaytime: '15 - 30 horas',
    features: [
      'Bucle de combate visceral: motosierra para munición, lanzallamas para armadura y ejecuciones de gloria para salud.',
      'Movilidad extrema con carrera doble, balanceo en barras y gancho de carnicero de la súper escopeta.',
      'Banda sonora de metal industrial vertiginosa que eleva la adrenalina al máximo.',
      'Arsenal devastador que incluye la BFG 9000 y la espada Crisol.',
      'Optimización técnica asombrosa con soporte para más de 144 FPS estables.'
    ],
    systemRequirements: {
      minimum: {
        os: '64-bit Windows 10',
        processor: 'Intel Core i5 @ 3.3 GHz o AMD Ryzen 3 @ 3.1 GHz',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1050Ti (4GB) / AMD Radeon R9 280 (3GB)',
        storage: '80 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: '64-bit Windows 10 / 11',
        processor: 'Intel Core i7-6700K o AMD Ryzen 7 1800X',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 480 (8GB)',
        storage: '80 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '18',
    slug: 'halo-infinite',
    title: 'Halo Infinite',
    shortDescription: 'El Jefe Maestro regresa para enfrentarse al enemigo más despiadado que haya conocido jamás en el anillo Zeta Halo.',
    fullDescription: 'Cuando se pierde toda esperanza y el destino de la humanidad pende de un hilo, el Jefe Maestro está listo para enfrentarse a los Desterrados. Viste la armadura del mayor héroe de la humanidad para vivir una aventura épica en el mundo abierto de Zeta Halo y disfruta del modo multijugador gratuito.',
    rating: 87,
    releaseDate: '8 de diciembre de 2021',
    releaseYear: 2021,
    developer: '343 Industries',
    publisher: 'Xbox Game Studios',
    genres: ['Shooter', 'Acción'],
    platforms: ['PC', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '15 - 35 horas',
    features: [
      'Gancho de agarre (Grappleshot) que revoluciona el movimiento vertical y el combate en el cuadrilátero.',
      'Campaña en el anillo alienígena Zeta Halo con bases operativas que desbloquear.',
      'Multijugador en arena clásico a 60 y 120 FPS con temporadas constantes.',
      'Modo Forja avanzado para la creación comunitaria de mapas y modos personalizados.',
      'Vehículos icónicos como el Warthog, Banshee, Ghost y Scorpion.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 RS5 x64',
        processor: 'AMD FX-8370 o Intel i5-4440',
        memory: '8 GB RAM',
        graphics: 'AMD RX 570 o Nvidia GTX 1050 Ti',
        storage: '50 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 19H2 x64',
        processor: 'AMD Ryzen 7 3700X o Intel i7-9700k',
        memory: '16 GB RAM',
        graphics: 'Radeon RX 5700 XT o Nvidia RTX 2070',
        storage: '50 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '19',
    slug: 'forza-horizon-5',
    title: 'Forza Horizon 5',
    shortDescription: 'Tu aventura definitiva en Horizon te espera en los hermosos y cambiantes paisajes de México.',
    fullDescription: 'Lidera emocionantes expediciones a través de los vibrantes y cambiantes paisajes del mundo abierto de México, con una acción de conducción ilimitada y divertida en cientos de los mejores autos del mundo. Explora selvas densas, desiertos vivientes, ciudades históricas, ruinas ocultas y un volcán nevado.',
    rating: 92,
    releaseDate: '9 de noviembre de 2021',
    releaseYear: 2021,
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    genres: ['Carreras', 'Deportes', 'Simulación'],
    platforms: ['PC', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '40 - 100 horas',
    features: [
      'Recreación colosal de México con 11 biomas únicos y clima estacional dinámico.',
      'Más de 700 automóviles licenciados recreados con detalle milimétrico exterior e interior.',
      'Tormentas de arena masivas y tormentas tropicales que alteran la visibilidad y adherencia.',
      'Herramienta EventLab para diseñar carreras, acrobacias y modos de juego propios.',
      'Impresionante fidelidad gráfica a 4K con trazado de rayos en el modo ForzaVista.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 version 15063.0 o superior',
        processor: 'Intel i5-4460 o AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVidia GTX 970 O AMD RX 470',
        storage: '110 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 version 15063.0 o superior',
        processor: 'Intel i5-8400 o AMD Ryzen 5 1500X',
        memory: '16 GB RAM',
        graphics: 'NVidia GTX 1070 O AMD RX 590',
        storage: '110 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '20',
    slug: 'sea-of-thieves',
    title: 'Sea of Thieves',
    shortDescription: 'Navega en aguas abiertas, busca tesoros enterrados y forja tu propia leyenda pirata con tu tripulación.',
    fullDescription: 'Sea of Thieves ofrece la experiencia pirata definitiva, desde la navegación a vela y el combate naval hasta la exploración y el saqueo: todo lo que necesitas para vivir la vida de pirata y convertirte en una leyenda por mérito propio. Sin roles fijos, tienes total libertad para abordar el mundo y a otros jugadores.',
    rating: 82,
    releaseDate: '20 de marzo de 2018',
    releaseYear: 2018,
    developer: 'Rare Ltd',
    publisher: 'Xbox Game Studios',
    genres: ['Aventura', 'Acción'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Multijugador', 'Cooperativo'],
    averagePlaytime: '50+ horas',
    features: [
      'Navegación realista en barcos de diferentes tamaños: Balandro, Bergantín y Galeón.',
      'Físicas de agua aclamadas mundialmente como las mejores de los videojuegos.',
      'Combates navales con cañones, abordajes con sables y arpones.',
      'Grandes relatos narrativos inspirados en Piratas del Caribe y Monkey Island.',
      'Crossplay total entre consolas PlayStation, Xbox y PC.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel Q9450 @ 2.6GHz o AMD Phenom II X6 @ 3.3 GHz',
        memory: '4 GB RAM',
        graphics: 'Nvidia GeForce GTX 650 o AMD Radeon 7750',
        storage: '50 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11',
        processor: 'Intel i5 4690 @ 3.5GHz o AMD FX-8150 @ 3.6 GHz',
        memory: '8 GB RAM',
        graphics: 'Nvidia GeForce GTX 770 o AMD Radeon R9 380x',
        storage: '50 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '21',
    slug: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    shortDescription: 'Reúne a tu grupo y regresa a los Reinos Olvidados en una historia de compañerismo, traición y sacrificio.',
    fullDescription: 'Baldur Gate 3 es un juego de rol de nueva generación basado en el universo de Dungeons & Dragons. Tus decisiones dan forma a una historia única de camaradería y traición, supervivencia y sacrificio, y la atracción del poder absoluto. Misteriosas habilidades despiertan en tu interior tras haber sido infectado por un parásito azotamentes.',
    rating: 96,
    releaseDate: '3 de agosto de 2023',
    releaseYear: 2023,
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    genres: ['RPG', 'Estrategia', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '80 - 160 horas',
    features: [
      'Libertad de rol sin precedentes basada en las reglas oficiales de D&D 5ª Edición.',
      'Combate táctico por turnos donde el entorno, la altura y los elementos son decisivos.',
      'Compañeros carismáticos con arcos románticos, dilemas morales y lealtades cruzadas.',
      'Más de 17.000 variaciones de finales posibles según tus actos a lo largo de la campaña.',
      'Ganador del Juego del Año en The Game Awards 2023 y multitud de galardones internacionales.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel I5 4690 / AMD FX 8350',
        memory: '8 GB RAM',
        graphics: 'Nvidia GTX 970 / RX 480 (4GB+ of VRAM)',
        storage: '150 GB de espacio disponible (SSD requerido)',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Intel i7 8700K / AMD r5 3600',
        memory: '16 GB RAM',
        graphics: 'Nvidia 2060 Super / RX 5700 XT (8GB+ of VRAM)',
        storage: '150 GB SSD',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: true
  },
  {
    id: '22',
    slug: 'terraria',
    title: 'Terraria',
    shortDescription: 'Cava, lucha, explora y construye en un emocionante mundo de acción y aventura en dos dimensiones.',
    fullDescription: '¡El mundo entero está al alcance de tus dedos mientras luchas por la supervivencia, la fortuna y la gloria! Adéntrate en cavernosas extensiones en busca de tesoros y materias primas con las que fabricar equipamiento y armaduras cada vez más poderosas para derrotar a monstruosos jefes.',
    rating: 88,
    releaseDate: '16 de mayo de 2011',
    releaseYear: 2011,
    developer: 'Re-Logic',
    publisher: 'Re-Logic / 505 Games',
    genres: ['Sandbox', 'Aventura', 'RPG', 'Indie'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'Android', 'iOS'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '60 - 150 horas',
    features: [
      'Más de 5000 objetos, armas, bloques y accesorios coleccionables.',
      'Decenas de jefes y eventos desafiantes (invasiones piratas, lunas de sangre).',
      'Mundo subterráneo con múltiples biomas: Inframundo, Selva, Corrupción y Carmesí.',
      'Construcción de viviendas para atraer NPCs vendedores, enfermeras y alquimistas.',
      'Soporte cooperativo en línea fluido con amigos.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows Xp, Vista, 7, 8/8.1, 10',
        processor: '1.6 Ghz',
        memory: '2.5 GB RAM',
        graphics: '128mb Video Memory, capaz de Shader Model 2.0+',
        storage: '200 MB de espacio disponible',
        directX: 'Versión 9.0c'
      },
      recommended: {
        os: 'Windows 10 / 11',
        processor: 'Dual Core 3.0 Ghz',
        memory: '4 GB RAM',
        graphics: '512MB Video Memory con Shader Model 3.0+',
        storage: '500 MB de espacio disponible',
        directX: 'Versión 9.0c'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '23',
    slug: 'stardew-valley',
    title: 'Stardew Valley',
    shortDescription: 'Hereda la vieja granja de tu abuelo en Stardew Valley y conviértela en un próspero hogar de campo.',
    fullDescription: 'Has heredado la vieja parcela agrícola de tu abuelo en Stardew Valley. Equipado con herramientas de segunda mano y unas pocas monedas, te dispones a empezar una nueva vida. ¿Podrás aprender a vivir de la tierra y convertir estos campos descuidados en un hogar próspero?',
    rating: 89,
    releaseDate: '26 de febrero de 2016',
    releaseYear: 2016,
    developer: 'ConcernedApe',
    publisher: 'ConcernedApe',
    genres: ['Simulación', 'RPG', 'Indie'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'Android', 'iOS'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '60 - 150 horas',
    features: [
      'Cultivo estacional, cría de animales, elaboración de quesos y vinos artesanales.',
      'Exploración de minas oscuras con monstruos y minerales preciosos.',
      'Vida comunitaria en Pueblo Pelícano con más de 30 vecinos con los que forjar lazos de amistad o matrimonio.',
      'Restauración del Centro Cívico mediante paquetes de recolección comunitaria.',
      'Modo multijugador cooperativo de hasta 8 jugadores en PC.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows Vista o superior',
        processor: '2 Ghz',
        memory: '2 GB RAM',
        graphics: '256 mb video memory, shader model 3.0+',
        storage: '500 MB de espacio disponible',
        directX: 'Versión 10'
      },
      recommended: {
        os: 'Windows 10 / 11',
        processor: '2 Ghz+',
        memory: '4 GB RAM',
        graphics: '512 mb video memory',
        storage: '1 GB de espacio disponible',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '24',
    slug: 'hollow-knight',
    title: 'Hollow Knight',
    shortDescription: 'Desciende a las profundidades de un reino subterráneo en ruinas para combatir criaturas corrompidas.',
    fullDescription: 'Forja tu propio camino en Hollow Knight, una aventura de acción épica a través de un vasto reino arruinado de insectos y héroes. Explora cavernas serpenteantes, combate criaturas corrompidas y hazte amigo de extraños bichos, todo en un estilo clásico en 2D dibujado a mano.',
    rating: 90,
    releaseDate: '24 de febrero de 2017',
    releaseYear: 2017,
    developer: 'Team Cherry',
    publisher: 'Team Cherry',
    genres: ['Metroidvania' as any, 'Plataformas', 'Acción', 'Indie'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    modes: ['Un jugador'],
    averagePlaytime: '30 - 65 horas',
    features: [
      'Mundo subterráneo interconectado de Hallownest con atmósfera melancólica.',
      'Control preciso y responsivo con el Aguijón, esquivas y hechizos de alma.',
      'Más de 150 enemigos únicos y 30 jefes épicos con patrones rigurosos.',
      'Sistema de Amuletos para personalizar tus habilidades según tu estilo de juego.',
      'Banda sonora ambiental de Christopher Larkin elogiada universalmente.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 (64bit)',
        processor: 'Intel Core 2 Duo E5200',
        memory: '4 GB RAM',
        graphics: 'GeForce 9800GTX+ (1GB)',
        storage: '9 GB de espacio disponible',
        directX: 'Versión 10'
      },
      recommended: {
        os: 'Windows 10 (64bit)',
        processor: 'Intel Core i5',
        memory: '8 GB RAM',
        graphics: 'GeForce GTX 560',
        storage: '9 GB de espacio disponible',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '25',
    slug: 'celeste',
    title: 'Celeste',
    shortDescription: 'Ayuda a Madeline a sobrevivir a sus demonios internos en su viaje a la cima de la montaña Celeste.',
    fullDescription: 'Ayuda a Madeline a escalar la cima de la mística montaña Celeste en este desafiante juego de plataformas de los creadores de TowerFall. Supera cientos de desafíos creados a mano, descubre secretos retorcidos y reconstruye el misterio de la montaña en una conmovedora historia sobre la superación y la salud mental.',
    rating: 92,
    releaseDate: '25 de enero de 2018',
    releaseYear: 2018,
    developer: 'Maddy Makes Games',
    publisher: 'Maddy Makes Games',
    genres: ['Plataformas', 'Indie', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    modes: ['Un jugador'],
    averagePlaytime: '10 - 35 horas',
    features: [
      'Plataformeo de precisión quirúrgica con saltos, escaladas y dash aéreo.',
      'Más de 700 pantallas repletas de fresas coleccionables y caras B desafiantes.',
      'Narrativa profunda y empática sobre la ansiedad, la depresión y la autoaceptación.',
      'Modo de asistencia detallado para hacer el juego accesible a cualquier persona.',
      'Inolvidable banda sonora synth de Lena Raine nominada a los premios BAFTA.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 o superior',
        processor: 'Intel Core i3 M380',
        memory: '2 GB RAM',
        graphics: 'Intel HD 4000',
        storage: '1200 MB de espacio disponible',
        directX: 'Versión 10'
      },
      recommended: {
        os: 'Windows 10',
        processor: 'Intel Core i5',
        memory: '4 GB RAM',
        graphics: 'Gráfica dedicada 1GB',
        storage: '1200 MB de espacio disponible',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '26',
    slug: 'hades',
    title: 'Hades',
    shortDescription: 'Desafía al dios de los muertos mientras te abres paso a tajos fuera del Inframundo griego.',
    fullDescription: 'Hades es un roguelike de acción que combina los mejores aspectos de los aclamados títulos de Supergiant Games: la acción rápida de Bastion, la rica atmósfera de Transistor y la narrativa centrada en personajes de Pyre. Como el inmortal Príncipe del Inframundo, empuñarás los poderes y las armas del Olimpo para liberarte.',
    rating: 93,
    releaseDate: '17 de septiembre de 2020',
    releaseYear: 2020,
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    genres: ['Acción', 'RPG', 'Indie'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'iOS'],
    modes: ['Un jugador'],
    averagePlaytime: '25 - 90 horas',
    features: [
      'Combate vertiginoso y fluido con seis armas legendarias y aspectos desbloqueables.',
      'Bendiciones olímpicas dinámicas de Zeus, Atenea, Poseidón, Afrodita y más dioses.',
      'Narrativa reactiva que progresa orgánicamente incluso tras cada muerte.',
      'Estilo visual tipo cómic mitológico dibujado a mano y doblaje vocal impecable.',
      'Multiplicidad de galardones a Juego del Año en los DICE Awards y Game Developers Choice.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 SP1',
        processor: 'Dual Core 2.4 GHz',
        memory: '4 GB RAM',
        graphics: '1GB VRAM / DirectX 10+ support',
        storage: '15 GB de espacio disponible',
        directX: 'Versión 10'
      },
      recommended: {
        os: 'Windows 10 / 11',
        processor: 'Dual Core 3.0 GHz+',
        memory: '8 GB RAM',
        graphics: '2GB VRAM / DirectX 11+ support',
        storage: '20 GB SSD',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '27',
    slug: 'hades-ii',
    title: 'Hades II',
    shortDescription: 'Lucha más allá del Inframundo usando brujería oscura para enfrentar al Titán del Tiempo.',
    fullDescription: 'La primera secuela de Supergiant Games se basa en los mejores aspectos del roguelike original en una experiencia fascinante e infinitamente rejugable. Encarna a Melínoe, la Princesa del Inframundo y hermana de Zagreo, mientras dominas la magia oscura y combates al temible Cronos, Titán del Tiempo.',
    rating: 94,
    releaseDate: '6 de mayo de 2024',
    releaseYear: 2024,
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    genres: ['Acción', 'RPG', 'Indie'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch 2'],
    modes: ['Un jugador'],
    averagePlaytime: '30 - 80 horas',
    features: [
      'Nueva protagonista: Melínoe, con ataques canalizados de brujería y lanzamiento de sellos mágicos.',
      'Viajes duales: desciende al Tártaro o asciende a la superficie para defender el Monte Olimpo.',
      'Caldero de la Encrucijada para invocar encantamientos, herramientas de recolección y mejoras.',
      'Nuevos dioses olímpicos como Hécate, Apolo, Selene y Némesis.',
      'Dirección artística deslumbrante con nuevas pistas musicales vocales de Darren Korb.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Dual Core 2.4 GHz',
        memory: '8 GB RAM',
        graphics: 'GeForce GTX 950, Radeon R7 360, o Intel HD Graphics 630',
        storage: '10 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Quad Core 2.4ghz',
        memory: '16 GB RAM',
        graphics: 'GeForce RTX 2060, Radeon RX 5600 XT, o Intel Arc A580',
        storage: '10 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: true
  },
  {
    id: '28',
    slug: 'sekiro-shadows-die-twice',
    title: 'Sekiro: Shadows Die Twice',
    shortDescription: 'Forja tu propio camino hacia la venganza como el Lobo Manco en un Japón del período Sengoku recreado por FromSoftware.',
    fullDescription: 'En Sekiro: Shadows Die Twice eres el Lobo Manco, un guerrero desfigurado y caído en desgracia rescatado al borde de la muerte. Obligado a proteger a un joven señor que es descendiente de un antiguo linaje, te conviertes en el objetivo de muchos enemigos despiadados, incluido el peligroso clan Ashina.',
    rating: 91,
    releaseDate: '22 de marzo de 2019',
    releaseYear: 2019,
    developer: 'FromSoftware',
    publisher: 'Activision',
    genres: ['Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador'],
    averagePlaytime: '30 - 70 horas',
    features: [
      'Sistema de desvío con katana (deflect) y barra de postura que redefine los combates con espada.',
      'Prótesis de shinobi multifunción con shurikens, hacha, lanzallamas y petardos.',
      'Gancho de agarre para sigilo vertical y emboscadas aéreas fluidas.',
      'Mecánica de resurrección táctica durante las intensas batallas contra jefes.',
      'Galardonado con el prestigioso premio Juego del Año en The Game Awards 2019.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit',
        processor: 'Intel Core i3-2100 | AMD FX-6300',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GeForce GTX 760 | AMD Radeon HD 7950',
        storage: '25 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit',
        processor: 'Intel Core i5-2500K | AMD Ryzen 5 1400',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 970 | AMD Radeon RX 570',
        storage: '25 GB SSD',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '29',
    slug: 'dark-souls-iii',
    title: 'Dark Souls III',
    shortDescription: 'Las brasas se apagan en el reino de Lothric. Enfréntate a los Señores de la Ceniza para decidir el destino del fuego.',
    fullDescription: 'A medida que los fuegos se apagan y el mundo cae en la ruina, viaja al universo de Dark Souls III, una tierra repleta de enemigos colosales y entornos sobrecogedores. Los jugadores se sumergirán en un mundo de épica atmósfera y oscuridad a través de una jugabilidad más rápida e implacable.',
    rating: 89,
    releaseDate: '12 de abril de 2016',
    releaseYear: 2016,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    genres: ['RPG', 'Acción'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '35 - 90 horas',
    features: [
      'Combate refinado con la incorporación de Artes de Arma (Weapon Skills) tácticas.',
      'Diseño de niveles interconectado con castillos góticos, ciénagas venenosas y murallas.',
      'Jefes inolvidables con múltiples fases como los Vigilantes del Abismo y el Rey sin Nombre.',
      'Pactos multijugador para invasiones sangrientas y auxilio a otros jugadores.',
      'Impresionante culminación de la trilogía Souls con los DLCs Ashes of Ariandel y The Ringed City.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 SP1 64bit, Windows 8.1 64bit Windows 10 64bit',
        processor: 'Intel Core i3-2100 / AMD FX-6300',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7950',
        storage: '25 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 7 SP1 64bit, Windows 8.1 64bit, Windows 10 64bit',
        processor: 'Intel Core i7-3770 / AMD FX-8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 970 / ATI Radeon R9 series',
        storage: '25 GB SSD',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '30',
    slug: 'bloodborne',
    title: 'Bloodborne',
    shortDescription: 'Enfrenta tus miedos en la decrépita ciudad gótica de Yharnam, asolada por una endémica plaga bestial.',
    fullDescription: 'Viaja a la antigua ciudad de Yharnam, donde una misteriosa plaga se propaga con voracidad por las calles. El peligro y la locura infestan cada esquina de este mundo tétrico, y tú debes descubrir sus secretos más oscuros para poder sobrevivir a la Noche de la Cacería en esta obra de culto de FromSoftware.',
    rating: 92,
    releaseDate: '24 de marzo de 2015',
    releaseYear: 2015,
    developer: 'FromSoftware',
    publisher: 'Sony Computer Entertainment',
    genres: ['Acción', 'RPG', 'Terror'],
    platforms: ['PlayStation 5', 'PlayStation 4'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '35 - 80 horas',
    features: [
      'Armas truco transformables con modos dobles para combate a corta y media distancia.',
      'Sistema de recuperación de salud (Rally) que premia la agresión constante e inmediata.',
      'Atmósfera gótica y victoriana que evoluciona hacia el terror cósmico lovecraftiano.',
      'Mazmorras del Cáliz procedimentales para cazadores que buscan desafíos extremos.',
      'Considerado por la crítica una de las mayores obras maestras exclusivas de PlayStation.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '31',
    slug: 'the-last-of-us-part-i',
    title: 'The Last of Us Part I',
    shortDescription: 'Cruza unos Estados Unidos devastados por una infección parasitaria junto a Joel y Ellie.',
    fullDescription: 'En una civilización devastada, donde los infectados y los supervivientes empedernidos campan a sus anchas, Joel, un protagonista exhausto, es contratado para sacar de contrabando a Ellie, una niña de 14 años, de una zona militar de cuarentena. Lo que comienza como un pequeño trabajo pronto se transforma en un brutal viaje por todo el país.',
    rating: 95,
    releaseDate: '2 de septiembre de 2022',
    releaseYear: 2022,
    developer: 'Naughty Dog',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura', 'Terror'],
    platforms: ['PC', 'PlayStation 5'],
    modes: ['Un jugador'],
    averagePlaytime: '15 - 25 horas',
    features: [
      'Reconstrucción integral con el motor gráfico de PS5 y modelos de personajes hiperrealistas.',
      'Inteligencia artificial de enemigos y compañeros completamente modernizada.',
      'Combate tenso que combina sigilo, armas de fuego artesanales y ladrillos/botellas.',
      'Incluye el aclamado capítulo precuela Left Behind.',
      'Extensas opciones de accesibilidad pioneras en la industria del videojuego.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (Version 1909 o superior)',
        processor: 'AMD Ryzen 5 1500X / Intel Core i7-4770K',
        memory: '16 GB RAM',
        graphics: 'AMD Radeon 470 (4 GB) / NVIDIA GeForce GTX 970 (4 GB)',
        storage: '100 GB SSD',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 (Version 1909 o superior)',
        processor: 'AMD Ryzen 5 3600X / Intel Core i7-8700',
        memory: '16 GB RAM',
        graphics: 'AMD Radeon RX 5700 XT (8 GB) / NVIDIA GeForce RTX 2070 SUPER (8 GB)',
        storage: '100 GB SSD NVMe',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: false
  },
  {
    id: '32',
    slug: 'the-last-of-us-part-ii',
    title: 'The Last of Us Part II Remastered',
    shortDescription: 'Cinco años después de su peligroso viaje, Ellie emprende una implacable búsqueda de justicia y venganza.',
    fullDescription: 'Tras un trágico y violento evento que perturba la paz en Jackson, Ellie se embarca en un viaje implacable en busca de justicia. Mientras da caza a los responsables uno a uno, se enfrenta a las devastadoras repercusiones físicas y emocionales de sus propias acciones en una desgarradora historia de dualidad moral.',
    rating: 93,
    releaseDate: '19 de enero de 2024',
    releaseYear: 2024,
    developer: 'Naughty Dog',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura', 'Terror'],
    platforms: ['PlayStation 5', 'PlayStation 4', 'PC'],
    modes: ['Un jugador'],
    averagePlaytime: '25 - 40 horas',
    features: [
      'Animaciones corporales fluidas con botón de esquiva, salto y posición tendida.',
      'Nuevo modo de supervivencia roguelike Sin Retorno (No Return) con encuentros aleatorios.',
      'Niveles perdidos comentados por los directores Neil Druckmann y Troy Baker.',
      'Modo libre de interpretación con guitarra acústica y varios instrumentos.',
      'Ganador histórico de más de 300 galardones a Juego del Año en todo el mundo.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: true
  },
  {
    id: '33',
    slug: 'uncharted-4-a-thiefs-end',
    title: "Uncharted 4: A Thief's End",
    shortDescription: 'Nathan Drake es tentado a volver al mundo de los ladrones por su hermano creído muerto, Sam.',
    fullDescription: 'Tres años después de los eventos de Uncharted 3, Nathan Drake parece haber dejado atrás la búsqueda de fortunas. Sin embargo, el destino llama a su puerta cuando su hermano Sam reaparece para pedirle ayuda para salvar su propia vida, ofreciéndole una aventura a la que Drake no puede resistirse: la búsqueda del tesoro pirata de Henry Avery en Libertalia.',
    rating: 93,
    releaseDate: '10 de mayo de 2016',
    releaseYear: 2016,
    developer: 'Naughty Dog',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura', 'Shooter'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4'],
    modes: ['Un jugador', 'Multijugador'],
    averagePlaytime: '15 - 25 horas',
    features: [
      'Secuencias de acción cinematográfica con persecuciones de jeeps y derrumbes épicos.',
      'Cuerda con gancho para balancearse sobre abismos y realizar derribos aéreos.',
      'Exploración en vehículos 4x4 en entornos semiabiertos de Madagascar.',
      'Cierre magistral y conmovedor para el arco de Nathan Drake y Elena Fisher.',
      'Colección Legacy of Thieves remasterizada a 4K 60FPS y tiempos de carga nulos.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit (version 1903 o superior)',
        processor: 'Intel i5-4330 / AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 960 (4 GB) / AMD R9 290X (4 GB)',
        storage: '126 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 64-bit (version 1903 o superior)',
        processor: 'Intel i7-4770 / AMD Ryzen 5 1500X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1060 (6 GB) / AMD RX 570 (4 GB)',
        storage: '126 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '34',
    slug: 'death-stranding',
    title: "Death Stranding Director's Cut",
    shortDescription: 'Del legendario Hideo Kojima, reconecta una sociedad fracturada y salva a la humanidad de la extinción.',
    fullDescription: 'En el futuro, un misterioso evento conocido como el Death Stranding ha abierto una puerta entre los vivos y los muertos, lo que lleva a criaturas del más allá a vagar por un mundo desolado por una sociedad decadente. Encarnando a Sam Bridges, tu misión es dar esperanza a la humanidad reconectando a los supervivientes de un Estados Unidos devastado.',
    rating: 86,
    releaseDate: '24 de septiembre de 2021',
    releaseYear: 2021,
    developer: 'KOJIMA PRODUCTIONS',
    publisher: 'Sony Interactive Entertainment / 505 Games',
    genres: ['Acción', 'Aventura', 'Simulación'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'iOS'],
    modes: ['Un jugador', 'Multijugador'],
    averagePlaytime: '40 - 80 horas',
    features: [
      'Mecánicas revolucionarias de travesía, equilibrio de peso, resistencia y calzado.',
      'Sistema Social Strand asíncrono donde las estructuras que construyes ayudan a otros jugadores en línea.',
      'Elenco estelar de Hollywood: Norman Reedus, Mads Mikkelsen y Léa Seydoux.',
      'Construcción de carreteras, tirolesas, catapultas de carga y puentes holográficos.',
      'Banda sonora melancólica e introspectiva de Low Roar que acompaña paisajes imponentes.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10',
        processor: 'Intel Core i5-3470 o AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'GeForce GTX 1050 4 GB o AMD Radeon RX 560 4 GB',
        storage: '80 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11',
        processor: 'Intel Core i7-3770 o AMD Ryzen 5 1600',
        memory: '8 GB RAM',
        graphics: 'GeForce GTX 1060 6 GB o AMD Radeon RX 590',
        storage: '80 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '35',
    slug: 'assassins-creed-valhalla',
    title: "Assassin's Creed Valhalla",
    shortDescription: 'Conviértete en Eivor, una feroz leyenda vikinga criada entre historias de batallas y gloria en la Inglaterra del siglo IX.',
    fullDescription: 'Conviértete en Eivor, una leyenda vikinga en busca de gloria. Explora un mundo abierto dinámico y hermoso ambientado en la brutal época oscura de Inglaterra. Saquea a tus enemigos, haz prosperar tu asentamiento y consolida tu poder político en tu afán por ganarte un puesto entre los dioses en el Valhalla.',
    rating: 83,
    releaseDate: '10 de noviembre de 2020',
    releaseYear: 2020,
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    genres: ['RPG', 'Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador'],
    averagePlaytime: '60 - 140 horas',
    features: [
      'Incursiones vikingas liderando tu drakkar contra monasterios y fortalezas sajonas.',
      'Combate visceral con empuñadura doble de hachas, espadas, mayales e incluso escudos.',
      'Desarrollo y personalización de tu propio asentamiento en Ravensthorpe.',
      'Viajes míticos a Asgard y Jotunheim para interactuar con Odín y deidades nórdicas.',
      'Mundo abierto masivo que abarca las tierras de Noruega, Inglaterra e Irlanda.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'AMD Ryzen 3 1200 3.1 GHz / Intel Core i5-4460 3.2 GHz',
        memory: '8 GB RAM',
        graphics: 'AMD R9 380 4GB / NVIDIA GeForce GTX 960 4GB',
        storage: '130 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'AMD Ryzen 5 1600 3.2 GHz / Intel Core i7-4790 3.6 GHz',
        memory: '8 GB RAM',
        graphics: 'AMD RX 570 8GB / NVIDIA GeForce GTX 1060 6GB',
        storage: '130 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '36',
    slug: 'far-cry-6',
    title: 'Far Cry 6',
    shortDescription: 'Únete a una revolución guerrillera moderna para derrocar al dictador de la isla tropical de Yara.',
    fullDescription: 'Bienvenido a Yara, un paraíso tropical congelado en el tiempo. Como dictador de Yara, Antón Castillo (interpretado por Giancarlo Esposito) está decidido a restaurar su nación a su antigua gloria por cualquier medio, junto a su hijo Diego. Únete a la guerrilla moderna para liberar la isla.',
    rating: 79,
    releaseDate: '7 de octubre de 2021',
    releaseYear: 2021,
    developer: 'Ubisoft Toronto',
    publisher: 'Ubisoft',
    genres: ['Shooter', 'Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    modes: ['Un jugador', 'Cooperativo'],
    averagePlaytime: '25 - 60 horas',
    features: [
      'La isla caribeña ficticia de Yara: el mundo abierto más extenso de la saga Far Cry.',
      'Mochilas Supremo con ataques de misiles devastadores y armas improvisadas Resolver.',
      'Compañeros animales adorables y letales: el cocodrilo Guapo y el perrito Chorizo.',
      'Campaña completa jugable en cooperativo en línea con amigos.',
      'Puntos de control, emboscadas en carreteras y asaltos a bases militares.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (20H1 o posterior) - 64-bit',
        processor: 'AMD Ryzen 3 1200 @ 3.1 GHz o Intel Core i5-4460 @ 3.2 GHz',
        memory: '8 GB RAM',
        graphics: 'AMD RX 460 (4 GB) o NVIDIA GeForce GTX 960 (4 GB)',
        storage: '60 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 (20H1 o posterior) - 64-bit',
        processor: 'AMD Ryzen 5 3600X @ 3.8 GHz o Intel Core i7-7700 @ 3.6 GHz',
        memory: '16 GB RAM',
        graphics: 'AMD RX Vega 64 (8 GB) o NVIDIA GeForce GTX 1080 (8 GB)',
        storage: '60 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: false
  },
  {
    id: '37',
    slug: 'fortnite',
    title: 'Fortnite',
    shortDescription: 'Crea, juega y sobrevive en el Battle Royale más popular del planeta con constantes eventos y colaboraciones.',
    fullDescription: 'Fortnite es el multijugador masivo gratuito en constante evolución donde 100 jugadores caen en una isla para luchar hasta que solo quede uno en pie. Con modos como Battle Royale clásico, Cero Construcción, LEGO Fortnite, Rocket Racing y Fortnite Festival, ofrece una infinita variedad de entretenimiento.',
    rating: 85,
    releaseDate: '21 de julio de 2017',
    releaseYear: 2017,
    developer: 'Epic Games',
    publisher: 'Epic Games',
    genres: ['Shooter', 'Acción', 'Sandbox'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch', 'Android', 'iOS'],
    modes: ['Multijugador', 'Cooperativo'],
    averagePlaytime: '100+ horas',
    features: [
      'Modo Cero Construcción para jugadores que prefieren pura puntería y cobertura táctica.',
      'Universo creativo con Unreal Editor para Fortnite (UEFN) creado por la comunidad.',
      'Colaboraciones históricas con Star Wars, Marvel, anime, cantantes y cine.',
      'Ecosistema con LEGO Fortnite de supervivencia y Rocket Racing de velocidad.',
      'Gráficos de última generación impulsados por Unreal Engine 5.4 con Nanite y Lumen.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 de 64 bits',
        processor: 'Core i3-3225 a 3.3 GHz',
        memory: '8 GB RAM',
        graphics: 'Intel HD 4000 o AMD Radeon Vega 8',
        storage: '30 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11 de 64 bits',
        processor: 'Core i5-7300U a 3.5 GHz o AMD Ryzen 3 3300U',
        memory: '16 GB RAM',
        graphics: 'Nvidia GTX 960 o AMD R9 280',
        storage: '30 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '38',
    slug: 'valorant',
    title: 'VALORANT',
    shortDescription: 'Shooter táctico 5v5 basado en personajes donde la precisión del disparo se combina con habilidades únicas.',
    fullDescription: 'Combina estilo y experiencia en el escenario competitivo global. Tienes 13 rondas para atacar y defender tu bando mediante un manejo preciso de las armas y habilidades tácticas especiales. Con una sola vida por ronda, tendrás que pensar más rápido que tu oponente para sobrevivir.',
    rating: 83,
    releaseDate: '2 de junio de 2020',
    releaseYear: 2020,
    developer: 'Riot Games',
    publisher: 'Riot Games',
    genres: ['Shooter', 'Acción', 'Estrategia'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    modes: ['Multijugador'],
    averagePlaytime: '100+ horas',
    features: [
      'Disparos precisos con armas de dispersión táctica que premian la puntería limpia a la cabeza.',
      'Agentes organizados por roles: Duelistas, Iniciadores, Controladores y Centinelas.',
      'Servidores dedicados con tasa de refresco a 128 ticks para registro instantáneo de impactos.',
      'Sistema antitrampas de vanguardia Riot Vanguard a nivel de kernel.',
      'Escena de esports masiva con los torneos mundiales VALORANT Champions Tour.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core 2 Duo E8400 / AMD Athlon 200GE',
        memory: '4 GB RAM',
        graphics: 'Intel HD 4000 / Radeon R5 200',
        storage: '20 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11 (64-bit)',
        processor: 'Intel i3-4150 / AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'GeForce GT 730 / Radeon R7 240',
        storage: '25 GB SSD',
        directX: 'Versión 11'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '39',
    slug: 'counter-strike-2',
    title: 'Counter-Strike 2',
    shortDescription: 'El salto técnico más grande en la historia de Counter-Strike impulsado por el motor Source 2.',
    fullDescription: 'Counter-Strike 2 es el mayor salto técnico en la historia de la legendaria franquicia de Valve. Impulsado por el motor Source 2, presenta humo volumétrico que interactúa dinámicamente con el entorno y las balas, mapas reconstruidos desde cero, sub-tick rate para máxima precisión y físicas actualizadas.',
    rating: 82,
    releaseDate: '27 de septiembre de 2023',
    releaseYear: 2023,
    developer: 'Valve',
    publisher: 'Valve',
    genres: ['Shooter', 'Acción', 'Estrategia'],
    platforms: ['PC'],
    modes: ['Multijugador'],
    averagePlaytime: '150+ horas',
    features: [
      'Granadas de humo volumétricas dinámicas que reaccionan a disparos, explosiones y luz.',
      'Arquitectura de actualización por subtics para registro independiente de la tasa de ticks.',
      'Mapas icónicos como Dust II, Mirage, Inferno y Nuke recreados con iluminación PBR en Source 2.',
      'Sistema de clasificación Premier con ranking CS y tabla de líderes global.',
      'Totalmente gratuito con economía intacta de skins en el Mercado de la Comunidad Steam.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Procesador de 4 subprocesos (ej. Intel Core i5 750 o superior)',
        memory: '8 GB RAM',
        graphics: 'La tarjeta de video debe ser de 1 GB o más y debe ser compatible con DirectX 11 y Shader Model 5.0',
        storage: '85 GB de espacio disponible',
        directX: 'Versión 11'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Intel Core i7-9700K o AMD Ryzen 7 3700X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2070 o AMD Radeon RX 5700 XT',
        storage: '85 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: true
  },
  {
    id: '40',
    slug: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    shortDescription: 'Emprende un peligroso viaje como el Predestinado en un asombroso RPG de acción arraigado en la mitología china.',
    fullDescription: 'Black Myth: Wukong es un RPG de acción arraigado en la mitología china y basado en Viaje al Oeste, una de las cuatro grandes novelas clásicas de la literatura oriental. Te pondrás en la piel del Predestinado para explorar un mundo fantástico repleto de maravillas y enfrentarte a formidables adversarios con el bastón Ruyi.',
    rating: 81,
    releaseDate: '20 de agosto de 2024',
    releaseYear: 2024,
    developer: 'Game Science',
    publisher: 'Game Science',
    genres: ['Acción', 'RPG', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    modes: ['Un jugador'],
    averagePlaytime: '35 - 70 horas',
    features: [
      'Combate dinámico con tres posturas del bastón: Aplastamiento, Pilar y Empuje.',
      'Poderes de transformación espiritual en criaturas derrotadas con habilidades exclusivas.',
      'Gráficos espectaculares en Unreal Engine 5 con trazado de caminos completo en PC.',
      'Más de 80 jefes y subjefes inspirados en el folclore y demonología taoísta/budista.',
      'Éxito de ventas histórico mundial con más de 20 millones de copias vendidas.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8400 / AMD Ryzen 5 1600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
        storage: '130 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Intel Core i7-9700 / AMD Ryzen 5 5500',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT / INTEL Arc A750',
        storage: '130 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    isPopular: true,
    isRecent: true
  },
  {
    id: '41',
    slug: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima Director’s Cut',
    shortDescription: 'Forja un nuevo camino y libra una guerra no convencional por la libertad de la isla de Tsushima.',
    fullDescription: 'A finales del siglo XIII, el imperio mongol ha devastado naciones enteras en su campaña por conquistar Oriente. La isla de Tsushima es todo lo que se interpone entre el Japón continental y una gigantesca flota invasora. Como el samurái Jin Sakai, deberás romper las tradiciones de honor para convertirte en el Fantasma.',
    rating: 87,
    releaseDate: '20 de agosto de 2021',
    releaseYear: 2021,
    developer: 'Sucker Punch Productions / Nixxes',
    publisher: 'Sony Interactive Entertainment',
    genres: ['Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4'],
    modes: ['Un jugador', 'Multijugador', 'Cooperativo'],
    averagePlaytime: '30 - 65 horas',
    features: [
      'El Viento Guía como brújula diegética que elimina la necesidad de interfaz en pantalla.',
      'Duelos a muerte con katana con cuatro posturas (Piedra, Agua, Viento, Luna).',
      'Tácticas de sigilo del Fantasma con bombas de humo, dardos venenosos y kunais.',
      'Expansión de la Isla de Iki incluida con nueva historia y místicas leyendas.',
      'Modo cooperativo Legends con clases Samurái, Cazador, Ronin y Asesino.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-7100 o AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 960 o AMD Radeon RX 5500 XT',
        storage: '75 GB de espacio disponible',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        processor: 'Intel Core i5-8600 o AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060 o AMD Radeon RX 5600 XT',
        storage: '75 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '42',
    slug: 'alan-wake-2',
    title: 'Alan Wake 2',
    shortDescription: 'Un thriller psicológico de supervivencia donde un escritor atrapado en una pesadilla y una agente del FBI investigan asesinatos rituales.',
    fullDescription: 'Una serie de asesinatos rituales amenaza Bright Falls, una pequeña comunidad rodeada por la naturaleza del noroeste del Pacífico. Saga Anderson, una consumada agente del FBI con reputación de resolver casos imposibles, llega para investigar. Mientras tanto, Alan Wake lucha por escribir su vía de escape del Lugar Oscuro.',
    rating: 89,
    releaseDate: '27 de octubre de 2023',
    releaseYear: 2023,
    developer: 'Remedy Entertainment',
    publisher: 'Epic Games Publishing',
    genres: ['Terror', 'Acción', 'Aventura'],
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    modes: ['Un jugador'],
    averagePlaytime: '18 - 30 horas',
    features: [
      'Historias duales entrelazadas entre la agente del FBI Saga Anderson y el escritor Alan Wake.',
      'El Palacio Mental de Saga para hilar pistas deductivas en un tablero de casos.',
      'La Sala del Escritor de Alan donde reescribes la realidad para cambiar escenarios en vivo.',
      'Gráficos de vanguardia con trazado de caminos (Path Tracing) y DLSS Ray Reconstruction.',
      'Ganador de Mejor Dirección, Mejor Narrativa y Mejor Dirección de Arte en The Game Awards 2023.'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel i5-7600K o equivalente AMD',
        memory: '16 GB RAM',
        graphics: 'GeForce RTX 2060 / Radeon RX 6600 (6GB VRAM)',
        storage: '90 GB SSD',
        directX: 'Versión 12'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Ryzen 7 3700X o equivalente Intel',
        memory: '16 GB RAM',
        graphics: 'GeForce RTX 3070 / Radeon RX 6700 XT (8GB VRAM)',
        storage: '90 GB SSD',
        directX: 'Versión 12'
      }
    },
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: true
  },
  {
    id: '43',
    slug: 'super-mario-odyssey',
    title: 'Super Mario Odyssey',
    shortDescription: 'Acompaña a Mario en una masiva aventura en 3D por todo el globo terráqueo junto a su fiel sombrero Cappy.',
    fullDescription: 'Únete a Mario en una descomunal aventura en 3D por todo el planeta utilizando sus increíbles habilidades nuevas para coleccionar energilunas y alimentar a la aeronave Odyssey para rescatar a la princesa Peach de los planes de boda de Bowser.',
    rating: 97,
    releaseDate: '27 de octubre de 2017',
    releaseYear: 2017,
    developer: 'Nintendo EPD',
    publisher: 'Nintendo',
    genres: ['Plataformas', 'Aventura'],
    platforms: ['Nintendo Switch', 'Nintendo Switch 2'],
    modes: ['Un jugador', 'Cooperativo'],
    averagePlaytime: '15 - 50 horas',
    features: [
      'Mecánica de captura de Cappy que te permite controlar Goombas, Koopas, un T-Rex y tanques.',
      'Reinos llenos de vida: Nueva Donk (Metro Kingdom), Reino de las Cataratas y Reino Ribereño.',
      'Más de 800 energilunas escondidas con desafíos ingeniosos de plataformas.',
      'Modo cooperativo para dos jugadores donde uno maneja a Mario y el otro a Cappy.',
      'Trajes coleccionables para vestir a Mario con atuendos clásicos de la historia de Nintendo.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: true,
    isRecent: false
  },
  {
    id: '44',
    slug: 'metroid-prime-remastered',
    title: 'Metroid Prime Remastered',
    shortDescription: 'Explora el planeta alienígena Tallon IV a través de los ojos de la legendaria cazarrecompensas Samus Aran.',
    fullDescription: 'Ponte el traje de Samus Aran y navega por los caminos interconectados y las fascinantes regiones de un planeta alienígena hostil. Utiliza habilidades familiares como la Morfosfera y el Rayo Enganche, además de una gran variedad de visores para explorar y derrotar a los Piratas Espaciales.',
    rating: 94,
    releaseDate: '8 de febrero de 2023',
    releaseYear: 2023,
    developer: 'Retro Studios',
    publisher: 'Nintendo',
    genres: ['Aventura', 'Shooter', 'Acción'],
    platforms: ['Nintendo Switch', 'Nintendo Switch 2'],
    modes: ['Un jugador'],
    averagePlaytime: '14 - 25 horas',
    features: [
      'Remasterización visual asombrosa con nuevas geometrías, texturas e iluminación volumétrica.',
      'Control de doble palanca analógica moderno además de controles por movimiento o clásicos.',
      'Escaneo ambiental detallado para desvelar la rica historia y biología del planeta Tallon IV.',
      'Aislamiento atmosférico envolvente con la icónica música electrónica ambiental de Kenji Yamamoto.',
      'Galería de arte conceptual y visor de modelos 3D desbloqueable al completar el juego.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    isPopular: false,
    isRecent: true
  }
];
