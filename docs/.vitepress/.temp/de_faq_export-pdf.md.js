import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Als PDF exportieren","description":"","frontmatter":{"title":"Als PDF exportieren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["export pdf","download pdf","print invoice","pdf invoice","generate pdf","pdf export","pdf downloaden","factuur afdrukken","factuur downloaden","rechnung herunterladen","telecharger pdf"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open logo and colour","to":"/settings/uiterlijk"},{"label":"Open invoice design","to":"/settings/factuurontwerp"}],"follow_up":["How do I change the PDF style?","How do I send an invoice by email?"]}},"headers":[],"relativePath":"de/faq/export-pdf.md","filePath":"de/faq/export-pdf.md"}');
const _sfc_main = { name: "de/faq/export-pdf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So exportieren oder laden Sie ein PDF herunter:</p><ol><li>Öffnen Sie die Rechnung aus der Liste</li><li>Klicken Sie auf die PDF-Vorschau- oder Download-Schaltfläche</li><li>Das PDF verwendet Logo, Farbe und Layout aus Einstellungen → &quot;Logo und Farbe&quot; und Einstellungen → &quot;Rechnungsdesign&quot;</li></ol><p>Tipp: Hinterlegen Sie Ihr Logo und Ihre Markenfarbe unter Einstellungen → &quot;Logo und Farbe&quot; und wählen Sie Layout, Farben und Schrift Ihrer Rechnungen unter Einstellungen → &quot;Rechnungsdesign&quot;.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/export-pdf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exportPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exportPdf as default
};
