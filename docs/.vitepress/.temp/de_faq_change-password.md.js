import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Passwort ändern","description":"","frontmatter":{"title":"Passwort ändern","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change password","update password","new password","password security","wachtwoord wijzigen","nieuw wachtwoord","passwort andern","wie aendere ich mein passwort","changer mot de passe"],"actions":[{"label":"Open sign-in settings","to":"/settings/inloggen"}],"follow_up":["How do I reset my password if I forgot it?","How do I change my email?"]}},"headers":[],"relativePath":"de/faq/change-password.md","filePath":"de/faq/change-password.md"}');
const _sfc_main = { name: "de/faq/change-password.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So ändern Sie Ihr Passwort:</p><ol><li>Gehen Sie zu Einstellungen → „Anmeldung&quot;</li><li>Geben Sie Ihr aktuelles Passwort ein</li><li>Geben Sie Ihr neues Passwort ein und bestätigen Sie es</li><li>Klicken Sie auf „Passwort ändern&quot;</li></ol><p>Tipp: Verwenden Sie ein starkes, einzigartiges Passwort und vermeiden Sie die Wiederverwendung von Passwörtern anderer Dienste.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/change-password.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changePassword as default
};
