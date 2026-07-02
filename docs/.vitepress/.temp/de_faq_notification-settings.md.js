import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Benachrichtigungseinstellungen","description":"","frontmatter":{"title":"Benachrichtigungseinstellungen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["notifications","notification settings","email notifications","alerts","meldingen","notificatie instellingen","benachrichtigungen","parametres notification"],"actions":[],"follow_up":["How do I send payment reminders?","How do I change my email?"]}},"headers":[],"relativePath":"de/faq/notification-settings.md","filePath":"de/faq/notification-settings.md"}');
const _sfc_main = { name: "de/faq/notification-settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So verwalten Sie Ihre Benachrichtigungseinstellungen:</p><ol><li>Gehen Sie zu Einstellungen → „Benachrichtigungen&quot;</li><li>Schalten Sie die vier Benachrichtigungsthemen ein oder aus: überfällige Rechnungen, eingegangene Zahlungen, MwSt.-Fristen und Tipps. Sie erhalten sie in der App und per E-Mail.</li><li>Auf derselben Seite aktivieren Sie auch Push-Benachrichtigungen für das Gerät, das Sie gerade nutzen</li><li>Änderungen werden automatisch gespeichert</li></ol><p>Wenn eine Benachrichtigung ausbleibt, prüfen Sie sowohl den Schalter als auch die E-Mail-Adresse Ihres Kontos.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/notification-settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notificationSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  notificationSettings as default
};
