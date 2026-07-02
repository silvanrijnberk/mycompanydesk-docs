import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"E-mailsjablonen","description":"","frontmatter":{"title":"E-mailsjablonen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["email template","customize email","invoice email message","email text","change email message","email sjabloon","email aanpassen","e-mail vorlage","modele email","personnaliser email"],"actions":[{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I send an invoice by email?","How do I change the PDF style?"]}},"headers":[],"relativePath":"nl/faq/email-template.md","filePath":"nl/faq/email-template.md"}');
const _sfc_main = { name: "nl/faq/email-template.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>E-mailsjablonen kun je niet meer bewerken. MyCompanyDesk gebruikt standaard, goed geteste teksten voor factuur-, offerte- en herinneringsmails, in je documenttaal.</p><p>Wat je wel kunt aanpassen:</p><ol><li>De afzender: ga naar Instellingen → E-mail en kies je eigen domein (Pro), Gmail of Outlook</li><li>Je afsluiter: vul op dezelfde pagina je support-e-mail, website en social links in; die verschijnen onder elke e-mail</li><li>Een losse e-mail: in het verzendvenster pas je de ontvanger, het onderwerp en het bericht aan voordat de e-mail de deur uit gaat</li></ol><p>Tip: De gegevens in je afsluiter deel je met je bedrijfsgegevens, dus één keer invullen houdt elke e-mail compleet.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/email-template.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const emailTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  emailTemplate as default
};
