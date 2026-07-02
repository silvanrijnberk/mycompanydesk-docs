import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Overdue invoices","description":"","frontmatter":{"title":"Overdue invoices","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["overdue invoices","late invoices","unpaid invoices","outstanding invoices","invoices not paid","achterstallige facturen","onbetaalde facturen","uberfaellige rechnungen","factures impayees"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I send payment reminders?","How do I see total outstanding amounts?","How do I mark an invoice as paid?"]}},"headers":[],"relativePath":"de/faq/overdue-invoices.md","filePath":"de/faq/overdue-invoices.md"}');
const _sfc_main = { name: "de/faq/overdue-invoices.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So siehst und verwaltest du ueberfaellige Rechnungen:</p><ol><li>Gehe zu Rechnungen</li><li>Filtere nach Status „Ueberfaellig&quot;</li><li>Sortiere nach Faelligkeitsdatum</li><li>Oeffne eine Rechnung, um eine Erinnerung zu senden oder Details anzusehen</li></ol><p>Das Dashboard kann dich ebenfalls zu ueberfaelligen Summen und den zugehoerigen Listen zurueckfuehren.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/overdue-invoices.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overdueInvoices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overdueInvoices as default
};
