import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Expense category","description":"","frontmatter":{"title":"Expense category","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["expense category","categorize expense","expense categories","which category","change category","uitgave categorie","categorie wijzigen","ausgabe kategorie","categorie depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["Which expenses are tax deductible?","How do I create a new expense?","How do I view expenses by category?"]}},"headers":[],"relativePath":"faq/expense-category.md","filePath":"faq/expense-category.md"}');
const _sfc_main = { name: "faq/expense-category.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To set or change an expense category:</p><ol><li>Open the expense in edit mode</li><li>Find the &quot;Category&quot; dropdown</li><li>Select one of the six standard categories: Algemene kosten, Kantoorkosten, Autokosten &amp; reizen, Telefoon &amp; internet, Representatiekosten, or Inkoop &amp; materiaal</li><li>Save the expense</li></ol><p>The six standard categories follow the Dutch tax return, so your bookkeeping lines up with your aangifte. You can also add your own categories via the settings gear on the Expenses page. Use categories consistently so filters, lists, and reports stay easy to review.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/expense-category.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseCategory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseCategory as default
};
