import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import _sfc_main$1 from './PrimaryButton-370e82ae.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1 } from './close-ce70289b.mjs';
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
import '../server.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + publicAssetsURL("MobileContact/MobileLogo.png");
const _sfc_main = {
  __name: "MobileContact",
  __ssrInlineRender: true,
  emits: "closeModal",
  setup(__props, { emit }) {
    function mapsSelector() {
      if (
        /* if we're on iOS, open in Apple Maps */
        navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPad") != -1 || navigator.platform.indexOf("iPod") != -1
      )
        window.open("maps://maps.google.com/maps?daddr=<24.7999999>,<67>&amp;ll=");
      else
        window.open("https://maps.google.com/maps?daddr=<24.7999999>,<67>&amp;ll=");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PrimaryButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-[100011] bg-[#2C2E2F] top-0 left-0 right-0 px-[10px] min-h-screen absolute pb-[13px]" }, _attrs))}><div class="pt-8 pl-7"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="flex gap-[6px] text-[#8EA6A7] text-[16px] lg:text-[12px] leading-5 font-Montserrat font-semibold absolute top-[33px] md:top-[-30px] right-[15px] md:right-[-3px] cursor-pointer"> Fermer <img${ssrRenderAttr("src", _imports_1)} alt="close btn"></div></div><div class="px-[11px] lg:hidden"><h1 class="text-[#E9E3DE] pt-16 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"> Nos Coordonn\xE9es </h1><p class="text-[#B2896B] mt-1 border-t border-[#B2896B] text-[16px] py-2 leading-7 text-center"> 00 Rue Ferdinand Forrest <br> (en face de La Palette) <br>97122 Baie-Mahault (Jarry) </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:05 90 38 93 05" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-bold border-[#B2896B]"${_scopeId}> T\xE9l. 05 90 38 93 05 </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-bold border-[#B2896B]" }, " T\xE9l. 05 90 38 93 05 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="text-[#E9E3DE] mt-20 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"> Nos Horaires </h3><p class="text-[#B2896B] mt-1 py-2 border-y border-[#B2896B] text-[16px] leading-7 text-center"> Lundi au vendredi: 9h \xE0 18h <br> Samedi: 9h \xE0 13h <br> Dimanche: Ferm\xE9 </p></div><div class="w-full flex flex-col items-center gap-[16px] mt-[160px]">`);
      _push(ssrRenderComponent(_component_PrimaryButton, {
        onClick: mapsSelector,
        "button-text": "Nous Situer",
        class: "block w-full max-w-[450px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "tel:05 90 38 93 05",
        class: "w-full block max-w-[450px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrimaryButton, {
              "button-text": "Nous Appeler",
              class: "block w-[100%]"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrimaryButton, {
                "button-text": "Nous Appeler",
                class: "block w-[100%]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileContact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=MobileContact-0d6d71a4.mjs.map
