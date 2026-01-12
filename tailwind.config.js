/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF8F5',
          100: '#F5F2ED',
          200: '#EFEBE6',
          300: '#E5DFD7',
          400: '#D4CCC0',
        },
        yim: {
          green: '#006039',
          gold: '#A37E2C',
        }
      }
    },
  },
  plugins: [],
};
