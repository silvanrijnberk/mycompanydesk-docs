import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Daten exportieren","description":"","frontmatter":{"title":"Daten exportieren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["export data","download data","export csv","export excel","download report","data exporteren","gegevens downloaden","daten exportieren","exporter donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I view reports?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"de/faq/export-data.md","filePath":"de/faq/export-data.md"}');
const _sfc_main = { name: "de/faq/export-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So exportieren Sie Daten:</p><ol><li>Gehen Sie zu Einstellungen → „Daten herunterladen&quot; für die schnellen Exportaktionen</li><li>Laden Sie dort CSV-Exporte für Rechnungen, Kunden und Ausgaben oder das Vollbackup herunter</li><li>Nutzen Sie Exporte auf Bereichsebene in Rechnungen, Ausgaben oder Berichten, wenn Sie nur einen Datensatz brauchen</li></ol><p>CSV-Exporte sind ab dem Starter-Tarif verfügbar. Wählen Sie den Export, der zu der Seite oder dem Datensatz passt, den Sie benötigen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/export-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exportData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exportData as default
};
