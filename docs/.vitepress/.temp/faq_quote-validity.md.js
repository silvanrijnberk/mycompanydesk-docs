import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quote validity","description":"","frontmatter":{"title":"Quote validity","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote validity","valid until quote","quote expiry","quote expiration","how long quote valid","quote valid days","geldigheid offerte","offerte geldig","angebotsgultigkeit","devis validite","validez devis","validez cotizacion","validade proposta"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How does quote numbering work?","How do I edit valid-until per quote?","How do I preview the final PDF?"]}},"headers":[],"relativePath":"faq/quote-validity.md","filePath":"faq/quote-validity.md"}');
const _sfc_main = { name: "faq/quote-validity.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Quote validity is a single setting:</p><ol><li>Go to Settings → &quot;Facturen en offertes&quot;</li><li>Under &quot;Hoe lang blijft een offerte geldig?&quot; (how long does a quote stay valid?), pick 2 weeks, 1 month, or 2 months</li><li>Changes save automatically</li></ol><p>New quotes get their valid-until date from this choice. Once that date passes, the quote shows as Expired in your quote list.</p><p>Tip: The Expired status appears automatically, you do not have to update quotes yourself.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/quote-validity.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteValidity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteValidity as default
};
