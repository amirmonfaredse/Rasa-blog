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
        avocado: {
          100: "#CAEC96",
          200: "#BDE77C",
          300: "#AFE262",
          400: "#A2DD48",
          500: "#94D82D",
          600: "#6FA222",
          700: "#5D871D",
          800: "#547A1A",
          900: "#4A6C17",
        },
        helio: {
          100: "#F9EBFD",
          200: "#F3D7FA",
          300: "#E6AEF4",
          400: "#E09AF1",
          500: "#D986EE",
          600: "#D372EB",
          700: "#D068EA",
          800: "#CC5DE8",
          900: "#B955D3",
        },
        folly: {
          100: "#FFA6B0",
          200: "#FF7988",
          300: "#FF6374",
          400: "#FF586A",
          500: "#FF5265",
          600: "#FF4C60",
          700: "#F4495C",
          800: "#E84557",
          900: "#D33F4F",
        },
        cles: {
          100: "#A1CDEA",
          200: "#8AC1E5",
          300: "#72B4DF",
          400: "#5AA7DA",
          500: "#4EA1D7",
          600: "#489ED6",
          700: "#429AD4",
          800: "#3C8CC1",
          900: "#377FAF",
        },
        orange: {
          100: "#FFCB80",
          200: "#FFC570",
          300: "#FFBE60",
          400: "#FFB140",
          500: "#FFAB30",
          600: "#FFA420",
          700: "#FF9D10",
          800: "#FF9600",
          900: "#E88800",
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
        avocado: {
          100: "#CAEC96",
          200: "#BDE77C",
          300: "#AFE262",
          400: "#A2DD48",
          500: "#94D82D",
          600: "#6FA222",
          700: "#5D871D",
          800: "#547A1A",
          900: "#4A6C17",
        },
        helio: {
          100: "#F9EBFD",
          200: "#F3D7FA",
          300: "#E6AEF4",
          400: "#E09AF1",
          500: "#D986EE",
          600: "#D372EB",
          700: "#D068EA",
          800: "#CC5DE8",
          900: "#B955D3",
        },
        folly: {
          100: "#FFA6B0",
          200: "#FF7988",
          300: "#FF6374",
          400: "#FF586A",
          500: "#FF5265",
          600: "#FF4C60",
          700: "#F4495C",
          800: "#E84557",
          900: "#D33F4F",
        },
        cles: {
          100: "#A1CDEA",
          200: "#8AC1E5",
          300: "#72B4DF",
          400: "#5AA7DA",
          500: "#4EA1D7",
          600: "#489ED6",
          700: "#429AD4",
          800: "#3C8CC1",
          900: "#377FAF",
        },
        orange: {
          100: "#FFCB80",
          200: "#FFC570",
          300: "#FFBE60",
          400: "#FFB140",
          500: "#FFAB30",
          600: "#FFA420",
          700: "#FF9D10",
          800: "#FF9600",
          900: "#E88800",
        },
      },
    },
  },
  plugins: [],
};
