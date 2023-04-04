/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ["./index.html", "./src/**/*.{vue,js}"],
  content: ["./index.html", "./src/**/*.{vue,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#084887",
        primaryLight: "#094d8f",
        secondary: "#e87213",
        secondaryLight: "#ff7e17",
        flame: "#cf5c36",
      },
    },
    fontFamily: {
      Allura: ["Allura, cursive"],
      Montserrat: ["Montserrat, sans-serif"],
      Playfair: ["Playfair Display, serif"],
      NewYork: ["NewYork, serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    /* screens: {
      sm: "640px",
      md: "768px",
    }, */
  },
  plugins: [],
};
