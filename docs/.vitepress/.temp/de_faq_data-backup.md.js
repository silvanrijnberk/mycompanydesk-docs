import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Datensicherung","description":"","frontmatter":{"title":"Datensicherung","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["backup data","data backup","export backup","save my data","download everything","gegevens backup","data opslaan","datensicherung","sauvegarde donnees","telecharger donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I export data for my accountant?","How do I import data?"]}},"headers":[],"relativePath":"de/faq/data-backup.md","filePath":"de/faq/data-backup.md"}');
const _sfc_main = { name: "de/faq/data-backup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So sichern Sie Ihre Daten:</p><ol><li>Gehen Sie zu Einstellungen → „Daten herunterladen&quot;</li><li>Laden Sie CSV-Exporte für Rechnungen, Kunden und Ausgaben oder das dort verfügbare Vollbackup herunter</li><li>Prüfen Sie, ob die heruntergeladenen Dateien die benötigten Datensätze enthalten</li></ol><p>CSV-Exporte sind ab dem Starter-Tarif verfügbar. Wenn Sie regelmäßig sichern, wählen Sie einen festen Zeitpunkt, zum Beispiel nach dem Abschluss jedes Quartals.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/data-backup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataBackup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataBackup as default
};
