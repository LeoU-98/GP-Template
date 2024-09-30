/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/*.jsx", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        lima: {
          50: "#f3fbea",
          100: "#e5f5d2",
          200: "#cbecaa",
          300: "#a9df77",
          400: "#89ce4d",
          500: "#6bb42f",
          600: "#508f21",
          700: "#3f6d1e",
          800: "#35571d",
          900: "#2e4a1d",
          950: "#16280b",
        },
        mercury: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#e5e5e5",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },

        emerald: {
          50: "#eefff3",
          100: "#d8ffe6",
          200: "#b3ffcf",
          300: "#78fda9",
          400: "#36f27c",
          500: "#0cdb59",
          600: "#03c04a",
          700: "#068f3a",
          800: "#0b7032",
          900: "#0b5c2c",
          950: "#003415",
        },
      },
    },
  },
  plugins: [],
});
