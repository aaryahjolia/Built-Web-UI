/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#d30071',
      },
      backgroundImage: {
        HeroBG: "url('./Assets/Hero_BG.png')",
      },
    },

  },
  plugins: [],
}

