import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zwei-Faktor-Authentifizierung","description":"","frontmatter":{"title":"Zwei-Faktor-Authentifizierung","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["two factor","two-factor","2fa","two step","authenticator","mfa","tweestapsverificatie","twee-factor","zwei faktor","authentification deux facteurs","double authentification"],"actions":[{"label":"Open login settings","to":"/settings/inloggen"}],"follow_up":["How do I change my password?","How do I reset a forgotten password?","How do I manage team access?"]}},"headers":[],"relativePath":"de/faq/two-factor-auth.md","filePath":"de/faq/two-factor-auth.md"}');
const _sfc_main = { name: "de/faq/two-factor-auth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Die Zwei-Faktor-Authentifizierung (2FA) ergänzt Ihr Passwort um einen 6-stelligen Code aus einer Authenticator-App.</p><p>So aktivieren Sie 2FA:</p><ol><li>Gehen Sie zu Einstellungen → &quot;Anmeldung&quot;</li><li>Klicken Sie auf &quot;Authenticator-App aktivieren&quot; und scannen Sie den QR-Code mit einer Authenticator-App (Google Authenticator, 1Password, Authy)</li><li>Geben Sie den 6-stelligen Code aus der App ein und klicken Sie auf &quot;Prüfen &amp; aktivieren&quot;</li><li>Bewahren Sie die angezeigten Backup-Codes auf. Jeder Code funktioniert einmal, wenn Sie Ihren Authenticator nicht zur Hand haben</li></ol><p>Ab dann fragt die Anmeldung nach E-Mail-Adresse und Passwort zusätzlich nach dem 6-stelligen Code. Aktivieren Sie die Option, dieses Gerät 30 Tage zu merken, und vertrauenswürdige Geräte überspringen den Code.</p><p>Auf derselben Seite können Sie außerdem Passkeys hinzufügen (Touch ID, Face ID, Windows Hello oder Ihr Telefon), jedem Passkey einen Namen geben und nicht mehr genutzte Passkeys entfernen. Der Anmeldebildschirm bietet danach auch die Anmeldung per Passkey an.</p><p>Kein Zugriff mehr auf Ihren Authenticator? Geben Sie bei der Anmeldung einen Ihrer Backup-Codes ein, oder nutzen Sie den Link &quot;Kein Zugriff mehr auf Ihren zweiten Faktor?&quot; auf dem Anmeldebildschirm. Nach einer Sicherheitswartezeit von 24 Stunden wird Ihr zweiter Faktor gelöscht und Sie können sich wieder nur mit Ihrem Passwort anmelden.</p><p>Zum Deaktivieren von 2FA nutzen Sie dieselbe Einstellungsseite und bestätigen mit einem Code aus Ihrer Authenticator-App, einem Backup-Code oder Ihrem Passwort.</p><p>Tipp: Laden Sie Ihre Backup-Codes als .txt-Datei herunter und bewahren Sie sie an einem sicheren Ort auf, getrennt von dem Gerät, mit dem Sie sich anmelden.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/two-factor-auth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const twoFactorAuth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  twoFactorAuth as default
};
