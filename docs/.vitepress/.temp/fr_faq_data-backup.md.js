import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sauvegarde des données","description":"","frontmatter":{"title":"Sauvegarde des données","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["backup data","data backup","export backup","save my data","download everything","gegevens backup","data opslaan","datensicherung","sauvegarde donnees","telecharger donnees"],"actions":[{"label":"Open data download","to":"/settings/downloaden"}],"follow_up":["How do I export data for my accountant?","How do I import data?"]}},"headers":[],"relativePath":"fr/faq/data-backup.md","filePath":"fr/faq/data-backup.md"}');
const _sfc_main = { name: "fr/faq/data-backup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour sauvegarder vos données :</p><ol><li>Allez dans Paramètres → « Télécharger les données »</li><li>Téléchargez les exports CSV pour les factures, les clients et les dépenses, ou la sauvegarde complète disponible à cet endroit</li><li>Vérifiez que les fichiers téléchargés contiennent bien les enregistrements dont vous avez besoin</li></ol><p>Les exports CSV sont disponibles à partir du plan Starter. Si vous sauvegardez régulièrement, choisissez un moment fixe, par exemple après la clôture de chaque trimestre.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/data-backup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataBackup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataBackup as default
};
