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
        limelight: ["Limelight", "sans-serif"],
        poiret: ["Poiret One", "sans-serif"],
        dot: ["42dot Sans", "sans-serif"]
      },
      animation: {
        fadeInOut: "fadeInOut 3s infinite ease-in-out",
        float: "float 4s infinite ease-in-out",
      }
    },
  },
  plugins: [],
}
