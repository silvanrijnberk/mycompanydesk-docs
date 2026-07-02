import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Company setup","description":"","frontmatter":{"title":"Company setup","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["set up company","company setup","company settings","first setup","getting started","initial setup","how to start","where to begin","bedrijf instellen","aan de slag","unternehmen einrichten","configurer entreprise"],"actions":[{"label":"Open company setup","to":"/company"},{"label":"Create first invoice","to":"/invoices/new"}],"follow_up":["How do I add my logo?","How do I create my first invoice?","How do I change the PDF style?"]}},"headers":[],"relativePath":"de/faq/company-setup.md","filePath":"de/faq/company-setup.md"}');
const _sfc_main = { name: "de/faq/company-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Checkliste für die Ersteinrichtung:</p><ol><li>Gehe zu Unternehmen → Unternehmensinfo</li><li>Füge offiziellen Firmennamen, Adresse und Steuerdaten hinzu</li><li>Gehe zu Unternehmen → Marke &amp; Dokumente, um Logo und Dokumentstil einzurichten</li><li>Gehe zu Unternehmen → Zahlungsoptionen, um Bankdaten und Zahlungsanweisungen hinzuzufügen</li><li>Gehe zu Unternehmen → Rechnungsstellung, um Nummerierung, Zahlungsfristen und PDF-Standards festzulegen</li><li>Öffne Mein Konto → Sprache und Mein Konto → Einstellungen für deine persönlichen Sprach- und Währungswerte</li></ol><p>Nächster Schritt: Erstelle deinen ersten Kunden!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/company-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const companySetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  companySetup as default
};
