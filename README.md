# GameVault 🎮

**GameVault** es una moderna enciclopedia interactiva y plataforma de descubrimiento de videojuegos. Construida con **React 18**, **TypeScript**, **Vite** y **Tailwind CSS**, ofrece una estética gamer prémium (Dark Theme) con efectos de desenfoque de fondo (*glassmorphism*), sombras de neón y una interfaz completamente adaptada al **español latinoamericano**.

---

## ✨ Características Principales

- 📚 **Catálogo de 44+ Videojuegos Reales:** Títulos legendarios y contemporáneos con sinopsis, fechas de lanzamiento, desarrolladores, requisitos de PC (mínimos y recomendados), modos de juego, plataformas y características destacadas.
- 🔍 **Búsqueda Global y Filtros Reactivos:** Búsqueda en tiempo real por título, género, desarrollador o plataforma (con atajo `Ctrl+K`), y filtros combinados por 12 géneros, 9 plataformas y 3 modos de juego, además de 6 criterios de ordenamiento.
- ⚖️ **Comparador Cara a Cara (`/comparar`):** Herramienta neutral para contrastar calificaciones, plataformas, requisitos y especificaciones entre dos juegos seleccionables.
- ❤️ **Sistema de Favoritos (`/favoritos`):** Gestión y persistencia reactiva en `localStorage` con soporte de sincronización entre pestañas.
- 🖼️ **Ficha de Videojuego y Galería Lightbox (`/juego/:slug`):** Portada, banners cinematográficos, requisitos técnicos y visor de capturas de pantalla a pantalla completa con navegación por teclado.
- 📱 **Diseño 100% Responsivo:** Adaptado para teléfonos inteligentes, tabletas, portátiles y monitores de escritorio con menú móvil táctil y cero desbordamiento horizontal.
- 🛡️ **Resiliencia Visual:** Manejador automático de respaldo (*fallback*) para garantizar que ninguna imagen rota comprometa la estética del sitio.

---

## 🚀 Tecnologías Utilizadas

- **Frontend:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador y Servidor Dev:** [Vite 5](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Enrutamiento:** [React Router DOM v6](https://reactrouter.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)

---

## 🛠️ Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/gamevault.git
   cd gamevault
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 📄 Aviso Legal

GameVault es un proyecto de demostración y catálogo independiente creado con fines educativos y de entretenimiento. Todas las marcas registradas, títulos, personajes y contenidos de videojuegos pertenecen a sus respectivos desarrolladores y distribuidores.
