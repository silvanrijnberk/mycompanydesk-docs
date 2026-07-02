import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Import data","description":"","frontmatter":{"title":"Import data","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["import data","import csv","import customers","import invoices","bulk import","upload data","data importeren","gegevens importeren","daten importieren","importer donnees"],"actions":[],"follow_up":["How do I export my data?","How do I add customers manually?"]}},"headers":[],"relativePath":"nl/faq/import-data.md","filePath":"nl/faq/import-data.md"}');
const _sfc_main = { name: "nl/faq/import-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om gegevens te importeren in de app:</p><ol><li>Ga naar Mijn account → Export &amp; back-up</li><li>Klik op &quot;Importeren vanuit CSV&quot;</li><li>Kies het gegevenstype dat je wilt importeren</li><li>Download het CSV-sjabloon om het vereiste formaat te zien</li><li>Vul je gegevens in, upload het bestand en bevestig de preview</li></ol><p>Tip: Start met een kleine testimport om het formaat te controleren voordat je grotere datasets importeert.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/import-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const importData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  importData as default
};
