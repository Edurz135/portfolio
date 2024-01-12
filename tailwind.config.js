/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "12xl": ["11.4rem", "8rem"],
      },
      colors: {
        "color-one": "#DB9C3E",
        "color-two": "#EFF0E3",
        "color-three": "#20140D",
      },
      fontFamily: {
        "one": ["Libre Bodoni"],
        "two": ["Montserrat Alternates"],
        "three": ["Niagara Solid"],
      },
    },
  },
  plugins: [],
};
