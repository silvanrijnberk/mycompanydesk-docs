import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"View charts","description":"","frontmatter":{"title":"View charts","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["view charts","see graphs","financial charts","revenue chart","expense chart","grafieken bekijken","diagramme anzeigen","voir graphiques"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I export my data?","How do I view my reports?"]}},"headers":[],"relativePath":"fr/faq/view-charts.md","filePath":"fr/faq/view-charts.md"}');
const _sfc_main = { name: "fr/faq/view-charts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour consulter les graphiques :</p><ol><li>Allez dans Rapports</li><li>Ouvrez la section graphiques</li><li>Utilisez les filtres de date pour ajuster la periode</li><li>Ouvrez les enregistrements lies si vous voyez un pic ou une baisse</li></ol><p>Si les valeurs du graphique semblent incorrectes, verifiez d abord les filtres actifs.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/view-charts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const viewCharts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  viewCharts as default
};
