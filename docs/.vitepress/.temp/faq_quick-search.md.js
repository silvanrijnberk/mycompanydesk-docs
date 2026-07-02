import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quick search","description":"","frontmatter":{"title":"Quick search","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["quick search","search everything","global search","find anything","search bar","snel zoeken","overal zoeken","schnellsuche","recherche rapide","recherche globale"],"actions":[],"follow_up":["How do I filter invoices by status?","How do I find a customer?","How do I search expenses?"]}},"headers":[],"relativePath":"faq/quick-search.md","filePath":"faq/quick-search.md"}');
const _sfc_main = { name: "faq/quick-search.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To quickly search across everything:</p><ol><li>Use the search functionality in each section (Invoices, Expenses, Customers)</li><li>Type a keyword - results filter in real-time</li><li>Search works on names, numbers, amounts, and descriptions</li></ol><p>Tip: Use specific terms for better results. For example, search by invoice number (&quot;2024-001&quot;), customer name, or amount.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/quick-search.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quickSearch as default
};
