import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import _sfc_main$1 from './PrimaryButton-6d63f26b.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _imports_0 = "" + publicAssetsURL("contact/map-placeholder-image.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PrimaryButton = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-160px)]" }, _attrs))}><div class="grid lg:grid-cols-[2fr 1fr] min-h-[calc(100vh-160px)] items-center gap-[70px] max-w-[1440px] mx-auto"><div class="col-start-1 border border-[#B2896B] p-[10px] justify-self-end"><img${ssrRenderAttr("src", _imports_0)} width="690" height="380" alt="Googale Map"></div><div class="col-start-2 text-[#E9E3DE] max-w-[300px]"><h1 class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px]"> Nos Coordonn\xE9es </h1><p class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]"> 00 Rue Ferdinand Forrest <br> (en face de La Palette) <br> 97122 Baie-Mahault (Jarry) </p><p class="text-[#B2896B] text-[16px] leading-[24px] font-bold tracking-[1.6px] border-b border-[#B2896B] py-2 mt-[8px]"> T\xE9l. 05 90 38 93 05 </p><div class="mt-[17px] w-full">`);
  _push(ssrRenderComponent(_component_PrimaryButton, {
    class: "w-full",
    buttonText: "Formulaire Contact"
  }, null, _parent));
  _push(`</div><h2 class="font-Merriweather text-[24px] leading-[32px] tracking-[2.4px] mt-[35px]"> Nos Horaires </h2><p class="text-[#B2896B] text-[16px] leading-[24px] tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[8px]"> Lundi au vendredi: 9h \xE0 18h <br> Samedi: 9h \xE0 13h <br> Dimanche: Ferm\xE9 </p></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Contact as default };
//# sourceMappingURL=Contact-5d31447c.mjs.map
