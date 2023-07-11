import _sfc_main$1 from './GoogleMap-ad9607d8.mjs';
import _sfc_main$2 from './PrimaryButton-370e82ae.mjs';
import _sfc_main$3 from './ContactForm-b5a81a9f.mjs';
import { u as useHead } from '../server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useModalStore } from './modal-6918bc8f.mjs';
import './close-ce70289b.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'ufo';
import 'defu';
import 'radix3';
import 'destr';
import 'scule';
import 'klona';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'ohash';
import 'unstorage';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact",
      meta: [
        {
          name: "description",
          content: "This is the contact page"
        }
      ]
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GoogleMap = _sfc_main$1;
      const _component_PrimaryButton = _sfc_main$2;
      const _component_ContactForm = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-160px)] pt-[100px]" }, _attrs))}><div class="grid lg:grid-cols-[2fr 1fr] min-h-[calc(100vh-160px)] items-center gap-[70px] max-w-[1440px] mx-auto"><div class="col-start-1 border border-[#B2896B] p-[10px] justify-self-end w-[690px] h-[400px]">`);
      _push(ssrRenderComponent(_component_GoogleMap, null, null, _parent));
      _push(`</div><div class="col-start-2 text-[#E9E3DE] max-w-[300px]"><h1 class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px]"> Nos Coordonn\xE9es </h1><p class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]"> 00 Rue Ferdinand Forrest <br> (en face de La Palette) <br> 97122 Baie-Mahault (Jarry) </p><p class="text-[#B2896B] text-[16px] leading-[24px] font-bold tracking-[1.6px] border-b border-[#B2896B] py-2 mt-[8px]"> T\xE9l. 05 90 38 93 05 </p><div class="mt-[17px] w-full">`);
      _push(ssrRenderComponent(_component_PrimaryButton, {
        onClick: openModal,
        class: "w-full",
        buttonText: "Formulaire Contact"
      }, null, _parent));
      _push(`</div><h2 class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px] mt-[35px]"> Nos Horaires </h2><p class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]"> Lundi au vendredi: 9h \xE0 18h <br> Samedi: 9h \xE0 13h <br> Dimanche: Ferm\xE9 </p></div></div>`);
      _push(ssrRenderComponent(_component_ContactForm, {
        style: unref(modalStore).modalVisible ? null : { display: "none" },
        onCloseModal: closeModal
      }, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Contact-7ebc7357.mjs.map
