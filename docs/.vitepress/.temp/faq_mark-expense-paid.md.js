import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mark an expense as paid","description":"","frontmatter":{"title":"Mark an expense as paid","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["mark expense paid","expense paid","expense payment","pay expense","expense as paid","uitgave betaald","uitgave als betaald","ausgabe bezahlt","depense payee"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I view all unpaid expenses?","How do I export expense data?"]}},"headers":[],"relativePath":"faq/mark-expense-paid.md","filePath":"faq/mark-expense-paid.md"}');
const _sfc_main = { name: "faq/mark-expense-paid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To mark an expense as paid:</p><ol><li>Open the expense from the list</li><li>Click &quot;Mark as Paid&quot;</li><li>The status updates to Paid right away</li></ol><p>That single click is all it takes: there is no payment date prompt and no separate save step.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/mark-expense-paid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markExpensePaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markExpensePaid as default
};
