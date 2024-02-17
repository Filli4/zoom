const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
      sans: ['"inter"', ...defaultTheme.fontFamily.sans],
      mono: ["'Fira code'", ...defaultTheme.fontFamily.mono],
    }
    },
  },
  plugins: [],
}
