/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "pozadie-tmave":"#EFEFEC",
        "pozadie-svetle": "#FFFFFF",
        "color-red": "#D2271B",
        "color-green": "#0B902C",
        "color-orange": "#F0AF13",
        "color-grey": "#A4A4A2",
      }
    },
    fontFamily:{
      Roboto: ["Roboto, sans-sefir"],
    },
    container:{
      padding: "10rem",
      center: true,
    }

  },
  plugins: [],
};


