import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mapouter" }, _attrs))} data-v-c5e61671><div class="gmap_canvas" data-v-c5e61671><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=00 Rue Ferdinand Forrest (in front of La Palette) 97122 Baie-Mahault (Jarry)&amp;t=k&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" data-v-c5e61671></iframe><a href="https://2yu.co" data-v-c5e61671>2yu</a><br data-v-c5e61671><a href="https://embedgooglemap.2yu.co/" data-v-c5e61671>html embed google map</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GoogleMap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c5e61671"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=GoogleMap-1e54c878.mjs.map
