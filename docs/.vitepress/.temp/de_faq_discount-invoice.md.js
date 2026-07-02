import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rabatt auf einer Rechnung","description":"","frontmatter":{"title":"Rabatt auf einer Rechnung","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["discount","add discount","invoice discount","percentage discount","reduce price","korting","korting toevoegen","rabatt","rabatt gewahren","remise","reduction"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set payment terms?","How do I create a credit note?","How do I preview the invoice PDF?"]}},"headers":[],"relativePath":"de/faq/discount-invoice.md","filePath":"de/faq/discount-invoice.md"}');
const _sfc_main = { name: "de/faq/discount-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So fügen Sie einer Rechnung einen Rabatt hinzu:</p><ol><li>Bearbeiten oder erstellen Sie eine Rechnung</li><li>Fügen Sie eine separate Position mit einem negativen Betrag für den Rabatt hinzu</li><li>Die Summe zeigt den reduzierten Betrag</li><li>Speichern Sie die Rechnung</li></ol><p>Ein separates Rabattfeld gibt es nicht; eine negative Position ist der Weg, in MyCompanyDesk einen Rabatt zu gewähren.</p><p>Tipp: Beschriften Sie die Rabattposition eindeutig (z. B. &quot;Skonto -5 %&quot;), damit der Kunde den Abzug versteht.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/discount-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const discountInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  discountInvoice as default
};
