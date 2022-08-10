import { defineNuxtConfig } from "nuxt";
import colorModeModule from "@nuxtjs/color-mode";

export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  modules: [colorModeModule],
  colorMode: {
    dataValue: "theme",
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
});
