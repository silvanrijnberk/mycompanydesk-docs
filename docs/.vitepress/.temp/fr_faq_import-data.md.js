import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Import data","description":"","frontmatter":{"title":"Import data","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["import data","import csv","import customers","import invoices","bulk import","upload data","data importeren","gegevens importeren","daten importieren","importer donnees"],"actions":[],"follow_up":["How do I export my data?","How do I add customers manually?"]}},"headers":[],"relativePath":"fr/faq/import-data.md","filePath":"fr/faq/import-data.md"}');
const _sfc_main = { name: "fr/faq/import-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour importer des données dans l application :</p><ol><li>Accédez à Mon compte → Export &amp; sauvegarde</li><li>Cliquez sur « Importer depuis un CSV »</li><li>Choisissez le type de données à importer</li><li>Téléchargez le modèle CSV pour voir le format requis</li><li>Remplissez vos données, téléversez le fichier et confirmez l aperçu</li></ol><p>Astuce : commencez par un petit import de test pour vérifier le format avant d importer de gros volumes.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/import-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const importData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  importData as default
};
