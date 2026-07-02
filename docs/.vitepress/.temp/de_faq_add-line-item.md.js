import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add line item","description":"","frontmatter":{"title":"Add line item","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["add line item","edit line item","remove line item","invoice line","add row","new line","factuurregel toevoegen","regel bewerken","rechnungsposition","ligne de facture","ajouter ligne"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I add a discount to an invoice?","How do I change the VAT rate on a line?","How do I reorder line items?"]}},"headers":[],"relativePath":"de/faq/add-line-item.md","filePath":"de/faq/add-line-item.md"}');
const _sfc_main = { name: "de/faq/add-line-item.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Um Positionen auf einer Rechnung hinzuzufügen, zu bearbeiten oder zu entfernen:</p><ol><li>Öffne die Rechnung im Bearbeitungsmodus</li><li>Klicke auf &quot;Position hinzufügen&quot; oder die +-Schaltfläche, um eine neue Zeile hinzuzufügen</li><li>Gib Beschreibung, Menge, Einzelpreis und MwSt-Satz ein</li><li>Um eine Position zu entfernen, klicke auf das Lösch-Symbol (×) in der Zeile</li><li>Zum Umsortieren ziehe die Zeilen per Drag &amp; Drop</li><li>Speichere, wenn du fertig bist</li></ol><p>Tipp: Verwende klare, aussagekräftige Positionsbeschreibungen für professionelle Rechnungen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/add-line-item.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addLineItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addLineItem as default
};
