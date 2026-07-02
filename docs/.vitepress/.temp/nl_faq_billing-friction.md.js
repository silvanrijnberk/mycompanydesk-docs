import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Billing and subscription help","description":"","frontmatter":{"title":"Billing and subscription help","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["billing friction","reduce billing","billing errors","invoice errors","reduce errors","facturatiefouten","facturatie fouten","rechnungsfehler","fehler reduzieren","erreurs facturation"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I set up customer profiles?","How do I preview invoices before sending?"]}},"headers":[],"relativePath":"nl/faq/billing-friction.md","filePath":"nl/faq/billing-friction.md"}');
const _sfc_main = { name: "nl/faq/billing-friction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om factuurfouten in de app te beperken:</p><ol><li>Open Klanten en vul het factuur-e-mailadres, adres, BTW-nummer en standaard betaalvoorwaarden van de klant in</li><li>Gebruik daarna die opgeslagen klant bij het aanmaken van de factuur in plaats van alles opnieuw te typen</li><li>Bekijk eerst de factuurpreview zodat je klantgegevens, factuurregels en PDF-opmaak kunt controleren</li><li>Verschijnt er nog steeds verkeerde informatie, werk dan eerst het klantrecord of de bedrijfsinstellingen bij en vernieuw daarna het concept</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/billing-friction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billingFriction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billingFriction as default
};
