<template>
  <main class="min-h-[calc(100vh-160px)]">
    <div
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
            :key="s.serviceTitle"
            @click="setActiveModal(s.serviceTitle)"
            class="leading-8 py-[6px] border-b border-[#B2896B] flex items-center justify-between cursor-pointer"
          >
            {{ s.serviceTitle }}
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
        :serviceHeading="services[0].serviceTitle"
        :serviceDesc="services[0].serviceDesc"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Conseil en Décoration')"
        @closeModal="closeModal"
        :serviceHeading="services[1].serviceTitle"
        :serviceDesc="services[1].serviceDesc"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Livraisons')"
        @closeModal="closeModal"
        :serviceHeading="services[2].serviceTitle"
        :serviceDesc="services[2].serviceDesc"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Parking')"
        @closeModal="closeModal"
        :serviceHeading="services[3].serviceTitle"
        :serviceDesc="services[3].serviceDesc"
      ></ServiceDetailsModal>
    </Transition>
    <Transition name="slideIn">
      <ServiceDetailsModal
        v-show="modalStore.modalVisible && isActive('Paiement en 4 Fois')"
        @closeModal="closeModal"
        :serviceHeading="services[4].serviceTitle"
        :serviceDesc="services[4].serviceDesc"
      ></ServiceDetailsModal>
    </Transition>
  </main>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";

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

const services = [
  {
    serviceTitle: "Listes de Mariages",
    serviceDesc:
      "Nous proposons un service d'entretien de piscines irréprochable et adapté à vos besoins. Que vous ayez besoin d'un nettoyage régulier ou d'une maintenance saisonnière, notre équipe d'experts utilise les dernières technologies et les meilleures pratiques pour garantir que votre piscine reste propre, sûre et prête à l'usage. ",
  },
  {
    serviceTitle: "Conseil en Décoration",
    serviceDesc:
      "Nous proposons un service d'entretien de piscines irréprochable et adapté à vos besoins. Que vous ayez besoin d'un nettoyage régulier ou d'une maintenance saisonnière, notre équipe d'experts utilise les dernières technologies et les meilleures pratiques pour garantir que votre piscine reste propre, sûre et prête à l'usage. ",
  },
  {
    serviceTitle: "Livraisons",
    serviceDesc:
      "Nous proposons un service d'entretien de piscines irréprochable et adapté à vos besoins. Que vous ayez besoin d'un nettoyage régulier ou d'une maintenance saisonnière, notre équipe d'experts utilise les dernières technologies et les meilleures pratiques pour garantir que votre piscine reste propre, sûre et prête à l'usage. ",
  },
  {
    serviceTitle: "Parking",
    serviceDesc:
      "Nous proposons un service d'entretien de piscines irréprochable et adapté à vos besoins. Que vous ayez besoin d'un nettoyage régulier ou d'une maintenance saisonnière, notre équipe d'experts utilise les dernières technologies et les meilleures pratiques pour garantir que votre piscine reste propre, sûre et prête à l'usage. ",
  },
  {
    serviceTitle: "Paiement en 4 Fois",
    serviceDesc:
      "Nous proposons un service d'entretien de piscines irréprochable et adapté à vos besoins. Que vous ayez besoin d'un nettoyage régulier ou d'une maintenance saisonnière, notre équipe d'experts utilise les dernières technologies et les meilleures pratiques pour garantir que votre piscine reste propre, sûre et prête à l'usage. ",
  },
];
</script>
