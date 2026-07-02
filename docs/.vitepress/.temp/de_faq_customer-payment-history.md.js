import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zahlungshistorie eines Kunden","description":"","frontmatter":{"title":"Zahlungshistorie eines Kunden","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer payment history","payment history","customer invoices","customer payments","betalingsgeschiedenis","klant facturen bekijken","zahlungshistorie","historique paiements client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send a payment reminder?","How do I view overdue invoices?","How do I edit customer details?"]}},"headers":[],"relativePath":"de/faq/customer-payment-history.md","filePath":"de/faq/customer-payment-history.md"}');
const _sfc_main = { name: "de/faq/customer-payment-history.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So sehen Sie die Zahlungshistorie eines Kunden:</p><ol><li>Öffnen Sie Kunden und wählen Sie den Kunden aus</li><li>Prüfen Sie die Karte „Aktuelle Rechnungen&quot; im Kundenprofil; dort sehen Sie pro Rechnung Nummer, Datum, Gesamtbetrag und Status</li><li>Öffnen Sie eine Rechnung aus dieser Karte für die Zahlungsdetails, etwa wann und wie bezahlt wurde</li></ol><p>Die vollständigen Zahlungsinformationen finden Sie auf der Detailseite der Rechnung; das Kundenprofil liefert die schnelle Statusübersicht.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/customer-payment-history.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerPaymentHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerPaymentHistory as default
};
