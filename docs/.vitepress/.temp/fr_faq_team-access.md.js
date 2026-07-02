import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Team access","description":"","frontmatter":{"title":"Team access","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["team access","access team","add user","invite team","user management","team member","team settings","teamtoegang","gebruiker toevoegen","teamzugang","benutzer einladen","acces equipe","inviter membre","team members","invite teammate","workspace","teamleden","uitnodigen","werkruimte"],"actions":[{"label":"Open team settings","to":"/settings?section=team"}],"follow_up":["How do I set page permissions for a team member?","How do I manage accountant access?","How do I remove a team member?"]}},"headers":[],"relativePath":"fr/faq/team-access.md","filePath":"fr/faq/team-access.md"}');
const _sfc_main = { name: "fr/faq/team-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour gérer les membres d équipe et les accès utilisateurs :</p><ol><li>Accédez à Paramètres de l espace de travail → Équipe</li><li>Cliquez sur « Inviter un membre » pour ajouter une personne</li><li>Cliquez sur « Envoyer l invitation » pour l envoyer</li><li>Utilisez « Gérer l accès » pour définir les rôles et les droits de page</li></ol><p>Les membres reçoivent un e-mail d invitation puis créent leur propre connexion.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/team-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teamAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  teamAccess as default
};
