/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      Merriweather: ["Merriweather", "sans"],
      Montserrat: ["Montserrat", "sans"],
    },
    extend: {},
  },
  plugins: [],
};
