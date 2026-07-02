import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Coordonnées bancaires","description":"","frontmatter":{"title":"Coordonnées bancaires","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bank details","add bank account","bank information","where do i add my bank details","iban","payment details","bankgegevens","waar voeg ik mijn bankgegevens toe","bankrekening toevoegen","bankdaten","wo trage ich meine bankdaten ein","coordonnees bancaires","ou ajouter mes coordonnees bancaires"],"actions":[{"label":"Open payment settings","to":"/settings/betalen"}],"follow_up":["How do I add payment methods to invoices?","How do I set up my company settings?"]}},"headers":[],"relativePath":"fr/faq/bank-details.md","filePath":"fr/faq/bank-details.md"}');
const _sfc_main = { name: "fr/faq/bank-details.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour ajouter ou mettre à jour vos coordonnées bancaires :</p><ol><li>Allez dans Paramètres et ouvrez « Paiement »</li><li>Saisissez votre IBAN et le nom du titulaire dans la carte du compte bancaire</li><li>Les modifications s&#39;enregistrent automatiquement</li></ol><p>Dès qu&#39;un IBAN est renseigné, le virement bancaire est activé automatiquement sur vos factures et un code QR de paiement est ajouté à vos factures, que vos clients peuvent scanner pour payer immédiatement le bon montant. Il n&#39;y a pas de champ BIC ; il n&#39;est pas nécessaire.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/bank-details.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankDetails as default
};
