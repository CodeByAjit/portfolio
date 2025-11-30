/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0D0E12",
        lightDark: "#13141A",
        accent: "#FF4F4F"
      }
    },
  },
  plugins: [],
};
