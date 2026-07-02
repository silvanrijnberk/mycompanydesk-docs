import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wachtwoord wijzigen","description":"","frontmatter":{"title":"Wachtwoord wijzigen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change password","update password","new password","password security","wachtwoord wijzigen","nieuw wachtwoord","passwort andern","wie aendere ich mein passwort","changer mot de passe"],"actions":[{"label":"Open sign-in settings","to":"/settings/inloggen"}],"follow_up":["How do I reset my password if I forgot it?","How do I change my email?"]}},"headers":[],"relativePath":"nl/faq/change-password.md","filePath":"nl/faq/change-password.md"}');
const _sfc_main = { name: "nl/faq/change-password.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om je wachtwoord te wijzigen:</p><ol><li>Ga naar Instellingen → &quot;Inloggen&quot;</li><li>Voer je huidige wachtwoord in</li><li>Voer en bevestig je nieuwe wachtwoord</li><li>Klik op &quot;Wachtwoord wijzigen&quot;</li></ol><p>Tip: gebruik een sterk, uniek wachtwoord en hergebruik geen wachtwoorden van andere diensten.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/change-password.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changePassword as default
};
