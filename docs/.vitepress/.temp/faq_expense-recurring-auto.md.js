import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatic recurring expenses","description":"","frontmatter":{"title":"Automatic recurring expenses","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["auto log expense","recurring expense auto","automatic expense","schedule expense","automatische uitgave","terugkerende uitgave automatisch","automatische ausgabe","depense automatique"],"actions":[{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I stop a recurring expense?","How do I edit a recurring expense?","How do I categorize expenses?"]}},"headers":[],"relativePath":"faq/expense-recurring-auto.md","filePath":"faq/expense-recurring-auto.md"}');
const _sfc_main = { name: "faq/expense-recurring-auto.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To automatically create recurring expenses:</p><ol><li>Go to Recurring Expenses → click &quot;New&quot;</li><li>Enter the vendor, amount, and category</li><li>Set the frequency and start date</li><li>Save the recurring expense</li><li>Review the recurring list to confirm when entries will be generated</li></ol><p>This answer is limited to how the recurring-expense feature works in the app.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/expense-recurring-auto.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseRecurringAuto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseRecurringAuto as default
};
