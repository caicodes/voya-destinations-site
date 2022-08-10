/** @type {import('tailwindcss').Config} */
module.exports = {
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
          primary: "#2563eb",
          secondary: "#1e3a8a",
          accent: "#bef264",
          "accent-content": "#4e8b44",
          neutral: "#cffafe",
          "base-100": "#1e3a8a",
          info: "#0284c7",
          success: "#059669",
          warning: "#ea580c",
          error: "#be123c",
        },
      },
      {
        dark: {
          primary: "#082054",
          secondary: "#3b82f6",
          accent: "#5c870d",
          "accent-content": "#e8ff3e",
          neutral: "#cffafe",
          "base-100": "#060d1d",
          info: "#0284c7",
          success: "#059669",
          warning: "#ea580c",
          error: "#be123c",
        },
      },
    ],
  },
};
