/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#0957DE",
        secondary: "#DEEAFF",
        grayscale: "#F9FAFC",
        white: "#FFFFFF",
        textgrey: "#82848A",
        dark: "#071C40",
      },
      fontSize: {
        "3xl": "2rem",
        "5xl": "2.625rem",
      },
      borderRadius: {
        default: "20px",
      },
    },
  },
  plugins: [],
};
