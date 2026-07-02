import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VAT on invoice","description":"","frontmatter":{"title":"VAT on invoice","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["vat on invoice","add vat to invoice","tax rate invoice","change vat rate","btw op factuur","btw tarief","mwst auf rechnung","tva sur facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open VAT settings","to":"/settings/btw"}],"follow_up":["How do I change the default VAT rate?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"faq/vat-on-invoice.md","filePath":"faq/vat-on-invoice.md"}');
const _sfc_main = { name: "faq/vat-on-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To set VAT on an invoice:</p><ol><li>Edit or create an invoice</li><li>For each line item, set the VAT rate (e.g. 21%, 9%, 0%)</li><li>The system calculates VAT automatically</li><li>VAT totals appear in the invoice summary</li></ol><p>New invoice lines default to your standard VAT rate. To change that default, go to Settings → &quot;BTW&quot; and update the default rate. The rate is always 0% when the invoice uses the VAT reverse charge toggle.</p><p>Tip: Invoicing a business customer in the EU? Use the &quot;VAT Reverse Charge (BTW verlegd)&quot; toggle instead of picking 0% yourself.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/vat-on-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vatOnInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vatOnInvoice as default
};
