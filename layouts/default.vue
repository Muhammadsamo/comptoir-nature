<template>
  <div class="lg:overflow-hidden">
    <TheHeader></TheHeader>
    <slot />
    <Transition name="slideIn">
      <TermsOfUse
        v-show="modalStore.termsModalVisible"
        @closeModal="closeModal"
      ></TermsOfUse>
    </Transition>

    <Transition name="slideIn2">
      <div
        v-show="modalStore.backDropVisible"
        class="fixed top-0 left-0 bottom-0 right-0 h-full bg-[#2C2E2F] z-[1000]"
        @click="closeModal"
      ></div>
    </Transition>
    <TheFooter @openModal="openTermsModal"></TheFooter>
  </div>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";

const modalStore = useModalStore();

const openTermsModal = () => {
  modalStore.termsModalVisible = true;
  modalStore.backDropVisible = true;
};

const closeModal = () => {
  modalStore.backDropVisible = false;
  modalStore.termsModalVisible = false;
  modalStore.modalVisible = false;
};
</script>
