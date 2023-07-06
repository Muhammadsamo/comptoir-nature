// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
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
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/monkeyride/image/upload/c_scale,h_500/v1686102952/vancleem_com/",
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
