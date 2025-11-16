/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe7f4c",     
        secondary: "#F5F9F8",
        accent: "#FF7518",      
        dark: "#1A1A1A",        
        light: "#FFFFFF",   
      },
    },
  },
  plugins: [],
}
