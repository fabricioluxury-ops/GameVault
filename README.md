# GameVault 🎮
### *Plataforma Interactiva de Descubrimiento y Base de Datos de Videojuegos*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Licencia](https://img.shields.io/badge/Licencia-Educativa_MIT-brightgreen)](#licencia)
[![Idioma](https://img.shields.io/badge/Idioma-Español_Latino-purple)](#accesibilidad-y-lenguaje)

---

## 📌 Datos Académicos del Proyecto

* **Proyecto:** GameVault — Base de Datos y Enciclopedia Gamer
* **Tipo:** Aplicación Web Frontend (Single Page Application - SPA)
* **Estudiante / Desarrollador:** *[Nombre del Estudiante]*
* **Asignatura:** *Desarrollo de Aplicaciones Web / Ingeniería de Software*
* **Docente / Asesor:** *[Nombre del Maestro]*
* **Institución Educativa:** *[Nombre de la Universidad / Colegio]*
* **Ciclo / Año Académico:** *2026*

---

## 📖 Descripción General y Justificación

**GameVault** es una plataforma web interactiva de grado de producción creada como biblioteca, enciclopedia y motor de recomendación de videojuegos. 

Nace ante la necesidad de ofrecer una experiencia centralizada, moderna y sin distracciones donde los entusiastas del entretenimiento digital puedan consultar fichas técnicas, requisitos de hardware para PC, notas de prensa y capturas en alta resolución, además de contrastar juegos cara a cara en un comparador neutral.

Toda la experiencia de usuario (menús, botones, mensajes del sistema, filtros y fichas técnicas) ha sido redactada de forma íntegra en **español latinoamericano natural**, garantizando inclusión y cercanía cultural.

---

## 🎯 Objetivos del Proyecto

### Objetivo General
Desarrollar una aplicación web interactiva, responsiva y de alto rendimiento utilizando tecnologías modernas de desarrollo frontend (**React, TypeScript, Vite y Tailwind CSS**), capaz de gestionar y presentar una base de datos de videojuegos con búsqueda en vivo, filtros multicriterio, persistencia local y comparación técnica.

### Objetivos Específicos
1. Implementar un catálogo estructurado de **al menos 40 videojuegos representativos** con metadatos reales y enriquecidos.
2. Desarrollar un motor de búsqueda global instantáneo con atajos de teclado (`Ctrl + K`).
3. Crear un sistema de filtros reactivos por género, plataforma y modo de juego, complementado con 6 algoritmos de ordenamiento.
4. Diseñar una herramienta de comparación técnica neutral cara a cara entre dos videojuegos.
5. Desarrollar un sistema de favoritos persistente mediante el almacenamiento web local (`localStorage`).
6. Garantizar un diseño adaptable (Mobile-First) con estética gamer oscura (*Dark Theme*) y efectos de cristal (*glassmorphism*).

---

## ✨ Características y Módulos Principales

### 1. 🏠 Página de Inicio (`/`)
* **Hero Banner Dinámico:** Presentación con título en gradiente neón, buscador integrado, etiquetas rápidas y contador de métricas (+44 títulos, 12 géneros, 9 plataformas).
* **Secciones Editoriales Especializadas:**
  * *Juegos Destacados:* Selección curada por crítica y relevancia histórica.
  * *Más Populares:* Títulos con mayor cantidad de jugadores activos y tendencia.
  * *Mejor Valorados:* Juegos ordenados con base en su calificación metacrítica sobre 100.
  * *Lanzamientos Recientes:* Producciones de última generación y remakes modernos.

### 2. 🔍 Catálogo Completo y Filtros Dinámicos (`/explorar`)
* **Búsqueda Multicampo:** Filtrado en tiempo real por título, género, estudio de desarrollo, distribuidor o consola.
* **Panel de Filtros Reactivo:**
  * **12 Géneros:** Acción, Aventura, RPG, Estrategia, Terror, Deportes, Carreras, Simulación, Plataformas, Indie, Shooter, Sandbox.
  * **9 Plataformas:** PC, PlayStation 5, PlayStation 4, Xbox Series X|S, Xbox One, Nintendo Switch, Nintendo Switch 2, Android, iOS.
  * **Modos de Juego:** Un jugador, Multijugador, Cooperativo.
* **Opciones de Ordenamiento:** *Más relevantes, Mejor valorados, Más populares, Más recientes, Nombre A-Z y Nombre Z-A*.
* **Contador de Resultados y Carga Progresiva:** Notificación reactiva del número de coincidencias y botón de carga gradual.
* **Sincronización con URL:** Parámetros de consulta (`?q=...&genero=...`) para compartir enlaces prefiltrados.

### 3. 🎮 Ficha Técnica y Multimedia (`/juego/:slug`)
* **Cabecera Inmersiva:** Banners panorámicos con gradientes y póster iluminado.
* **Ficha Técnica Detallada:** Calificación numérica estilizada, fechas, desarrolladores, distribuidores y tiempo promedio de juego estimado.
* **Requisitos del Sistema para PC:** Selector de pestañas entre *Requisitos Mínimos* y *Requisitos Recomendados* (SO, Procesador, RAM, GPU, Almacenamiento, DirectX).
* **Visor de Capturas Lightbox:** Galería ampliable a pantalla completa con navegación por flechas y teclado (`ESC`, `←`, `→`).
* **Juegos Relacionados:** Recomendaciones contextuales de títulos del mismo género.

### 4. ⚖️ Comparador Técnico Cara a Cara (`/comparar`)
* Comparativa neutral de dos videojuegos en una matriz estructurada.
* Modal interactivo con buscador integrado para cambiar cualquiera de los dos juegos rápidamente.
* Comparación de: Calificación, Géneros, Fecha, Desarrollador, Distribuidor, Plataformas, Modos, Tiempo de juego, Sinopsis y Características.
* Adaptación responsiva móvil sin desbordamiento horizontal.

### 5. ❤️ Colección de Favoritos (`/favoritos`)
* Almacenamiento persistente en el navegador mediante `localStorage`.
* Sincronización en tiempo real entre pestañas del navegador mediante el evento `StorageEvent`.
* Contador dinámico visible en la barra de navegación.
* Vaciado masivo o eliminación individual directa desde las tarjetas.
* Estado vacío guiado con llamada a la acción para explorar el catálogo.

### 6. 🗂️ Taxonomía de Géneros y Plataformas (`/generos`, `/plataformas`)
* Tarjetas ilustradas con conteo en vivo de los títulos disponibles en la base de datos.
* Acceso directo con redirección prefiltrada al catálogo general.

---

## 🛠️ Tecnologías y Herramientas

| Tecnología | Versión | Propósito en el Proyecto |
| :--- | :--- | :--- |
| **React** | `18.3.1` | Biblioteca base para la creación de componentes de interfaz declarativos. |
| **TypeScript** | `5.5.3` | Tipado estático para asegurar robustez, autocompletado y prevenir errores en tiempo de compilación. |
| **Vite** | `5.4.2` | Empaquetador y entorno de ejecución rápido con recarga de módulos en caliente (HMR). |
| **Tailwind CSS** | `3.4.10` | Framework de diseño utilitario para estilos, animaciones y diseño responsivo. |
| **React Router DOM** | `6.26.0` | Enrutamiento del lado del cliente (SPA) para navegación fluida sin recargas. |
| **Lucide React** | `0.441.0` | Conjunto de iconos SVG ligeros, accesibles y consistentes. |
| **Web Storage API** | Nativa | Persistencia local de datos del usuario (`localStorage`). |

---

## 📂 Arquitectura del Proyecto

```
GameVault/
├── index.html                   # Documento HTML principal con metaetiquetas en español
├── package.json                 # Dependencias y scripts de npm
├── tsconfig.json                # Configuración del compilador TypeScript
├── vite.config.ts               # Configuración del servidor y empaquetador Vite
├── tailwind.config.js           # Paleta gamer, animaciones y sombras personalizadas
├── postcss.config.js            # Configuración de PostCSS
├── README.md                    # Documentación académica y técnica del proyecto
└── src/
    ├── main.tsx                 # Entrada principal y montaje en el DOM
    ├── App.tsx                  # Enrutador, ScrollToTop y estructura general
    ├── index.css                # Estilos globales, directivas de Tailwind y scrollbar
    ├── types/
    │   └── game.ts              # Modelos e interfaces TypeScript (Game, Genre, Platform, etc.)
    ├── data/
    │   ├── gamesData.ts         # Catálogo verificado de 44 videojuegos con metadatos
    │   ├── genresData.ts        # Información y descripciones de 12 géneros
    │   └── platformsData.ts     # Especificaciones de 9 plataformas de juego
    ├── context/
    │   └── FavoritesContext.tsx # Estado global y persistencia reactiva en localStorage
    ├── hooks/
    │   └── useDebounce.ts       # Optimización de consultas de búsqueda en tiempo real
    ├── components/
    │   ├── common/
    │   │   ├── Navbar.tsx       # Menú superior fijo con buscador y hamburguesa móvil
    │   │   ├── Footer.tsx       # Pie de página institucional y descargo legal
    │   │   ├── SearchModal.tsx  # Modal de búsqueda global flotante (Ctrl+K)
    │   │   ├── RatingBadge.tsx  # Insignia de calificación dinámica por rangos de color
    │   │   ├── FavoriteButton.tsx # Botón interactivo con animación y microinteracciones
    │   │   ├── EmptyState.tsx   # Estados vacíos cuando no hay resultados o favoritos
    │   │   ├── ScreenshotModal.tsx # Visor de capturas de pantalla ampliado (Lightbox)
    │   │   └── ImageWithFallback.tsx # Respaldo de imágenes para evitar roturas visuales
    │   ├── game/
    │   │   ├── GameCard.tsx     # Tarjeta individual de videojuego con animación hover
    │   │   ├── GameGrid.tsx     # Cuadrícula responsiva de videojuegos
    │   │   ├── FilterPanel.tsx  # Panel interactivo de filtros y ordenamiento
    │   │   └── SystemRequirements.tsx # Visualizador por pestañas de requisitos de PC
    │   └── compare/
    │       ├── ComparisonTable.tsx   # Matriz comparativa responsive cara a cara
    │       └── GameSelectorModal.tsx # Selector interactivo para cambiar juegos a comparar
    └── pages/
        ├── HomePage.tsx         # Inicio: Hero, Destacados, Populares, Mejores y Recientes
        ├── ExplorePage.tsx      # Explorador general con búsqueda y multi-filtros
        ├── GameDetailPage.tsx   # Ficha técnica individual de cada videojuego (/juego/:slug)
        ├── GenresPage.tsx       # Catálogo de categorías (/generos)
        ├── PlatformsPage.tsx    # Catálogo de consolas y plataformas (/plataformas)
        ├── ComparePage.tsx      # Herramienta comparativa (/comparar)
        ├── FavoritesPage.tsx    # Biblioteca personal de juegos guardados (/favoritos)
        └── NotFoundPage.tsx     # Manejo de rutas inexistentes (Error 404)
```

---

## 🚀 Requisitos e Instalación

### Prerrequisitos
* **Node.js:** Versión `18.0.0` o superior instalada.
* **npm:** Gestor de paquetes incluido con Node.js.
* **Navegador web moderno:** Chrome, Firefox, Edge, Safari u Opera.

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/GameVault.git
   cd GameVault
   ```

2. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en: [http://localhost:3000](http://localhost:3000)

4. **Compilar el proyecto para producción (validación de tipos):**
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## 🎨 Principios de Diseño UX/UI y Accesibilidad

* **Paleta Gamer Prémium:** Fondo ultranegro (`#06070a`), contrastes legibles en escala de grises y acentos en violeta eléctrico (`#8b5cf6`) y cian neón (`#06b6d4`).
* **Microinteracciones y Efectos:** Elevación suave de tarjetas (`hover: -translate-y-1`), resplandores neón y transiciones fluidas.
* **Diseño Responsivo Total:** Sin desplazamiento horizontal en dispositivos móviles. Menú móvil tipo acordeón y cuadrículas adaptativas con Tailwind CSS.
* **Accesibilidad Web (A11y):**
  * Etiquetas semánticas HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`).
  * Atributos `aria-label`, `aria-modal` y `role` en componentes interactivos.
  * Soporte completo para navegación por teclado (tecla `ESC` para cerrar modales, `Ctrl+K` para abrir búsqueda).
  * Enfoque visible (`focus-visible`) para usuarios que navegan mediante tabulación.
* **Resiliencia de Medios:** El componente `ImageWithFallback` renderiza una tarjeta estilizada con degradado y el logotipo de GameVault si un recurso remoto falla al cargar, garantizando que el diseño nunca se rompa.

---

## 🛡️ Licencia y Descargo de Responsabilidad

Este proyecto ha sido desarrollado exclusivamente con **fines académicos y de demostración técnica**. 

* Las marcas, logotipos, carátulas, capturas y nombres de los videojuegos mostrados pertenecen a sus respectivos desarrolladores y empresas distribuidoras (Nintendo, Sony Interactive Entertainment, Xbox Game Studios, Rockstar Games, CD Projekt RED, FromSoftware, Capcom, entre otros).
* GameVault no posee afiliación comercial con ninguna compañía de la industria del videojuego.
* El código fuente desarrollado en este repositorio está licenciado bajo la **Licencia MIT**.
