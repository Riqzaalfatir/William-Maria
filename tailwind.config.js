/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
        athelas: ["var(--font-athelas)"],
        averne: ["var(--font-averne)"],
        duende: ["var(--font-duende)"],
        urw: ["var(--font-urw)"],
      },
    },
  },
  plugins: [],
};
