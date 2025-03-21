/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jaro: ['Jaro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

