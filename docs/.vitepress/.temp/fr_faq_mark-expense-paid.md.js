import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marquer une dépense comme payée","description":"","frontmatter":{"title":"Marquer une dépense comme payée","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["mark expense paid","expense paid","expense payment","pay expense","expense as paid","uitgave betaald","uitgave als betaald","ausgabe bezahlt","depense payee"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I view all unpaid expenses?","How do I export expense data?"]}},"headers":[],"relativePath":"fr/faq/mark-expense-paid.md","filePath":"fr/faq/mark-expense-paid.md"}');
const _sfc_main = { name: "fr/faq/mark-expense-paid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour marquer une dépense comme payée :</p><ol><li>Ouvrez la dépense depuis la liste</li><li>Cliquez sur « Marquer comme payé »</li><li>Le statut passe immédiatement à Payée</li></ol><p>Ce simple clic suffit : aucune fenêtre de date de paiement ne s&#39;affiche et il n&#39;y a pas d&#39;enregistrement séparé.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/mark-expense-paid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markExpensePaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markExpensePaid as default
};
