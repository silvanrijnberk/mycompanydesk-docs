import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Overdue invoices","description":"","frontmatter":{"title":"Overdue invoices","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["overdue invoices","late invoices","unpaid invoices","outstanding invoices","invoices not paid","achterstallige facturen","onbetaalde facturen","uberfaellige rechnungen","factures impayees"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I send payment reminders?","How do I see total outstanding amounts?","How do I mark an invoice as paid?"]}},"headers":[],"relativePath":"faq/overdue-invoices.md","filePath":"faq/overdue-invoices.md"}');
const _sfc_main = { name: "faq/overdue-invoices.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To view and manage overdue invoices:</p><ol><li>Go to Invoices</li><li>Filter by status &quot;Overdue&quot; to see all past-due invoices</li><li>Sort by due date to bring the oldest records to the top</li><li>Open an invoice to send a reminder or review its detail page</li></ol><p>The dashboard can also link you back to overdue totals and related invoice lists.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/overdue-invoices.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overdueInvoices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overdueInvoices as default
};
