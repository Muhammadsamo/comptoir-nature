<template>
  <main class="min-h-[calc(100vh-160px)] bg-[#2D2D2D]">
    <div
      class="hidden lg:grid grid-cols-3 items-center gap-[70px] justify-between h-[100%] px-[50px]"
    >
      <div class="col-start-1 col-end-2 justify-self-end w-[300px]">
        <h1
          class="text-[#E9E3DE] font-[Merriweather] tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"
        >
          Nos Produits
        </h1>
        <ul
          class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-8 font-Montserrat"
        >
          <li class="border-b border-[#B2896B]">Meubles</li>
          <li class="border-b border-[#B2896B]">Tissus</li>
          <li class="border-b border-[#B2896B]">Art de la Table</li>
          <li class="border-b border-[#B2896B]">Luminaires</li>
          <li class="border-b border-[#B2896B]">Article de Décoration</li>
        </ul>
      </div>
      <div
        class="col-start-2 col-end-3 text-[#E9E3DE] border-[#B2896B] border-[2px]"
      >
        <p class="py-8 px-7">
          Chez Comptoir Nature, nous estimons que chaque client est unique, et
          par conséquent, votre espace devrait l'être aussi. Nous travaillons en
          étroite collaboration avec vous pour comprendre vos personnalités et
          besoins, proposant des produits qui reflètent qui vous êtes et ce que
          vous chérissez. Que ce soit pour embellir un intérieur ou un
          extérieur, notre équipe est là pour vous conseiller et vous guider.
          Pour aller plus loin dans cette quête de l'harmonie parfaite, notre
          responsable se rend à domicile, afin de vous aider à créer un univers
          où règne sérénité et bien-être. Venez découvrir chez Comptoir Nature
          un monde où l'art de vivre et l'art de l'habitat se rejoignent, pour
          un intérieur à votre image.
        </p>
      </div>
      <div class="col-start-3 w-[300px]">
        <h1
          class="text-[#E9E3DE] font-[Merriweather] tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"
        >
          Nos Services
        </h1>
        <ul
          class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-9 font-Montserrat"
        >
          <li
            class="border-b border-[#B2896B] flex items-center justify-between"
          >
            Listes de Mariages<span class="inline-block">
              <NuxtImg src="/productsAndServices/servicesicon.svg"></NuxtImg>
            </span>
          </li>
          <li
            class="border-b border-[#B2896B] flex items-center justify-between"
          >
            Conseil en Décoration<span class="inline-block">
              <NuxtImg src="/productsAndServices/servicesicon.svg"></NuxtImg>
            </span>
          </li>
          <li
            class="border-b border-[#B2896B] flex items-center justify-between"
          >
            Livraisons<span class="inline-block">
              <NuxtImg src="/productsAndServices/servicesicon.svg"></NuxtImg>
            </span>
          </li>
          <li
            class="border-b border-[#B2896B] flex items-center justify-between"
          >
            Parking<span class="inline-block">
              <NuxtImg src="/productsAndServices/servicesicon.svg"></NuxtImg>
            </span>
          </li>
          <li
            class="border-b border-[#B2896B] flex items-center justify-between"
          >
            Paiement en 4 Fois<span class="inline-block">
              <NuxtImg src="/productsAndServices/servicesicon.svg"></NuxtImg>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-[11px] lg:hidden">
      <h1
        class="text-[#E9E3DE] pt-16 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"
      >
        Nos Coordonnées
      </h1>
      <p
        class="text-[#B2896B] mt-1 font-Montserrat border-t border-[#B2896B] text-[16px] py-2 leading-7 text-center"
      >
        00 Rue Ferdinand Forrest <br />
        (en face de La Palette) <br />97122 Baie-Mahault (Jarry)
      </p>
      <h2
        class="text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-Montserrat font-bold border-[#B2896B]"
      >
        Tél. 05 90 38 93 05
      </h2>
      <h3
        class="text-[#E9E3DE] mt-20 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"
      >
        Nos Horaires
      </h3>
      <p
        class="text-[#B2896B] mt-1 font-Montserrat py-2 border-y border-[#B2896B] text-[16px] leading-7 text-center"
      >
        Lundi au vendredi: 9h à 18h <br />
        Samedi: 9h à 13h <br />
        Dimanche: Fermé
      </p>
    </div>
  </main>
</template>
