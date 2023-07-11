import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import '../server.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + publicAssetsURL("header/logo.svg");
const _imports_1 = "" + publicAssetsURL("header/instaLogo.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-[#2D2D2D] pl-[63px] pr-[86px] pt-[28px] lg:pt-[45px] h-[100px] flex justify-center lg:justify-between w-screen lg:fixed" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "logo",
    to: "/",
    alt: "homepage"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: _imports_0 })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><nav class="hidden lg:flex min-w-[400px]"><ul class="text-[#E9E3DE] flex justify-between items-center w-full">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "py-[6px]",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li${_scopeId}>Accueil</li>`);
      } else {
        return [
          createVNode("li", null, "Accueil")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "py-[6px]",
    to: "/ProductsAndServices",
    alt: "products page"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Produits and Services`);
      } else {
        return [
          createTextVNode("Produits and Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "py-[6px]",
    to: "/Contact",
    alt: "contact page"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://www.instagram.com/deco_comptoirnature",
    target: "_blank",
    alt: "instagram link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="instagram icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: "instagram icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=TheHeader-37726bca.mjs.map
