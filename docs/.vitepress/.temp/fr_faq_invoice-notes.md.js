import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice notes","description":"","frontmatter":{"title":"Invoice notes","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["invoice notes","add note","invoice memo","add comment","internal note","factuur notitie","opmerking toevoegen","rechnungsnotiz","note de facture","ajouter remarque"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I add line items?","How do I preview the invoice?","How do I change the PDF style?"]}},"headers":[],"relativePath":"fr/faq/invoice-notes.md","filePath":"fr/faq/invoice-notes.md"}');
const _sfc_main = { name: "fr/faq/invoice-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour ajouter des notes a une facture :</p><ol><li>Ouvrez la facture en mode edition</li><li>Utilisez la section « Notes » sous les lignes de facture</li><li>Ajoutez le texte que vous voulez conserver avec cette facture</li><li>Enregistrez la facture</li></ol><p>Astuce : utilisez les notes pour les instructions de paiement, les references de projet ou les conditions qui concernent seulement cette facture.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/invoice-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceNotes as default
};
