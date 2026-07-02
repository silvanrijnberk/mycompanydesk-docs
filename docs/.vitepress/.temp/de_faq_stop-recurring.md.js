import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wiederkehrende Rechnung stoppen","description":"","frontmatter":{"title":"Wiederkehrende Rechnung stoppen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["stop recurring","cancel recurring","pause recurring","disable recurring","end recurring","terugkerend stoppen","terugkerend annuleren","wiederkehrend stoppen","arreter recurrent"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I edit a recurring item?","How do I create a new recurring invoice?"]}},"headers":[],"relativePath":"de/faq/stop-recurring.md","filePath":"de/faq/stop-recurring.md"}');
const _sfc_main = { name: "de/faq/stop-recurring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So stoppen Sie eine wiederkehrende Rechnung:</p><ol><li>Gehen Sie zu Wiederkehrende Rechnungen</li><li>Öffnen Sie die wiederkehrende Rechnung</li><li>Klicken Sie auf der Detailseite auf &quot;Pausieren&quot;; dieselbe Schaltfläche zeigt danach &quot;Aktivieren&quot;, damit Sie später fortsetzen können</li><li>Solange sie pausiert ist, werden keine weiteren Rechnungen erstellt</li></ol><p>Ein Enddatum-Feld gibt es nicht; Pausieren ist der Weg, den Zeitplan zu stoppen, und die bereits erstellten Rechnungen bleiben erhalten. In der Liste der wiederkehrenden Rechnungen gibt es keine Massenaktionen, pausieren Sie also jeden Eintrag einzeln. Wiederkehrende Ausgaben funktionieren genauso, mit eigenen Schaltflächen Pausieren und Aktivieren.</p><p>Tipp: Pausieren ist sicher. Es wird nichts gelöscht, und ein Klick auf &quot;Aktivieren&quot; setzt den Zeitplan wieder fort.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/stop-recurring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stopRecurring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stopRecurring as default
};
