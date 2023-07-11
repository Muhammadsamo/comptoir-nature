import { d as defineStore } from '../server.mjs';

const useModalStore = defineStore("modal", {
  state: () => ({
    modalVisible: false,
    backDropVisible: false,
    termsModalVisible: false
  })
});

export { useModalStore as u };
//# sourceMappingURL=modal-6918bc8f.mjs.map
