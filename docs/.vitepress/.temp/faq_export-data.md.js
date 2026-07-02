import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Export data","description":"","frontmatter":{"title":"Export data","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["export data","download data","export csv","export excel","download report","data exporteren","gegevens downloaden","daten exportieren","exporter donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I view reports?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"faq/export-data.md","filePath":"faq/export-data.md"}');
const _sfc_main = { name: "faq/export-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To export data:</p><ol><li>Go to Settings → &quot;Gegevens downloaden&quot; (download your data) for the quick export buttons</li><li>Download CSV exports for invoices, customers, and expenses, or the full backup available there</li><li>Use section-level exports in Invoices, Expenses, or Reports when you only need one dataset</li></ol><p>CSV exports are available from the Starter plan. Choose the export that matches the page or record set you need.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/export-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exportData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exportData as default
};
