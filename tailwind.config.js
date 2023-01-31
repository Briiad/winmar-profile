/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Primary Colors
        'primary':{
          '200' : '#4D9B67',
          '300' : '#237A5E',
          '400' : '#00594F'
        },
        // Secondary Colors
      },
    },
    fontFamily: {
      // Title Fonts
      'playfair': ['Playfair Display', 'serif'],
      // Body Fonts
      'montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}