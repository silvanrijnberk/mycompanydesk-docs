import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fehlgeschlagene Rechnungs-E-Mail","description":"","frontmatter":{"title":"Fehlgeschlagene Rechnungs-E-Mail","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["failed invoice email","invoice email failed","failed send invoice","invoice not sending","invoice email issue","fix failed invoice email","mislukte factuur-e-mail","factuurmail mislukt","factuur e-mail mislukt","factuur versturen mislukt","hoe los ik een mislukte factuur-e-mail op","fehlgeschlagene rechnungs-e-mail","rechnungs-e-mail fehlgeschlagen","rechnung senden fehlgeschlagen","wie behebe ich eine fehlgeschlagene rechnungs-e-mail","e-mail de facture echoue","email facture echoue","envoi facture echec","comment corriger un e-mail de facture echoue"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I change the customer email?","How do I preview the invoice first?","Where do I check email delivery settings?"]}},"headers":[],"relativePath":"de/faq/failed-invoice-email.md","filePath":"de/faq/failed-invoice-email.md"}');
const _sfc_main = { name: "de/faq/failed-invoice-email.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So beheben Sie eine fehlgeschlagene Rechnungs-E-Mail:</p><ol><li>Prüfen Sie, ob beim Kunden die richtige E-Mail-Adresse hinterlegt ist</li><li>Öffnen Sie die Detailseite der Rechnung und sehen Sie sich den Zustellstatus oder eine angezeigte Fehlermeldung an</li><li>Überprüfen Sie Ihre E-Mail-Einstellungen unter Einstellungen → &quot;E-Mail&quot;</li><li>Senden Sie die Rechnung erneut; auch Entwürfe lassen sich per E-Mail versenden, Senden ist die Hauptaktion und schließt den Entwurf im selben Schritt ab</li><li>Kommt die E-Mail weiterhin nicht an, bitten Sie den Kunden, den Spam- oder Junk-Ordner zu prüfen</li></ol><p>Tipp: Sehen Sie sich zuerst die Vorschau der Rechnung an, wenn Sie vor dem erneuten Senden Kunde und Dokument bestätigen möchten.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/failed-invoice-email.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const failedInvoiceEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  failedInvoiceEmail as default
};
