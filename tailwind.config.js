const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        cinza: "#8B949E",
        bodyHeadeer: "#161B22",
        objtivos: '#0D1117',
        conhecimentos: "#161B23"
      }
    },
  },
  plugins: [],
}