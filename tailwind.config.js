/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'shiny-green': '#23c483',
        'grad-upper': '#a6b2d1',
        'grad-lower': '#d6f4ff',
        /*'c-blue-950': '#14243d',
        'c-blue-900': '#1d3557',
        'c-blue-800': '#1f416d',
        'c-blue-700': '#214b83',
        'c-blue-600': '#275da2',
        'c-blue-500': '#3777c0',
        'c-blue-400': '#5c95d4',
        'c-blue-300': '#95bae4',
        'c-blue-200': '#c7d9f0',
        'c-blue-100': '#e6edf8',
        'c-blue-50': '#f3f6fc',*/
        'c-pal-1': '#606c38',
        'c-pal-2': '#283618',
        'c-pal-3': '#fefae0',
        'c-pal-4': '#dda15e',
        'c-pal-5': '#bc6c25',
        'c-pal2-1': '#ccd5ae',
        'c-pal2-2': '#e9edc9',
        'c-pal2-3': '#fefae0',
        'c-pal2-4': '#faedcd',
        'c-pal2-5': '#d4a373',
        'c-blue': '#bde0fe',
      },
      strokeWidth: {
        '1.5': '1.5px'
      },
      ringWidth: {
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
      }
    },
  },
  variants: {
    extend: {
      translate: ['active'],
    },
  },
  plugins: [],
}
