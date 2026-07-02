import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Import data","description":"","frontmatter":{"title":"Import data","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["import data","import csv","import customers","import invoices","bulk import","upload data","data importeren","gegevens importeren","daten importieren","importer donnees"],"actions":[],"follow_up":["How do I export my data?","How do I add customers manually?"]}},"headers":[],"relativePath":"faq/import-data.md","filePath":"faq/import-data.md"}');
const _sfc_main = { name: "faq/import-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To import data into the application:</p><ol><li>Go to My Account → Data</li><li>Click &quot;Import from CSV&quot;</li><li>Choose the data type you want to import</li><li>Download the template CSV to see the required format</li><li>Fill in your data, upload the file, and confirm the preview</li></ol><p>Tip: Start with a small test import to verify the format before importing large datasets.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/import-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const importData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  importData as default
};
