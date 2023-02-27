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
        secondary: "#ABB2BF",
        ternary: "#282C33",
      },
    },
  },
  plugins: [],
};

// font-family: 'Fira Code', monospace;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;
