import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change password","description":"","frontmatter":{"title":"Change password","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change password","update password","new password","password security","wachtwoord wijzigen","nieuw wachtwoord","passwort andern","wie aendere ich mein passwort","changer mot de passe"],"actions":[{"label":"Open sign-in settings","to":"/settings/inloggen"}],"follow_up":["How do I reset my password if I forgot it?","How do I change my email?"]}},"headers":[],"relativePath":"faq/change-password.md","filePath":"faq/change-password.md"}');
const _sfc_main = { name: "faq/change-password.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To change your password:</p><ol><li>Go to Settings → &quot;Inloggen&quot; (signing in)</li><li>Enter your current password</li><li>Enter and confirm your new password</li><li>Click &quot;Change password&quot;</li></ol><p>Tip: Use a strong unique password and avoid reusing passwords from other services.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/change-password.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changePassword as default
};
