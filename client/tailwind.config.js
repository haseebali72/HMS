/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '30': '0 0 20%',
        '70' : '0 0 80%'
      },
      colors : {
        greenPalate : {
          darkestLimeGreen : "#78bea4",
          darkLimeGreen : "#97c9a3",
          lightLimeGreen : "#c0d8c0",
          greenishYellow : "#dfe7c6",
          lightgreenishYellow : "#efedcc"
        }
      }
    }
  },
  plugins: [],
}