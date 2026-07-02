import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Back-up van je gegevens","description":"","frontmatter":{"title":"Back-up van je gegevens","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["backup data","data backup","export backup","save my data","download everything","gegevens backup","data opslaan","datensicherung","sauvegarde donnees","telecharger donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I export data for my accountant?","How do I import data?"]}},"headers":[],"relativePath":"nl/faq/data-backup.md","filePath":"nl/faq/data-backup.md"}');
const _sfc_main = { name: "nl/faq/data-backup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een back-up van je gegevens te maken:</p><ol><li>Ga naar Instellingen → &quot;Gegevens downloaden&quot;</li><li>Download CSV-exports voor facturen, klanten en uitgaven, of de volledige back-up die daar beschikbaar is</li><li>Controleer of de gedownloade bestanden de gegevens bevatten die je nodig hebt</li></ol><p>CSV-exports zijn beschikbaar vanaf het Starter-abonnement. Maak je regelmatig een back-up, kies dan een vast moment, bijvoorbeeld na het afsluiten van elk kwartaal.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/data-backup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataBackup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataBackup as default
};
