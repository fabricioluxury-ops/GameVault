/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06070a',
          900: '#0b0e14',
          850: '#0f141d',
          800: '#151b27',
          700: '#1e2638',
          600: '#2b364e',
        },
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          accent: '#a855f7',
          neon: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px -3px rgba(139, 92, 246, 0.45)',
        'neon-hover': '0 0 30px -2px rgba(168, 85, 247, 0.65)',
        'neon-cyan': '0 0 20px -3px rgba(6, 182, 212, 0.45)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.25s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
