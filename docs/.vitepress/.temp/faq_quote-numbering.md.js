import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quote numbering","description":"","frontmatter":{"title":"Quote numbering","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote number","quote numbering","change quote number","quote format","offerte nummer","offertenummer","angebotsnummer","numerotation devis","numero cotizacion","numero proposta","numero preventivo"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I set quote validity?","How do I edit a quote number safely?","How do I create a new quote?"]}},"headers":[],"relativePath":"faq/quote-numbering.md","filePath":"faq/quote-numbering.md"}');
const _sfc_main = { name: "faq/quote-numbering.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Quote numbers are assigned automatically:</p><ol><li>Create a quote; MyCompanyDesk gives it the next number in your sequence</li><li>There is no numbering format to configure, the sequence stays neat and sequential on its own</li><li>Need a specific number on a draft? Open the quote in the form and click &quot;Set custom number&quot; in the sidebar</li></ol><p>Tip: Once a quote has been sent it is locked, including its number, so set a custom number while the document is still a draft.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/quote-numbering.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteNumbering = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteNumbering as default
};
