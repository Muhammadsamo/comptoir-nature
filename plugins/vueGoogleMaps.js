import { defineNuxtPlugin } from "#app";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyCE0jz3YRTCfMzWYj_3En9wXyirf4UVnAc",
      autobindAllEvents: true,
    },
  });
});
