import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Use the dashboard","description":"","frontmatter":{"title":"Use the dashboard","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["use dashboard","dashboard help","what is on dashboard","dashboard explained","navigate dashboard","dashboard gebruiken","dashboard nutzen","utiliser tableau de bord"],"actions":[],"follow_up":["How do I view overdue invoices?","How do I check my reports?","How do I create an invoice?"]}},"headers":[],"relativePath":"fr/faq/use-dashboard.md","filePath":"fr/faq/use-dashboard.md"}');
const _sfc_main = { name: "fr/faq/use-dashboard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour utiliser le tableau de bord :</p><ol><li>Consultez les alertes, cartes et listes en haut de la page</li><li>Cliquez sur une carte ou un element de liste pour ouvrir les enregistrements sources</li><li>Verifiez si des filtres actifs ou la periode selectionnee influencent le chiffre affiche</li><li>Utilisez les actions associees pour aller vers Factures, Depenses ou Rapports</li></ol><p>Cette reponse se limite a ce que vous voyez sur le tableau de bord et aux emplacements vers lesquels vous pouvez naviguer.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/use-dashboard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  useDashboard as default
};
