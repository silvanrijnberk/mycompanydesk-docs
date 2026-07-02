import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cancel an invoice","description":"","frontmatter":{"title":"Cancel an invoice","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["cancel invoice","void invoice","annul invoice","reverse invoice","credit note","undo invoice","factuur annuleren","factuur ongedaan","hoe annuleer ik een factuur","rechnung stornieren","wie storniere ich eine rechnung","annuler facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I create a credit note?","How do I delete a draft invoice?","How do I view cancelled invoices?"]}},"headers":[],"relativePath":"faq/cancel-invoice.md","filePath":"faq/cancel-invoice.md"}');
const _sfc_main = { name: "faq/cancel-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To cancel a sent invoice:</p><ol><li>Open the invoice from your invoice list</li><li>In the sidebar, scroll to the &quot;Danger Zone&quot; section</li><li>Click &quot;Mark as Canceled&quot;</li><li>The invoice status changes to Canceled</li></ol><p>If the invoice is already paid or partially paid, open the original invoice and use &quot;Create credit note / correction&quot; instead.</p><p>Tip: Canceling keeps the invoice number in your records; deleting is only possible while a document is still a draft without a number.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/cancel-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cancelInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cancelInvoice as default
};
