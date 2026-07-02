import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reverse Charge","description":"","frontmatter":{"title":"Reverse Charge","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["reverse charge","reverse charge invoice","eu invoice","intracommunautair","intracommunity","btw verlegd","reverse charge rechnung","autoliquidation","intra-community"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer VAT number?","How does reverse charge affect my VAT return?","How do I preview an invoice?"]}},"headers":[],"relativePath":"de/faq/reverse-charge.md","filePath":"de/faq/reverse-charge.md"}');
const _sfc_main = { name: "de/faq/reverse-charge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So erstellen Sie eine Reverse-Charge-Rechnung (EU):</p><ol><li>Gehen Sie zu Rechnungen → Neue Rechnung</li><li>Wählen Sie Ihren EU-Kunden und prüfen Sie, ob die USt-IdNr. beim Kunden hinterlegt ist</li><li>Aktivieren Sie im Rechnungsformular den Schalter &quot;Reverse Charge (Steuerschuldnerschaft des Leistungsempfängers)&quot;; MyCompanyDesk schlägt ihn bei EU-Geschäftskunden automatisch vor</li><li>Die MwSt. aller Positionen springt automatisch auf 0 %, manuelle Änderungen sind nicht nötig</li><li>Prüfen Sie in der Vorschau den Reverse-Charge-Hinweis und senden Sie die Rechnung</li></ol><p>Tipp: Der Schalter ist im Rechnungsformular immer verfügbar; Sie müssen vorher nichts in Ihren Einstellungen aktivieren.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/reverse-charge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reverseCharge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reverseCharge as default
};
