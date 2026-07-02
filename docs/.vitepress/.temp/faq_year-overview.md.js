import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Year overview","description":"","frontmatter":{"title":"Year overview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["year overview","annual overview","yearly summary","year report","jaaroverzicht","jaarcijfers","jaarrapport","jahresubersicht","apercu annuel","bilan annuel"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I export data for my accountant?","How do I view profit and loss?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"faq/year-overview.md","filePath":"faq/year-overview.md"}');
const _sfc_main = { name: "faq/year-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To review a full year in the app:</p><ol><li>Open Reports</li><li>Set the period filter to Year and pick the year you want to inspect</li><li>The Overview shows the headline figures; switch to the P&amp;L, Cash Flow, Clients, or Forecast view for more detail</li><li>Turn on the comparison filter to see the year next to a previous year</li></ol><p>Tip: The include open invoices filter controls whether unpaid invoices count toward the totals.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/year-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yearOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yearOverview as default
};
