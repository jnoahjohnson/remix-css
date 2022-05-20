const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#363636",
      },
      fontFamily: {
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
