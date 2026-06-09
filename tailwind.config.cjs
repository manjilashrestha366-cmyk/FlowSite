module.exports = { darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          100: "#f3e5d8",
          200: "#e6cdb3",
          300: "#d9b58e",
          400: "#cc9d69",
          500: "#bf8544",
          600: "#9c6b36",
          700: "#795229",
          800: "#56381c",
          900: "#332010"
        },
        primary: "hsl(25, 80%, 45%)",
        secondary: "hsl(210, 30%, 20%)",
        accent: "hsl(165, 70%, 40%)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
};
