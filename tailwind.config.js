/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f8f5fa',
          100: '#f0e8f4',
          200: '#dfc9e7',
          300: '#c9a3d4',
          400: '#a96bba',
          500: '#8a3fa0',
          600: '#712d87',
          700: '#5c2370',
          800: '#451B55',
          900: '#3a1748',
          950: '#252438',
        },
        turquoise: {
          50: '#f0fafa',
          100: '#d9f2f3',
          200: '#b5e5e7',
          300: '#8ACDD1',
          400: '#66b8bd',
          500: '#4a9fa4',
          600: '#3d8387',
          700: '#356b6e',
          800: '#30585a',
          900: '#2b4a4c',
          950: '#172e30',
        },
        softgray: {
          50: '#FAFAF9',
          100: '#F0EEED',
          200: '#E5E2E0',
          300: '#D5D1CE',
          400: '#B8B3AF',
          500: '#9B9590',
          600: '#7E7873',
          700: '#665F5B',
          800: '#514B47',
          900: '#433D3A',
          950: '#272320',
        },
        night: {
          DEFAULT: '#252438',
          light: '#3a3950',
          dark: '#1a1928',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Rubik', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
