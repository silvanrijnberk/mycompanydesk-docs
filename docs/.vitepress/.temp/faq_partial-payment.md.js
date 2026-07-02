import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Partial payment","description":"","frontmatter":{"title":"Partial payment","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["partial payment","record partial payment","half payment","part payment","deposit received","gedeeltelijke betaling","deelbetaling","aanbetaling ontvangen","teilzahlung","paiement partiel","acompte recu"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I mark an invoice as fully paid?","How do I send a reminder for the remaining balance?","How do I view all partially paid invoices?"]}},"headers":[],"relativePath":"faq/partial-payment.md","filePath":"faq/partial-payment.md"}');
const _sfc_main = { name: "faq/partial-payment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To record a partial payment on an invoice:</p><ol><li>Open the invoice from the list</li><li>Click &quot;Record Payment&quot; or the payment action</li><li>Enter the amount received (less than the total)</li><li>Save - the invoice status changes to Partially Paid</li><li>Repeat when additional payments arrive</li></ol><p>Tip: The remaining balance is tracked automatically and appears on the invoice detail page.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/partial-payment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partialPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  partialPayment as default
};
