import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Historique des paiements d'un client","description":"","frontmatter":{"title":"Historique des paiements d'un client","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer payment history","payment history","customer invoices","customer payments","betalingsgeschiedenis","klant facturen bekijken","zahlungshistorie","historique paiements client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send a payment reminder?","How do I view overdue invoices?","How do I edit customer details?"]}},"headers":[],"relativePath":"fr/faq/customer-payment-history.md","filePath":"fr/faq/customer-payment-history.md"}`);
const _sfc_main = { name: "fr/faq/customer-payment-history.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour consulter l&#39;historique des paiements d&#39;un client :</p><ol><li>Ouvrez Clients et sélectionnez le client</li><li>Consultez la carte « Factures récentes » sur la fiche client ; elle affiche pour chaque facture le numéro, la date, le total et le statut</li><li>Ouvrez une facture depuis cette carte pour les détails de paiement, comme la date et le mode de paiement</li></ol><p>Les informations de paiement complètes se trouvent sur la page de détail de la facture ; la fiche client vous donne l&#39;aperçu rapide des statuts.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/customer-payment-history.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerPaymentHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerPaymentHistory as default
};
