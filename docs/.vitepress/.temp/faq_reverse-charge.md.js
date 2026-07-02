import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reverse charge","description":"","frontmatter":{"title":"Reverse charge","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["reverse charge","reverse charge invoice","eu invoice","intracommunautair","intracommunity","btw verlegd","reverse charge rechnung","autoliquidation","intra-community"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer VAT number?","How does reverse charge affect my VAT return?","How do I preview an invoice?"]}},"headers":[],"relativePath":"faq/reverse-charge.md","filePath":"faq/reverse-charge.md"}');
const _sfc_main = { name: "faq/reverse-charge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To create a reverse charge (EU) invoice:</p><ol><li>Go to Invoices → New Invoice</li><li>Select your EU customer and check that their VAT number is filled in on the customer record</li><li>Turn on the &quot;VAT Reverse Charge (BTW verlegd)&quot; toggle on the invoice form; MyCompanyDesk suggests it automatically for EU business customers</li><li>The VAT on all line items switches to 0% automatically, no manual changes needed</li><li>Preview the invoice to confirm the reverse charge note, then send it</li></ol><p>Tip: The toggle is always available on the invoice form; you do not need to enable anything in your settings first.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/reverse-charge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reverseCharge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reverseCharge as default
};
