import _sfc_main$1 from './GoogleMap-0faaa0e0.mjs';
import _sfc_main$2 from './PrimaryButton-370e82ae.mjs';
import _sfc_main$3 from './ContactForm-b5a81a9f.mjs';
import { u as useHead } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    const isLoading = ref(true);
    const projects = ref([]);
    ref([]);
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-160px)] pt-[100px]" }, _attrs))}>`);
      if (unref(isLoading)) {
        _push(`<div class="animate-pulse absolute top-0 bottom-0 left-0 right-0 text-center flex items-center justify-center text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"><h1>Loading....</h1></div>`);
      } else {
        _push(`<div class="grid lg:grid-cols-[2fr 1fr] min-h-[calc(100vh-160px)] items-center gap-[70px] max-w-[1440px] mx-auto"><div class="col-start-1 border border-[#B2896B] p-[10px] justify-self-end w-[690px] h-[400px]">`);
        _push(ssrRenderComponent(_component_GoogleMap, null, null, _parent));
        _push(`</div><div class="col-start-2 text-[#E9E3DE] max-w-[300px]"><h1 class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px]"> Nos Coordonn\xE9es </h1><p class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]">${ssrInterpolate(unref(projects).AddressLine1)} <br> ${ssrInterpolate(unref(projects).AddressLine2)} <br> ${ssrInterpolate(unref(projects).AddressLine3)}</p><p class="text-[#B2896B] text-[16px] leading-[24px] font-bold tracking-[1.6px] border-b border-[#B2896B] py-2 mt-[8px]">${ssrInterpolate(unref(projects).PhoneNumber1)}</p><div class="mt-[17px] w-full">`);
        _push(ssrRenderComponent(_component_PrimaryButton, {
          onClick: openModal,
          class: "w-full",
          buttonText: "Formulaire Contact"
        }, null, _parent));
        _push(`</div><h2 class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px] mt-[35px]"> Nos Horaires </h2><p class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]">${ssrInterpolate(unref(projects).BusinessHours1)} <br> ${ssrInterpolate(unref(projects).BusinessHours2)}<br> ${ssrInterpolate(unref(projects).BusinessHours3)}</p></div></div>`);
      }
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
//# sourceMappingURL=Contact-af060d8c.mjs.map
