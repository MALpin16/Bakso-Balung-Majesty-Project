/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Red (from logo background)
        primary: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6464',
          500: '#f83232',
          600: '#e51111',
          700: '#c10a0a',
          800: '#a00c0c',
          900: '#850f0f',
          950: '#4a0303',
        },
        // Gold/Orange: from "BAKSO BALUNG" text and stars
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Orange: midtone between red and gold
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        warm: {
          50: '#fdfcfb',
          100: '#f9f5f1',
          200: '#f2e8df',
          300: '#e8d5c4',
          400: '#d9baa0',
          500: '#c9a07a',
          600: '#b5845d',
          700: '#9a6b49',
          800: '#7e573d',
          900: '#674733',
        },
        dark: {
          50: '#f6f5f4',
          100: '#e7e5e3',
          200: '#d2cfc9',
          300: '#b3aea5',
          400: '#8a8377',
          500: '#70685c',
          600: '#5e564c',
          700: '#4e4840',
          800: '#433d37',
          900: '#1a1210',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
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
