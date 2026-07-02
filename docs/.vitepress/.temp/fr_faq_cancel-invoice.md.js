import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Annuler une facture","description":"","frontmatter":{"title":"Annuler une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["cancel invoice","void invoice","annul invoice","reverse invoice","credit note","undo invoice","factuur annuleren","factuur ongedaan","hoe annuleer ik een factuur","rechnung stornieren","wie storniere ich eine rechnung","annuler facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I create a credit note?","How do I delete a draft invoice?","How do I view cancelled invoices?"]}},"headers":[],"relativePath":"fr/faq/cancel-invoice.md","filePath":"fr/faq/cancel-invoice.md"}');
const _sfc_main = { name: "fr/faq/cancel-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour annuler une facture envoyée :</p><ol><li>Ouvrez la facture depuis votre liste de factures</li><li>Dans la barre latérale, faites défiler jusqu&#39;à la section &quot;Zone de danger&quot;</li><li>Cliquez sur &quot;Marquer comme annulée&quot;</li><li>Le statut de la facture passe à Annulée</li></ol><p>Si la facture est déjà payée, en tout ou en partie, ouvrez la facture d&#39;origine et utilisez plutôt &quot;Créer un avoir / une correction&quot;.</p><p>Astuce : l&#39;annulation conserve le numéro de facture dans votre comptabilité ; la suppression n&#39;est possible que tant qu&#39;un document est encore un brouillon sans numéro.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/cancel-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cancelInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cancelInvoice as default
};
