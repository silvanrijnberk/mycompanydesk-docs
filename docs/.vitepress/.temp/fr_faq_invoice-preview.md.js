import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice preview","description":"","frontmatter":{"title":"Invoice preview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["preview invoice","invoice preview","preview before sending","check invoice","preview pdf","factuur voorbeeld","factuur bekijken","rechnungsvorschau","apercu facture","previsualiser facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I change the PDF template?","How do I send the invoice by email?","How do I edit the invoice?"]}},"headers":[],"relativePath":"fr/faq/invoice-preview.md","filePath":"fr/faq/invoice-preview.md"}');
const _sfc_main = { name: "fr/faq/invoice-preview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour prévisualiser une facture avant l&#39;envoi :</p><ol><li>Ouvrez la facture</li><li>Cliquez sur l&#39;icône « Aperçu » ou PDF</li><li>Un aperçu du PDF de la facture s&#39;affiche</li><li>Vérifiez la mise en page, les montants et les coordonnées du client</li><li>Fermez l&#39;aperçu et effectuez des modifications si nécessaire, ou procédez à l&#39;envoi</li></ol><p>Astuce : Prévisualisez toujours avant d&#39;envoyer pour détecter les erreurs de mise en forme ou les fautes de frappe.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/invoice-preview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoicePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoicePreview as default
};
