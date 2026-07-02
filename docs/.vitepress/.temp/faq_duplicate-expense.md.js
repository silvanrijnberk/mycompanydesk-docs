import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Duplicate expense","description":"","frontmatter":{"title":"Duplicate expense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["duplicate expense","copy expense","clone expense","reuse expense","uitgave kopieren","uitgave dupliceren","ausgabe kopieren","dupliquer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I set up recurring expenses?","How do I edit an expense?"]}},"headers":[],"relativePath":"faq/duplicate-expense.md","filePath":"faq/duplicate-expense.md"}');
const _sfc_main = { name: "faq/duplicate-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To duplicate an expense:</p><ol><li>Open the paid expense you want to copy. Duplicate is only available on paid expenses; an unpaid expense shows &quot;Mark as Paid&quot; instead</li><li>Click &quot;Duplicate&quot; in the header, or use it from the &quot;Actions&quot; card in the sidebar</li><li>A new unpaid copy is created with the same details, dated today</li><li>Adjust the amount or other details as needed</li></ol><p>Tip: Useful for regular expenses that occur with slight variations each time.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/duplicate-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duplicateExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  duplicateExpense as default
};
