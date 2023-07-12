import __nuxt_component_0 from './TheHeader-37726bca.mjs';
import _sfc_main$1 from './TermsOfUse-fe558663.mjs';
import _sfc_main$2 from './TheFooter-4244cc01.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { u as useModalStore } from './modal-6918bc8f.mjs';
import '../../handlers/renderer.mjs';
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
import './nuxt-link-744fccd2.mjs';
import '../server.mjs';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import './close-ce70289b.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const modalStore = useModalStore();
    const openTermsModal = () => {
      modalStore.termsModalVisible = true;
      modalStore.backDropVisible = true;
    };
    const closeModal = () => {
      modalStore.backDropVisible = false;
      modalStore.termsModalVisible = false;
      modalStore.modalVisible = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = __nuxt_component_0;
      const _component_TermsOfUse = _sfc_main$1;
      const _component_TheFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_TermsOfUse, {
        style: unref(modalStore).termsModalVisible ? null : { display: "none" },
        onCloseModal: closeModal
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle(unref(modalStore).backDropVisible ? null : { display: "none" })}" class="fixed top-0 left-0 bottom-0 right-0 h-full bg-[#2C2E2F] z-[1000]"></div>`);
      _push(ssrRenderComponent(_component_TheFooter, { onOpenModal: openTermsModal }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-c0d2f237.mjs.map
