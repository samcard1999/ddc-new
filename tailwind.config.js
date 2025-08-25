/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md-860px': '860px',
        '2xl-custom': '2000px', // Define un nuevo breakpoint para un ancho mínimo de 2000px
        '3xl-custom': '3200px', // Define un nuevo breakpoint para un ancho mínimo de 3200px
      },
      colors: {
        primary: '#071A3C',
        secondary: '#162D57',
        tertiary: '#2E4672',
        clear: '#516790',
        dark: '#020E23',
        darken: '#010A18',
        gold: '#D8AF6B',
        gold_dark: '#5B3B01',
        semi_white: '#EAEAEA'
      },
      fontFamily: {
        customFont: ['Sensation', 'sans-serif'], // Replace 'CustomFont' with the actual font name
      },
    },
  },
  plugins: [],
}

