import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reports overview","description":"","frontmatter":{"title":"Reports overview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["view reports","see overview","financial overview","revenue report","profit report","how much earned","hoeveel verdiend","omzet bekijken","umsatz anzeigen","voir rapports"],"actions":[{"label":"Open reports","to":"/reports"},{"label":"Open VAT","to":"/vat"}],"follow_up":["How do I export my data?","How do I view charts?","How do I see profit and loss?"]}},"headers":[],"relativePath":"de/faq/reports-overview.md","filePath":"de/faq/reports-overview.md"}');
const _sfc_main = { name: "de/faq/reports-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So siehst du Berichte:</p><ol><li>Gehe zu Berichte</li><li>Nutze den Datumsfilter fuer den Zeitraum</li><li>Wende Status- oder Kategoriefilter an, wenn noetig</li><li>Oeffne Diagramme oder Tabellenzeilen, um die zugrunde liegenden Datensaetze zu pruefen</li></ol><p>Wenn eine Zahl nicht stimmt, pruefe zuerst die aktiven Filter und den Datumsbereich.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/reports-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reportsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reportsOverview as default
};
