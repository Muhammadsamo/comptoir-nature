<template>
  <div
    class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border-[#635243] border-[2px] p-2 z-[1001]"
  >
    <div
      class="bg-[#E9E3DE] flex w-[90%] min-h-[50vh] md:min-h-0 md:w-[767px] md:h-[227px] z-[1001] pt-[42px] pb-[30px] px-[10px] md:px-[44px]"
    >
      <img
        class="w-[192px] h-[208px] -translate-x-[38px] -translate-y-[34px]"
        :src="serviceImage"
      />
      <div>
        <div
          class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[5px] md:top-[-30px] right-[5px] md:right-[-3px] cursor-pointer"
        >
          Fermer
          <img @click="$emit('closeModal')" src="/close.svg" alt="close btn" />
        </div>
        <h3
          class="font-Merriweather text-xl font-bold tracking-widest text-[#59493C]"
        >
          {{ serviceHeading }}
        </h3>
        <p
          class="font-Montserrat text-[12px] leading-5 text-[#2C2E2F] mt-[19px]"
        >
          {{ serviceDesc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
const props = defineProps({
  serviceHeading: String,
  serviceDesc: String,
  serviceImage: String,
});
</script>
