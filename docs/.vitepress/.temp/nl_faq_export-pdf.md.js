import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Exporteren naar PDF","description":"","frontmatter":{"title":"Exporteren naar PDF","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["export pdf","download pdf","print invoice","pdf invoice","generate pdf","pdf export","pdf downloaden","factuur afdrukken","factuur downloaden","rechnung herunterladen","telecharger pdf"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open logo and colour","to":"/settings/uiterlijk"},{"label":"Open invoice design","to":"/settings/factuurontwerp"}],"follow_up":["How do I change the PDF style?","How do I send an invoice by email?"]}},"headers":[],"relativePath":"nl/faq/export-pdf.md","filePath":"nl/faq/export-pdf.md"}');
const _sfc_main = { name: "nl/faq/export-pdf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo exporteer of download je een PDF:</p><ol><li>Open de factuur vanuit de lijst</li><li>Klik op de PDF-voorbeeld- of downloadknop</li><li>De PDF gebruikt je logo, kleur en opmaak uit Instellingen → &quot;Logo en kleur&quot; en Instellingen → &quot;Factuurontwerp&quot;</li></ol><p>Tip: Stel je logo en huisstijlkleur in via Instellingen → &quot;Logo en kleur&quot;, en kies de opmaak, kleuren en het lettertype van je facturen via Instellingen → &quot;Factuurontwerp&quot;.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/export-pdf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exportPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exportPdf as default
};
