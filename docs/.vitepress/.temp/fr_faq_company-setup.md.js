import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Company setup","description":"","frontmatter":{"title":"Company setup","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["set up company","company setup","company settings","first setup","getting started","initial setup","how to start","where to begin","bedrijf instellen","aan de slag","unternehmen einrichten","configurer entreprise"],"actions":[{"label":"Open company setup","to":"/company"},{"label":"Create first invoice","to":"/invoices/new"}],"follow_up":["How do I add my logo?","How do I create my first invoice?","How do I change the PDF style?"]}},"headers":[],"relativePath":"fr/faq/company-setup.md","filePath":"fr/faq/company-setup.md"}');
const _sfc_main = { name: "fr/faq/company-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Checklist de première configuration :</p><ol><li>Allez dans Entreprise → Informations entreprise</li><li>Ajoutez le nom légal, l&#39;adresse et les informations fiscales</li><li>Allez dans Entreprise → Image de marque &amp; documents pour configurer votre logo et le style des documents</li><li>Allez dans Entreprise → Options de paiement pour ajouter les coordonnées bancaires et les instructions de paiement</li><li>Allez dans Entreprise → Facturation pour définir la numérotation, les délais de paiement et les paramètres PDF</li><li>Ouvrez Mon compte → Langue et Mon compte → Préférences pour vos réglages personnels de langue et de devise</li></ol><p>Prochaine étape : créez votre premier client !</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/company-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const companySetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  companySetup as default
};
