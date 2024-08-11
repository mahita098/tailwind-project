/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      translate: {
        "1/2": "50%",
        "1/10": "10%",
      },
    },
  },
  plugins: [],
};
