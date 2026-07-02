import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Import data","description":"","frontmatter":{"title":"Import data","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["import data","import csv","import customers","import invoices","bulk import","upload data","data importeren","gegevens importeren","daten importieren","importer donnees"],"actions":[],"follow_up":["How do I export my data?","How do I add customers manually?"]}},"headers":[],"relativePath":"de/faq/import-data.md","filePath":"de/faq/import-data.md"}');
const _sfc_main = { name: "de/faq/import-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So importierst du Daten in die App:</p><ol><li>Gehe zu Mein Konto → Export &amp; Sicherung</li><li>Klicke auf „Aus CSV importieren&quot;</li><li>Wähle den Datentyp aus, den du importieren willst</li><li>Lade die CSV-Vorlage herunter, um das erforderliche Format zu sehen</li><li>Fülle deine Daten ein, lade die Datei hoch und bestätige die Vorschau</li></ol><p>Tipp: Starte mit einem kleinen Testimport, um das Format zu prüfen, bevor du größere Datensätze importierst.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/import-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const importData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  importData as default
};
