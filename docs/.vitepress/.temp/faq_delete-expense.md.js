import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Delete an expense","description":"","frontmatter":{"title":"Delete an expense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete expense","remove expense","trash expense","erase expense","uitgave verwijderen","uitgave wissen","hoe verwijder ik een uitgave","ausgabe loschen","wie losche ich eine ausgabe","supprimer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I edit an expense instead?","How do I export my expense data?"]}},"headers":[],"relativePath":"faq/delete-expense.md","filePath":"faq/delete-expense.md"}');
const _sfc_main = { name: "faq/delete-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To delete an expense:</p><ol><li>Open the expense from your expense list</li><li>In the sidebar, scroll to the &quot;Danger Zone&quot; section</li><li>Click &quot;Delete&quot;</li><li>Confirm the deletion</li></ol><p>Deletion happens in stages. Deleting an active expense archives it first, deleting it again from the Archive moves it to the Trash, and deleting it from the Trash removes it permanently. You can restore an expense from the Archive or Trash view at any point before the final step. Note: selecting expenses in the list and using the bulk Delete action removes them permanently right away.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/delete-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteExpense as default
};
