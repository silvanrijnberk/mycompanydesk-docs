import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Search invoices","description":"","frontmatter":{"title":"Search invoices","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["search invoices","find invoice","filter invoices","sort invoices","search invoice","look up invoice","factuur zoeken","facturen filteren","rechnung suchen","chercher facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I filter by status?","How do I find a customer?"]}},"headers":[],"relativePath":"nl/faq/search-invoices.md","filePath":"nl/faq/search-invoices.md"}');
const _sfc_main = { name: "nl/faq/search-invoices.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een specifieke factuur te zoeken:</p><ol><li>Ga naar Facturen</li><li>Gebruik de zoekbalk om het factuurnummer, de klantnaam of het bedrag te typen</li><li>Gebruik filters voor status (Concept, Verzonden, Betaald, Achterstallig)</li><li>Klik op de factuur om deze te openen</li></ol><p>Tip: Combineer zoeken met statusfilters voor de snelste resultaten.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/search-invoices.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchInvoices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  searchInvoices as default
};
