/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nav': ['"Helvetica Now Micro"'],
      'body': ['Raleway'],
      'display': ['"Helvetica Now Display"']
    },
    colors: {
      'primary': '#143159',
      'secondary': '#2E98D4',
      'pale': '#8ED6FF',
      'white': '#ffffff'
    },
    extend: {
      backgroundImage: {
        'main': "url('../public/images/the-way-main.svg')",
        'globe': "url('../public/images/globe.jpg')",
        'kids-2': "url('../public/images/kids_2.svg')",
      }
    },
  },
  plugins: [],
}
