import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paramètres de notification","description":"","frontmatter":{"title":"Paramètres de notification","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["notifications","notification settings","email notifications","alerts","meldingen","notificatie instellingen","benachrichtigungen","parametres notification"],"actions":[],"follow_up":["How do I send payment reminders?","How do I change my email?"]}},"headers":[],"relativePath":"fr/faq/notification-settings.md","filePath":"fr/faq/notification-settings.md"}');
const _sfc_main = { name: "fr/faq/notification-settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour gérer vos paramètres de notification :</p><ol><li>Allez dans Paramètres → « Notifications »</li><li>Activez ou désactivez les quatre sujets de notification : factures en retard, paiements reçus, échéances de TVA et conseils. Vous les recevez dans l&#39;application et par e-mail.</li><li>Sur la même page, vous pouvez aussi activer les notifications push pour l&#39;appareil que vous utilisez</li><li>Les modifications sont enregistrées automatiquement</li></ol><p>Si une alerte vous échappe, vérifiez à la fois l&#39;interrupteur de notification et l&#39;adresse e-mail de votre compte.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/notification-settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const notificationSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  notificationSettings as default
};
