/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-11" : '#ec9e0e',
        "orange-12" : '#eca922',
        "blue-11"   : '#4865f4',
        "blue-12"   : '#5671f5',
        "pink-11"   : '#dc2e4e',
        "pink-12"   : '#dd405d',
        "purple-11" : '#834fe3',
        "purple-12" : '#8c5de5',
        "cyan-11"   : '#40b9ce',
        "cyan-12"   : '#52bed1',
        "dark-1"    : '#3b4363',
        "score"     : '#2a46c0',
        "header"    : '#606e85'
      }
    },
    screens: {
      'iphone6': {'min': '375px'},
      'sm': {'min': '640px'},
      'md': {'min': '768px'},
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [],
}

