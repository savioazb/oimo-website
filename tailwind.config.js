/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-helvetica)",
        alt: "var(--font-vcr)",
      },
      colors: {
        gray: { 900: "#212121", 50: "#F7F7F5" },
        yellow: { 500: "#FFE100" },
        pink: { 500: "#FF99CC" },
        blue: { 500: "#0010AC" },
        red: { 500: "#E70707" },
      },
    },
  },
  plugins: [],
};
