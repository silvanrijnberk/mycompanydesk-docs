import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customer payment history","description":"","frontmatter":{"title":"Customer payment history","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer payment history","payment history","customer invoices","customer payments","betalingsgeschiedenis","klant facturen bekijken","zahlungshistorie","historique paiements client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send a payment reminder?","How do I view overdue invoices?","How do I edit customer details?"]}},"headers":[],"relativePath":"faq/customer-payment-history.md","filePath":"faq/customer-payment-history.md"}');
const _sfc_main = { name: "faq/customer-payment-history.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To view a customer&#39;s payment history:</p><ol><li>Open Customers and select the customer</li><li>Check the &quot;Recent invoices&quot; card on the customer profile; it shows each invoice&#39;s number, date, total, and status</li><li>Open an invoice from that card for the payment details, such as when and how it was paid</li></ol><p>The invoice detail page is where the full payment information lives; the customer profile gives you the quick status overview.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/customer-payment-history.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerPaymentHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerPaymentHistory as default
};
