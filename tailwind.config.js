/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./node_modules/flowbite/**/*.js"
  ], // Asegúrate de ajustar las rutas según tu estructura de proyecto

  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      height: {
        62: "70vh",
        68: "90vh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
