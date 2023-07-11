import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    buttonText: String,
    class: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [__props.class, "inline-block bg-[#4C6061] py-[16px] lg:py-[9px] px-[18px] text-[16px] text-[#E9E3DE] text-center font-Merriweather font-bold tracking-[1.6px] cursor-pointer"]
      }, _attrs))}>${ssrInterpolate(__props.buttonText)}</span>`);
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
//# sourceMappingURL=PrimaryButton-370e82ae.mjs.map
