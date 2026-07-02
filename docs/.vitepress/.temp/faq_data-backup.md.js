import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Data backup","description":"","frontmatter":{"title":"Data backup","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["backup data","data backup","export backup","save my data","download everything","gegevens backup","data opslaan","datensicherung","sauvegarde donnees","telecharger donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I export data for my accountant?","How do I import data?"]}},"headers":[],"relativePath":"faq/data-backup.md","filePath":"faq/data-backup.md"}');
const _sfc_main = { name: "faq/data-backup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To back up your data:</p><ol><li>Go to Settings → &quot;Gegevens downloaden&quot; (download your data)</li><li>Download CSV exports for invoices, customers, and expenses, or the full backup available there</li><li>Confirm the downloaded files contain the records you need</li></ol><p>CSV exports are available from the Starter plan. If you back up regularly, pick a fixed moment, for example after closing each quarter.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/data-backup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataBackup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataBackup as default
};
