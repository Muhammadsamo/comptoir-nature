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
    <SplideSlide v-for="slide in slides" :key="slide.PortfolioId">
      <NuxtLink
        to="https://www.instagram.com/deco_comptoirnature"
        alt="Instagram Link"
        target="_blank"
      >
        <img
          class="hero-slide-img"
          :src="slide.Image"
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

const props = defineProps(["slides"]);
</script>

<style>
.splide__arrow {
  top: 382px;
  background-color: transparent;
  width: 1em;
  display: none;
}
.splide__arrow--next {
  right: 0;
}
.splide__arrow--prev {
  left: 91%;
  top: 383px;
}

.splide__arrow svg {
  fill: #859e9f;
}

.splide__pagination {
  bottom: -30px;
  justify-content: center;
  padding: 0;
  gap: 8px;
}

@media screen and (max-width: 1024px) {
  .hero-slide-img {
    height: 248px;
  }

  .splide__pagination {
    display: none !important;
  }
  .splide__arrow {
    top: 50%;
  }
  .splide__arrow--next {
    right: 0;
  }
  .splide__arrow--prev {
    left: 0;
  }
  .splide__arrow svg,
  .splide__arrow {
    height: 4em;
    width: 4em;
  }
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
