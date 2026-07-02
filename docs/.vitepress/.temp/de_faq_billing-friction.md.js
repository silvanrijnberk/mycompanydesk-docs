import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Billing and subscription help","description":"","frontmatter":{"title":"Billing and subscription help","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["billing friction","reduce billing","billing errors","invoice errors","reduce errors","facturatiefouten","facturatie fouten","rechnungsfehler","fehler reduzieren","erreurs facturation"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I set up customer profiles?","How do I preview invoices before sending?"]}},"headers":[],"relativePath":"de/faq/billing-friction.md","filePath":"de/faq/billing-friction.md"}');
const _sfc_main = { name: "de/faq/billing-friction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So verringerst du Rechnungsfehler in der App:</p><ol><li>Oeffne Kunden und ergaenze Rechnungs-E-Mail, Adresse, USt-Nummer und Standard-Zahlungsbedingungen beim Kunden</li><li>Verwende danach diesen gespeicherten Kunden beim Erstellen der Rechnung statt alles neu einzutippen</li><li>Oeffne vor dem Senden die Vorschau, um Kundendaten, Positionen und PDF-Layout zu pruefen</li><li>Wenn weiter falsche Informationen erscheinen, aktualisiere zuerst den Kundendatensatz oder die Firmeneinstellungen und lade dann den Entwurf neu</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/billing-friction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billingFriction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billingFriction as default
};
