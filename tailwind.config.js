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
      },
      strokeWidth: {
        '1.5': '1.5px'
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
