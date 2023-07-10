<template>
  <span
    class="inline-block min-w-[169px] h-[50px] lg:min-w-[103px] lg:h-[39px] bg-[#4C6061] py-[9px] px-[18px] text-sm md:text-base text-[#E9E3DE] text-center font-Exo font-bold tracking-widest leading-[22px] cursor-pointer"
  >
    {{ buttonText }}
  </span>
</template>

<script setup>
const props = defineProps({
  buttonText: String,
});
</script>
