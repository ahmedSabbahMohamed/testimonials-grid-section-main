/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(263, 55%, 52%)",
        dgrayblue: "hsl(217, 19%, 35%)",
        dblackblue: "hsl(219, 29%, 14%)",
        lgray: "hsl(0, 0%, 81%)",
        lgrayblue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        font: ['Barlow Semi Condensed'],
      },
    },
  },
  plugins: [],
}

