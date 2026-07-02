import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reports overview","description":"","frontmatter":{"title":"Reports overview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["view reports","see overview","financial overview","revenue report","profit report","how much earned","hoeveel verdiend","omzet bekijken","umsatz anzeigen","voir rapports"],"actions":[{"label":"Open reports","to":"/reports"},{"label":"Open VAT","to":"/vat"}],"follow_up":["How do I export my data?","How do I view charts?","How do I see profit and loss?"]}},"headers":[],"relativePath":"faq/reports-overview.md","filePath":"faq/reports-overview.md"}');
const _sfc_main = { name: "faq/reports-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To view your reports:</p><ol><li>Go to Reports</li><li>Switch between the five views: Overview, P&amp;L, Cash Flow, Clients, and Forecast</li><li>Use the filters to set the period granularity (year, quarter, month, week, or day), pick the year, include open invoices, or compare with another year</li></ol><p>There are no status or category filters on reports; the period and comparison filters apply across all views.</p><p>Tip: If a number looks wrong, verify the active period and comparison settings first.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/reports-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reportsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reportsOverview as default
};
