import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customer fields","description":"","frontmatter":{"title":"Customer fields","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer fields","important fields","which fields","required fields","fields matter","klantvelden","welke velden","belangrijkste velden","kundenfelder","wichtigste felder","champs clients","champs importants"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I add a new customer?","How do I edit a customer?","How do I set default payment terms?"]}},"headers":[],"relativePath":"fr/faq/customer-fields.md","filePath":"fr/faq/customer-fields.md"}');
const _sfc_main = { name: "fr/faq/customer-fields.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Les champs client que l application reutilise le plus souvent sont :</p><ol><li>Nom du client ou de l entreprise - visible sur les factures et devis</li><li>Adresse e-mail - utilisee lorsque vous envoyez des documents par e-mail</li><li>Champs d adresse - reutilises sur les modeles qui affichent l adresse</li><li>Numero de TVA - affiche sur les documents lorsque ce champ est renseigne</li><li>IBAN et delai de paiement - reutilises la ou les reglages de facturation en ont besoin</li><li>Personne de contact et numero de telephone - visibles dans la fiche client comme reference</li></ol><p>Renseignez les champs que vous voulez voir reutilises sur les nouvelles factures, devis et ecrans d envoi.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/customer-fields.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerFields = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerFields as default
};
