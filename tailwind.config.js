/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand"', 'sans-serif'],
        gummy: ['"Sour Gummy"', 'sans-serif'],
        edu: ['"Edu AU VIC WA NT Pre"', 'cursive'],
        spicy: ['"Spicy Rice"', 'sans-serif']
      }
    },
  },
  plugins: [],
}