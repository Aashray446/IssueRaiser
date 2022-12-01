/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: '#e5f2d3',
        200: '#c5eeb1',
        300: '#8aec8b',
        400: '#49e76c',
        500: '#04cc58',
      },

      extend: {},
    },
    plugins: [],
  }
}
