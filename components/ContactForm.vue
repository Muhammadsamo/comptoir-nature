<template>
  <div
    class="bg-transparent p-[10px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4/5 min-h-[50vh] md:min-h-0 md:w-[1060px] md:h-[518px] border-[#B2896B] border z-[1001]"
  >
    <form
      @submit.prevent="onSubmit"
      class="grid grid-cols-1 md:grid-cols-2 gap-6 p-[20px] md:px-[60px] items-start pt-[70px] pb-[42px] bg-[#E2DAD4] h-full"
    >
      <div
        class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[5px] md:top-[-30px] right-[5px] md:right-[-3px] cursor-pointer"
      >
        Fermer
        <img @click="emit('closeModal')" src="/close.svg" alt="close btn" />
      </div>
      <div class="md:w-[470px] border-r border-[#B2896B] px-[44px] h-full">
        <h3
          class="font-Merriweather pb-0 text-start text-[24px] leading-7 font-bold tracking-[2.4px] text-[#59493C] mb-[34px]"
        >
          Vos Coordonnées
        </h3>
        <input type="hidden" name="_append" value="false" />
        <input
          name="_honeypot"
          tabindex="-1"
          autocomplete="off"
          class="hidden w-[100%] h-[37px] border border-[#E1E4E7] drop-shadow-[#B2896B] bg-[#F7F4F2] mb-[5px] py-[9px] px-[14px] text-[#828282] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#828282] focus:outline-none"
        />
        <input
          class="inline-block w-[100%] h-[37px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[17px] py-[9px] px-[14px] text-[#828282] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#828282] focus:outline-none drop-shadow-[0_1px_0px_rgba(178,137,107,1)]"
          id="name"
          name="name"
          required
          type="text"
          placeholder="Nom Complet"
          v-model="name"
        />
        <input
          class="inline-block w-[100%] h-[37px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[17px] py-[9px] px-[14px] text-[#828282] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#828282] focus:outline-none drop-shadow-[0_1px_0px_rgba(178,137,107,1)]"
          id="email"
          name="email"
          required
          type="email"
          placeholder="Adresse Mail"
          v-model="email"
        />
        <input
          class="inline-block w-[100%] h-[37px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[17px] py-[9px] px-[14px] text-[#8A97A5] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#8A97A5] focus:outline-none drop-shadow-[0_1px_0px_rgba(178,137,107,1)]"
          id="telephone"
          name="telephone"
          required
          type="text"
          placeholder="Téléphone"
          v-model="organization"
        />
        <div
          class="flex flex-col md:flex-row gap-y-1 md:gap-0 md:justify-between items-center"
        >
          <span
            v-show="formSubmitted"
            class="text-[#4C6061] font-semibold text-base tracking-[1.6px] absolute bottom-[60px]"
            >Message envoyé avec succès.
          </span>
        </div>
      </div>
      <div class="md:w-[470px] px-[44px] h-full">
        <h3
          class="font-Merriweather pb-8 md:pb-0 text-start text-[24px] leading-7 font-bold tracking-[2.4px] text-[#59493C] mb-[34px]"
        >
          Votre Message
        </h3>
        <div>
          <textarea
            class="inline-block w-[100%] h-[228px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[10px] px-[14px] text-[#8A97A5] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#8A97A5] focus:outline-none resize-none"
            id="message"
            name="message"
            required
            type="text"
            v-model="message"
          ></textarea>
          <button type="submit" class="ml-auto mt-[34px] block">
            <PrimaryButton button-text="Envoyer"></PrimaryButton>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";

const emit = defineEmits("closeModal");
const modalStore = useModalStore();
const FORMSPARK_ACTION_URL = "";

const name = ref("");
const organization = ref("");
const email = ref("");
const message = ref("");
const formSubmitted = ref(false);
const router = useRouter();
const fieldsEmpty = ref();

const onSubmit = async () => {
  if (name.value.length && email.value.length && message.value.length) {
    formSubmitted.value = true;
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        organization: organization.value,
        email: email.value,
        message: message.value,
      }),
    });
    setTimeout(() => {
      router.push("/");
      modalStore.modalVisible = false;
      modalStore.backDropVisible = false;
    }, 2000);
  } else if (
    !name.value.length ||
    !email.value.length ||
    !message.value.length
  ) {
    fieldsEmpty.value = true;
  }
};
</script>
