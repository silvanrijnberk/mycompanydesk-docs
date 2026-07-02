import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Factuur annuleren","description":"","frontmatter":{"title":"Factuur annuleren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["cancel invoice","void invoice","annul invoice","reverse invoice","credit note","undo invoice","factuur annuleren","factuur ongedaan","hoe annuleer ik een factuur","rechnung stornieren","wie storniere ich eine rechnung","annuler facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I create a credit note?","How do I delete a draft invoice?","How do I view cancelled invoices?"]}},"headers":[],"relativePath":"nl/faq/cancel-invoice.md","filePath":"nl/faq/cancel-invoice.md"}');
const _sfc_main = { name: "nl/faq/cancel-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo annuleer je een verstuurde factuur:</p><ol><li>Open de factuur vanuit je factuurlijst</li><li>Scrol in de zijbalk naar de sectie &quot;Gevarenzone&quot;</li><li>Klik op &quot;Markeer als geannuleerd&quot;</li><li>De status van de factuur verandert naar Geannuleerd</li></ol><p>Is de factuur al (deels) betaald? Open dan de originele factuur en gebruik &quot;Creditnota / correctie maken&quot;.</p><p>Tip: Annuleren houdt het factuurnummer in je administratie; verwijderen kan alleen zolang een document nog een concept zonder nummer is.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/cancel-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cancelInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cancelInvoice as default
};
