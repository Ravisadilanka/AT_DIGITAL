/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary_color: '#6B3CC9',
        secondary_color: '#F28D35',
        analogous_color_1: '#6A44F2',
        analogous_color_2: '##1CBDDD',
        triadic_color_1: '#52378C',
      },
      width: {
        '430px': '430px',
        '630px': '630px'
      },
      fontSize: {
        '21px': '21px',
      },
    },
  },
  plugins: [],
}