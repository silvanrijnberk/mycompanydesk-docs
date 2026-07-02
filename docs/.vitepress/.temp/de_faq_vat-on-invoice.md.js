import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MwSt. auf einer Rechnung","description":"","frontmatter":{"title":"MwSt. auf einer Rechnung","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["vat on invoice","add vat to invoice","tax rate invoice","change vat rate","btw op factuur","btw tarief","mwst auf rechnung","tva sur facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open VAT settings","to":"/settings/btw"}],"follow_up":["How do I change the default VAT rate?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"de/faq/vat-on-invoice.md","filePath":"de/faq/vat-on-invoice.md"}');
const _sfc_main = { name: "de/faq/vat-on-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So legen Sie die MwSt. auf einer Rechnung fest:</p><ol><li>Bearbeiten oder erstellen Sie eine Rechnung</li><li>Wählen Sie für jede Position den MwSt.-Satz (z. B. 21 %, 9 %, 0 %)</li><li>Das System berechnet die MwSt. automatisch</li><li>Die MwSt.-Summen erscheinen in der Rechnungsübersicht</li></ol><p>Neue Rechnungspositionen erhalten automatisch Ihren Standard-MwSt.-Satz. Um diesen Standard zu ändern, gehen Sie zu Einstellungen → &quot;MwSt.&quot; und passen Sie den Standardsatz an. Der Satz ist immer 0 %, wenn die Rechnung den Reverse-Charge-Schalter verwendet.</p><p>Tipp: Stellen Sie einem Geschäftskunden in der EU eine Rechnung? Nutzen Sie den Schalter &quot;Reverse Charge (Steuerschuldnerschaft des Leistungsempfängers)&quot;, statt selbst 0 % zu wählen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/vat-on-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vatOnInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vatOnInvoice as default
};
