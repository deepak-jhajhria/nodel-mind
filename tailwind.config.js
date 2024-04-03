/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px',
      '2xl': '1441px',
    },
    container: {
      padding: {
        DEFAULT: '14px',
        xl: '0',
      },
      center: true,
    },
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
      Exo: ['Exo\\ 2', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
};
