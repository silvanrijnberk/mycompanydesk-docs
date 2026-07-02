import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ajouter un logo","description":"","frontmatter":{"title":"Ajouter un logo","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["add logo","upload logo","change logo","company logo","logo on invoice","logo toevoegen","logo wijzigen","logo uploaden","logo hochladen","ajouter logo"],"actions":[{"label":"Open logo and colour","to":"/settings/uiterlijk"}],"follow_up":["How do I change the PDF template?","How do I set up my company settings?"]}},"headers":[],"relativePath":"fr/faq/add-logo.md","filePath":"fr/faq/add-logo.md"}');
const _sfc_main = { name: "fr/faq/add-logo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour ajouter ou modifier le logo de votre entreprise :</p><ol><li>Allez dans Paramètres → « Logo et couleur »</li><li>Trouvez la section « Logo »</li><li>Cliquez sur « Téléverser » et sélectionnez votre fichier logo (PNG ou JPG recommandé)</li><li>Votre logo apparaîtra sur toutes les factures et tous les documents ; l&#39;aperçu en direct montre immédiatement le résultat</li></ol><p>Conseil : utilisez un logo haute résolution (au moins 300px de large) pour des PDF nets.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/add-logo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addLogo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addLogo as default
};
