import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Créer une dépense","description":"","frontmatter":{"title":"Créer une dépense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create expense","new expense","add expense","log expense","record expense","track expense","uitgave toevoegen","nieuwe uitgave","uitgave aanmaken","ausgabe hinzufugen","wie erstelle ich eine ausgabe","ajouter depense","comment creer une depense"],"actions":[{"label":"Create expense","to":"/expenses/new"}],"follow_up":["How do I upload a receipt?","How do I categorize expenses?","How do I mark an expense as paid?"]}},"headers":[],"relativePath":"fr/faq/create-expense.md","filePath":"fr/faq/create-expense.md"}');
const _sfc_main = { name: "fr/faq/create-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Voici comment ajouter une dépense :</p><ol><li>Allez dans Dépenses et cliquez sur « Ajouter »</li><li>Saisissez le fournisseur, la catégorie, la description, le montant et la date</li><li>Enregistrez la dépense pour créer l&#39;enregistrement</li><li>Ouvrez ensuite la dépense enregistrée si vous voulez utiliser « Téléverser le reçu »</li></ol><p>Astuce : le téléversement du reçu se fait sur la page de détail après l&#39;enregistrement, pas dans le formulaire de nouvelle dépense.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/create-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createExpense as default
};
