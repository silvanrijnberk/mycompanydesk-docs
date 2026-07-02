import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Company setup","description":"","frontmatter":{"title":"Company setup","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["set up company","company setup","company settings","first setup","getting started","initial setup","how to start","where to begin","bedrijf instellen","aan de slag","unternehmen einrichten","configurer entreprise"],"actions":[{"label":"Open company setup","to":"/company"},{"label":"Create first invoice","to":"/invoices/new"}],"follow_up":["How do I add my logo?","How do I create my first invoice?","How do I change the PDF style?"]}},"headers":[],"relativePath":"nl/faq/company-setup.md","filePath":"nl/faq/company-setup.md"}');
const _sfc_main = { name: "nl/faq/company-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Checklist voor de eerste keer instellen:</p><ol><li>Ga naar Bedrijf → Bedrijfsgegevens</li><li>Voeg je officiële bedrijfsnaam, adres en belastinggegevens toe</li><li>Ga naar Bedrijf → Huisstijl &amp; documenten om je logo en documentstijl in te stellen</li><li>Ga naar Bedrijf → Betaalopties om bankgegevens en betaalinstructies toe te voegen</li><li>Ga naar Bedrijf → Facturatie om nummering, betaaltermijnen en pdf-standaarden in te stellen</li><li>Open Mijn account → Taal en Mijn account → Voorkeuren voor je persoonlijke taal- en valutavoorkeuren</li></ol><p>Volgende stap: maak je eerste klant aan!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/company-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const companySetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  companySetup as default
};
