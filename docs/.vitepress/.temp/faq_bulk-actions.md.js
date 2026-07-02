import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bulk actions","description":"","frontmatter":{"title":"Bulk actions","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bulk action","bulk delete","bulk send","select multiple","batch operation","meerdere selecteren","bulk verwijderen","massenbearbeitung","action en masse"],"actions":[],"follow_up":["How do I delete multiple invoices?","How do I export selected items?"]}},"headers":[],"relativePath":"faq/bulk-actions.md","filePath":"faq/bulk-actions.md"}');
const _sfc_main = { name: "faq/bulk-actions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To perform bulk actions:</p><ol><li>Go to the list view (Invoices, Expenses, or Customers)</li><li>Select multiple items using the checkboxes</li><li>Use the bulk action menu at the top of the list</li><li>Choose the action (e.g. delete, send, export)</li><li>Confirm the bulk operation</li></ol><p>Tip: Use filters first to narrow down the list, then select all visible items for efficient batch processing.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/bulk-actions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkActions as default
};
