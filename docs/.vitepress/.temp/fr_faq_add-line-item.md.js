import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add line item","description":"","frontmatter":{"title":"Add line item","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["add line item","edit line item","remove line item","invoice line","add row","new line","factuurregel toevoegen","regel bewerken","rechnungsposition","ligne de facture","ajouter ligne"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I add a discount to an invoice?","How do I change the VAT rate on a line?","How do I reorder line items?"]}},"headers":[],"relativePath":"fr/faq/add-line-item.md","filePath":"fr/faq/add-line-item.md"}');
const _sfc_main = { name: "fr/faq/add-line-item.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour ajouter, modifier ou supprimer des lignes sur une facture :</p><ol><li>Ouvrez la facture en mode édition</li><li>Cliquez sur « Ajouter une ligne » ou le bouton + pour ajouter une nouvelle ligne</li><li>Saisissez la description, la quantité, le prix unitaire et le taux de TVA</li><li>Pour supprimer une ligne, cliquez sur l&#39;icône de suppression (×) de cette ligne</li><li>Pour réorganiser, glissez-déposez les lignes</li><li>Enregistrez lorsque vous avez terminé</li></ol><p>Astuce : Utilisez des descriptions de lignes claires et détaillées pour des factures professionnelles.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/add-line-item.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addLineItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addLineItem as default
};
