/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        expletus: ["Expletus Sans", "sans-serif"],
        bungee: ["Bungee Inline", "sans-serif"]
      }
    },
  },
  plugins: [],
}
