import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Use the dashboard","description":"","frontmatter":{"title":"Use the dashboard","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["use dashboard","dashboard help","what is on dashboard","dashboard explained","navigate dashboard","dashboard gebruiken","dashboard nutzen","utiliser tableau de bord"],"actions":[],"follow_up":["How do I view overdue invoices?","How do I check my reports?","How do I create an invoice?"]}},"headers":[],"relativePath":"nl/faq/use-dashboard.md","filePath":"nl/faq/use-dashboard.md"}');
const _sfc_main = { name: "nl/faq/use-dashboard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om het dashboard te gebruiken:</p><ol><li>Bekijk waarschuwingen, kaarten en lijsten bovenaan de pagina</li><li>Klik op een kaart of lijstitem om de onderliggende records te openen</li><li>Controleer of actieve filters of de geselecteerde periode het getoonde cijfer beïnvloeden</li><li>Gebruik de gekoppelde acties om door te gaan naar Facturen, Uitgaven of Rapporten</li></ol><p>Dit antwoord blijft beperkt tot wat je op het dashboard ziet en waar je kunt doorklikken.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/use-dashboard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  useDashboard as default
};
