<template>
  <span
    :class="class"
    class="inline-block lg:max-w-0 lg:min-w-[103px] bg-[#4C6061] py-[16px] lg:py-[9px] px-[18px] text-[16px] text-[#E9E3DE] text-center font-Merriweather font-bold tracking-[1.6px] cursor-pointer"
  >
    {{ buttonText }}
  </span>
</template>

<script setup>
const props = defineProps({
  buttonText: String,
  class: String,
});
</script>
