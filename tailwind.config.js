/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        candy: {
          50: "#fff0f6",
          100: "#ffe3f0",
          200: "#ffc6de",
          300: "#ff9ac4",
          400: "#ff6aa9",
          500: "#ff3b90",
          600: "#e01f78",
          700: "#b3125d",
          800: "#7d0d42",
          900: "#560a2f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
