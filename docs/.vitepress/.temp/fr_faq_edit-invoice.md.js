import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Modifier une facture","description":"","frontmatter":{"title":"Modifier une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["edit invoice","change invoice","modify invoice","update invoice","correct invoice","fix invoice","factuur bewerken","factuur wijzigen","factuur aanpassen","hoe bewerk ik een factuur","rechnung bearbeiten","wie bearbeite ich eine rechnung","modifier facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel a sent invoice?","How do I duplicate an invoice?","How do I change the invoice date?"]}},"headers":[],"relativePath":"fr/faq/edit-invoice.md","filePath":"fr/faq/edit-invoice.md"}');
const _sfc_main = { name: "fr/faq/edit-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour modifier une facture :</p><ol><li>Ouvrez la facture depuis la liste</li><li>Cliquez sur &quot;Modifier&quot; ; c&#39;est possible tant que la facture est un brouillon ou finalisée mais pas encore envoyée</li><li>Modifiez les lignes, le client, les dates ou les conditions</li><li>Enregistrez la facture mise à jour</li></ol><p>Une fois la facture envoyée ou expédiée par e-mail, ou quand elle est payée ou en retard, elle est verrouillée et ne peut plus être modifiée. Annulez-la et créez-en une nouvelle, ou utilisez &quot;Créer un avoir / une correction&quot; pour les corrections.</p><p>Astuce : une erreur sur une facture envoyée ? Un avoir plus une nouvelle facture gardent votre numérotation et votre TVA en ordre.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/edit-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editInvoice as default
};
