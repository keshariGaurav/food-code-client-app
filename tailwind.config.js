/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
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
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        mono: ['Menlo', ...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#200E32',
            a: {
              color: '#444444',
              '&:hover': {
                color: '#666666',
              },
            },
            h1: {
              fontWeight: '700',
              fontSize: '2.25rem',
            },
            h2: {
              fontWeight: '600',
              fontSize: '1.6rem',
            },
            h3: {
              fontWeight: '500',
              fontSize: '1.4rem',
            },
            p: {
              fontSize: '1.4rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.6rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.4rem',
            },
          },
        },
        dark: {
          css: {
            color: '#ddd',
            a: {
              color: '#1a202c',
              '&:hover': {
                color: '#2d3748',
              },
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#ddd',
            },
            h3: {
              color: '#ccc',
            },
          },
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
    require('@tailwindcss/typography'),
  ],
};
