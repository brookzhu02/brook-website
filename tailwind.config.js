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
      },
      colors: {
        'neutral-100': '#F7F7F7',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D6D6D6',
        'gray-800': '#2D2D2D',
        'beige-300': '#ECE2D0',
        'custom-blue': '#499cc4',
        'beige-line': '#FFF8DC',
        'light-blue': '#7a9bbf'
      },
    },
  },
  plugins: [],
}