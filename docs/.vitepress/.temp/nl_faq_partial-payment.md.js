import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Partial payment","description":"","frontmatter":{"title":"Partial payment","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["partial payment","record partial payment","half payment","part payment","deposit received","gedeeltelijke betaling","deelbetaling","aanbetaling ontvangen","teilzahlung","paiement partiel","acompte recu"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I mark an invoice as fully paid?","How do I send a reminder for the remaining balance?","How do I view all partially paid invoices?"]}},"headers":[],"relativePath":"nl/faq/partial-payment.md","filePath":"nl/faq/partial-payment.md"}');
const _sfc_main = { name: "nl/faq/partial-payment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een gedeeltelijke betaling op een factuur vast te leggen:</p><ol><li>Open de factuur vanuit de lijst</li><li>Klik op &quot;Betaling vastleggen&quot; of de betalingsactie</li><li>Voer het ontvangen bedrag in (minder dan het totaal)</li><li>Sla op - de factuurstatus verandert naar Gedeeltelijk betaald</li><li>Herhaal wanneer er aanvullende betalingen binnenkomen</li></ol><p>Tip: Het resterende saldo wordt automatisch bijgehouden en verschijnt op de factuurdetailpagina.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/partial-payment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partialPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  partialPayment as default
};
