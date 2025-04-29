/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(admin)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        ghost: {
          100: "#F9F9FE",
          200: "#CCCCD7",
          300: "#B6B5C3",
          400: "#9F9EAF",
          500: "#727188",
          600: "#5C5A74",
          700: "#514F6A",
          800: "#4B4965",
          900: "#484663",
          1000: "#454360",
        },
      },
      colors: {
        ghost: {
          100: "#F9F9FE",
          200: "#CCCCD7",
          300: "#B6B5C3",
          400: "#9F9EAF",
          500: "#727188",
          600: "#5C5A74",
          700: "#514F6A",
          800: "#4B4965",
          900: "#484663",
          1000: "#454360",
        },
      },
    },
  },
  plugins: [],
};
