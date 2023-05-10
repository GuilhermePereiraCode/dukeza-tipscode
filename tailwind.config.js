/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'cor1': '#999999',
        'cor2':  '#4D3636',
        'cor3': '#4D4D4D',
        'cor4': '#332424',
        'cor5': '#BCBCBC'
      },
      fontFamily: {
        'serif': ['Noto Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

