/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // HEKAX Deep Ocean Theme
        ocean: {
          950: '#0f0f1a', // Deepest - used for overlays
          900: '#1a1a2e', // Primary background
          800: '#16213e', // Surface/cards
          700: '#1f2b4a', // Elevated surfaces
          600: '#2a3a5c', // Borders, dividers
          500: '#3d4f6f', // Muted elements
        },
        accent: {
          600: '#c73e54', // Dark accent
          500: '#e94560', // Primary accent (HEKAX red)
          400: '#ff6b6b', // Light accent
          300: '#ff8a8a', // Lighter accent
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0aec0',
          muted: '#718096',
        },
        success: {
          500: '#48bb78',
          400: '#68d391',
        },
        warning: {
          500: '#ed8936',
          400: '#f6ad55',
        },
        error: {
          500: '#f56565',
          400: '#fc8181',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(233, 69, 96, 0.3)',
        'glow-sm': '0 0 10px rgba(233, 69, 96, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(233, 69, 96, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(233, 69, 96, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
