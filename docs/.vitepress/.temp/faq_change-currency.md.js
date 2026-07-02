import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change currency","description":"","frontmatter":{"title":"Change currency","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change currency","set currency","currency settings","euro dollar","valuta wijzigen","valuta instellen","wahrung andern","changer devise"],"follow_up":["How do I invoice in a different currency?","How do I change my language?"]}},"headers":[],"relativePath":"faq/change-currency.md","filePath":"faq/change-currency.md"}');
const _sfc_main = { name: "faq/change-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>There is no currency setting to change. MyCompanyDesk is euro-only by design: all invoices, quotes, expenses, and reports use EUR, and this cannot be changed in My Account or anywhere else.</p><p>See <a href="/faq/multi-currency">Multi currency</a> for how this works when you bill customers abroad.</p><p>Tip: You can still send invoices in English, German, or French; only the amounts are always in euros.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/change-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCurrency as default
};
