/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1869a5",
        "text-primary": "#535353",
        secondary: "#474747",
      },
      gridTemplateColumns: {
        layout: "0.6fr 0.4fr",
      },
      backgroundImage: {
        ig:
          "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);",
      },
    },
  },
  plugins: [],
};
