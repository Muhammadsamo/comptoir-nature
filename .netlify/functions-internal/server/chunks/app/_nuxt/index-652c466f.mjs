import _sfc_main$1 from './Slider-60c088b7.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import _sfc_main$2 from './PrimaryButton-370e82ae.mjs';
import _sfc_main$3 from './MobileContact-0d6d71a4.mjs';
import { u as useHead } from '../server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useModalStore } from './modal-6918bc8f.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ufo';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
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
import './close-ce70289b.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Comptoir Nature",
      titleTemplate: "",
      meta: [
        {
          name: "description",
          content: "Welcome to Comptoir Nature, your sanctuary dedicated to the art of furniture and decoration in Guadeloupe. Immerse yourself in our unique universe where each product has a soul and where well-being is expressed through the art of living."
        }
      ]
    });
    const isLoading = ref(true);
    const projects = ref([]);
    const slides = ref([]);
    const modalStore = useModalStore();
    const openContactModal = () => {
      modalStore.modalVisible = true;
    };
    const closeModal = () => {
      modalStore.modalVisible = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Slider = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PrimaryButton = _sfc_main$2;
      const _component_MobileContact = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-160px)] pt-[35px] lg:pt-[100px] px-3 pb-4 lg:pb-0" }, _attrs))} data-v-c730b05c>`);
      if (unref(isLoading)) {
        _push(`<div class="animate-pulse absolute top-0 bottom-0 left-0 right-0 text-center flex items-center justify-center text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]" data-v-c730b05c><h1 data-v-c730b05c>Loading....</h1></div>`);
      } else {
        _push(`<div class="grid lg:grid-cols-2 min-h-[calc(100vh-160px)] lg:pt-0 justify-items-center lg:justify-items-start items-center lg:gap-[100px] max-w-[1440px] mx-auto" data-v-c730b05c><div class="lg:col-start-1 lg:justify-self-end overflow-y-hidden h-[250px] lg:min-h-[400px]" data-v-c730b05c><div class="border border-[#B2896B] py-[2px] lg:px-[3px] lg:pt-[5px] pb-[0] h-[250px] lg:min-h-[367px] lg:max-h-[367px] max-w-[510px]" data-v-c730b05c>`);
        _push(ssrRenderComponent(_component_Slider, { slides: unref(slides) }, null, _parent));
        _push(`</div></div><div class="lg:col-start-2 font-Montserrat text-[#E9E3DE] lg:h-[400px] max-w-[414px]" data-v-c730b05c><h1 class="font-Merriweather text-[24px] lg:text-[28px] text-center pt-8 lg:pt-0 lg:text-start leading-[32px] tracking-[2.8px]" data-v-c730b05c>${ssrInterpolate(unref(projects).HeroTitle)}</h1><h2 class="text-[#B2896B] text-[16px] leading-[30px] text-center lg:text-start font-bold tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[21px]" data-v-c730b05c>${ssrInterpolate(unref(projects).HeroSubTitle)}</h2><p class="text-base mt-[21px] text-center lg:text-start opacity-75" data-v-c730b05c>${ssrInterpolate(unref(projects).HeroDesc)}</p><div class="flex justify-between lg:gap-[22px] mt-[46px] lg:mt-[54px]" data-v-c730b05c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          alt: "contact page link",
          class: "hidden lg:inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PrimaryButton, { buttonText: "Nous Localiser" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PrimaryButton, { buttonText: "Nous Localiser" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PrimaryButton, {
          onClick: openContactModal,
          buttonText: "Contact",
          class: "lg:hidden w-[48%]"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.instagram.com/deco_comptoirnature",
          target: "_blank",
          class: "w-[48%]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PrimaryButton, {
                buttonText: "Instagram",
                class: "ml-22px w-[100%] lg:w-auto"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PrimaryButton, {
                  buttonText: "Instagram",
                  class: "ml-22px w-[100%] lg:w-auto"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_MobileContact, {
          style: unref(modalStore).modalVisible ? null : { display: "none" },
          onCloseModal: closeModal
        }, null, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c730b05c"]]);

export { index as default };
//# sourceMappingURL=index-652c466f.mjs.map
