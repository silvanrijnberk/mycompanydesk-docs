import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find archived expenses","description":"","frontmatter":{"title":"Find archived expenses","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are archived expenses","where can i find archived expenses","where do i find archived expenses","expense archive","archived expenses","gearchiveerde uitgaven","uitgaven archief","archivierte ausgaben","archivierten ausgaben","ausgaben archiv","depenses archivees","mes depenses archivees","archives depenses"],"actions":[{"label":"Open expenses","to":"/expenses?view=archived"}],"follow_up":["Where do I find deleted expenses?","How do I search expenses?","How do I categorize expenses?"]}},"headers":[],"relativePath":"faq/find-archived-expenses.md","filePath":"faq/find-archived-expenses.md"}');
const _sfc_main = { name: "faq/find-archived-expenses.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Archived expenses are in Expenses -&gt; Archive. If you are already in the expense list, switch to the Archive view. Deleted expenses are in Trash.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-archived-expenses.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findArchivedExpenses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findArchivedExpenses as default
};
