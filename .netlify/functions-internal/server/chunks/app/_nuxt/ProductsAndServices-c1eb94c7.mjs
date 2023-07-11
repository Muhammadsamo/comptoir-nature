import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import _sfc_main$1 from './ServiceDetailsModal-750f5421.mjs';
import { u as useHead } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useModalStore } from './modal-6918bc8f.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import './close-ce70289b.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + publicAssetsURL("productsAndServices/servicesicon.svg");
const _sfc_main = {
  __name: "ProductsAndServices",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Produits And Services",
      meta: [
        {
          name: "description",
          content: "Chez Comptoir Nature, nous estimons que chaque client est unique, et par cons\xE9quent, votre espace devrait l'\xEAtre aussi. Nous travaillons en \xE9troite collaboration avec vous pour comprendre vos personnalit\xE9s et besoins, proposant des produits qui refl\xE8tent qui vous \xEAtes et ce que vous ch\xE9rissez. Que ce soit pour embellir un int\xE9rieur ou un ext\xE9rieur, notre \xE9quipe est l\xE0 pour vous conseiller et vous guider. Pour aller plus loin dans cette qu\xEAte de l'harmonie parfaite, notre responsable se rend \xE0 domicile, afin de vous aider \xE0 cr\xE9er un univers o\xF9 r\xE8gne s\xE9r\xE9nit\xE9 et bien-\xEAtre. Venez d\xE9couvrir chez Comptoir Nature un monde o\xF9 l'art de vivre et l'art de l'habitat se rejoignent, pour un int\xE9rieur \xE0 votre image."
        }
      ]
    });
    const modalStore = useModalStore();
    const activeModal = ref("");
    const isActive = (modal) => {
      return activeModal.value === modal;
    };
    const closeModal = () => {
      activeModal.value = "";
      modalStore.backDropVisible = false;
      modalStore.modalVisible = false;
    };
    const products = [
      {
        productTitle: "Meubles"
      },
      {
        productTitle: "Tissus"
      },
      {
        productTitle: "Art de la Table"
      },
      {
        productTitle: "Luminaires"
      },
      {
        productTitle: "Article de D\xE9coration"
      }
    ];
    const services = [
      {
        serviceTitle: "Listes de Mariages",
        serviceDesc: "Nous proposons un service d'entretien de piscines irr\xE9prochable et adapt\xE9 \xE0 vos besoins. Que vous ayez besoin d'un nettoyage r\xE9gulier ou d'une maintenance saisonni\xE8re, notre \xE9quipe d'experts utilise les derni\xE8res technologies et les meilleures pratiques pour garantir que votre piscine reste propre, s\xFBre et pr\xEAte \xE0 l'usage. "
      },
      {
        serviceTitle: "Conseil en D\xE9coration",
        serviceDesc: "Nous proposons un service d'entretien de piscines irr\xE9prochable et adapt\xE9 \xE0 vos besoins. Que vous ayez besoin d'un nettoyage r\xE9gulier ou d'une maintenance saisonni\xE8re, notre \xE9quipe d'experts utilise les derni\xE8res technologies et les meilleures pratiques pour garantir que votre piscine reste propre, s\xFBre et pr\xEAte \xE0 l'usage. "
      },
      {
        serviceTitle: "Livraisons",
        serviceDesc: "Nous proposons un service d'entretien de piscines irr\xE9prochable et adapt\xE9 \xE0 vos besoins. Que vous ayez besoin d'un nettoyage r\xE9gulier ou d'une maintenance saisonni\xE8re, notre \xE9quipe d'experts utilise les derni\xE8res technologies et les meilleures pratiques pour garantir que votre piscine reste propre, s\xFBre et pr\xEAte \xE0 l'usage. "
      },
      {
        serviceTitle: "Parking",
        serviceDesc: "Nous proposons un service d'entretien de piscines irr\xE9prochable et adapt\xE9 \xE0 vos besoins. Que vous ayez besoin d'un nettoyage r\xE9gulier ou d'une maintenance saisonni\xE8re, notre \xE9quipe d'experts utilise les derni\xE8res technologies et les meilleures pratiques pour garantir que votre piscine reste propre, s\xFBre et pr\xEAte \xE0 l'usage. "
      },
      {
        serviceTitle: "Paiement en 4 Fois",
        serviceDesc: "Nous proposons un service d'entretien de piscines irr\xE9prochable et adapt\xE9 \xE0 vos besoins. Que vous ayez besoin d'un nettoyage r\xE9gulier ou d'une maintenance saisonni\xE8re, notre \xE9quipe d'experts utilise les derni\xE8res technologies et les meilleures pratiques pour garantir que votre piscine reste propre, s\xFBre et pr\xEAte \xE0 l'usage. "
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceDetailsModal = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-160px)] lg:overflow-hidden" }, _attrs))} data-v-a1aec63b><div class="hidden lg:grid grid-cols-3 items-center gap-x-[10px] justify-between h-full mx-auto min-h-[calc(100vh-160px)] max-w-[1440px]" data-v-a1aec63b> &gt; <div class="col-start-1 col-end-2 justify-self-end w-[300px]" data-v-a1aec63b><h1 class="text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]" data-v-a1aec63b> Nos Produits </h1><ul class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px]" data-v-a1aec63b><!--[-->`);
      ssrRenderList(products, (p) => {
        _push(`<li class="leading-8 py-[6px] border-b border-[#B2896B]" data-v-a1aec63b>${ssrInterpolate(p.productTitle)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="col-start-2 col-end-3 text-[#E9E3DEBF] border-[#B2896B] border-[2px] max-w-[340px] justify-self-center" data-v-a1aec63b><p class="py-8 px-7 text-[12px] leading-[20px]" data-v-a1aec63b> Chez Comptoir Nature, nous estimons que chaque client est unique, et par cons\xE9quent, votre espace devrait l&#39;\xEAtre aussi. Nous travaillons en \xE9troite collaboration avec vous pour comprendre vos personnalit\xE9s et besoins, proposant des produits qui refl\xE8tent qui vous \xEAtes et ce que vous ch\xE9rissez. Que ce soit pour embellir un int\xE9rieur ou un ext\xE9rieur, notre \xE9quipe est l\xE0 pour vous conseiller et vous guider. Pour aller plus loin dans cette qu\xEAte de l&#39;harmonie parfaite, notre responsable se rend \xE0 domicile, afin de vous aider \xE0 cr\xE9er un univers o\xF9 r\xE8gne s\xE9r\xE9nit\xE9 et bien-\xEAtre. Venez d\xE9couvrir chez Comptoir Nature un monde o\xF9 l&#39;art de vivre et l&#39;art de l&#39;habitat se rejoignent, pour un int\xE9rieur \xE0 votre image. </p></div><div class="col-start-3 w-[300px]" data-v-a1aec63b><h1 class="text-[#E9E3DE] font-Merriweather tracking-[2.4px] text-[24px] leading-[45px] border-b border-[#B2896B]" data-v-a1aec63b> Nos Services </h1><ul class="text-[#B2896B] font-bold tracking-[1.6px] text-[16px] leading-9" data-v-a1aec63b><!--[-->`);
      ssrRenderList(services, (s) => {
        _push(`<li class="leading-8 py-[6px] border-b border-[#B2896B] flex items-center justify-between cursor-pointer" data-v-a1aec63b>${ssrInterpolate(s.serviceTitle)} <span class="inline-block" data-v-a1aec63b><img${ssrRenderAttr("src", _imports_0)} data-v-a1aec63b></span></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="px-[11px] lg:hidden" data-v-a1aec63b><h1 class="text-[#E9E3DE] pt-16 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]" data-v-a1aec63b> Nos Coordonn\xE9es </h1><p class="text-[#B2896B] mt-1 border-t border-[#B2896B] text-[16px] py-2 leading-7 text-center" data-v-a1aec63b> 00 Rue Ferdinand Forrest <br data-v-a1aec63b> (en face de La Palette) <br data-v-a1aec63b>97122 Baie-Mahault (Jarry) </p><h2 class="text-[#7B9698] border-y text-center text-[16px] leading-9 tracking-[1.6px] font-bold border-[#B2896B]" data-v-a1aec63b> T\xE9l. 05 90 38 93 05 </h2><h3 class="text-[#E9E3DE] mt-20 font-Merriweather text-center text-[24px] leading-[45px] tracking-[2.4px]" data-v-a1aec63b> Nos Horaires </h3><p class="text-[#B2896B] mt-1 py-2 border-y border-[#B2896B] text-[16px] leading-7 text-center" data-v-a1aec63b> Lundi au vendredi: 9h \xE0 18h <br data-v-a1aec63b> Samedi: 9h \xE0 13h <br data-v-a1aec63b> Dimanche: Ferm\xE9 </p></div>`);
      _push(ssrRenderComponent(_component_ServiceDetailsModal, {
        style: unref(modalStore).modalVisible && isActive("Listes de Mariages") ? null : { display: "none" },
        onCloseModal: closeModal,
        serviceHeading: services[0].serviceTitle,
        serviceDesc: services[0].serviceDesc
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServiceDetailsModal, {
        style: unref(modalStore).modalVisible && isActive("Conseil en D\xE9coration") ? null : { display: "none" },
        onCloseModal: closeModal,
        serviceHeading: services[1].serviceTitle,
        serviceDesc: services[1].serviceDesc
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServiceDetailsModal, {
        style: unref(modalStore).modalVisible && isActive("Livraisons") ? null : { display: "none" },
        onCloseModal: closeModal,
        serviceHeading: services[2].serviceTitle,
        serviceDesc: services[2].serviceDesc
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServiceDetailsModal, {
        style: unref(modalStore).modalVisible && isActive("Parking") ? null : { display: "none" },
        onCloseModal: closeModal,
        serviceHeading: services[3].serviceTitle,
        serviceDesc: services[3].serviceDesc
      }, null, _parent));
      _push(ssrRenderComponent(_component_ServiceDetailsModal, {
        style: unref(modalStore).modalVisible && isActive("Paiement en 4 Fois") ? null : { display: "none" },
        onCloseModal: closeModal,
        serviceHeading: services[4].serviceTitle,
        serviceDesc: services[4].serviceDesc
      }, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ProductsAndServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductsAndServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1aec63b"]]);

export { ProductsAndServices as default };
//# sourceMappingURL=ProductsAndServices-c1eb94c7.mjs.map
