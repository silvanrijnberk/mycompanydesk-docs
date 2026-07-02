import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Search invoices","description":"","frontmatter":{"title":"Search invoices","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["search invoices","find invoice","filter invoices","sort invoices","search invoice","look up invoice","factuur zoeken","facturen filteren","rechnung suchen","chercher facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I filter by status?","How do I find a customer?"]}},"headers":[],"relativePath":"de/faq/search-invoices.md","filePath":"de/faq/search-invoices.md"}');
const _sfc_main = { name: "de/faq/search-invoices.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Um eine bestimmte Rechnung zu suchen:</p><ol><li>Gehe zu Rechnungen</li><li>Verwende die Suchleiste, um Rechnungsnummer, Kundenname oder Betrag einzugeben</li><li>Verwende Filter für den Status (Entwurf, Gesendet, Bezahlt, Überfällig)</li><li>Klicke auf die Rechnung, um sie zu öffnen</li></ol><p>Tipp: Kombiniere die Suche mit Statusfiltern für die schnellsten Ergebnisse.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/search-invoices.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchInvoices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  searchInvoices as default
};
