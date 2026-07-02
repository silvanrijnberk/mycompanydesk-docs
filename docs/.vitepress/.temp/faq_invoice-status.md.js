import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice status","description":"","frontmatter":{"title":"Invoice status","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["invoice status","invoice statuses","what do invoice statuses mean","draft sent paid","invoice lifecycle","factuurstatus","factuur statussen","rechnungsstatus","statut facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I mark an invoice as paid?","How do I send a reminder?","How do I cancel an invoice?"]}},"headers":[],"relativePath":"faq/invoice-status.md","filePath":"faq/invoice-status.md"}');
const _sfc_main = { name: "faq/invoice-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Invoice statuses explained: • Draft - not finalized yet, fully editable • Open - finalized but not sent/paid yet • Sent - delivered to the customer, awaiting payment • Overdue - due date passed and still unpaid • Paid - payment recorded • Canceled - voided and no longer collectible</p><p>Tip: Use invoice filters to focus on Open and Overdue first.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/invoice-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceStatus as default
};
