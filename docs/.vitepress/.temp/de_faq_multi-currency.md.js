import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mehrere Währungen","description":"","frontmatter":{"title":"Mehrere Währungen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["multi currency","different currency","foreign currency","invoice in dollars","invoice in pounds","andere valuta","vreemde valuta","andere wahrung","devise etrangere","dollar invoice","pound invoice"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I set up my company settings?","How do I change my language?"]}},"headers":[],"relativePath":"de/faq/multi-currency.md","filePath":"de/faq/multi-currency.md"}');
const _sfc_main = { name: "de/faq/multi-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>MyCompanyDesk arbeitet ausschließlich in Euro. Alle Rechnungen, Angebote, Ausgaben und Berichte sind in EUR. Es gibt keine Währungseinstellung und keine Währungsauswahl pro Dokument; das ist eine bewusste Produktentscheidung, keine fehlende Einstellung.</p><p>Wenn Sie einem Kunden im Ausland eine Rechnung stellen, bleibt die Rechnung trotzdem in Euro.</p><p>Tipp: Vereinbaren Sie mit ausländischen Kunden im Voraus, dass Sie in Euro fakturieren. Der Kunde zahlt den Eurobetrag, eine eventuelle Umrechnung erfolgt auf seiner Seite.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/multi-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const multiCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  multiCurrency as default
};
