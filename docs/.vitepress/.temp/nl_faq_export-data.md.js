import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gegevens exporteren","description":"","frontmatter":{"title":"Gegevens exporteren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["export data","download data","export csv","export excel","download report","data exporteren","gegevens downloaden","daten exportieren","exporter donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I view reports?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"nl/faq/export-data.md","filePath":"nl/faq/export-data.md"}');
const _sfc_main = { name: "nl/faq/export-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om gegevens te exporteren:</p><ol><li>Ga naar Instellingen → &quot;Gegevens downloaden&quot; voor de snelle exportknoppen</li><li>Download daar CSV-exports voor facturen, klanten en uitgaven, of de volledige back-up</li><li>Gebruik exports op sectieniveau in Facturen, Uitgaven of Rapportages als je maar één dataset nodig hebt</li></ol><p>CSV-exports zijn beschikbaar vanaf het Starter-abonnement. Kies de export die past bij de pagina of set gegevens die je nodig hebt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/export-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exportData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exportData as default
};
