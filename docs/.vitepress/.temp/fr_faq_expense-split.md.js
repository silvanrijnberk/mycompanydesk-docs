import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Split an expense","description":"","frontmatter":{"title":"Split an expense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["split expense","divide expense","expense between categories","allocate expense","expense allocation","uitgave splitsen","uitgave verdelen","ausgabe aufteilen","repartir depense"],"actions":[{"label":"Create expense","to":"/expenses/new"}],"follow_up":["How do I categorize expenses?","Which expenses are tax deductible?","How do I upload a receipt?"]}},"headers":[],"relativePath":"fr/faq/expense-split.md","filePath":"fr/faq/expense-split.md"}');
const _sfc_main = { name: "fr/faq/expense-split.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour repartir une depense sur plusieurs categories :</p><ol><li>Ouvrez la depense en mode edition</li><li>Utilisez, si le formulaire le permet, des lignes pour repartir le montant</li><li>Attribuez une categorie differente a chaque ligne</li><li>Verifiez que le total correspond au montant du recu</li><li>Enregistrez</li></ol><p>Si la repartition dans un seul enregistrement n est pas disponible, creez des depenses separees en faisant reference au meme recu.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/expense-split.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseSplit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseSplit as default
};
