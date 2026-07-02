import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Changer le mot de passe","description":"","frontmatter":{"title":"Changer le mot de passe","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change password","update password","new password","password security","wachtwoord wijzigen","nieuw wachtwoord","passwort andern","wie aendere ich mein passwort","changer mot de passe"],"actions":[{"label":"Open sign-in settings","to":"/settings/inloggen"}],"follow_up":["How do I reset my password if I forgot it?","How do I change my email?"]}},"headers":[],"relativePath":"fr/faq/change-password.md","filePath":"fr/faq/change-password.md"}');
const _sfc_main = { name: "fr/faq/change-password.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour changer votre mot de passe :</p><ol><li>Allez dans Paramètres → « Connexion »</li><li>Entrez votre mot de passe actuel</li><li>Entrez puis confirmez votre nouveau mot de passe</li><li>Cliquez sur « Changer le mot de passe »</li></ol><p>Conseil : utilisez un mot de passe fort et unique, et évitez de réutiliser des mots de passe d&#39;autres services.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/change-password.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changePassword as default
};
