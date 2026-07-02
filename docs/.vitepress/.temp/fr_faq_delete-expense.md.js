import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Supprimer une dépense","description":"","frontmatter":{"title":"Supprimer une dépense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete expense","remove expense","trash expense","erase expense","uitgave verwijderen","uitgave wissen","hoe verwijder ik een uitgave","ausgabe loschen","wie losche ich eine ausgabe","supprimer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I edit an expense instead?","How do I export my expense data?"]}},"headers":[],"relativePath":"fr/faq/delete-expense.md","filePath":"fr/faq/delete-expense.md"}');
const _sfc_main = { name: "fr/faq/delete-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour supprimer une dépense :</p><ol><li>Ouvrez la dépense depuis votre liste de dépenses</li><li>Dans la barre latérale, faites défiler jusqu&#39;à la section « Zone de danger »</li><li>Cliquez sur « Supprimer »</li><li>Confirmez la suppression</li></ol><p>La suppression se fait par étapes. Supprimer une dépense active l&#39;archive d&#39;abord, la supprimer à nouveau depuis les Archives la déplace vers la Corbeille, et la supprimer depuis la Corbeille est définitif. Jusqu&#39;à cette dernière étape, vous pouvez toujours restaurer la dépense depuis la vue Archives ou Corbeille. Attention : sélectionner des dépenses dans la liste et y utiliser l&#39;action groupée Supprimer les supprime définitivement tout de suite.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/delete-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteExpense as default
};
