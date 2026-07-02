import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Échec d'envoi d'une facture","description":"","frontmatter":{"title":"Échec d'envoi d'une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["failed invoice email","invoice email failed","failed send invoice","invoice not sending","invoice email issue","fix failed invoice email","mislukte factuur-e-mail","factuurmail mislukt","factuur e-mail mislukt","factuur versturen mislukt","hoe los ik een mislukte factuur-e-mail op","fehlgeschlagene rechnungs-e-mail","rechnungs-e-mail fehlgeschlagen","rechnung senden fehlgeschlagen","wie behebe ich eine fehlgeschlagene rechnungs-e-mail","e-mail de facture echoue","email facture echoue","envoi facture echec","comment corriger un e-mail de facture echoue"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I change the customer email?","How do I preview the invoice first?","Where do I check email delivery settings?"]}},"headers":[],"relativePath":"fr/faq/failed-invoice-email.md","filePath":"fr/faq/failed-invoice-email.md"}`);
const _sfc_main = { name: "fr/faq/failed-invoice-email.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour résoudre l&#39;échec d&#39;envoi d&#39;une facture par e-mail :</p><ol><li>Vérifiez que la fiche client contient la bonne adresse e-mail</li><li>Ouvrez la page de détail de la facture et consultez le statut d&#39;envoi ou le message d&#39;erreur affiché</li><li>Vérifiez vos réglages e-mail dans Paramètres → &quot;E-mail&quot;</li><li>Renvoyez la facture ; les brouillons peuvent aussi être envoyés par e-mail, Envoyer est l&#39;action principale et finalise le brouillon dans la même étape</li><li>Si le client ne reçoit toujours rien, demandez-lui de vérifier son dossier spam ou courrier indésirable</li></ol><p>Astuce : affichez d&#39;abord l&#39;aperçu de la facture si vous voulez confirmer le bon client et le bon document avant de renvoyer.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/failed-invoice-email.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const failedInvoiceEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  failedInvoiceEmail as default
};
