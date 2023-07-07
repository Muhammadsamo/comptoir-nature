<template>
  <Splide
    :options="{
      rewind: true,
      autoplay: true,
      speed: 600,
      easing: 'ease',
      interval: 10000,
    }"
    aria-label="Hero Slider"
  >
    <SplideSlide v-for="slide in slides" :key="slide.key">
      <NuxtLink
        to="https://www.instagram.com/deco_comptoirnature"
        alt="Instagram Link"
        target="_blank"
      >
        <img
          :src="slide.img"
          alt="Hero Slider image"
          width="510"
          height="367"
        />
      </NuxtLink>
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const slides = [
  { key: 1, img: "/home/hero-img.png" },
  { key: 2, img: "/home/hero-img.png" },
  { key: 3, img: "/home/hero-img.png" },
  { key: 4, img: "/home/hero-img.png" },
  { key: 5, img: "/home/hero-img.png" },
  { key: 6, img: "/home/hero-img.png" },
  { key: 7, img: "/home/hero-img.png" },
];
</script>

<style>
.splide__arrow {
  top: 382px;
  background-color: transparent;
  width: 1em;
}
.splide__arrow--next {
  right: 0;
}
.splide__arrow--prev {
  left: 91%;
  top: 383x;
}

.splide__arrow svg {
  fill: #859e9f;
}

.splide__pagination {
  bottom: -30px;
  justify-content: start;
  padding: 0;
  gap: 8px;
}

.splide__pagination__page {
  background: transparent;
  border: 1px solid #4c6061;
  height: 14px;
  width: 14px;
}
.splide__pagination__page.is-active {
  background: #859e9f;
  transform: scale(1);
  z-index: 1;
}
</style>
