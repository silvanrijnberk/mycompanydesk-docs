import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Betalingsgeschiedenis van een klant","description":"","frontmatter":{"title":"Betalingsgeschiedenis van een klant","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer payment history","payment history","customer invoices","customer payments","betalingsgeschiedenis","klant facturen bekijken","zahlungshistorie","historique paiements client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send a payment reminder?","How do I view overdue invoices?","How do I edit customer details?"]}},"headers":[],"relativePath":"nl/faq/customer-payment-history.md","filePath":"nl/faq/customer-payment-history.md"}');
const _sfc_main = { name: "nl/faq/customer-payment-history.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om de betalingsgeschiedenis van een klant te bekijken:</p><ol><li>Open Klanten en selecteer de klant</li><li>Bekijk de kaart &quot;Recente facturen&quot; op het klantprofiel; daar zie je per factuur het nummer, de datum, het totaal en de status</li><li>Open een factuur vanuit die kaart voor de betaalgegevens, zoals wanneer en hoe er is betaald</li></ol><p>De volledige betaalinformatie vind je op de detailpagina van de factuur; het klantprofiel geeft je het snelle statusoverzicht.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/customer-payment-history.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerPaymentHistory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerPaymentHistory as default
};
