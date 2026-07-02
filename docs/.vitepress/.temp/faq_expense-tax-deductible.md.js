import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Expense tax-deductible","description":"","frontmatter":{"title":"Expense tax-deductible","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["tax deductible","deductible expenses","which expenses deductible","tax write off","aftrekbare kosten","welke kosten aftrekbaar","absetzbare ausgaben","depenses deductibles","charges deductibles"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I categorize expenses?","How do I upload a receipt?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"faq/expense-tax-deductible.md","filePath":"faq/expense-tax-deductible.md"}');
const _sfc_main = { name: "faq/expense-tax-deductible.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To track deductibility in the app:</p><ol><li>Open the expense</li><li>Use the deductible/non-deductible toggle for that record</li><li>Check the category and VAT settings on the same expense</li><li>Save the expense and use report filters to review the recorded totals</li></ol><p>The app can record this setting, but it does not decide whether an expense is legally deductible.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/expense-tax-deductible.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseTaxDeductible = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseTaxDeductible as default
};
