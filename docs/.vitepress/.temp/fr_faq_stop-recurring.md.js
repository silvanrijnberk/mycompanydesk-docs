import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Arrêter une facture récurrente","description":"","frontmatter":{"title":"Arrêter une facture récurrente","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["stop recurring","cancel recurring","pause recurring","disable recurring","end recurring","terugkerend stoppen","terugkerend annuleren","wiederkehrend stoppen","arreter recurrent"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I edit a recurring item?","How do I create a new recurring invoice?"]}},"headers":[],"relativePath":"fr/faq/stop-recurring.md","filePath":"fr/faq/stop-recurring.md"}');
const _sfc_main = { name: "fr/faq/stop-recurring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour arrêter une facture récurrente :</p><ol><li>Allez dans Factures récurrentes</li><li>Ouvrez la facture récurrente</li><li>Cliquez sur &quot;Mettre en pause&quot; sur la page de détail ; le même bouton affiche ensuite &quot;Activer&quot; pour reprendre plus tard</li><li>Tant qu&#39;elle est en pause, aucune nouvelle facture n&#39;est générée</li></ol><p>Il n&#39;y a pas de champ de date de fin ; la mise en pause est la façon d&#39;arrêter la planification, et l&#39;historique des factures déjà générées reste intact. Il n&#39;y a pas non plus d&#39;actions groupées dans la liste des factures récurrentes, mettez donc chaque élément en pause individuellement. Les dépenses récurrentes fonctionnent de la même manière, avec leurs propres boutons Mettre en pause et Activer.</p><p>Astuce : la mise en pause est sans risque. Rien n&#39;est supprimé, et un clic sur &quot;Activer&quot; relance la planification.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/stop-recurring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stopRecurring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stopRecurring as default
};
