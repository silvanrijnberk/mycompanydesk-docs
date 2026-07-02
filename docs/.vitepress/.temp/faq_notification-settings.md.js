import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Notification settings","description":"","frontmatter":{"title":"Notification settings","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["notifications","notification settings","email notifications","alerts","meldingen","notificatie instellingen","benachrichtigungen","parametres notification"],"actions":[],"follow_up":["How do I send payment reminders?","How do I change my email?"]}},"headers":[],"relativePath":"faq/notification-settings.md","filePath":"faq/notification-settings.md"}');
const _sfc_main = { name: "faq/notification-settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To manage your notification settings:</p><ol><li>Go to Settings → &quot;Meldingen&quot; (notifications)</li><li>Switch the four notification topics on or off: late invoices, payments received, VAT deadlines, and tips. These arrive in the app and by email.</li><li>On the same page you can also turn on push notifications for the device you are using</li><li>Changes save automatically</li></ol><p>If you are troubleshooting a missing alert, check both the notification toggle and the email address on your account.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/notification-settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notificationSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  notificationSettings as default
};
