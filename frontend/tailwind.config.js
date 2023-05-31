/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ["./index.html", "./src/**/*.{vue,js}"],
  content: ["./index.html", "./src/**/*.{vue,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#094d8f",
        "primary-dark": "#084887",
        secondary: "#F5974B",
        "secondary-dark": "#ea8d46",
        beaver: "#5E564D",
      },
    },
    fontFamily: {
      Allura: ["Allura, cursive"],
      Playfair: ["Playfair Display, serif"],
      Poppins: ["Poppins, sans-serif"],
      Montserrat: ["Montserrat, sans-serif"],
    },
    container: {
      padding: "1rem",
      center: true,
    },
    /* screens: {
      sm: "640px",
      md: "768px",
    }, */
  },
  plugins: [],
};
