<template>
  <div
    class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border-[#635243] border-[2px] p-2"
  >
    <div
      class="bg-[#E9E3DE] flex w-[90%] min-h-[50vh] md:min-h-0 md:w-[767px] md:h-[227px] z-[1001] pt-[42px] pb-[30px] px-[10px] md:px-[44px]"
    >
      <img
        class="w-[192px] h-[208px] -translate-x-[38px] -translate-y-[34px]"
        src="/ServiceDetailsModal/ServiceDetailsModalImg.png"
      />
      <div>
        <img
          class="absolute top-[5px] md:top-[-27px] right-[5px] md:right-[-3px] cursor-pointer"
          @click="$emit('closeModal')"
          src="/termsOfUse/close.svg"
          alt="close btn"
        />
        <h3
          class="font-Merriweather text-xl font-bold tracking-widest text-[#59493C]"
        >
          {{ solutionHeading }}Heading Data
        </h3>
        <p
          class="font-Montserrat text-[12px] leading-5 text-[#2C2E2F] mt-[19px]"
        >
          {{ solutionDesc }}Para DATA
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
const props = defineProps({
  solutionHeading: String,
  solutionDesc: String,
});
</script>
