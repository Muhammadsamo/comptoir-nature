import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    modalVisible: false,
    backDropVisible: false,
    termsModalVisible: false,
  }),
});
