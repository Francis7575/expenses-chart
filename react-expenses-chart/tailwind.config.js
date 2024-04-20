/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F8E9DD',
        'cyan': '#76B5BC',
        'dark-brown': '#382314',
        'medium-brown': '#92857A',
        'red': '#EC755D',
        'white': '#FFF',
        'card-white': '#FFFBF6'
      }
    },
  },
  plugins: [],
}