<template>
  <div
    class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border-[#635243] border-[2px] p-2"
  >
    <div
      class="bg-[#E9E3DE] flex w-[90%] min-h-[50vh] md:min-h-0 md:w-[968px] md:h-[443px] z-[1001] pt-[42px] pb-[30px] px-[10px] md:px-[44px]"
    >
      <div
        class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[5px] md:top-[-30px] right-[5px] md:right-[-3px] cursor-pointer"
      >
        Fermer
        <img
          @click="$emit('closeModal')"
          src="/termsOfUse/close.svg"
          alt="close btn"
        />
      </div>
      <div class="flex">
        <h1
          class="text-[#59493C] text-[24px] leading-7 tracking-[2.4px] font-Merriweather"
        >
          Vos Coordonnées
        </h1>
      </div>
      <div>
        <h2
          class="text-[#59493C] text-[24px] leading-7 tracking-[2.4px] font-Merriweather"
        >
          Votre Message
        </h2>
      </div>
    </div>
  </div>
</template>
