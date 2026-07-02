import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Montant impayé","description":"","frontmatter":{"title":"Montant impayé","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["outstanding amount","total unpaid","money owed","total outstanding","how much owed","openstaand bedrag","totaal onbetaald","offener betrag","montant impaye","somme due"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open client report","to":"/reports/clients?tab=outstanding"}],"follow_up":["How do I send payment reminders?","How do I view overdue invoices?","How do I debug a wrong total?"]}},"headers":[],"relativePath":"fr/faq/outstanding-amount.md","filePath":"fr/faq/outstanding-amount.md"}');
const _sfc_main = { name: "fr/faq/outstanding-amount.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour voir le total des montants impayés :</p><ol><li>Allez dans Factures et filtrez sur Ouvert, Envoyée ou En retard</li><li>Consultez les totaux dans la liste ou l&#39;en-tête KPI</li><li>Pour le détail, ouvrez Rapports → Rapport clients et passez à l&#39;onglet &quot;En souffrance&quot;</li></ol><p>Astuce : si les totaux semblent incorrects, vérifiez d&#39;abord la période et les filtres de statut.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/outstanding-amount.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const outstandingAmount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  outstandingAmount as default
};
