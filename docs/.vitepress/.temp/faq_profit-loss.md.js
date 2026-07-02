import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Profit and loss","description":"","frontmatter":{"title":"Profit and loss","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["profit and loss","profit loss","income statement","p&l","winst en verlies","resultatenrekening","gewinn und verlust","compte de resultat","resultat net"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I view charts?","How do I export my reports?","How do I see my year overview?"]}},"headers":[],"relativePath":"faq/profit-loss.md","filePath":"faq/profit-loss.md"}');
const _sfc_main = { name: "faq/profit-loss.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To open the profit and loss view in the app:</p><ol><li>Open Reports</li><li>Switch to the P&amp;L view</li><li>Select the period you want to inspect with the period and year filters</li><li>Review the figures for that period; the Profit, Revenue, and Expenses tabs inside the view let you zoom in on each side</li></ol><p>Turn on the comparison filter to see the same period next to a previous year.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/profit-loss.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profitLoss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  profitLoss as default
};
