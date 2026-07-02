import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mobile access","description":"","frontmatter":{"title":"Mobile access","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["mobile","phone","tablet","mobile app","responsive","on the go","mobiel","telefoon","mobil","handy","acces mobile","telephone","smartphone"],"actions":[],"follow_up":["How do I upload receipts from my phone?","How do I create an invoice on mobile?"]}},"headers":[],"relativePath":"faq/mobile-access.md","filePath":"faq/mobile-access.md"}');
const _sfc_main = { name: "faq/mobile-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To access the app on mobile:</p><ol><li>Open your mobile browser (Safari, Chrome, etc.)</li><li>Navigate to the same URL you use on desktop</li><li>The app is responsive and adapts to your screen size</li><li>You can add it to your home screen for quick access</li></ol><p>Tip: For the best mobile experience, use a modern browser and add the app to your home screen - it works like a native app.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/mobile-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobileAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mobileAccess as default
};
