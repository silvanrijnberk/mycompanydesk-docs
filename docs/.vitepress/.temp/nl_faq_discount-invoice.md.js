import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Korting op een factuur","description":"","frontmatter":{"title":"Korting op een factuur","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["discount","add discount","invoice discount","percentage discount","reduce price","korting","korting toevoegen","rabatt","rabatt gewahren","remise","reduction"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set payment terms?","How do I create a credit note?","How do I preview the invoice PDF?"]}},"headers":[],"relativePath":"nl/faq/discount-invoice.md","filePath":"nl/faq/discount-invoice.md"}');
const _sfc_main = { name: "nl/faq/discount-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo geef je korting op een factuur:</p><ol><li>Bewerk of maak een factuur</li><li>Voeg een aparte factuurregel toe met een negatief bedrag voor de korting</li><li>Het totaal toont het verlaagde bedrag</li><li>Sla de factuur op</li></ol><p>Er is geen apart kortingsveld; een negatieve factuurregel is de manier om korting te geven in MyCompanyDesk.</p><p>Tip: Geef de kortingsregel een duidelijke omschrijving (bijv. &quot;Betalingskorting -5%&quot;), zodat de klant de aftrek begrijpt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/discount-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discountInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  discountInvoice as default
};
