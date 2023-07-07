import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    buttonText: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-block min-w-[103px] h-[39px] bg-[#4C6061] py-[9px] px-[18px] text-sm md:text-base text-[#E9E3DE] text-center font-Exo font-bold tracking-widest leading-[22px] cursor-pointer" }, _attrs))}>${ssrInterpolate(__props.buttonText)}</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrimaryButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PrimaryButton-6d63f26b.mjs.map
