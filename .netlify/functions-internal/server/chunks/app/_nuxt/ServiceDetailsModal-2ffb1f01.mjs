import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './close-ce70289b.mjs';
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

const _sfc_main = {
  __name: "ServiceDetailsModal",
  __ssrInlineRender: true,
  props: {
    serviceHeading: String,
    serviceDesc: String,
    serviceImage: String
  },
  emits: ["closeModal"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border-[#635243] border-[2px] p-2 z-[1001]" }, _attrs))}><div class="bg-[#E9E3DE] flex w-[90%] min-h-[50vh] md:min-h-0 md:w-[767px] md:h-[227px] z-[1001] pt-[42px] pb-[30px] px-[10px] md:px-[44px]"><img class="w-[192px] h-[208px] -translate-x-[38px] -translate-y-[34px]"${ssrRenderAttr("src", __props.serviceImage)}><div><div class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[5px] md:top-[-30px] right-[5px] md:right-[-3px] cursor-pointer"> Fermer <img${ssrRenderAttr("src", _imports_1)} alt="close btn"></div><h3 class="font-Merriweather text-xl font-bold tracking-widest text-[#59493C]">${ssrInterpolate(__props.serviceHeading)}</h3><p class="font-Montserrat text-[12px] leading-5 text-[#2C2E2F] mt-[19px]">${ssrInterpolate(__props.serviceDesc)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceDetailsModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ServiceDetailsModal-2ffb1f01.mjs.map
