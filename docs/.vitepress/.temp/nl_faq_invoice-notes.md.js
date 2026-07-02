import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice notes","description":"","frontmatter":{"title":"Invoice notes","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["invoice notes","add note","invoice memo","add comment","internal note","factuur notitie","opmerking toevoegen","rechnungsnotiz","note de facture","ajouter remarque"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I add line items?","How do I preview the invoice?","How do I change the PDF style?"]}},"headers":[],"relativePath":"nl/faq/invoice-notes.md","filePath":"nl/faq/invoice-notes.md"}');
const _sfc_main = { name: "nl/faq/invoice-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om notities toe te voegen aan een factuur:</p><ol><li>Open de factuur in bewerkingsmodus</li><li>Gebruik de sectie &quot;Notities&quot; onder de factuurregels</li><li>Voeg de tekst toe die je bij deze factuur wilt bewaren</li><li>Sla de factuur op</li></ol><p>Tip: Gebruik notities voor betaalinstructies, projectverwijzingen of voorwaarden die alleen voor deze factuur gelden.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/invoice-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceNotes as default
};
