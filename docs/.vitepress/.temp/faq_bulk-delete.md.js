import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bulk delete","description":"","frontmatter":{"title":"Bulk delete","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bulk delete","delete multiple","mass delete","delete all","remove multiple","meerdere verwijderen","alles verwijderen","mehrere loschen","supprimer plusieurs","suppression en masse"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I cancel a sent invoice?","How do I filter items before bulk actions?","How do I export items before deleting?"]}},"headers":[],"relativePath":"faq/bulk-delete.md","filePath":"faq/bulk-delete.md"}');
const _sfc_main = { name: "faq/bulk-delete.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To delete multiple invoices or expenses at once:</p><ol><li>Go to the list view (Invoices or Expenses)</li><li>Select multiple items using the checkboxes</li><li>Click the bulk action button at the top</li><li>Choose &quot;Delete&quot; from the dropdown</li><li>Confirm the bulk deletion</li></ol><p>Note: Only draft items can typically be bulk deleted. Sent or paid items should be cancelled individually.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/bulk-delete.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkDelete = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkDelete as default
};
