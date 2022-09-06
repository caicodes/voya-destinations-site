/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  // plugins: [require("daisyui")],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#09ecf3",
          "primary-content": "#005355",
          secondary: "#966fb3",
          accent: "#ffe999",
          neutral: "#3b8ac4",
          "base-100": "#345da7",
          info: "#2563eb",
          success: "#16a34a",
          warning: "#d97706",
          error: "#dc2626",
        },
      },
      {
        dark: {
          primary: "#38bdf8",
          secondary: "#818CF8",
          accent: "#F471B5",
          neutral: "#1E293B",
          "neutral-focus": "#273449",
          "base-100": "#0F172A",
          info: "#0CA5E9",
          success: "#2DD4BF",
          warning: "#F4BF50",
          error: "#FB7085",
        },
      },
    ],
  },
}
