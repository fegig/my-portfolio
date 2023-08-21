/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'color-1': '#FFECEF',
        'color-2': '#2A3958' ,
        'color-alt': '#485f8f'
      },
      colors:{
        'primary': '#FFECEF',
        'primary-alt': '#485f8f',
        'secondary': '#2A3958'
      },
      
    },
    fontFamily: {
      'sans': ['poppins', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
  },
  plugins: [],
}

