import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Factuur bewerken","description":"","frontmatter":{"title":"Factuur bewerken","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["edit invoice","change invoice","modify invoice","update invoice","correct invoice","fix invoice","factuur bewerken","factuur wijzigen","factuur aanpassen","hoe bewerk ik een factuur","rechnung bearbeiten","wie bearbeite ich eine rechnung","modifier facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel a sent invoice?","How do I duplicate an invoice?","How do I change the invoice date?"]}},"headers":[],"relativePath":"nl/faq/edit-invoice.md","filePath":"nl/faq/edit-invoice.md"}');
const _sfc_main = { name: "nl/faq/edit-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo bewerk je een factuur:</p><ol><li>Open de factuur vanuit de lijst</li><li>Klik op &quot;Bewerken&quot;; dit kan zolang de factuur een concept is of wel definitief maar nog niet verstuurd</li><li>Pas de factuurregels, klant, datums of voorwaarden aan</li><li>Sla de bijgewerkte factuur op</li></ol><p>Is een factuur eenmaal verstuurd of gemaild, of staat die op betaald of te laat, dan is die vergrendeld en kun je die niet meer bewerken. Annuleer de factuur en maak een nieuwe, of gebruik &quot;Creditnota / correctie maken&quot; voor correcties.</p><p>Tip: Fout op een verstuurde factuur? Met een creditnota plus een nieuwe factuur blijven je nummering en BTW-administratie kloppend.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/edit-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editInvoice as default
};
