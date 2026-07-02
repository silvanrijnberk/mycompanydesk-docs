import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Multi currency","description":"","frontmatter":{"title":"Multi currency","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["multi currency","different currency","foreign currency","invoice in dollars","invoice in pounds","andere valuta","vreemde valuta","andere wahrung","devise etrangere","dollar invoice","pound invoice"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I set up my company settings?","How do I change my language?"]}},"headers":[],"relativePath":"faq/multi-currency.md","filePath":"faq/multi-currency.md"}');
const _sfc_main = { name: "faq/multi-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>MyCompanyDesk works in euros only. All invoices, quotes, expenses, and reports are in EUR. There is no currency setting and no per-document currency picker; this is a deliberate product choice, not a missing preference.</p><p>If you bill a customer abroad, the invoice is still in euros.</p><p>Tip: Agree with foreign clients up front that you invoice in EUR. They pay the euro amount, and any conversion happens on their side.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/multi-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const multiCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  multiCurrency as default
};
