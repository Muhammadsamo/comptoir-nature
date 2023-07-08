// https://nuxt.com/docs/api/configuration/nuxt-config
import { isProduction } from "std-env";
export default defineNuxtConfig({
  target: "static",
  runtimeConfig: {
    public: {
      google_analytics_id: process.env.google_analytics_id,
      production_mode: isProduction,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  components: {
    global: true,
    dirs: ["~/components"],
  },

  image: {
    provider: "ipx",
    dir: "./",
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          format: "webp",
        },
      },
    },
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: "netlify",
  },
});
