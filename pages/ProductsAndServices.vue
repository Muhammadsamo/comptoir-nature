<template>
  <main class="min-h-[calc(100vh-160px)] lg:overflow-hidden">
    <div
      v-if="isLoading"
      class="animate-pulse absolute top-0 bottom-0 left-0 right-0 text-center flex items-center justify-center text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"
    >
      <h1>Loading....</h1>
    </div>
    <div
      v-else
      class="hidden lg:grid grid-cols-3 items-center gap-x-[10px] justify-between h-full mx-auto min-h-[calc(100vh-160px)] max-w-[1440px]"
    >
      >
      <div class="col-start-1 col-end-2 justify-self-end w-[300px]">
        <h1
          class="text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"
        >
          Nos Produits
        </h1>
        <ul class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px]">
          <li
            v-for="p in products"
            :key="p.productTitle"
            class="leading-8 py-[6px] border-b border-[#B2896B]"
          >
            {{ p.productTitle }}
          </li>
        </ul>
      </div>
      <div
        class="col-start-2 col-end-3 text-[#E9E3DEBF] border-[#B2896B] border-[2px] max-w-[340px] justify-self-center"
      >
        <p class="py-8 px-7 text-[12px] leading-[20px]">
          Chez Comptoir Nature, nous estimons que chaque client est unique, et
          par conséquent, votre espace devrait l'être aussi. Nous travaillons en
          étroite collaboration avec vous pour comprendre vos personnalités et
          besoins, proposant des produits qui reflètent qui vous êtes et ce que
          vous chérissez. Que ce soit pour embellir un intérieur ou un
          extérieur, notre équipe est là pour vous conseiller et vous guider.
          Pour aller plus loin dans cette quête de l'harmonie parfaite, notre
          responsable se rend à domicile, afin de vous aider à créer un univers
          où règne sérénité et bien-être. Venez découvrir chez Comptoir Nature
          un monde où l'art de vivre et l'art de l'habitat se rejoignent, pour
          un intérieur à votre image.
        </p>
      </div>
      <div class="col-start-3 w-[300px]">
        <h1
          class="text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"
        >
          Nos Services
        </h1>
        <ul
          class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-9"
        >
          <li
            v-for="s in services"
            :key="s.ServiceId"
            @click="setActiveModal(s.Title)"
            class="leading-8 py-[6px] border-b border-[#B2896B] flex items-center justify-between cursor-pointer"
          >
            {{ s.Title }}
            <span class="inline-block">
              <img src="/productsAndServices/servicesicon.svg" />
            </span>
          </li>
        </ul>
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
      <h2
        class="text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-bold border-[#B2896B]"
      >
        Tél. 05 90 38 93 05
      </h2>
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
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Listes de Mariages')"
        @closeModal="closeModal"
        :serviceHeading="service1.Title"
        :serviceDesc="service1.Desc"
        :serviceImage="service1.Image"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Conseil en Décoration')"
        @closeModal="closeModal"
        :serviceHeading="service2.Title"
        :serviceDesc="service2.Desc"
        :serviceImage="service2.Image"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Livraisons')"
        @closeModal="closeModal"
        :serviceHeading="service3.Title"
        :serviceDesc="service3.Desc"
        :serviceImage="service3.Image"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Parking')"
        @closeModal="closeModal"
        :serviceHeading="service4.Title"
        :serviceDesc="service4.Desc"
        :serviceImage="service4.Image"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Paiement en 4 Fois')"
        @closeModal="closeModal"
        :serviceHeading="service5.Title"
        :serviceDesc="service5.Desc"
        :serviceImage="service5.Image"
      ></ServiceDetailsModal>
    </Transition>
  </main>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";

useHead({
  title: "Produits And Services",
  meta: [
    {
      name: "description",
      content:
        "Chez Comptoir Nature, nous estimons que chaque client est unique, et par conséquent, votre espace devrait l'être aussi. Nous travaillons en étroite collaboration avec vous pour comprendre vos personnalités et besoins, proposant des produits qui reflètent qui vous êtes et ce que vous chérissez. Que ce soit pour embellir un intérieur ou un extérieur, notre équipe est là pour vous conseiller et vous guider. Pour aller plus loin dans cette quête de l'harmonie parfaite, notre responsable se rend à domicile, afin de vous aider à créer un univers où règne sérénité et bien-être. Venez découvrir chez Comptoir Nature un monde où l'art de vivre et l'art de l'habitat se rejoignent, pour un intérieur à votre image.",
    },
  ],
});

const isLoading = ref(true);

const services = ref([]);
const service1 = ref([]);
const service2 = ref([]);
const service3 = ref([]);
const service4 = ref([]);
const service5 = ref([]);

const fetchData = async () => {
  try {
    const result = await $fetch("api/services");

    services.value = result.services;
    service1.value = result.services[0];
    service2.value = result.services[1];
    service3.value = result.services[2];
    service4.value = result.services[3];
    service5.value = result.services[4];

    console.log(services.value);
    isLoading.value = false;
  } catch {
    alert("Something went wrong could not fetch the data");
  }
};

onMounted(() => {
  fetchData();
});

const modalStore = useModalStore();
const activeModal = ref("");

const setActiveModal = (modal) => {
  activeModal.value = modal;
  modalStore.backDropVisible = true;
  modalStore.modalVisible = true;
};
const isActive = (modal) => {
  return activeModal.value === modal;
};

const closeModal = () => {
  activeModal.value = "";
  modalStore.backDropVisible = false;
  modalStore.modalVisible = false;
};

const products = [
  {
    productTitle: "Meubles",
  },
  {
    productTitle: "Tissus",
  },
  {
    productTitle: "Art de la Table",
  },
  {
    productTitle: "Luminaires",
  },
  {
    productTitle: "Article de Décoration",
  },
];
</script>

<style scoped>
.slideIn-enter-from,
.slideIn-leave-to,
.slideIn2-leave-to {
  transform: translate(-50%, 200%);
}
</style>
