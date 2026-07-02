import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit a recurring invoice","description":"","frontmatter":{"title":"Edit a recurring invoice","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["edit recurring","change recurring","update recurring","modify recurring frequency","change frequency","terugkerend bewerken","frequentie wijzigen","wiederkehrend bearbeiten","modifier recurrent"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"}],"follow_up":["How do I stop a recurring invoice?","How do I create a new recurring invoice?"]}},"headers":[],"relativePath":"faq/edit-recurring.md","filePath":"faq/edit-recurring.md"}');
const _sfc_main = { name: "faq/edit-recurring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To edit a recurring invoice or expense:</p><ol><li>Go to Recurring Invoices (or Recurring Expenses)</li><li>Open the recurring item</li><li>Click &quot;Edit&quot;</li><li>Change the amount, frequency, customer, or line items</li><li>Save - future generations will use the updated template</li></ol><p>Note: Changes only affect future invoices/expenses. Previously generated items remain unchanged.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/edit-recurring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editRecurring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editRecurring as default
};
