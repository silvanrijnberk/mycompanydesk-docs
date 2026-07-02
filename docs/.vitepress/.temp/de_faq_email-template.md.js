import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"E-Mail-Vorlagen","description":"","frontmatter":{"title":"E-Mail-Vorlagen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["email template","customize email","invoice email message","email text","change email message","email sjabloon","email aanpassen","e-mail vorlage","modele email","personnaliser email"],"actions":[{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I send an invoice by email?","How do I change the PDF style?"]}},"headers":[],"relativePath":"de/faq/email-template.md","filePath":"de/faq/email-template.md"}');
const _sfc_main = { name: "de/faq/email-template.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>E-Mail-Vorlagen können nicht mehr bearbeitet werden. MyCompanyDesk verwendet standardmäßige, gut erprobte Texte für Rechnungs-, Angebots- und Erinnerungs-E-Mails, in Ihrer Dokumentsprache.</p><p>Was Sie anpassen können:</p><ol><li>Den Absender: Gehen Sie zu Einstellungen → E-Mail und wählen Sie Ihre eigene Domain (Pro), Gmail oder Outlook</li><li>Ihre Grußformel: Füllen Sie auf derselben Seite Ihre Support-E-Mail, Website und Social Links aus; sie erscheinen unter jeder E-Mail</li><li>Eine einzelne E-Mail: Im Versandfenster passen Sie Empfänger, Betreff und Nachricht an, bevor die E-Mail verschickt wird</li></ol><p>Tipp: Die Angaben in Ihrer Grußformel teilen Sie mit Ihren Unternehmensdaten; einmal ausfüllen genügt, damit jede E-Mail vollständig ist.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/email-template.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const emailTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  emailTemplate as default
};
