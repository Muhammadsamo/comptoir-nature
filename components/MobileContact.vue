<template>
  <div
    class="z-[100011] bg-[#2C2E2F] top-0 left-0 right-0 px-[10px] min-h-screen absolute pb-[13px]"
  >
    <div class="pt-8 pl-7">
      <img src="/MobileContact/MobileLogo.png" alt="" />
      <div
        class="flex gap-[6px] text-[#8EA6A7] text-[16px] lg:text-[12px] leading-5 font-Montserrat font-semibold absolute top-[33px] md:top-[-30px] right-[15px] md:right-[-3px] cursor-pointer"
      >
        Fermer
        <img @click="emit('closeModal')" src="/close.svg" alt="close btn" />
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
      <NuxtLink to="tel:05 90 38 93 05">
        <h2
          class="text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-bold border-[#B2896B]"
        >
          Tél. 05 90 38 93 05
        </h2>
      </NuxtLink>
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
    <div class="w-full flex flex-col items-center gap-[16px] mt-[160px]">
      <PrimaryButton
        @click="mapsSelector"
        button-text="Nous Situer"
        class="block w-full max-w-[450px]"
      ></PrimaryButton>
      <NuxtLink to="tel:05 90 38 93 05" class="w-full block max-w-[450px]">
        <PrimaryButton
          button-text="Nous Appeler"
          class="block w-[100%]"
        ></PrimaryButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits("closeModal");

function mapsSelector() {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPad") != -1 ||
    navigator.platform.indexOf("iPod") != -1
  )
    window.open("maps://maps.google.com/maps?daddr=<24.7999999>,<67>&amp;ll=");
  /* else use Google */ else
    window.open("https://maps.google.com/maps?daddr=<24.7999999>,<67>&amp;ll=");
}
</script>
