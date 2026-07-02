import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice preview","description":"","frontmatter":{"title":"Invoice preview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["preview invoice","invoice preview","preview before sending","check invoice","preview pdf","factuur voorbeeld","factuur bekijken","rechnungsvorschau","apercu facture","previsualiser facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I change the PDF template?","How do I send the invoice by email?","How do I edit the invoice?"]}},"headers":[],"relativePath":"nl/faq/invoice-preview.md","filePath":"nl/faq/invoice-preview.md"}');
const _sfc_main = { name: "nl/faq/invoice-preview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een factuur te bekijken vóór verzending:</p><ol><li>Open de factuur</li><li>Klik op het &quot;Voorbeeld&quot; of PDF-icoon</li><li>Een voorbeeld van de factuur-PDF wordt weergegeven</li><li>Controleer de lay-out, bedragen en klantgegevens</li><li>Sluit het voorbeeld en maak eventueel aanpassingen, of ga verder met verzenden</li></ol><p>Tip: Bekijk altijd een voorbeeld vóór verzending om opmaakfouten of tikfouten te ontdekken.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/invoice-preview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoicePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoicePreview as default
};
