import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Remise sur une facture","description":"","frontmatter":{"title":"Remise sur une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["discount","add discount","invoice discount","percentage discount","reduce price","korting","korting toevoegen","rabatt","rabatt gewahren","remise","reduction"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set payment terms?","How do I create a credit note?","How do I preview the invoice PDF?"]}},"headers":[],"relativePath":"fr/faq/discount-invoice.md","filePath":"fr/faq/discount-invoice.md"}');
const _sfc_main = { name: "fr/faq/discount-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour appliquer une remise sur une facture :</p><ol><li>Modifiez ou créez une facture</li><li>Ajoutez une ligne séparée avec un montant négatif pour la remise</li><li>Le total reflète le montant réduit</li><li>Enregistrez la facture</li></ol><p>Il n&#39;y a pas de champ de remise dédié ; une ligne négative est la façon d&#39;accorder une remise dans MyCompanyDesk.</p><p>Astuce : libellez clairement la ligne de remise (par ex. &quot;Remise pour paiement anticipé -5 %&quot;) pour que le client comprenne la déduction.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/discount-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discountInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  discountInvoice as default
};
