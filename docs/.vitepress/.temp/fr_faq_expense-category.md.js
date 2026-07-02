import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Catégorie de dépense","description":"","frontmatter":{"title":"Catégorie de dépense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["expense category","categorize expense","expense categories","which category","change category","uitgave categorie","categorie wijzigen","ausgabe kategorie","categorie depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["Which expenses are tax deductible?","How do I create a new expense?","How do I view expenses by category?"]}},"headers":[],"relativePath":"fr/faq/expense-category.md","filePath":"fr/faq/expense-category.md"}');
const _sfc_main = { name: "fr/faq/expense-category.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour définir ou modifier une catégorie de dépense :</p><ol><li>Ouvrez la dépense en mode édition</li><li>Trouvez le menu déroulant « Catégorie »</li><li>Sélectionnez l&#39;une des six catégories standard : Frais généraux, Frais de bureau, Frais de véhicule et déplacements, Téléphone et internet, Frais de représentation ou Achats et matériaux</li><li>Enregistrez la dépense</li></ol><p>Les six catégories standard suivent la déclaration fiscale néerlandaise, afin que votre comptabilité corresponde à votre déclaration. Vous pouvez aussi ajouter vos propres catégories via la roue dentée des réglages sur la page Dépenses. Utilisez les catégories de façon cohérente afin que les filtres, listes et rapports restent faciles à vérifier.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/expense-category.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseCategory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseCategory as default
};
