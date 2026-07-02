import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rechnung stornieren","description":"","frontmatter":{"title":"Rechnung stornieren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["cancel invoice","void invoice","annul invoice","reverse invoice","credit note","undo invoice","factuur annuleren","factuur ongedaan","hoe annuleer ik een factuur","rechnung stornieren","wie storniere ich eine rechnung","annuler facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I create a credit note?","How do I delete a draft invoice?","How do I view cancelled invoices?"]}},"headers":[],"relativePath":"de/faq/cancel-invoice.md","filePath":"de/faq/cancel-invoice.md"}');
const _sfc_main = { name: "de/faq/cancel-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So stornieren Sie eine versendete Rechnung:</p><ol><li>Öffnen Sie die Rechnung aus Ihrer Rechnungsliste</li><li>Scrollen Sie in der Seitenleiste zum Bereich &quot;Gefahrenzone&quot;</li><li>Klicken Sie auf &quot;Als storniert markieren&quot;</li><li>Der Status der Rechnung wechselt zu Storniert</li></ol><p>Ist die Rechnung bereits ganz oder teilweise bezahlt, öffnen Sie die Originalrechnung und nutzen Sie stattdessen &quot;Gutschrift / Korrektur erstellen&quot;.</p><p>Tipp: Beim Stornieren bleibt die Rechnungsnummer in Ihren Unterlagen erhalten; löschen können Sie ein Dokument nur, solange es noch ein Entwurf ohne Nummer ist.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/cancel-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cancelInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cancelInvoice as default
};
