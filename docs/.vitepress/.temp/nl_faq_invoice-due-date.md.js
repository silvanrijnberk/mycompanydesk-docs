import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vervaldatum van een factuur","description":"","frontmatter":{"title":"Vervaldatum van een factuur","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["set due date","change due date","payment terms","payment deadline","when invoice due","net 30","net 14","vervaldatum","betaaltermijn","zahlungsfrist","echeance","date d echeance","conditions de paiement","modifier conditions de paiement","changer conditions de paiement","comment modifier les conditions de paiement","comment changer les conditions de paiement"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How do I set default payment terms?","How do I send reminders?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"nl/faq/invoice-due-date.md","filePath":"nl/faq/invoice-due-date.md"}');
const _sfc_main = { name: "nl/faq/invoice-due-date.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo pas je de vervaldatum van één factuur aan:</p><ol><li>Open de factuur in bewerkmodus</li><li>Werk in de kaart met factuurdetails het veld &quot;Vervaldatum&quot; bij</li><li>Sla de factuur op</li></ol><p>Wil je dat toekomstige facturen met een andere termijn starten, pas dan de betaaltermijn van de klant aan of de standaard via Instellingen → &quot;Facturen en offertes&quot; onder &quot;Hoeveel dagen krijgt een klant om te betalen?&quot;.</p><p>Tip: Automatische herinneringen volgen de vervaldatum, dus met een juiste termijn gaan ook de herinneringen op het goede moment de deur uit.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/invoice-due-date.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceDueDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceDueDate as default
};
