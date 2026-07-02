import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Billing and subscription help","description":"","frontmatter":{"title":"Billing and subscription help","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["billing friction","reduce billing","billing errors","invoice errors","reduce errors","facturatiefouten","facturatie fouten","rechnungsfehler","fehler reduzieren","erreurs facturation"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I set up customer profiles?","How do I preview invoices before sending?"]}},"headers":[],"relativePath":"fr/faq/billing-friction.md","filePath":"fr/faq/billing-friction.md"}');
const _sfc_main = { name: "fr/faq/billing-friction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour reduire les erreurs de facture dans l application :</p><ol><li>Ouvrez Clients et completez l e-mail de facturation, l adresse, le numero de TVA et les conditions de paiement par defaut du client</li><li>Reutilisez ensuite cette fiche client lors de la creation de la facture au lieu de retaper les informations</li><li>Ouvrez l apercu avant l envoi pour verifier les donnees client, les lignes et la mise en page PDF</li><li>Si de mauvaises informations apparaissent encore, mettez d abord a jour la fiche client ou les reglages entreprise puis rechargez le brouillon</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/billing-friction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billingFriction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billingFriction as default
};
