import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Search expenses","description":"","frontmatter":{"title":"Search expenses","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["search expenses","find expense","filter expenses","sort expenses","uitgave zoeken","uitgaven filteren","ausgabe suchen","chercher depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I filter by category?","How do I create an expense?"]}},"headers":[],"relativePath":"faq/search-expenses.md","filePath":"faq/search-expenses.md"}');
const _sfc_main = { name: "faq/search-expenses.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To search and filter expenses:</p><ol><li>Go to Expenses</li><li>Use the search bar to find by supplier, description, or category</li><li>Use filters to narrow by category or payment status</li><li>Sort by date, supplier, category, status, or amount</li></ol><p>Combine the search bar with the category filter when the list is long.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/search-expenses.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchExpenses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  searchExpenses as default
};
