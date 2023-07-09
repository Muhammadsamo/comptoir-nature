<template>
  <main class="min-h-[calc(100vh-160px)] pt-[100px]">
    <div
      class="grid lg:grid-cols-[2fr 1fr] min-h-[calc(100vh-160px)] items-center gap-[70px] max-w-[1440px] mx-auto"
    >
      <div
        class="col-start-1 border border-[#B2896B] p-[10px] justify-self-end w-[690px] h-[400px]"
      >
        <GoogleMap></GoogleMap>
      </div>
      <div class="col-start-2 text-[#E9E3DE] max-w-[300px]">
        <h1
          class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px]"
        >
          Nos Coordonnées
        </h1>
        <p
          class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]"
        >
          00 Rue Ferdinand Forrest <br />
          (en face de La Palette) <br />
          97122 Baie-Mahault (Jarry)
        </p>
        <p
          class="text-[#B2896B] text-[16px] leading-[24px] font-bold tracking-[1.6px] border-b border-[#B2896B] py-2 mt-[8px]"
        >
          Tél. 05 90 38 93 05
        </p>
        <div class="mt-[17px] w-full">
          <PrimaryButton
            @click="openModal"
            class="w-full"
            buttonText="Formulaire Contact"
          ></PrimaryButton>
        </div>
        <h2
          class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px] mt-[35px]"
        >
          Nos Horaires
        </h2>
        <p
          class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]"
        >
          Lundi au vendredi: 9h à 18h <br />
          Samedi: 9h à 13h <br />
          Dimanche: Fermé
        </p>
      </div>
    </div>
    <Transition name="slideIn">
      <ContactForm
        v-show="modalStore.modalVisible"
        @closeModal="closeModal"
      ></ContactForm>
    </Transition>
  </main>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";
useHead({
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "This is the contact page",
    },
  ],
});

const modalStore = useModalStore();

const openModal = () => {
  modalStore.backDropVisible = true;
  modalStore.modalVisible = true;
};

const closeModal = () => {
  modalStore.backDropVisible = false;
  modalStore.modalVisible = false;
};
</script>
