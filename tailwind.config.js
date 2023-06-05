/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#e6ecf5",
        "light-blue": "#edf3f8",
        "dark-blue": "#265f97",
        "sky-blue": "#c4e2fe",
        "blue-100": "#e6ecf5d9",
      },
    },
  },
  plugins: [],
};
