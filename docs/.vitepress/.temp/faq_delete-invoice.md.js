import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Delete an invoice","description":"","frontmatter":{"title":"Delete an invoice","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete invoice","remove invoice","trash invoice","erase invoice","get rid of invoice","factuur verwijderen","factuur wissen","hoe verwijder ik een factuur","rechnung loschen","wie losche ich eine rechnung","supprimer facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel an invoice instead?","How do I find a specific invoice?","Can I undo a deleted invoice?"]}},"headers":[],"relativePath":"faq/delete-invoice.md","filePath":"faq/delete-invoice.md"}');
const _sfc_main = { name: "faq/delete-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To delete an invoice:</p><ol><li>Open the invoice you want to remove</li><li>In the sidebar, scroll to the &quot;Danger Zone&quot; section</li><li>Click &quot;Delete&quot;</li><li>Confirm the deletion</li></ol><p>Only draft invoices can be deleted. For sent or paid invoices, use Cancel so the record stays available in the invoice list.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/delete-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteInvoice as default
};
