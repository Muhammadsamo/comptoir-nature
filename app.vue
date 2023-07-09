<template>
  <div class="lg:overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  head: {
    htmlAttrs: {
      lang: "fr",
    },
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        sizes: "32x32",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "android-chrome",
        sizes: "190x190",
        href: "/android-chrome-192x192.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg" },
      { rel: "msapplication-Tile", href: "/mstile-150x150.png" },
    ],
  },
  titleTemplate: "%s - Comptoir Nature",
  meta: [
    {
      name: "description",
      content:
        "Welcome to Comptoir Nature, your sanctuary dedicated to the art of furniture and decoration in Guadeloupe. Immerse yourself in our unique universe where each product has a soul and where well-being is expressed through the art of living.",
    },
  ],
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@400;500;700&display=swap");

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  left: 0;
  right: 0;
  transition: all 750ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
}

/* Transitions for Modals */

.slideIn-enter-from,
.slideIn-leave-to,
.slideIn2-leave-to {
  transform: translate(-50%, 100%);
}
.slideIn2-enter-from,
.slideIn2-leave-to {
  transform: translateY(100%);
}

.slideIn-enter-active,
.slideIn2-enter-active,
.slideIn-leave-active,
.slideIn2-leave-active {
  transition: all 750ms ease;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

@media screen and (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 5px;
  }
}

/* Track */
::-webkit-scrollbar-track {
  background: #e2dad4;
  border-radius: 5px;
  cursor: pointer !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #826b57;
  border-radius: 5px;
  cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e2dad4;
  cursor: pointer;
}
</style>
