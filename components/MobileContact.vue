<template>
  <div class="z-[100011] bg-[#2C2E2F] absolute top-0 bottom-0 left-0 right-0">
    <div class="pt-8 pl-7">
      <img src="/MobileContact/MobileLogo.png" alt="" />
      <div
        class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[33px] md:top-[-30px] right-[15px] md:right-[-3px] cursor-pointer"
      >
        Fermer
        <img @click="$emit('closeModal')" src="/close.svg" alt="close btn" />
      </div>
    </div>
    <div class="px-[11px] lg:hidden">
      <h1
        class="text-[#E9E3DE] pt-16 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"
      >
        Nos Coordonnées
      </h1>
      <p
        class="text-[#B2896B] mt-1 border-t border-[#B2896B] text-[16px] py-2 leading-7 text-center"
      >
        00 Rue Ferdinand Forrest <br />
        (en face de La Palette) <br />97122 Baie-Mahault (Jarry)
      </p>
      <h2
        class="text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-bold border-[#B2896B]"
      >
        Tél. 05 90 38 93 05
      </h2>
      <h3
        class="text-[#E9E3DE] mt-20 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"
      >
        Nos Horaires
      </h3>
      <p
        class="text-[#B2896B] mt-1 py-2 border-y border-[#B2896B] text-[16px] leading-7 text-center"
      >
        Lundi au vendredi: 9h à 18h <br />
        Samedi: 9h à 13h <br />
        Dimanche: Fermé
      </p>
    </div>
  </div>
</template>
