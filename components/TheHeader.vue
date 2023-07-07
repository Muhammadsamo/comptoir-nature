<template>
  <header
    class="bg-[#2D2D2D] pl-[63px] pr-[86px] pt-[45px] h-[100px] flex justify-between w-screen fixed"
  >
    <div>
      <nuxt-link class="logo" to="/" alt="homepage"
        ><img src="/header/logo.svg"
      /></nuxt-link>
    </div>
    <nav class="min-w-[400px]">
      <ul class="text-[#E9E3DE] flex justify-between items-center w-full">
        <nuxt-link class="py-[6px]" to="/"><li>Accueil</li></nuxt-link>
        <li>
          <nuxt-link
            class="py-[6px]"
            to="/ProductsAndServices"
            alt="products page"
            >Produits and Services</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="py-[6px]" to="/Contact" alt="contact page"
            >Contact</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="https://www.instagram.com/deco_comptoirnature"
            target="_blank"
            alt="instagram link"
          >
            <img src="/header/instaLogo.svg" alt="instagram icon" />
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.logo.router-link-active {
  border-bottom: none;
}
.router-link-active {
  border-bottom: 2px solid #b2896b;
}
</style>
