/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : 'rgb(249, 80, 108)',
        'primary-hover' : 'rgb(227, 59, 87)'
      }
    },
  },
  plugins: [],
}