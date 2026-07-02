import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Factuurnummer","description":"","frontmatter":{"title":"Factuurnummer","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["invoice number","change invoice number","invoice numbering","set invoice number","numbering format","factuurnummer","factuurnummering","rechnungsnummer","numero facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Reset invoice numbering","to":"/settings/opzeggen"}],"follow_up":["How do I set up my company settings?","How do I change the PDF style?","How do I create my first invoice?"]}},"headers":[],"relativePath":"nl/faq/invoice-number.md","filePath":"nl/faq/invoice-number.md"}');
const _sfc_main = { name: "nl/faq/invoice-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Factuurnummers worden automatisch toegekend:</p><ol><li>Maak een factuur; MyCompanyDesk nummert die netjes op volgorde, zoals de Belastingdienst het wil</li><li>Er is geen nummeringsformaat om in te stellen</li><li>Wil je een eigen nummer op een concept? Open de factuur in het formulier en klik in de zijbalk op &quot;Eigen nummer invoeren&quot;</li><li>Wil je de reeks opnieuw laten beginnen? Ga naar Instellingen → &quot;Account opzeggen&quot; en gebruik &quot;Factuurnummering resetten&quot;</li></ol><p>Tip: Concepten hebben nog geen definitief nummer. Verwijder testconcepten voordat je ze afrondt, dan blijft je reeks zonder gaten.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/invoice-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceNumber as default
};
