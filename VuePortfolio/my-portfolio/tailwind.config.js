/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",   // azul personalizado
        accent: "#f59e42",    // naranja personalizado
        darkbg: "#18181b",     // fondo dark personalizado
        'custom-color': '#123456', // ejemplo de color personalizado adicional
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
