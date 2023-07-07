<template>
  <div>
    <TheHeader />
    <NuxtPage class="pt-[100px]" />
    <TheFooter />
  </div>
</template>

<script setup>

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@400;500;700&display=swap");

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  left: 0;
  right: 0;
  transition: all 750ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

@media screen and (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 5px;
  }
}

/* Track */
::-webkit-scrollbar-track {
  background: #e2dad4;
  border-radius: 5px;
  cursor: pointer !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #826b57;
  border-radius: 5px;
  cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e2dad4;
  cursor: pointer;
}
</style>
