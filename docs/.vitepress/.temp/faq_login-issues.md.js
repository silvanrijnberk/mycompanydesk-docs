import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Login issues","description":"","frontmatter":{"title":"Login issues","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["cannot login","cant login","login problem","forgot password","reset password","locked out","verification email","email not received","kan niet inloggen","wachtwoord vergeten","passwort vergessen","mot de passe oublie"],"actions":[],"follow_up":["How do I reset my password?","How do I change my password?"]}},"headers":[],"relativePath":"faq/login-issues.md","filePath":"faq/login-issues.md"}');
const _sfc_main = { name: "faq/login-issues.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>If you&#39;re having trouble logging in:</p><ol><li>Try &quot;Forgot Password&quot; on the login page to reset</li><li>Check your spam/junk folder for verification emails</li><li>Make sure you&#39;re using the correct email address</li><li>Clear your browser cache and cookies</li></ol><p>If it still fails, share what step fails and any error message so I can guide the next troubleshooting step.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/login-issues.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loginIssues = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  loginIssues as default
};
