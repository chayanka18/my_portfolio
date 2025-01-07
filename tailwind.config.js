/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:  ["Great Vibes"]
      ,
      playfair: ['"Playfair Display"', 'serif'],
      sawarabi:["Sawarabi Mincho",'serif'],
      lobster:["Lobster",'cursive'],
    }
  },
  plugins: [],
}

