import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dupliquer une dépense","description":"","frontmatter":{"title":"Dupliquer une dépense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["duplicate expense","copy expense","clone expense","reuse expense","uitgave kopieren","uitgave dupliceren","ausgabe kopieren","dupliquer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I set up recurring expenses?","How do I edit an expense?"]}},"headers":[],"relativePath":"fr/faq/duplicate-expense.md","filePath":"fr/faq/duplicate-expense.md"}');
const _sfc_main = { name: "fr/faq/duplicate-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour dupliquer une dépense :</p><ol><li>Ouvrez la dépense payée à copier. La duplication n&#39;est disponible que pour les dépenses payées ; une dépense impayée affiche « Marquer comme payé » à la place</li><li>Cliquez sur « Dupliquer » dans l&#39;en-tête, ou utilisez la carte « Actions » dans la barre latérale</li><li>Une nouvelle copie impayée est créée avec les mêmes données, datée d&#39;aujourd&#39;hui</li><li>Ajustez le montant ou d&#39;autres détails si nécessaire</li></ol><p>Astuce : pratique pour les dépenses récurrentes qui varient légèrement à chaque fois.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/duplicate-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duplicateExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  duplicateExpense as default
};
