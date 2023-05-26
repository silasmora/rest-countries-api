/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        bold: 600,
        bolder: 800
      }
    },
  },
  plugins: [],
}

