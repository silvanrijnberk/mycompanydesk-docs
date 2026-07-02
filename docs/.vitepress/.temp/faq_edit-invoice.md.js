import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit invoice","description":"","frontmatter":{"title":"Edit invoice","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["edit invoice","change invoice","modify invoice","update invoice","correct invoice","fix invoice","factuur bewerken","factuur wijzigen","factuur aanpassen","hoe bewerk ik een factuur","rechnung bearbeiten","wie bearbeite ich eine rechnung","modifier facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel a sent invoice?","How do I duplicate an invoice?","How do I change the invoice date?"]}},"headers":[],"relativePath":"faq/edit-invoice.md","filePath":"faq/edit-invoice.md"}');
const _sfc_main = { name: "faq/edit-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To edit an invoice:</p><ol><li>Open the invoice from the list</li><li>Click &quot;Edit&quot;; this is available while the invoice is a draft or finalized but not yet sent</li><li>Make your changes to line items, customer, dates, or terms</li><li>Save the updated invoice</li></ol><p>Once an invoice has been sent or emailed, or is paid or overdue, it is locked and can no longer be edited. Cancel it and create a new one, or use &quot;Create credit note / correction&quot; for corrections.</p><p>Tip: Need to fix a mistake on a sent invoice? A credit note plus a new invoice keeps your numbering and VAT records clean.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/edit-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editInvoice as default
};
