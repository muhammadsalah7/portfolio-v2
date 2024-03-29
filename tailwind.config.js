/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primaryBg)",
        secondaryBg: "var(--secondaryBg)",
        primaryTxt: "var(--primaryTxt)",
        secondaryTxt: "var(--secondaryTxt)",
        subtitleTxt: "var(--subtitleTxt)",
      },
    },
  },
  plugins: [],
};
