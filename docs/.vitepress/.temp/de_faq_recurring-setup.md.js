import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wiederkehrende Rechnungen einrichten","description":"","frontmatter":{"title":"Wiederkehrende Rechnungen einrichten","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["set up recurring","recurring invoice","recurring expense","automate invoice","automatic invoice","monthly invoice","terugkerende factuur","terugkerende uitgave","wiederkehrende rechnung","facture recurrente"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I stop a recurring invoice?","How do I edit a recurring item?","How do I change the frequency?"]}},"headers":[],"relativePath":"de/faq/recurring-setup.md","filePath":"de/faq/recurring-setup.md"}');
const _sfc_main = { name: "de/faq/recurring-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So richten Sie eine wiederkehrende Rechnung ein:</p><ol><li>Gehen Sie zu Wiederkehrende Rechnungen und klicken Sie auf &quot;Wiederkehrende Rechnung hinzufügen&quot;</li><li>Wählen Sie den Kunden und fügen Sie Positionen hinzu</li><li>Legen Sie Häufigkeit und Startdatum fest</li><li>Wählen Sie, ob jede Rechnung automatisch per E-Mail versendet oder als Entwurf erstellt wird</li><li>Speichern Sie und prüfen Sie den Zeitplan in der Liste der wiederkehrenden Rechnungen</li></ol><p>Ein Enddatum-Feld gibt es nicht. Möchten Sie stoppen, öffnen Sie die wiederkehrende Rechnung und klicken Sie auf &quot;Pausieren&quot;; derselbe Schalter zeigt &quot;Aktivieren&quot;, damit Sie später fortsetzen können.</p><p>Tipp: Wiederkehrende Ausgaben funktionieren genauso. Öffnen Sie Wiederkehrende Ausgaben und folgen Sie dort denselben Schritten.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/recurring-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recurringSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  recurringSetup as default
};
