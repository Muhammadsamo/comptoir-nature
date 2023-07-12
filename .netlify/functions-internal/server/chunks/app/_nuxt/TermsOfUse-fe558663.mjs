import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = "" + publicAssetsURL("termsOfUse/termsofuse.png");
const _sfc_main = {
  __name: "TermsOfUse",
  __ssrInlineRender: true,
  emits: ["openModal"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-[2px] bg-transparent absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 p-[10px] border-[#635243] z-[100002]" }, _attrs))}><div class="md:flex justify-between z-[10001] w-[90%] md:w-[767px] md:h-[400px] bg-[#E9E3DE] border-[2px] border-[#CDC0B6] pl-[40px] pr-[20px] pb-[50px]"><img class="h-[110%] -translate-x-[34px] translate-y-[7px]"${ssrRenderAttr("src", _imports_0)}><div><div class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[5px] md:top-[-30px] right-[5px] md:right-[-3px] cursor-pointer"> Fermer <img${ssrRenderAttr("src", _imports_1)} alt="close btn"></div><h1 class="text-[#59493C] font-Merriweather font-bold text-[20px] md:text-[24px] leading-5 my-7"> Condition G\xE9n\xE9rales et Confidentialit\xE9 </h1><div class="overflow-y-scroll max-h-[260px] pr-[42px]"><p class="text-[#2C2E2F] text-[12px] md:text-[16px] leading-5"> Nous proposons un service d&#39;entretien de piscines irr\xE9prochable et adapt\xE9 \xE0 vos besoins. Que vous ayez besoin d&#39;un nettoyage r\xE9gulier ou d&#39;une maintenance saisonni\xE8re, notre \xE9quipe d&#39;experts utilise les derni\xE8res technologies et les meilleures pratiques pour garantir que votre piscine reste propre, s\xFBre et pr\xEAte \xE0 l&#39;usage. </p><h2 class="text-[#59493C] font-Merriweather font-bold text-[20px] tracking-widest my-6"> Heading 1 </h2><p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5"> By accessing and using our Website, you accept and agree to be bound by the terms and provision of this agreement. Also, when using this Website\u2019s services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service. </p><h3 class="text-[#59493C] font-Merriweather font-bold text-[18px] tracking-widest my-6"> Heading 2 </h3><p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5"> Nous sommes d\xE9di\xE9s \xE0 pr\xE9server la beaut\xE9 et la fonctionnalit\xE9 de votre piscine, pour que vous puissiez toujours profiter d&#39;une eau cristalline et d&#39;un environnement de baignade sans soucis. Optez pour la tranquillit\xE9 d&#39;esprit avec notre service d&#39;entretien de piscines chez Net Pool. </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TermsOfUse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TermsOfUse-fe558663.mjs.map
