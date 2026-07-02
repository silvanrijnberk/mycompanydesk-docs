import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Login issues","description":"","frontmatter":{"title":"Login issues","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["cannot login","cant login","login problem","forgot password","reset password","locked out","verification email","email not received","kan niet inloggen","wachtwoord vergeten","passwort vergessen","mot de passe oublie"],"actions":[],"follow_up":["How do I reset my password?","How do I change my password?"]}},"headers":[],"relativePath":"fr/faq/login-issues.md","filePath":"fr/faq/login-issues.md"}');
const _sfc_main = { name: "fr/faq/login-issues.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Si vous avez des problèmes de connexion :</p><ol><li>Essayez « Mot de passe oublié »</li><li>Vérifiez votre dossier spam</li><li>Assurez-vous d&#39;utiliser la bonne adresse e-mail</li><li>Videz le cache et les cookies</li></ol><p>Si le problème persiste, créez un ticket de support.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/login-issues.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loginIssues = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  loginIssues as default
};
