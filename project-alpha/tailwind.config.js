/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'skibidi':'#2d7cda',
    // },
    extend: {
      colors: {
        blue: "#2F4ACC",
        lightblue: "#4A8BDF",
        sky: "#EFFAFD",
        lime: "#DDF344",
        green: "#38A32A",
        red: "#EC697F",
        black: "#000000",
        white: "#FFFFFF"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}