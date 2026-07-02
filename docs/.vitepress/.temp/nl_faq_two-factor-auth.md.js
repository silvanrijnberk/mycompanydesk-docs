import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tweestapsverificatie","description":"","frontmatter":{"title":"Tweestapsverificatie","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["two factor","two-factor","2fa","two step","authenticator","mfa","tweestapsverificatie","twee-factor","zwei faktor","authentification deux facteurs","double authentification"],"actions":[{"label":"Open login settings","to":"/settings/inloggen"}],"follow_up":["How do I change my password?","How do I reset a forgotten password?","How do I manage team access?"]}},"headers":[],"relativePath":"nl/faq/two-factor-auth.md","filePath":"nl/faq/two-factor-auth.md"}');
const _sfc_main = { name: "nl/faq/two-factor-auth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Tweestapsverificatie (2FA) voegt een 6-cijferige code uit een authenticator-app toe bovenop je wachtwoord.</p><p>Zo schakel je 2FA in:</p><ol><li>Ga naar Instellingen → &quot;Inloggen&quot;</li><li>Klik op &quot;Authenticator-app inschakelen&quot; en scan de QR-code met een authenticator-app (Google Authenticator, 1Password, Authy)</li><li>Voer de 6-cijferige code uit de app in en klik op &quot;Verifiëren &amp; inschakelen&quot;</li><li>Bewaar de back-upcodes die verschijnen. Elke code werkt één keer als je je authenticator niet bij de hand hebt</li></ol><p>Vanaf dan vraagt inloggen na je e-mailadres en wachtwoord om de 6-cijferige code. Vink &quot;Dit apparaat 30 dagen onthouden&quot; aan en vertrouwde apparaten slaan de code over.</p><p>Op dezelfde pagina kun je ook passkeys toevoegen (Touch ID, Face ID, Windows Hello of je telefoon), elke passkey een naam geven en passkeys verwijderen die je niet meer gebruikt. Het inlogscherm biedt daarna ook inloggen met een passkey aan.</p><p>Geen toegang meer tot je authenticator? Vul bij het inloggen een van je back-upcodes in, of gebruik de link &quot;Geen toegang meer tot je tweede factor?&quot; op het inlogscherm. Na een veiligheidswachttijd van 24 uur wordt je tweede factor gewist en kun je weer inloggen met alleen je wachtwoord.</p><p>Wil je 2FA uitschakelen? Dat doe je op dezelfde instellingenpagina en bevestig je met een code uit je authenticator-app, een back-upcode of je wachtwoord.</p><p>Tip: download je back-upcodes als .txt-bestand en bewaar ze op een veilige plek, los van het apparaat waarmee je inlogt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/two-factor-auth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const twoFactorAuth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  twoFactorAuth as default
};
