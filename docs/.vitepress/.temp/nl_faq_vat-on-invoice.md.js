import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BTW op een factuur","description":"","frontmatter":{"title":"BTW op een factuur","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["vat on invoice","add vat to invoice","tax rate invoice","change vat rate","btw op factuur","btw tarief","mwst auf rechnung","tva sur facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open VAT settings","to":"/settings/btw"}],"follow_up":["How do I change the default VAT rate?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"nl/faq/vat-on-invoice.md","filePath":"nl/faq/vat-on-invoice.md"}');
const _sfc_main = { name: "nl/faq/vat-on-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo stel je BTW in op een factuur:</p><ol><li>Bewerk of maak een factuur</li><li>Kies per factuurregel het BTW-tarief (bijv. 21%, 9%, 0%)</li><li>Het systeem berekent de BTW automatisch</li><li>De BTW-totalen verschijnen in de samenvatting van de factuur</li></ol><p>Nieuwe factuurregels krijgen automatisch je standaard-BTW-tarief. Wil je dat standaardtarief aanpassen, ga dan naar Instellingen → &quot;BTW&quot;. Het tarief is altijd 0% wanneer de factuur de schakelaar BTW verlegd gebruikt.</p><p>Tip: Factureer je een zakelijke klant in de EU? Gebruik dan de schakelaar &quot;BTW verlegd&quot; in plaats van zelf 0% te kiezen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/vat-on-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vatOnInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vatOnInvoice as default
};
