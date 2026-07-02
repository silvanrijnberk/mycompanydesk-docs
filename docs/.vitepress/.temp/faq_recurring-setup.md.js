import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Recurring setup","description":"","frontmatter":{"title":"Recurring setup","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["set up recurring","recurring invoice","recurring expense","automate invoice","automatic invoice","monthly invoice","terugkerende factuur","terugkerende uitgave","wiederkehrende rechnung","facture recurrente"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I stop a recurring invoice?","How do I edit a recurring item?","How do I change the frequency?"]}},"headers":[],"relativePath":"faq/recurring-setup.md","filePath":"faq/recurring-setup.md"}');
const _sfc_main = { name: "faq/recurring-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To set up a recurring invoice:</p><ol><li>Go to Recurring Invoices and click &quot;Add recurring invoice&quot;</li><li>Select the customer and add line items</li><li>Set the frequency and start date</li><li>Choose whether each invoice is emailed automatically or created as a draft</li><li>Save and review the recurring list to confirm the schedule</li></ol><p>There is no end date field. When you want to stop, open the recurring invoice and click &quot;Pause&quot;; the same toggle shows &quot;Activate&quot; so you can resume later.</p><p>Tip: Recurring expenses work the same way. Open Recurring Expenses and follow the same flow there.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/recurring-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recurringSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  recurringSetup as default
};
