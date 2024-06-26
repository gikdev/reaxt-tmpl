/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.jsx",
    "./components/*.{js,jsx,html}",
    "./components/**/*.{js,jsx,html}",
    "./layouts/*.{js,jsx,html}",
    "./layouts/**/*.{js,jsx,html}",
    "./routes/*.{js,jsx,html}",
    "./routes/**/*.{js,jsx,html}",
    "./utils/*.{js,jsx,html}",
    "./utils/**/*.{js,jsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
