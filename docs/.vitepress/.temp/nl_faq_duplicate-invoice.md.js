import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Factuur dupliceren","description":"","frontmatter":{"title":"Factuur dupliceren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["duplicate invoice","copy invoice","clone invoice","reuse invoice","invoice template","factuur kopieren","factuur dupliceren","rechnung kopieren","dupliquer facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set up recurring invoices?","How do I edit an invoice?","How do I change the PDF template?"]}},"headers":[],"relativePath":"nl/faq/duplicate-invoice.md","filePath":"nl/faq/duplicate-invoice.md"}');
const _sfc_main = { name: "nl/faq/duplicate-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo dupliceer je een factuur:</p><ol><li>Open de factuur die je wilt kopiëren</li><li>Zoek in de zijbalk de sectie &quot;Acties&quot;</li><li>Klik op &quot;Dupliceren&quot;</li><li>Er wordt een nieuw concept aangemaakt met dezelfde factuurregels en klant</li><li>Pas de datum, bedragen of details aan en sla op</li></ol><p>Tip: Handig voor vergelijkbare facturen aan dezelfde klant, zo hoef je niet alle regels opnieuw in te voeren.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/duplicate-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duplicateInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  duplicateInvoice as default
};
