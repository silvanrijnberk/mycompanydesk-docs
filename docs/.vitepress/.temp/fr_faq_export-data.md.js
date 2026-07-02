import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Exporter des données","description":"","frontmatter":{"title":"Exporter des données","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["export data","download data","export csv","export excel","download report","data exporteren","gegevens downloaden","daten exportieren","exporter donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I view reports?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"fr/faq/export-data.md","filePath":"fr/faq/export-data.md"}');
const _sfc_main = { name: "fr/faq/export-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour exporter des données :</p><ol><li>Allez dans Paramètres → « Télécharger les données » pour les boutons d&#39;export rapide</li><li>Téléchargez-y les exports CSV des factures, des clients et des dépenses, ou la sauvegarde complète</li><li>Utilisez les exports au niveau des sections dans Factures, Dépenses ou Rapports lorsque vous n&#39;avez besoin que d&#39;un seul jeu de données</li></ol><p>Les exports CSV sont disponibles à partir du plan Starter. Choisissez l&#39;export qui correspond à la page ou au jeu d&#39;enregistrements dont vous avez besoin.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/export-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exportData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exportData as default
};
