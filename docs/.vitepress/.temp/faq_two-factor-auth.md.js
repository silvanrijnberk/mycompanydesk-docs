import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Two-factor authentication","description":"","frontmatter":{"title":"Two-factor authentication","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["two factor","two-factor","2fa","two step","authenticator","mfa","tweestapsverificatie","twee-factor","zwei faktor","authentification deux facteurs","double authentification"],"actions":[{"label":"Open login settings","to":"/settings/inloggen"}],"follow_up":["How do I change my password?","How do I reset a forgotten password?","How do I manage team access?"]}},"headers":[],"relativePath":"faq/two-factor-auth.md","filePath":"faq/two-factor-auth.md"}');
const _sfc_main = { name: "faq/two-factor-auth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Two-factor authentication (2FA) adds a 6-digit code from an authenticator app on top of your password.</p><p>To enable 2FA:</p><ol><li>Go to Settings (&quot;Instellingen&quot;) → &quot;Inloggen&quot;</li><li>Click &quot;Enable authenticator app&quot; and scan the QR code with an authenticator app (Google Authenticator, 1Password, Authy)</li><li>Enter the 6-digit code from the app and click &quot;Verify &amp; enable&quot;</li><li>Save the backup codes that appear. Each code works once when you don&#39;t have your authenticator at hand</li></ol><p>From then on, signing in asks for the 6-digit code after your email and password. Check &quot;Remember this device for 30 days&quot; and trusted devices skip the code.</p><p>On the same page you can also add passkeys (Touch ID, Face ID, Windows Hello or your phone), give each one a name, and remove the ones you no longer use. The login screen then offers passkey sign-in as well.</p><p>Lost access to your authenticator? Enter one of your backup codes at sign-in, or use the &quot;Lost access to your second factor?&quot; link on the login screen. After a 24-hour security delay your second factor is cleared and you can sign in with just your password.</p><p>To turn 2FA off, use the same settings page and confirm with a code from your authenticator app, a backup code, or your password.</p><p>Tip: Download your backup codes as a .txt file and keep them somewhere safe, away from the device you sign in on.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/two-factor-auth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const twoFactorAuth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  twoFactorAuth as default
};
