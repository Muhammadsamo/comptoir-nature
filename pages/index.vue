<template>
  <main class="min-h-[calc(100vh-160px)]">
    <div
      class="grid lg:grid-cols-2 min-h-[calc(100vh-160px)] items-center gap-[100px] max-w-[1440px] mx-auto"
    >
      <div
        class="col-start-1 border border-[#B2896B] px-[3px] pt-[5px] pb-[0] justify-self-end lg:max-h-[367px] lg:max-w-[510px]"
      >
        <ClientOnly><Slider /></ClientOnly>
      </div>
      <div class="col-start-2 font-Montserrat text-[#E9E3DE] max-w-[414px]">
        <h1
          class="font-Merriweather text-[28px] leading-[32px] tracking-[2.8px]"
        >
          Votre Boutique de Meubles et Décoration
        </h1>
        <h2
          class="text-[#B2896B] text-[16px] leading-[30px] font-bold tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[21px]"
        >
          à Jarry, en Guadeloupe
        </h2>
        <p class="text-base mt-[21px]">
          Bienvenue chez Comptoir Nature, votre sanctuaire dédié à l'art du
          meuble et de la décoration en Guadeloupe. Plongez dans notre univers
          unique où chaque produit a une âme et où le bien-être s'exprime à
          travers l'art de l'habitat.
        </p>
        <div class="flex gap-[22px] mt-[54px]">
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
