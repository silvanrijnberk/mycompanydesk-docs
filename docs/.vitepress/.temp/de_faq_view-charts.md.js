import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"View charts","description":"","frontmatter":{"title":"View charts","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["view charts","see graphs","financial charts","revenue chart","expense chart","grafieken bekijken","diagramme anzeigen","voir graphiques"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I export my data?","How do I view my reports?"]}},"headers":[],"relativePath":"de/faq/view-charts.md","filePath":"de/faq/view-charts.md"}');
const _sfc_main = { name: "de/faq/view-charts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So siehst du Diagramme und Grafiken:</p><ol><li>Gehe zu Berichte</li><li>Oeffne den Diagrammbereich</li><li>Nutze Datumsfilter, um den Zeitraum anzupassen</li><li>Oeffne zugehoerige Datensaetze, wenn du eine Spitze oder einen Rueckgang siehst</li></ol><p>Wenn Diagrammwerte nicht stimmen, pruefe zuerst die aktiven Filter.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/view-charts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const viewCharts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  viewCharts as default
};
