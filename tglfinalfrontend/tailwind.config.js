/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto, Helvetica, Arial, sans-serif'],
      'helvetica': ['Helvetica, Arial, sans-serif'],
    }
  },
  plugins: [],
}

