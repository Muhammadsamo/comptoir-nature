import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import 'node:url';
import 'ipx';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-160px)] bg-[#2D2D2D]" }, _attrs))}><div class="grid grid-cols-3 items-center gap-[70px] justify-between lg:max-w-[1440px] h-[100%] px-[50px] lg:mx-auto"><div class="col-start-1 col-end-2 justify-self-end w-[300px]"><h1 class="text-[#E9E3DE] font-[Merriweather] tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"> Nos Produits </h1><ul class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-8 font-Montserrat"><li class="border-b border-[#B2896B]">Meubles</li><li class="border-b border-[#B2896B]">Tissus</li><li class="border-b border-[#B2896B]">Art de la Table</li><li class="border-b border-[#B2896B]">Luminaires</li><li class="border-b border-[#B2896B]">Article de D\xE9coration</li></ul></div><div class="col-start-2 col-end-3 text-[#E9E3DE] border-[#B2896B] border-[2px] max-w-[340px] justify-self-center"><p class="py-8 px-7"> Chez Comptoir Nature, nous estimons que chaque client est unique, et par cons\xE9quent, votre espace devrait l&#39;\xEAtre aussi. Nous travaillons en \xE9troite collaboration avec vous pour comprendre vos personnalit\xE9s et besoins, proposant des produits qui refl\xE8tent qui vous \xEAtes et ce que vous ch\xE9rissez. Que ce soit pour embellir un int\xE9rieur ou un ext\xE9rieur, notre \xE9quipe est l\xE0 pour vous conseiller et vous guider. Pour aller plus loin dans cette qu\xEAte de l&#39;harmonie parfaite, notre responsable se rend \xE0 domicile, afin de vous aider \xE0 cr\xE9er un univers o\xF9 r\xE8gne s\xE9r\xE9nit\xE9 et bien-\xEAtre. Venez d\xE9couvrir chez Comptoir Nature un monde o\xF9 l&#39;art de vivre et l&#39;art de l&#39;habitat se rejoignent, pour un int\xE9rieur \xE0 votre image. </p></div><div class="col-start-3 w-[300px]"><h1 class="text-[#E9E3DE] font-[Merriweather] tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"> Nos Services </h1><ul class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-8 font-Montserrat"><li class="border-b border-[#B2896B]">Listes de Mariages</li><li class="border-b border-[#B2896B]">Conseil en D\xE9coration</li><li class="border-b border-[#B2896B]">Livraisons</li><li class="border-b border-[#B2896B]">Parking</li><li class="border-b border-[#B2896B]">Paiement en 4 Fois</li></ul></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ProductsAndServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductsAndServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProductsAndServices as default };
//# sourceMappingURL=ProductsAndServices-47725baf.mjs.map
