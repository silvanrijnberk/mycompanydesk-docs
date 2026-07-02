import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rechnungsnummer","description":"","frontmatter":{"title":"Rechnungsnummer","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["invoice number","change invoice number","invoice numbering","set invoice number","numbering format","factuurnummer","factuurnummering","rechnungsnummer","numero facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Reset invoice numbering","to":"/settings/opzeggen"}],"follow_up":["How do I set up my company settings?","How do I change the PDF style?","How do I create my first invoice?"]}},"headers":[],"relativePath":"de/faq/invoice-number.md","filePath":"de/faq/invoice-number.md"}');
const _sfc_main = { name: "de/faq/invoice-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Rechnungsnummern werden automatisch vergeben:</p><ol><li>Erstellen Sie eine Rechnung; MyCompanyDesk nummeriert sie fortlaufend, so wie es das Finanzamt erwartet</li><li>Es gibt kein Nummernformat zu konfigurieren</li><li>Sie brauchen eine bestimmte Nummer auf einem Entwurf? Öffnen Sie die Rechnung im Formular und klicken Sie in der Seitenleiste auf &quot;Eigene Nummer eingeben&quot;</li><li>Um die Serie neu zu starten, gehen Sie zu Einstellungen → &quot;Konto kündigen&quot; und nutzen Sie &quot;Rechnungsnummerierung zurücksetzen&quot;</li></ol><p>Tipp: Entwürfe haben noch keine endgültige Nummer. Löschen Sie Testentwürfe, bevor Sie sie abschließen, dann bleibt Ihre Serie lückenlos.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/invoice-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceNumber as default
};
