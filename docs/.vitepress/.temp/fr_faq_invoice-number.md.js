import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Numéro de facture","description":"","frontmatter":{"title":"Numéro de facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["invoice number","change invoice number","invoice numbering","set invoice number","numbering format","factuurnummer","factuurnummering","rechnungsnummer","numero facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Reset invoice numbering","to":"/settings/opzeggen"}],"follow_up":["How do I set up my company settings?","How do I change the PDF style?","How do I create my first invoice?"]}},"headers":[],"relativePath":"fr/faq/invoice-number.md","filePath":"fr/faq/invoice-number.md"}');
const _sfc_main = { name: "fr/faq/invoice-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Les numéros de facture sont attribués automatiquement :</p><ol><li>Créez une facture ; MyCompanyDesk la numérote de façon séquentielle, comme l&#39;exige l&#39;administration fiscale</li><li>Il n&#39;y a aucun format de numérotation à configurer</li><li>Besoin d&#39;un numéro précis sur un brouillon ? Ouvrez la facture dans le formulaire et cliquez sur &quot;Définir un numéro personnalisé&quot; dans la barre latérale</li><li>Pour faire repartir la série, allez dans Paramètres → &quot;Résilier le compte&quot; et utilisez &quot;Réinitialiser la numérotation des factures&quot;</li></ol><p>Astuce : les brouillons n&#39;ont pas encore de numéro définitif. Supprimez vos brouillons de test avant de les finaliser, votre série reste ainsi sans trous.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/invoice-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceNumber as default
};
