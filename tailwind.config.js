/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "12xl": ["11.4rem", "8rem"],
      },
      colors: {
        "con-primary": "#f9e9d1",
      },
      fontFamily: {
        fheader: ["Libre Bodoni"],
        ftext: ["Montserrat Alternates"],
        fdecorated: ["Niagara Solid"],
      },
    },
  },
  plugins: [],
};