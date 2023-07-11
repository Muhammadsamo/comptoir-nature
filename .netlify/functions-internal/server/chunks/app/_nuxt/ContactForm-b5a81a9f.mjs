import _sfc_main$1 from './PrimaryButton-370e82ae.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1 } from './close-ce70289b.mjs';
import { u as useModalStore } from './modal-6918bc8f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'destr';
import 'scule';
import 'klona';
import 'unenv/runtime/fetch/index';
import 'ohash';
import 'unstorage';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const _sfc_main = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  emits: "closeModal",
  setup(__props, { emit }) {
    useModalStore();
    const name = ref("");
    const organization = ref("");
    const email = ref("");
    const message = ref("");
    const formSubmitted = ref(false);
    useRouter();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimaryButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-transparent p-[10px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4/5 min-h-[50vh] md:min-h-0 md:w-[1060px] md:h-[518px] border-[#B2896B] border z-[1001]" }, _attrs))}><form class="grid grid-cols-1 md:grid-cols-2 gap-6 p-[20px] md:px-[60px] items-start pt-[70px] pb-[42px] bg-[#E2DAD4] h-full"><div class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[5px] md:top-[-30px] right-[5px] md:right-[-3px] cursor-pointer"> Fermer <img${ssrRenderAttr("src", _imports_1)} alt="close btn"></div><div class="md:w-[470px] border-r border-[#B2896B] px-[44px] h-full"><h3 class="font-Merriweather pb-0 text-start text-[24px] leading-7 font-bold tracking-[2.4px] text-[#59493C] mb-[34px]"> Vos Coordonn\xE9es </h3><input type="hidden" name="_append" value="false"><input name="  " tabindex="-1" autocomplete="off" class="hidden w-[100%] h-[37px] border border-[#E1E4E7] drop-shadow-[#B2896B] bg-[#F7F4F2] mb-[5px] py-[9px] px-[14px] text-[#828282] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#828282] focus:outline-none"><input class="inline-block w-[100%] h-[37px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[17px] py-[9px] px-[14px] text-[#828282] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#828282] focus:outline-none drop-shadow-[0_1px_0px_rgba(178,137,107,1)]" id="name" name="name" required type="text" placeholder="Nom Complet"${ssrRenderAttr("value", unref(name))}><input class="inline-block w-[100%] h-[37px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[17px] py-[9px] px-[14px] text-[#828282] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#828282] focus:outline-none drop-shadow-[0_1px_0px_rgba(178,137,107,1)]" id="email" name="email" required type="email" placeholder="Adresse Mail"${ssrRenderAttr("value", unref(email))}><input class="inline-block w-[100%] h-[37px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[17px] py-[9px] px-[14px] text-[#8A97A5] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#8A97A5] focus:outline-none drop-shadow-[0_1px_0px_rgba(178,137,107,1)]" id="telephone" name="telephone" required type="text" placeholder="T\xE9l\xE9phone"${ssrRenderAttr("value", unref(organization))}><div class="flex flex-col md:flex-row gap-y-1 md:gap-0 md:justify-between items-center"><span style="${ssrRenderStyle(unref(formSubmitted) ? null : { display: "none" })}" class="text-[#4C6061] font-semibold text-base tracking-[1.6px] absolute bottom-[60px]">Message envoy\xE9 avec succ\xE8s. </span></div></div><div class="md:w-[470px] px-[44px] h-full"><h3 class="font-Merriweather pb-8 md:pb-0 text-start text-[24px] leading-7 font-bold tracking-[2.4px] text-[#59493C] mb-[34px]"> Votre Message </h3><div><textarea class="inline-block w-[100%] h-[228px] border border-[#E1E4E7] bg-[#F7F4F2] mb-[10px] px-[14px] pt-3 text-[#8A97A5] font-Roboto text-sm md:text-base leading-[19px] placeholder:text-[#8A97A5] focus:outline-none resize-none" id="message" name="message" required type="text">${ssrInterpolate(unref(message))}</textarea><button type="submit" class="ml-auto mt-[34px] block">`);
      _push(ssrRenderComponent(_component_PrimaryButton, { "button-text": "Envoyer" }, null, _parent));
      _push(`</button></div></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContactForm-b5a81a9f.mjs.map
