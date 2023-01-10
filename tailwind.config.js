/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        asap: ["Asap", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
      },
      backgroundImage: {
        'hero-profile': "url('public/img1.jpg')",
      }
    },
  },
  plugins: [],
};
