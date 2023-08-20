// https://nuxt.com/docs/api/configuration/nuxt-config
import { isProduction } from "std-env";
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID,
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
