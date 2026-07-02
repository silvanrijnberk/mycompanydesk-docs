import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find page","description":"","frontmatter":{"title":"Find page","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where is","find page","navigate to","how to get to","menu location","waar vind ik","waar is","wo finde ich","ou trouver"],"actions":[],"follow_up":["How do I use the dashboard?","How do I search for invoices?"]}},"headers":[],"relativePath":"fr/faq/find-page.md","filePath":"fr/faq/find-page.md"}');
const _sfc_main = { name: "fr/faq/find-page.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour trouver des pages dans l application : • Utilisez le menu principal de navigation • Les sections principales sont Tableau de bord, Factures, Devis, Dépenses, Clients, Récurrent, Projets, Contrats, Propriétés, Rapports, Aperçu, TVA, Entreprise, Paramètres de l espace de travail et Mon compte • Les réglages de l entreprise se trouvent sous Entreprise • Les clés API, l accès équipe et les fonctionnalités se trouvent sous Paramètres de l espace de travail • La langue, l affichage, les notifications, la sécurité et les outils de données se trouvent sous Mon compte</p><p>Astuce : si un élément du menu manque, vérifiez d abord Paramètres de l espace de travail → Fonctionnalités et vos droits de page.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/find-page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findPage as default
};
