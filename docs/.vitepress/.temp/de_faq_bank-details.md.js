import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bankdaten","description":"","frontmatter":{"title":"Bankdaten","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bank details","add bank account","bank information","where do i add my bank details","iban","payment details","bankgegevens","waar voeg ik mijn bankgegevens toe","bankrekening toevoegen","bankdaten","wo trage ich meine bankdaten ein","coordonnees bancaires","ou ajouter mes coordonnees bancaires"],"actions":[{"label":"Open payment settings","to":"/settings/betalen"}],"follow_up":["How do I add payment methods to invoices?","How do I set up my company settings?"]}},"headers":[],"relativePath":"de/faq/bank-details.md","filePath":"de/faq/bank-details.md"}');
const _sfc_main = { name: "de/faq/bank-details.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So fügen Sie Bankdaten hinzu oder aktualisieren sie:</p><ol><li>Gehen Sie zu Einstellungen und öffnen Sie „Zahlung&quot;</li><li>Tragen Sie Ihre IBAN und den Namen auf dem Konto in der Bankkonto-Karte ein</li><li>Änderungen werden automatisch gespeichert</li></ol><p>Sobald eine IBAN eingetragen ist, wird die Banküberweisung auf Ihren Rechnungen automatisch aktiviert und ein Zahlungs-QR-Code auf die Rechnung gedruckt, den Kunden scannen können, um sofort den richtigen Betrag zu zahlen. Ein BIC-Feld gibt es nicht; es wird nicht benötigt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/bank-details.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankDetails as default
};
