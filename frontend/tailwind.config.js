/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pharmaGreen': {
          50: '#deffff',
          100: '#b3fffd',
          200: '#86fefa',
          300: '#5bfef9',
          400: '#40fef7',
          500: '#34e5de',
          600: '#24b2ac',
          700: '#147f7c',
          800: '#004442',
          900: '#001b1a',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
