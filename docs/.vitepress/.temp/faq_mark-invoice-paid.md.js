import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mark an invoice as paid","description":"","frontmatter":{"title":"Mark an invoice as paid","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["mark invoice paid","invoice paid","mark as paid","record payment","received payment","payment received","factuur betaald","betaald markeren","factuur als betaald","rechnung als bezahlt","marquer payee"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I record a partial payment?","How do I send a payment reminder?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"faq/mark-invoice-paid.md","filePath":"faq/mark-invoice-paid.md"}');
const _sfc_main = { name: "faq/mark-invoice-paid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To mark an invoice as paid:</p><ol><li>Open the invoice from the list</li><li>Click &quot;Mark as paid&quot; in the invoice header; one click and the status updates to Paid</li><li>Want to record the payment date, method, or a reference? Use &quot;Record Payment&quot; in the Payment section instead</li></ol><p>Tip: If the status does not update, refresh the list and verify the payment was saved on the detail page.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/mark-invoice-paid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markInvoicePaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markInvoicePaid as default
};
