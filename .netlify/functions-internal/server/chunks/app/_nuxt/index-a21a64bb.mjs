import { mergeProps, withCtx, createVNode, useSSRContext, defineComponent, ref, createElementBlock } from 'vue';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import _sfc_main$1 from './PrimaryButton-6d63f26b.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_PrimaryButton = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-160px)]" }, _attrs))}><div class="grid lg:grid-cols-2 min-h-[calc(100vh-160px)] items-center gap-[100px] max-w-[1440px] mx-auto"><div class="col-start-1 border border-[#B2896B] px-[3px] pt-[5px] pb-[0] justify-self-end lg:max-h-[367px] lg:max-w-[510px]">`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div><div class="col-start-2 font-Montserrat text-[#E9E3DE] max-w-[414px]"><h1 class="font-Merriweather text-[28px] leading-[32px] tracking-[2.8px]"> Votre Boutique de Meubles et D\xE9coration </h1><h2 class="text-[#B2896B] text-[16px] leading-[30px] font-bold tracking-[1.6px] border-y border-[#B2896B] py-2 mt-[21px]"> \xE0 Jarry, en Guadeloupe </h2><p class="text-base mt-[21px]"> Bienvenue chez Comptoir Nature, votre sanctuaire d\xE9di\xE9 \xE0 l&#39;art du meuble et de la d\xE9coration en Guadeloupe. Plongez dans notre univers unique o\xF9 chaque produit a une \xE2me et o\xF9 le bien-\xEAtre s&#39;exprime \xE0 travers l&#39;art de l&#39;habitat. </p><div class="flex gap-[22px] mt-[54px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    alt: "contact page link"
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
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://www.instagram.com/deco_comptoirnature",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PrimaryButton, {
          buttonText: "Instagram",
          class: "ml-22px"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PrimaryButton, {
            buttonText: "Instagram",
            class: "ml-22px"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-a21a64bb.mjs.map
