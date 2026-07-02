import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Authentification à deux facteurs","description":"","frontmatter":{"title":"Authentification à deux facteurs","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["two factor","two-factor","2fa","two step","authenticator","mfa","tweestapsverificatie","twee-factor","zwei faktor","authentification deux facteurs","double authentification"],"actions":[{"label":"Open login settings","to":"/settings/inloggen"}],"follow_up":["How do I change my password?","How do I reset a forgotten password?","How do I manage team access?"]}},"headers":[],"relativePath":"fr/faq/two-factor-auth.md","filePath":"fr/faq/two-factor-auth.md"}');
const _sfc_main = { name: "fr/faq/two-factor-auth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>L&#39;authentification à deux facteurs (2FA) ajoute un code à 6 chiffres issu d&#39;une application d&#39;authentification en plus de votre mot de passe.</p><p>Pour activer la 2FA :</p><ol><li>Allez dans Paramètres → &quot;Connexion&quot;</li><li>Cliquez sur &quot;Activer l&#39;application d&#39;authentification&quot; et scannez le QR code avec une application d&#39;authentification (Google Authenticator, 1Password, Authy)</li><li>Saisissez le code à 6 chiffres de l&#39;application et cliquez sur &quot;Vérifier et activer&quot;</li><li>Conservez les codes de secours affichés. Chaque code fonctionne une seule fois quand vous n&#39;avez pas votre authentificateur sous la main</li></ol><p>Dès lors, la connexion demande le code à 6 chiffres après votre e-mail et votre mot de passe. Activez l&#39;option pour mémoriser cet appareil pendant 30 jours et les appareils de confiance sautent cette étape.</p><p>Sur la même page, vous pouvez aussi ajouter des passkeys (Touch ID, Face ID, Windows Hello ou votre téléphone), donner un nom à chaque passkey et supprimer celles que vous n&#39;utilisez plus. L&#39;écran de connexion propose ensuite également la connexion par passkey.</p><p>Plus d&#39;accès à votre authentificateur ? Saisissez l&#39;un de vos codes de secours à la connexion, ou utilisez le lien &quot;Vous n&#39;avez plus accès à votre deuxième facteur ?&quot; sur l&#39;écran de connexion. Après un délai de sécurité de 24 heures, votre deuxième facteur est effacé et vous pouvez vous reconnecter avec votre seul mot de passe.</p><p>Pour désactiver la 2FA, utilisez la même page de paramètres et confirmez avec un code de votre application d&#39;authentification, un code de secours ou votre mot de passe.</p><p>Astuce : téléchargez vos codes de secours au format .txt et conservez-les en lieu sûr, à l&#39;écart de l&#39;appareil avec lequel vous vous connectez.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/two-factor-auth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const twoFactorAuth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  twoFactorAuth as default
};
