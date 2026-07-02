import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Créer une facture","description":"","frontmatter":{"title":"Créer une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["create invoice","new invoice","make invoice","add invoice","write invoice","send invoice","first invoice","how to invoice","maak factuur","nieuwe factuur","factuur maken","factuur aanmaken","hoe maak ik een factuur","rechnung erstellen","wie erstelle ich eine rechnung","neue rechnung","creer facture","comment creer une facture"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer first?","How do I change the PDF style?","How do I set payment terms?"]}},"headers":[],"relativePath":"fr/faq/create-invoice.md","filePath":"fr/faq/create-invoice.md"}');
const _sfc_main = { name: "fr/faq/create-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Voici comment créer une facture :</p><ol><li>Allez dans Factures et ouvrez &quot;Nouvelle facture&quot;</li><li>Sélectionnez un client ou ajoutez-en un depuis le sélecteur de clients</li><li>Ajoutez les lignes avec description, quantité, prix et TVA</li><li>Définissez la date de facture et la date d&#39;échéance dans la carte des détails de la facture</li><li>Utilisez &quot;Enregistrer comme brouillon&quot; si la facture n&#39;est pas encore prête, ou &quot;Finaliser&quot; quand elle l&#39;est (MyCompanyDesk vérifie d&#39;abord votre numéro de TVA et votre IBAN, vous pouvez les remplir directement si besoin)</li><li>Après l&#39;enregistrement, ouvrez la page de détail de la facture pour l&#39;afficher ou l&#39;envoyer</li></ol><p>Si le client a des temps non facturés, le formulaire les reprend comme lignes de facture et complète automatiquement les descriptions manquantes.</p><p>Astuce : les valeurs par défaut comme le délai de paiement et la validité des devis se trouvent dans Paramètres → &quot;Factures et devis&quot; ; la numérotation des factures est automatique, il n&#39;y a rien à configurer. Vérifiez que votre numéro de TVA et votre IBAN sont renseignés pour finaliser sans interruption.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/create-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createInvoice as default
};
