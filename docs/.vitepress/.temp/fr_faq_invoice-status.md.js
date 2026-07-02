import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice status","description":"","frontmatter":{"title":"Invoice status","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["invoice status","invoice statuses","what do invoice statuses mean","draft sent paid","invoice lifecycle","factuurstatus","factuur statussen","rechnungsstatus","statut facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I mark an invoice as paid?","How do I send a reminder?","How do I cancel an invoice?"]}},"headers":[],"relativePath":"fr/faq/invoice-status.md","filePath":"fr/faq/invoice-status.md"}');
const _sfc_main = { name: "fr/faq/invoice-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Statuts de facture expliqués : • Brouillon - pas encore envoyée, modifiable librement • Envoyée - livrée au client, en attente de paiement • Payée - paiement reçu et confirmé • En retard - date d&#39;échéance dépassée, pas encore payée • Annulée - annulée, plus active</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/invoice-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceStatus as default
};
