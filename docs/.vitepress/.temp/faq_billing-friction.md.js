import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Billing and subscription help","description":"","frontmatter":{"title":"Billing and subscription help","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["billing friction","reduce billing","billing errors","invoice errors","reduce errors","facturatiefouten","facturatie fouten","rechnungsfehler","fehler reduzieren","erreurs facturation"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I set up customer profiles?","How do I preview invoices before sending?"]}},"headers":[],"relativePath":"faq/billing-friction.md","filePath":"faq/billing-friction.md"}');
const _sfc_main = { name: "faq/billing-friction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To reduce invoice entry mistakes in the app:</p><ol><li>Open Customers and complete the billing email, address, VAT number, and default payment terms for the customer</li><li>Reuse that saved customer record when creating the invoice instead of retyping the details</li><li>Preview the invoice before sending so you can verify the saved customer data, line items, and PDF layout</li><li>If the wrong data keeps appearing, update the customer record or company settings first, then create or refresh the draft invoice</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/billing-friction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billingFriction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billingFriction as default
};
