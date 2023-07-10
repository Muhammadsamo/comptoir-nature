<template>
  <main class="min-h-[calc(100vh-160px)] pt-[100px] px-3">
    <div
      class="grid lg:grid-cols-2 min-h-[calc(100vh-160px)] pt-9 lg:pt-0 justify-items-center items-center lg:gap-[100px] max-w-[1440px] mx-auto"
    >
      <div
        class="lg:col-start-1 border border-[#B2896B] px-[3px] pt-[5px] pb-[0] lg:justify-self-end lg:max-h-[367px] max-w-[510px]"
      >
        <ClientOnly><Slider /></ClientOnly>
      </div>
      <div class="lg:col-start-2 font-Montserrat text-[#E9E3DE] max-w-[414px]">
        <h1
          class="font-Merriweather text-[28px] text-center pt-8 lg:pt-0 lg:text-start leading-[32px] tracking-[2.8px]"
        >
          Votre Boutique de Meubles et Décoration
        </h1>
        <h2
          class="text-[#B2896B] text-[16px] leading-[30px] text-center lg:text-start font-bold tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[21px]"
        >
          à Jarry, en Guadeloupe
        </h2>
        <p class="text-base mt-[21px] text-center lg:text-start">
          Bienvenue chez Comptoir Nature, votre sanctuaire dédié à l'art du
          meuble et de la décoration en Guadeloupe. Plongez dans notre univers
          unique où chaque produit a une âme et où le bien-être s'exprime à
          travers l'art de l'habitat.
        </p>
        <div class="flex ml-4 gap-[22px] mt-[54px]">
          <NuxtLink to="/contact" alt="contact page link"
            ><PrimaryButton buttonText="Nous Localiser"></PrimaryButton
          ></NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/deco_comptoirnature"
            target="_blank"
            ><PrimaryButton
              buttonText="Instagram"
              class="ml-22px"
            ></PrimaryButton
          ></NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Comptoir Nature",
  titleTemplate: "",
  meta: [
    {
      name: "description",
      content:
        "Welcome to Comptoir Nature, your sanctuary dedicated to the art of furniture and decoration in Guadeloupe. Immerse yourself in our unique universe where each product has a soul and where well-being is expressed through the art of living.",
    },
  ],
});
</script>
