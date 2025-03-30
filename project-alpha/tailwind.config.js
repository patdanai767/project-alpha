import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        9: '9',
      },

      colors: {
        blue: "#2F4ACC",
        lightblue: "#4A8BDF",
        sky: "#EFFAFD",
        lime: "#E1FFBB",
        green: "#009990",
        red: "#EC697F",
        black: "#000000",
        white: "#FFFFFF",
        gray: "#777D7E"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [tailwindScrollbarHide],

}

