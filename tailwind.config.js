/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/src/pages/**/*.{js,ts,jsx,tsk}",
    "./client/src/components/**/*.{js,ts,jsx,tsk}",
    "./index.html",
    ".client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
}