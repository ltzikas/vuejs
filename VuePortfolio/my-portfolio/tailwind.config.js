/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f3f42ff",   // azul personalizado
        accent: "#54545aff",    // naranja personalizado
        darkbg: "#18181b",     // fondo dark personalizado
        bodydrk: "#1e1e35ff", // fondo dark personalizado
        'custom-color': '#123456', // ejemplo de color personalizado adicional
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
