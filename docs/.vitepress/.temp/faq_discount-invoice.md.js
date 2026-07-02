import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Apply a discount to an invoice","description":"","frontmatter":{"title":"Apply a discount to an invoice","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["discount","add discount","invoice discount","percentage discount","reduce price","korting","korting toevoegen","rabatt","rabatt gewahren","remise","reduction"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set payment terms?","How do I create a credit note?","How do I preview the invoice PDF?"]}},"headers":[],"relativePath":"faq/discount-invoice.md","filePath":"faq/discount-invoice.md"}');
const _sfc_main = { name: "faq/discount-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To add a discount to an invoice:</p><ol><li>Edit or create an invoice</li><li>Add a separate line item with a negative amount for the discount</li><li>The total reflects the reduced amount</li><li>Save the invoice</li></ol><p>There is no separate discount field; a negative line item is how you apply a discount in MyCompanyDesk.</p><p>Tip: Clearly label the discount line (e.g. &quot;Early payment discount -5%&quot;) so the customer understands the deduction.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/discount-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discountInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  discountInvoice as default
};
