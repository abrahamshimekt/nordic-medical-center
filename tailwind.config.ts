import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nordic Medical Color Palette
        nordic: {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36abf8',
          500: '#0c8fe9',
          600: '#0070c7',
          700: '#0159a1',
          800: '#064c85',
          900: '#0b406e',
          950: '#072849',
        },
        frost: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        medical: {
          teal: '#14b8a6',
          green: '#22c55e',
          red: '#ef4444',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        amharic: ['Nyala', 'Noto Sans Ethiopic', 'sans-serif'],
      },
      backgroundImage: {
        'nordic-gradient': 'linear-gradient(135deg, #0c8fe9 0%, #072849 100%)',
        'frost-gradient': 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
        'hero-pattern': 'radial-gradient(circle at 20% 50%, rgba(12, 143, 233, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.06) 0%, transparent 40%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;


