import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice preview","description":"","frontmatter":{"title":"Invoice preview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["preview invoice","invoice preview","preview before sending","check invoice","preview pdf","factuur voorbeeld","factuur bekijken","rechnungsvorschau","apercu facture","previsualiser facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I change the PDF template?","How do I send the invoice by email?","How do I edit the invoice?"]}},"headers":[],"relativePath":"de/faq/invoice-preview.md","filePath":"de/faq/invoice-preview.md"}');
const _sfc_main = { name: "de/faq/invoice-preview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Um eine Rechnung vor dem Versand in der Vorschau anzuzeigen:</p><ol><li>Öffne die Rechnung</li><li>Klicke auf das &quot;Vorschau&quot;- oder PDF-Symbol</li><li>Eine Vorschau der Rechnungs-PDF wird angezeigt</li><li>Prüfe Layout, Beträge und Kundendaten</li><li>Schließe die Vorschau und nimm Änderungen vor, oder fahre mit dem Versand fort</li></ol><p>Tipp: Überprüfe immer die Vorschau vor dem Versand, um Formatierungsfehler oder Tippfehler zu erkennen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/invoice-preview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoicePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoicePreview as default
};
