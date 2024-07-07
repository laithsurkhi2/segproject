/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "blue",
        brightColor: "#dd8036",
        backgroundColor: "#7CB9E8",
        
      },
    },
  },
  plugins: [],
};