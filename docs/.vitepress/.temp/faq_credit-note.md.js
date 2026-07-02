import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Credit note","description":"","frontmatter":{"title":"Credit note","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["credit note","create credit note","issue credit","credit invoice","creditnota","creditnota aanmaken","gutschrift erstellen","note de credit","avoir"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel an invoice instead?","How does a credit note affect my VAT?","How do I find the original invoice?"]}},"headers":[],"relativePath":"faq/credit-note.md","filePath":"faq/credit-note.md"}');
const _sfc_main = { name: "faq/credit-note.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To create a credit note:</p><ol><li>Open the original invoice you want to credit</li><li>Click &quot;Create credit note / correction&quot; on the detail page</li><li>MyCompanyDesk creates a complete, finalized credit note in one step: every line from the original is negated and the credit note gets the next number in your sequence</li><li>Send the credit note to the customer</li></ol><p>You cannot adjust the amounts during creation; sent documents are locked, so the credit note always mirrors the original exactly. For a partial correction, create the full credit note first and then issue a new invoice for the correct amount.</p><p>Tip: Because you create the credit note from the original invoice, the two documents match exactly and your records stay consistent.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/credit-note.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const creditNote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  creditNote as default
};
