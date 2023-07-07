import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("productsAndServices/servicesicon.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-160px)]" }, _attrs))}><div class="hidden lg:grid grid-cols-3 items-center gap-[70px] justify-between h-[100%] px-[50px] mx-auto max-w-[1440px]"> &gt; <div class="col-start-1 col-end-2 justify-self-end w-[300px]"><h1 class="text-[#E9E3DE] font-[Merriweather] tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"> Nos Produits </h1><ul class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-8 font-Montserrat"><li class="border-b border-[#B2896B]">Meubles</li><li class="border-b border-[#B2896B]">Tissus</li><li class="border-b border-[#B2896B]">Art de la Table</li><li class="border-b border-[#B2896B]">Luminaires</li><li class="border-b border-[#B2896B]">Article de D\xE9coration</li></ul></div><div class="col-start-2 col-end-3 text-[#E9E3DE] border-[#B2896B] border-[2px] max-w-[340px] justify-self-center"><p class="py-8 px-7 text-[12px] leading-[20px]"> Chez Comptoir Nature, nous estimons que chaque client est unique, et par cons\xE9quent, votre espace devrait l&#39;\xEAtre aussi. Nous travaillons en \xE9troite collaboration avec vous pour comprendre vos personnalit\xE9s et besoins, proposant des produits qui refl\xE8tent qui vous \xEAtes et ce que vous ch\xE9rissez. Que ce soit pour embellir un int\xE9rieur ou un ext\xE9rieur, notre \xE9quipe est l\xE0 pour vous conseiller et vous guider. Pour aller plus loin dans cette qu\xEAte de l&#39;harmonie parfaite, notre responsable se rend \xE0 domicile, afin de vous aider \xE0 cr\xE9er un univers o\xF9 r\xE8gne s\xE9r\xE9nit\xE9 et bien-\xEAtre. Venez d\xE9couvrir chez Comptoir Nature un monde o\xF9 l&#39;art de vivre et l&#39;art de l&#39;habitat se rejoignent, pour un int\xE9rieur \xE0 votre image. </p></div><div class="col-start-3 w-[300px]"><h1 class="text-[#E9E3DE] font-[Merriweather] tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]"> Nos Services </h1><ul class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-9 font-Montserrat"><li class="border-b border-[#B2896B] flex items-center justify-between"> Listes de Mariages<span class="inline-block"><img${ssrRenderAttr("src", _imports_0)}></span></li><li class="border-b border-[#B2896B] flex items-center justify-between"> Conseil en D\xE9coration<span class="inline-block"><img${ssrRenderAttr("src", _imports_0)}></span></li><li class="border-b border-[#B2896B] flex items-center justify-between"> Livraisons<span class="inline-block"><img${ssrRenderAttr("src", _imports_0)}></span></li><li class="border-b border-[#B2896B] flex items-center justify-between"> Parking<span class="inline-block"><img${ssrRenderAttr("src", _imports_0)}></span></li><li class="border-b border-[#B2896B] flex items-center justify-between"> Paiement en 4 Fois<span class="inline-block"><img${ssrRenderAttr("src", _imports_0)}></span></li></ul></div></div><div class="px-[11px] lg:hidden"><h1 class="text-[#E9E3DE] pt-16 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"> Nos Coordonn\xE9es </h1><p class="text-[#B2896B] mt-1 font-Montserrat border-t border-[#B2896B] text-[16px] py-2 leading-7 text-center"> 00 Rue Ferdinand Forrest <br> (en face de La Palette) <br>97122 Baie-Mahault (Jarry) </p><h2 class="text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-Montserrat font-bold border-[#B2896B]"> T\xE9l. 05 90 38 93 05 </h2><h3 class="text-[#E9E3DE] mt-20 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]"> Nos Horaires </h3><p class="text-[#B2896B] mt-1 font-Montserrat py-2 border-y border-[#B2896B] text-[16px] leading-7 text-center"> Lundi au vendredi: 9h \xE0 18h <br> Samedi: 9h \xE0 13h <br> Dimanche: Ferm\xE9 </p></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ProductsAndServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductsAndServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProductsAndServices as default };
//# sourceMappingURL=ProductsAndServices-06e05657.mjs.map
