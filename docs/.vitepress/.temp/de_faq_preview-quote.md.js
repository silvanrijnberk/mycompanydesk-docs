import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Preview a quote","description":"","frontmatter":{"title":"Preview a quote","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["preview quote","quote preview","preview proposal","view quote pdf","print quote","offerte voorbeeld","offerte preview","angebot vorschau","apercu devis","previsualizar cotizacion","visualizar proposta"],"actions":[{"label":"Open quotes","to":"/quotes"},{"label":"Open Branding & Documents","to":"/company?section=brandingDocuments"}],"follow_up":["How do I change quote branding?","How do I send the quote after preview?","How do I edit the quote?"]}},"headers":[],"relativePath":"de/faq/preview-quote.md","filePath":"de/faq/preview-quote.md"}');
const _sfc_main = { name: "de/faq/preview-quote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So pruefst, druckst oder laedst du ein Angebot als PDF herunter:</p><ol><li>Oeffne die Angebotsdetailseite</li><li>Klicke auf „Vorschau&quot;</li><li>Nutze Drucken oder PDF-Download</li><li>Gehe zurueck fuer Anpassungen</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/preview-quote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const previewQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  previewQuote as default
};
