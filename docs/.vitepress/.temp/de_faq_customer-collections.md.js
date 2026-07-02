import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kundendaten und Forderungsmanagement","description":"","frontmatter":{"title":"Kundendaten und Forderungsmanagement","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer data collections","improve collections","data improve collections","collections","incasso","klantgegevens incasso","forderungsmanagement","recouvrement"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send payment reminders?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"de/faq/customer-collections.md","filePath":"de/faq/customer-collections.md"}');
const _sfc_main = { name: "de/faq/customer-collections.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So sehen Sie Kundendaten, die in der App für die Rechnungsnachverfolgung relevant sind:</p><ol><li>Öffnen Sie Kunden und wählen Sie den Kunden aus</li><li>Prüfen Sie im Kundenprofil die gespeicherte Rechnungs-E-Mail, Adresse, USt-Nummer und Zahlungsbedingungen</li><li>Prüfen Sie die Karte „Aktuelle Rechnungen&quot; für Status und Gesamtbetrag je Rechnung, und öffnen Sie eine Rechnung für die Zahlungsdetails</li><li>Aktualisieren Sie den Kundendatensatz, wenn Kontakt- oder Rechnungsdaten veraltet sind</li></ol><p>Aktuelle Kontakt- und Rechnungsdaten sorgen dafür, dass Erinnerungen an der richtigen Adresse ankommen, und das ist der größte Hebel, damit Rechnungen pünktlich bezahlt werden.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/customer-collections.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerCollections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerCollections as default
};
