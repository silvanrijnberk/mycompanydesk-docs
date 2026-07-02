import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Send an invoice by email","description":"","frontmatter":{"title":"Send an invoice by email","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["send invoice email","email invoice","send invoice to customer","mail invoice","deliver invoice","factuur versturen","factuur emailen","factuur mailen","rechnung senden","wie sende ich eine rechnung","envoyer facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I customize the email template?","How do I preview the PDF first?","How do I change the customer email?"]}},"headers":[],"relativePath":"fr/faq/send-invoice-email.md","filePath":"fr/faq/send-invoice-email.md"}');
const _sfc_main = { name: "fr/faq/send-invoice-email.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour envoyer une facture par e-mail :</p><ol><li>Ouvrez la facture (elle doit être enregistrée)</li><li>Cliquez sur « Envoyer » ou le bouton e-mail</li><li>Le système utilise l&#39;adresse e-mail du client</li><li>Prévisualisez et personnalisez le message</li><li>Cliquez sur « Envoyer » pour livrer</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/send-invoice-email.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sendInvoiceEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sendInvoiceEmail as default
};
