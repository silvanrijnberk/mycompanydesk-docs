import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Offener Betrag","description":"","frontmatter":{"title":"Offener Betrag","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["outstanding amount","total unpaid","money owed","total outstanding","how much owed","openstaand bedrag","totaal onbetaald","offener betrag","montant impaye","somme due"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open client report","to":"/reports/clients?tab=outstanding"}],"follow_up":["How do I send payment reminders?","How do I view overdue invoices?","How do I debug a wrong total?"]}},"headers":[],"relativePath":"de/faq/outstanding-amount.md","filePath":"de/faq/outstanding-amount.md"}');
const _sfc_main = { name: "de/faq/outstanding-amount.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So sehen Sie den gesamten offenen Betrag:</p><ol><li>Gehen Sie zu Rechnungen und filtern Sie nach Offen, Gesendet oder Überfällig</li><li>Prüfen Sie die Summen in der Liste bzw. im KPI-Kopf</li><li>Für Berichtsdetails öffnen Sie Berichte → Kundenbericht und wechseln zum Tab &quot;Offene Posten&quot;</li></ol><p>Tipp: Wirken die Summen falsch, prüfen Sie zuerst Zeitraum und Statusfilter.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/outstanding-amount.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const outstandingAmount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  outstandingAmount as default
};
