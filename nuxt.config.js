// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image-edge"],

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
