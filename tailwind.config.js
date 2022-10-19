const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.vue",
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  // darkMode: false,
  media: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
        "logo-text-1": "#5f6368",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
