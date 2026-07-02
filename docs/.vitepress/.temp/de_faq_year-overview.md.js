import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Year overview","description":"","frontmatter":{"title":"Year overview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["year overview","annual overview","yearly summary","year report","jaaroverzicht","jaarcijfers","jaarrapport","jahresubersicht","apercu annuel","bilan annuel"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I export data for my accountant?","How do I view profit and loss?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"de/faq/year-overview.md","filePath":"de/faq/year-overview.md"}');
const _sfc_main = { name: "de/faq/year-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So pruefst du ein ganzes Jahr in der App:</p><ol><li>Oeffne Berichte</li><li>Setze den Datumsfilter auf das Jahr, das du ansehen willst</li><li>Oeffne die Uebersichtskarten und die zugehoerigen Berichtsbereiche fuer die Daten, die du pruefen willst</li><li>Exportiere den sichtbaren Bericht, wenn du genau diese Ansicht ausserhalb der App brauchst</li></ol><p>Diese Antwort beschraenkt sich darauf, wo du die Jahresuebersicht in der App findest.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/year-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yearOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yearOverview as default
};
