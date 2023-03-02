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
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
      },
      colors: {
        primary: "#C778DD",
        primarylight: "rgba(199, 120, 221, 0.2)",
        secondary: "#ABB2BF",
        ternary: "#282C33",
        offWhite: "rgba(171, 178, 191, 0.2)",
        lightPurple: "rgba(199, 120, 221, 0.2)",
      },
    },
  },
  plugins: [],
};
