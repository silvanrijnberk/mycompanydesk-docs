import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Use the dashboard","description":"","frontmatter":{"title":"Use the dashboard","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["use dashboard","dashboard help","what is on dashboard","dashboard explained","navigate dashboard","dashboard gebruiken","dashboard nutzen","utiliser tableau de bord"],"actions":[],"follow_up":["How do I view overdue invoices?","How do I check my reports?","How do I create an invoice?"]}},"headers":[],"relativePath":"de/faq/use-dashboard.md","filePath":"de/faq/use-dashboard.md"}');
const _sfc_main = { name: "de/faq/use-dashboard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So nutzt du das Dashboard:</p><ol><li>Pruefe Warnungen, Karten und Listen oben auf der Seite</li><li>Klicke auf eine Karte oder einen Listeneintrag, um die zugrunde liegenden Datensaetze zu oeffnen</li><li>Pruefe, ob aktive Filter oder der gewaehlte Zeitraum die angezeigte Zahl beeinflussen</li><li>Nutze die verknuepften Aktionen, um zu Rechnungen, Ausgaben oder Berichten zu wechseln</li></ol><p>Diese Antwort beschraenkt sich darauf, was du im Dashboard siehst und wohin du von dort navigieren kannst.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/use-dashboard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  useDashboard as default
};
