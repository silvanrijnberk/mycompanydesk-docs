import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create expense","description":"","frontmatter":{"title":"Create expense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create expense","new expense","add expense","log expense","record expense","track expense","uitgave toevoegen","nieuwe uitgave","uitgave aanmaken","ausgabe hinzufugen","wie erstelle ich eine ausgabe","ajouter depense","comment creer une depense"],"actions":[{"label":"Create expense","to":"/expenses/new"}],"follow_up":["How do I upload a receipt?","How do I categorize expenses?","How do I mark an expense as paid?"]}},"headers":[],"relativePath":"faq/create-expense.md","filePath":"faq/create-expense.md"}');
const _sfc_main = { name: "faq/create-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Here&#39;s how to add an expense:</p><ol><li>Go to Expenses and click &quot;Add&quot;</li><li>Enter the supplier, category, description, amount, and date</li><li>Save the expense so the record is created</li><li>If you want to attach a receipt, open the saved expense and use &quot;Upload Receipt&quot; on the detail page</li></ol><p>Tip: Receipt upload happens after the expense is saved, not on the new-expense form itself.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/create-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createExpense as default
};
