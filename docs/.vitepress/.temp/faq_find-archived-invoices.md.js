import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find archived invoices","description":"","frontmatter":{"title":"Find archived invoices","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are archived invoices","where can i find archived invoices","where do i find archived invoices","invoice archive","archived invoices","gearchiveerde facturen","facturen archief","waar vind ik mijn gearchiveerde facturen","archivierte rechnungen","archivierten rechnungen","rechnungen archiv","wo finde ich archivierte rechnungen","wo finde ich meine archivierten rechnungen","factures archivees","mes factures archivees","archives factures","ou trouver les factures archivees"],"actions":[{"label":"Open invoices","to":"/invoices?view=archived"}],"follow_up":["Where do I find deleted invoices?","How do I search invoices?","How do I cancel an invoice?"]}},"headers":[],"relativePath":"faq/find-archived-invoices.md","filePath":"faq/find-archived-invoices.md"}');
const _sfc_main = { name: "faq/find-archived-invoices.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Archived invoices are in Invoices -&gt; Archive. If you are already in the invoice list, switch to the Archive view. Deleted invoices are in Trash.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-archived-invoices.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findArchivedInvoices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findArchivedInvoices as default
};
