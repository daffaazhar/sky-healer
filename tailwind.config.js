/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./dist/**/*.{html,js}"],

  theme: {
    colors: {
      white: colors.white,
      primary: "#0957DE",
      secondary: "#DEEAFF",
      grayscale: "#F4F8FF",
      gray: "#82848A",
      dark: "#071C40",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      fontSize: {
        "3xl": "2rem",
        "5xl": "2.625rem",
      },
      borderRadius: {
        default: "20px",
      },
      gridTemplateRows: {
        artikel: "minmax(0,1fr) auto auto",
      },
      gridTemplateColumns: {
        artikel: "1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
