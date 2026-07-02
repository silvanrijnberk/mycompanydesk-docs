import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Factuur als betaald markeren","description":"","frontmatter":{"title":"Factuur als betaald markeren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["mark invoice paid","invoice paid","mark as paid","record payment","received payment","payment received","factuur betaald","betaald markeren","factuur als betaald","rechnung als bezahlt","marquer payee"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I record a partial payment?","How do I send a payment reminder?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"nl/faq/mark-invoice-paid.md","filePath":"nl/faq/mark-invoice-paid.md"}');
const _sfc_main = { name: "nl/faq/mark-invoice-paid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo markeer je een factuur als betaald:</p><ol><li>Open de factuur vanuit de lijst</li><li>Klik op &quot;Markeer als betaald&quot; in de kop van de factuur; met één klik springt de status op Betaald</li><li>Wil je de betaaldatum, betaalmethode of een kenmerk vastleggen? Gebruik dan &quot;Betaling registreren&quot; in de sectie Betaling</li></ol><p>Tip: Springt de status niet bij? Ververs de lijst en controleer op de detailpagina of de betaling is opgeslagen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/mark-invoice-paid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markInvoicePaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markInvoicePaid as default
};
