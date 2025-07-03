/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Revolutionary YapMate Color Palette
        'cyber': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'neon': {
          green: '#00ff88',
          blue: '#00d4ff',
          purple: '#8b5cf6',
          pink: '#f472b6',
          yellow: '#fbbf24',
        },
        'dark': {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#2a2a2a',
          500: '#3a3a3a',
        }
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'futura': ['Futura', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'matrix': 'matrix 20s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
        'data-flow': 'data-flow 15s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88',
            textShadow: '0 0 10px #00ff88'
          },
          '100%': { 
            boxShadow: '0 0 30px #00d4ff, 0 0 60px #00d4ff, 0 0 90px #00d4ff',
            textShadow: '0 0 20px #00d4ff'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        hologram: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' }
        },
        'cyber-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(0, 255, 136, 0.7)',
            borderColor: '#00ff88'
          },
          '70%': { 
            boxShadow: '0 0 0 10px rgba(0, 255, 136, 0)',
            borderColor: '#00d4ff'
          }
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' }
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #111111 25%, #1a1a1a 50%, #111111 75%, #0a0a0a 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00ff88, #00d4ff, #8b5cf6, #f472b6)',
        'matrix-bg': 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        'cyber': '20px',
      },
      boxShadow: {
        'neon': '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88',
        'cyber': '0 0 30px rgba(0, 212, 255, 0.5), inset 0 0 30px rgba(0, 255, 136, 0.1)',
        'hologram': '0 8px 32px rgba(0, 255, 136, 0.3), 0 0 0 1px rgba(0, 212, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
