import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quote status","description":"","frontmatter":{"title":"Quote status","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote status","quote statuses","quote lifecycle","draft open sent canceled","offerte status","angebotsstatus","statut devis","estado cotizacion","status proposta"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I mark a quote as finalized?","How do I mark as sent?","How do I convert to invoice?"]}},"headers":[],"relativePath":"faq/quote-status.md","filePath":"faq/quote-status.md"}');
const _sfc_main = { name: "faq/quote-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Quote statuses explained: • Draft: still editable, not sent to the customer yet • Sent: delivered to the customer • Accepted: the customer agreed to the quote • Declined: the customer turned the quote down • Expired: the valid-until date has passed; this is shown automatically</p><p>When you convert an accepted quote to an invoice, the quote stays Accepted and gets a &quot;Converted to invoice&quot; marker.</p><p>Tip: Use the quote list filters to check drafts and expired quotes first.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/quote-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteStatus as default
};
