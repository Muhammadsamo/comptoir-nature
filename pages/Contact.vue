<template>
  <main class="min-h-[calc(100vh-160px)] pt-[100px]">
    <div
      v-if="isLoading"
      class="animate-pulse absolute top-0 bottom-0 left-0 right-0 text-center flex items-center justify-center text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"
    >
      <h1>Loading....</h1>
    </div>
    <div
      v-else
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
          {{ projects.AddressLine1 }} <br />
          {{ projects.AddressLine2 }} <br />
          {{ projects.AddressLine3 }}
        </p>
        <p
          class="text-[#B2896B] text-[16px] leading-[24px] font-bold tracking-[1.6px] border-b border-[#B2896B] py-2 mt-[8px]"
        >
          {{ projects.PhoneNumber1 }}
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
          {{ projects.BusinessHours1 }} <br />
          {{ projects.BusinessHours2 }}<br />
          {{ projects.BusinessHours3 }}
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

const isLoading = ref(true);

const projects = ref([]);
const slides = ref([]);

const fetchData = async () => {
  try {
    const result = await $fetch("api/projects");
    const result2 = await $fetch("api/portfolio");

    projects.value = result.projects[0];

    isLoading.value = false;
  } catch {
    alert("Something went wrong could not fetch the data");
  }
};

onMounted(() => {
  fetchData();
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
