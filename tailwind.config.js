/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "75px",
    },
    extend: {
      colors: {},
      screens: { "2xl": "1320px" },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
