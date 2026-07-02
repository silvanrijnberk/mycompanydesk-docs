import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marquer une facture comme payée","description":"","frontmatter":{"title":"Marquer une facture comme payée","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["mark invoice paid","invoice paid","mark as paid","record payment","received payment","payment received","factuur betaald","betaald markeren","factuur als betaald","rechnung als bezahlt","marquer payee"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I record a partial payment?","How do I send a payment reminder?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"fr/faq/mark-invoice-paid.md","filePath":"fr/faq/mark-invoice-paid.md"}');
const _sfc_main = { name: "fr/faq/mark-invoice-paid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour marquer une facture comme payée :</p><ol><li>Ouvrez la facture depuis la liste</li><li>Cliquez sur &quot;Marquer comme payée&quot; dans l&#39;en-tête de la facture ; un seul clic et le statut passe à Payée</li><li>Vous voulez enregistrer la date, le mode de paiement ou une référence ? Utilisez plutôt &quot;Enregistrer un paiement&quot; dans la section Paiement</li></ol><p>Astuce : si le statut ne change pas, actualisez la liste et vérifiez sur la page de détail que le paiement a bien été enregistré.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/mark-invoice-paid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markInvoicePaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markInvoicePaid as default
};
