import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rechnung erstellen","description":"","frontmatter":{"title":"Rechnung erstellen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["create invoice","new invoice","make invoice","add invoice","write invoice","send invoice","first invoice","how to invoice","maak factuur","nieuwe factuur","factuur maken","factuur aanmaken","hoe maak ik een factuur","rechnung erstellen","wie erstelle ich eine rechnung","neue rechnung","creer facture","comment creer une facture"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer first?","How do I change the PDF style?","How do I set payment terms?"]}},"headers":[],"relativePath":"de/faq/create-invoice.md","filePath":"de/faq/create-invoice.md"}');
const _sfc_main = { name: "de/faq/create-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So erstellen Sie eine Rechnung:</p><ol><li>Gehen Sie zu Rechnungen und öffnen Sie &quot;Neue Rechnung&quot;</li><li>Wählen Sie einen Kunden oder fügen Sie über die Kundenauswahl einen hinzu</li><li>Fügen Sie Positionen mit Beschreibung, Menge, Preis und MwSt. hinzu</li><li>Legen Sie in der Karte mit den Rechnungsdetails Rechnungsdatum und Fälligkeitsdatum fest</li><li>Nutzen Sie &quot;Als Entwurf speichern&quot;, wenn die Rechnung noch nicht fertig ist, oder &quot;Abschließen&quot;, wenn sie bereit ist (MyCompanyDesk prüft zuerst Ihre USt-IdNr. und IBAN, Sie können sie bei Bedarf direkt eintragen)</li><li>Öffnen Sie nach dem Speichern die Detailseite der Rechnung, um sie anzusehen oder zu senden</li></ol><p>Hat der Kunde noch nicht abgerechnete Zeiteinträge, zieht das Formular sie als Positionen in die Rechnung und ergänzt fehlende Beschreibungen automatisch.</p><p>Tipp: Standardwerte wie Zahlungsfrist und Angebotsgültigkeit finden Sie unter Einstellungen → &quot;Rechnungen und Angebote&quot;; die Rechnungsnummerierung läuft automatisch, dort müssen Sie nichts einstellen. Hinterlegen Sie Ihre USt-IdNr. und IBAN, dann schließen Sie Rechnungen ohne Unterbrechung ab.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/create-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createInvoice as default
};
