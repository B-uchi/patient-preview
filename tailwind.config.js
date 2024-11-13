/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.jsx","./src/pages/**/*.jsx", "./src/*.{html,jsx}", "./index.html"],
  theme: {
    fontFamily: {
      urbane: ["UrbaneRounded", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

