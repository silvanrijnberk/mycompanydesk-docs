import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rechercher des dépenses","description":"","frontmatter":{"title":"Rechercher des dépenses","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["search expenses","find expense","filter expenses","sort expenses","uitgave zoeken","uitgaven filteren","ausgabe suchen","chercher depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I filter by category?","How do I create an expense?"]}},"headers":[],"relativePath":"fr/faq/search-expenses.md","filePath":"fr/faq/search-expenses.md"}');
const _sfc_main = { name: "fr/faq/search-expenses.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour rechercher et filtrer les dépenses :</p><ol><li>Accédez aux Dépenses</li><li>Utilisez la barre de recherche pour chercher par fournisseur, description ou catégorie</li><li>Utilisez les filtres pour affiner par catégorie ou statut de paiement</li><li>Triez par date, fournisseur, catégorie, statut ou montant</li></ol><p>Combinez la barre de recherche avec le filtre de catégorie quand la liste est longue.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/search-expenses.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchExpenses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  searchExpenses as default
};
