import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit an expense","description":"","frontmatter":{"title":"Edit an expense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["edit expense","change expense","modify expense","update expense","correct expense","uitgave bewerken","uitgave wijzigen","ausgabe bearbeiten","modifier depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I change the expense category?","How do I upload a receipt?"]}},"headers":[],"relativePath":"fr/faq/edit-expense.md","filePath":"fr/faq/edit-expense.md"}');
const _sfc_main = { name: "fr/faq/edit-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour modifier une dépense :</p><ol><li>Ouvrez la dépense depuis la liste</li><li>Cliquez sur « Modifier »</li><li>Mettez à jour le fournisseur, montant, catégorie, date ou notes</li><li>Enregistrez vos modifications</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/edit-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editExpense as default
};
