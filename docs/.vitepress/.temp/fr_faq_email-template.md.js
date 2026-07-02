import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Modèles d'e-mail","description":"","frontmatter":{"title":"Modèles d'e-mail","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["email template","customize email","invoice email message","email text","change email message","email sjabloon","email aanpassen","e-mail vorlage","modele email","personnaliser email"],"actions":[{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I send an invoice by email?","How do I change the PDF style?"]}},"headers":[],"relativePath":"fr/faq/email-template.md","filePath":"fr/faq/email-template.md"}`);
const _sfc_main = { name: "fr/faq/email-template.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Les modèles d&#39;e-mail ne peuvent plus être modifiés. MyCompanyDesk utilise des textes standard et éprouvés pour les e-mails de facture, de devis et de rappel, dans la langue de vos documents.</p><p>Ce que vous pouvez ajuster :</p><ol><li>L&#39;expéditeur : accédez à Paramètres → E-mail et choisissez votre propre domaine (Pro), Gmail ou Outlook</li><li>Votre signature : sur la même page, remplissez votre e-mail de support, votre site web et vos liens sociaux ; ils apparaissent sous chaque e-mail</li><li>Un e-mail ponctuel : dans la fenêtre d&#39;envoi, vous pouvez ajuster le destinataire, l&#39;objet et le message avant l&#39;envoi</li></ol><p>Astuce : Les informations de votre signature sont partagées avec les informations de votre entreprise ; les remplir une seule fois suffit pour que chaque e-mail soit complet.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/email-template.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const emailTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  emailTemplate as default
};
