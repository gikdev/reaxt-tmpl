/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "!./node_modules/",
    "!./dist/",
    "!./public/",
    "./index.html",
    "./*.{html,jsx,js}",
    "./**/*.{js,jsx,html}",
    "./**/**/*.{js,jsx,html}",
  ],
  theme: {},
  plugins: [
    require("daisyui")
  ],
}
