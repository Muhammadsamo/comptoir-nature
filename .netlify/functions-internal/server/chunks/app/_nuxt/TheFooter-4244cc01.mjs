import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
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

const _sfc_main = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  emits: ["openModal"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "min-h-[62px] bg-[#9A6F50] pl-[63px] pr-[86px] hidden lg:grid fixed bottom-0 w-screen" }, _attrs))}><div class="flex justify-between items-center h-[62px]"><p class="text-[12px] leading-[28px] tracking-[1.2px] font-bold text-[#2D2D2D]"><span class="text-[#364444]">ComptoirNature.net</span> - Tous droits r\xE9serv\xE9s. Site internet r\xE9alis\xE9 par `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.vancleem.com",
        target: "_blank",
        class: "text-[#364444]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` vanCleem.com`);
          } else {
            return [
              createTextVNode(" vanCleem.com")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p class="text-[12px] leading-[28px] tracking-[1.2px] font-bold text-[#364444] cursor-pointer"> Condition G\xE9n\xE9rales et Confidentialit\xE9 </p></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TheFooter-4244cc01.mjs.map
