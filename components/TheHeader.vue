<template>
  <header class="bg-[#2D2D2D] px-[50px] py-4">
    <div class="flex justify-between">
      <nuxt-link to="/"><nuxt-img src="/header/logo.svg"></nuxt-img></nuxt-link>
      <ul class="text-[#E9E3DE] flex justify-between items-center w-[25%]">
        <li>Accueil</li>
        <li>
          <nuxt-link to="/ProductsAndServices">Produits and Services</nuxt-link>
        </li>
        <li><nuxt-link to="/Contact">Contact</nuxt-link></li>
        <li><NuxtImg src="/header/instaLogo.svg"></NuxtImg></li>
      </ul>
    </div>
  </header>
</template>
