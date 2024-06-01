/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-green': {
          50: '#E6F2EF',
          100: '#CCE5DE',
          200: '#99CBBE',
          300: '#66B29D',
          400: '#33987C',
          500: '#307A59',
          600: '#285E47',
          700: '#204236',
          800: '#182725',
          900: '#10130B',
        },
      },
      boxShadow: {
        'custom-green-shadow': '3px 3px 15px rgba(48, 122, 89, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '10px' },
      });
    }),
  ],
};
