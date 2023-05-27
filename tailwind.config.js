/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        bold: 600,
        bolder: 800
      },
      colors: {
        darkBG: 'hsl(207, 26%, 17%)',
        darkElements: 'hsl(209, 23%, 22%)',
        darkModeText: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

