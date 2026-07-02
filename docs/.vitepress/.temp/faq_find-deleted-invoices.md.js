import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find deleted invoices","description":"","frontmatter":{"title":"Find deleted invoices","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are deleted invoices","where can i find deleted invoices","where do i find deleted invoices","where can i find trashed invoices","invoice trash","trashed invoices","deleted invoices","verwijderde facturen","facturen prullenbak","waar vind ik mijn verwijderde facturen","waar staan verwijderde facturen","geloschte rechnungen","geloeschte rechnungen","geloeschten rechnungen","meine geloeschten rechnungen","rechnungen papierkorb","wo finde ich geloschte rechnungen","wo finde ich geloeschte rechnungen","wo finde ich meine geloeschten rechnungen","factures supprimees","mes factures supprimees","corbeille factures","ou trouver les factures supprimees"],"actions":[{"label":"Open invoices","to":"/invoices?view=trash"}],"follow_up":["Where do I find archived invoices?","How do I restore an invoice from trash?","How do I search invoices?"]}},"headers":[],"relativePath":"faq/find-deleted-invoices.md","filePath":"faq/find-deleted-invoices.md"}');
const _sfc_main = { name: "faq/find-deleted-invoices.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Deleted invoices are in Invoices -&gt; Trash. If you are already in the invoice list, switch to the Trash view. If you mean archived invoices instead, use the Archive view.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-deleted-invoices.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findDeletedInvoices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findDeletedInvoices as default
};
