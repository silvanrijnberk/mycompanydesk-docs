import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Meerdere valuta","description":"","frontmatter":{"title":"Meerdere valuta","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["multi currency","different currency","foreign currency","invoice in dollars","invoice in pounds","andere valuta","vreemde valuta","andere wahrung","devise etrangere","dollar invoice","pound invoice"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I set up my company settings?","How do I change my language?"]}},"headers":[],"relativePath":"nl/faq/multi-currency.md","filePath":"nl/faq/multi-currency.md"}');
const _sfc_main = { name: "nl/faq/multi-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>MyCompanyDesk werkt uitsluitend in euro&#39;s. Alle facturen, offertes, uitgaven en rapportages staan in EUR. Er is geen valuta-instelling en geen valutakeuze per document; dit is een bewuste productkeuze, geen ontbrekende voorkeur.</p><p>Factureer je een klant in het buitenland, dan blijft de factuur gewoon in euro&#39;s.</p><p>Tip: Spreek vooraf met buitenlandse klanten af dat je in euro&#39;s factureert. Zij betalen het eurobedrag en een eventuele omrekening gebeurt aan hun kant.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/multi-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const multiCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  multiCurrency as default
};
