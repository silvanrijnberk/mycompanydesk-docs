import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Partial payment","description":"","frontmatter":{"title":"Partial payment","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["partial payment","record partial payment","half payment","part payment","deposit received","gedeeltelijke betaling","deelbetaling","aanbetaling ontvangen","teilzahlung","paiement partiel","acompte recu"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I mark an invoice as fully paid?","How do I send a reminder for the remaining balance?","How do I view all partially paid invoices?"]}},"headers":[],"relativePath":"de/faq/partial-payment.md","filePath":"de/faq/partial-payment.md"}');
const _sfc_main = { name: "de/faq/partial-payment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Um eine Teilzahlung auf einer Rechnung zu erfassen:</p><ol><li>Öffne die Rechnung aus der Liste</li><li>Klicke auf &quot;Zahlung erfassen&quot; oder die Zahlungsaktion</li><li>Gib den erhaltenen Betrag ein (weniger als der Gesamtbetrag)</li><li>Speichern - der Rechnungsstatus ändert sich zu Teilweise bezahlt</li><li>Wiederhole den Vorgang, wenn weitere Zahlungen eingehen</li></ol><p>Tipp: Der Restbetrag wird automatisch verfolgt und auf der Rechnungsdetailseite angezeigt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/partial-payment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partialPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  partialPayment as default
};
