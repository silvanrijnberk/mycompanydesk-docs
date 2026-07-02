import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Convert a quote to an invoice","description":"","frontmatter":{"title":"Convert a quote to an invoice","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["convert quote to invoice","create invoice from quote","quote to invoice","accept quote invoice","offerte omzetten factuur","offerte naar factuur","angebot in rechnung","devis en facture","convertir cotizacion factura","converter proposta fatura","converti preventivo fattura"],"actions":[{"label":"Open quotes","to":"/quotes"},{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["Does conversion overwrite the quote?","How do I set invoice due date after conversion?","How do I send the invoice?"]}},"headers":[],"relativePath":"de/faq/convert-quote-to-invoice.md","filePath":"de/faq/convert-quote-to-invoice.md"}');
const _sfc_main = { name: "de/faq/convert-quote-to-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So wandelst du ein Angebot in eine Rechnung um:</p><ol><li>Oeffne die Angebotsdetailseite</li><li>Klicke auf „Rechnung aus Angebot erstellen&quot;</li><li>Es wird ein neuer Rechnungsentwurf mit kopierten Daten erstellt</li><li>Faelligkeit und Zahlungsbedingungen pruefen</li><li>Speichern und senden</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/convert-quote-to-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const convertQuoteToInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  convertQuoteToInvoice as default
};
