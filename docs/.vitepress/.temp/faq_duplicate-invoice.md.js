import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Duplicate an invoice","description":"","frontmatter":{"title":"Duplicate an invoice","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["duplicate invoice","copy invoice","clone invoice","reuse invoice","invoice template","factuur kopieren","factuur dupliceren","rechnung kopieren","dupliquer facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set up recurring invoices?","How do I edit an invoice?","How do I change the PDF template?"]}},"headers":[],"relativePath":"faq/duplicate-invoice.md","filePath":"faq/duplicate-invoice.md"}');
const _sfc_main = { name: "faq/duplicate-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To duplicate an invoice:</p><ol><li>Open the invoice you want to copy</li><li>In the sidebar, find the &quot;Actions&quot; section</li><li>Click &quot;Duplicate&quot;</li><li>A new draft is created with the same line items and customer</li><li>Adjust the date, amounts, or details as needed and save</li></ol><p>Tip: This is great for similar invoices to the same customer, it saves re-entering all line items.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/duplicate-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duplicateInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  duplicateInvoice as default
};
