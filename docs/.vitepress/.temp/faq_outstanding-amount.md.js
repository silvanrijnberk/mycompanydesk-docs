import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Outstanding amount","description":"","frontmatter":{"title":"Outstanding amount","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["outstanding amount","total unpaid","money owed","total outstanding","how much owed","openstaand bedrag","totaal onbetaald","offener betrag","montant impaye","somme due"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open client report","to":"/reports/clients?tab=outstanding"}],"follow_up":["How do I send payment reminders?","How do I view overdue invoices?","How do I debug a wrong total?"]}},"headers":[],"relativePath":"faq/outstanding-amount.md","filePath":"faq/outstanding-amount.md"}');
const _sfc_main = { name: "faq/outstanding-amount.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To see total outstanding/unpaid amounts:</p><ol><li>Go to Invoices and filter by Open/Sent/Overdue</li><li>Check totals in the list/KPI header</li><li>For reporting detail, open Reports → Client Report and switch to the &quot;Outstanding&quot; tab</li></ol><p>Tip: If totals look off, first verify date range and status filters.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/outstanding-amount.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const outstandingAmount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  outstandingAmount as default
};
