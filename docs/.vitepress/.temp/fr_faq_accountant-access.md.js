import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Accountant access","description":"","frontmatter":{"title":"Accountant access","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["accountant access","accountant permissions","add accountant","invite accountant","accountant toevoegen","boekhouder","buchhalter einladen","buchhalter zugang","comptable acces","ajouter comptable","accountant invite","revoke accountant"],"actions":[{"label":"Open team settings","to":"/settings?section=team"}],"follow_up":["How do I set page permissions?","How do I invite a team member?","How do I revoke access?"]}},"headers":[],"relativePath":"fr/faq/accountant-access.md","filePath":"fr/faq/accountant-access.md"}');
const _sfc_main = { name: "fr/faq/accountant-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour gérer l accès comptable :</p><ol><li>Accédez à Paramètres de l espace de travail → Équipe</li><li>Dans la section Comptables, cliquez sur « Ajouter un comptable »</li><li>Saisissez le nom et l e-mail, et si besoin le cabinet ou le téléphone</li><li>Cliquez sur « Inviter » pour donner un accès au compte</li><li>Utilisez « Gérer l accès » pour définir les permissions de page</li></ol><p>Les statuts courants sont contact seul, invité, actif et révoqué.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/accountant-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accountantAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  accountantAccess as default
};
