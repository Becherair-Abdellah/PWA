/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        primary: '#594EF1',
        primaryText: '#BDBDBD',
      },
      backgroundColor:{
        primary: '#594EF1',
        icon: 'rgba(89, 78, 241, 0.19)',
      }
    },
  },
  plugins: [],
}