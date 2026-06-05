/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#05070a",
        "surface-container": "#0a0f1e",
        "primary": "#00d2ff",
        "secondary": "#ff5f5d",
        "tertiary": "#8e2de2",
        "on-surface": "#dee1f7",
        "on-surface-variant": "#859399",
        "outline": "#3c494e",
        "surface-bright": "#1a1f2f"
      },
      fontFamily: {
        "display": ["Syne", "sans-serif"],
        "body": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
