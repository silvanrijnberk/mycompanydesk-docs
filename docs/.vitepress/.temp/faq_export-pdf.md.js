import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Export to PDF","description":"","frontmatter":{"title":"Export to PDF","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["export pdf","download pdf","print invoice","pdf invoice","generate pdf","pdf export","pdf downloaden","factuur afdrukken","factuur downloaden","rechnung herunterladen","telecharger pdf"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open logo and colour","to":"/settings/uiterlijk"},{"label":"Open invoice design","to":"/settings/factuurontwerp"}],"follow_up":["How do I change the PDF style?","How do I send an invoice by email?"]}},"headers":[],"relativePath":"faq/export-pdf.md","filePath":"faq/export-pdf.md"}');
const _sfc_main = { name: "faq/export-pdf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To export or download a PDF:</p><ol><li>Open the invoice from the list</li><li>Click the PDF preview or download button</li><li>The PDF uses your logo, colour, and layout from Settings → &quot;Logo en kleur&quot; and Settings → &quot;Factuurontwerp&quot;</li></ol><p>Tip: Set your logo and brand colour at Settings → &quot;Logo en kleur&quot;, and pick the layout, colours, and font of your invoices at Settings → &quot;Factuurontwerp&quot;.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/export-pdf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exportPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exportPdf as default
};
