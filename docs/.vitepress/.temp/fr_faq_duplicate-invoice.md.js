import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dupliquer une facture","description":"","frontmatter":{"title":"Dupliquer une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["duplicate invoice","copy invoice","clone invoice","reuse invoice","invoice template","factuur kopieren","factuur dupliceren","rechnung kopieren","dupliquer facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set up recurring invoices?","How do I edit an invoice?","How do I change the PDF template?"]}},"headers":[],"relativePath":"fr/faq/duplicate-invoice.md","filePath":"fr/faq/duplicate-invoice.md"}');
const _sfc_main = { name: "fr/faq/duplicate-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour dupliquer une facture :</p><ol><li>Ouvrez la facture que vous souhaitez copier</li><li>Dans la barre latérale, repérez la section &quot;Actions&quot;</li><li>Cliquez sur &quot;Dupliquer&quot;</li><li>Un nouveau brouillon est créé avec les mêmes lignes et le même client</li><li>Ajustez la date, les montants ou les détails, puis enregistrez</li></ol><p>Astuce : idéal pour des factures similaires au même client, cela évite de ressaisir toutes les lignes.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/duplicate-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duplicateInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  duplicateInvoice as default
};
