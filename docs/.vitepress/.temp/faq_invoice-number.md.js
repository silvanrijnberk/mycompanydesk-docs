import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice number","description":"","frontmatter":{"title":"Invoice number","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["invoice number","change invoice number","invoice numbering","set invoice number","numbering format","factuurnummer","factuurnummering","rechnungsnummer","numero facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Reset invoice numbering","to":"/settings/opzeggen"}],"follow_up":["How do I set up my company settings?","How do I change the PDF style?","How do I create my first invoice?"]}},"headers":[],"relativePath":"faq/invoice-number.md","filePath":"faq/invoice-number.md"}');
const _sfc_main = { name: "faq/invoice-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Invoice numbers are assigned automatically:</p><ol><li>Create an invoice; MyCompanyDesk numbers it sequentially, the way the Dutch tax authority expects</li><li>There is no numbering format to configure</li><li>Need a specific number on a draft? Open the invoice in the form and click &quot;Set custom number&quot; in the sidebar</li><li>To start the sequence over, go to Settings → &quot;Account opzeggen&quot; and use &quot;Reset invoice numbering&quot;</li></ol><p>Tip: Drafts do not have a final number yet. Delete test drafts before finalizing and your sequence stays without gaps.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/invoice-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceNumber as default
};
