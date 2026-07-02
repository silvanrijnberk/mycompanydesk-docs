import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Meldingsinstellingen","description":"","frontmatter":{"title":"Meldingsinstellingen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["notifications","notification settings","email notifications","alerts","meldingen","notificatie instellingen","benachrichtigungen","parametres notification"],"actions":[],"follow_up":["How do I send payment reminders?","How do I change my email?"]}},"headers":[],"relativePath":"nl/faq/notification-settings.md","filePath":"nl/faq/notification-settings.md"}');
const _sfc_main = { name: "nl/faq/notification-settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om je meldingsinstellingen te beheren:</p><ol><li>Ga naar Instellingen → &quot;Meldingen&quot;</li><li>Zet de vier meldingsonderwerpen aan of uit: te late facturen, ontvangen betalingen, BTW-deadlines en tips. Je krijgt ze in de app en per e-mail.</li><li>Op dezelfde pagina zet je ook pushmeldingen aan voor het apparaat dat je gebruikt</li><li>Wijzigingen worden automatisch opgeslagen</li></ol><p>Mis je een melding? Controleer dan zowel de meldingsschakelaar als het e-mailadres van je account.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/notification-settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notificationSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  notificationSettings as default
};
