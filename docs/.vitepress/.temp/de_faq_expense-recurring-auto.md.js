import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatic recurring expenses","description":"","frontmatter":{"title":"Automatic recurring expenses","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["auto log expense","recurring expense auto","automatic expense","schedule expense","automatische uitgave","terugkerende uitgave automatisch","automatische ausgabe","depense automatique"],"actions":[{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I stop a recurring expense?","How do I edit a recurring expense?","How do I categorize expenses?"]}},"headers":[],"relativePath":"de/faq/expense-recurring-auto.md","filePath":"de/faq/expense-recurring-auto.md"}');
const _sfc_main = { name: "de/faq/expense-recurring-auto.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So richtest du automatisch wiederkehrende Ausgaben ein:</p><ol><li>Gehe zu Wiederkehrende Ausgaben</li><li>Klicke auf &quot;Neue wiederkehrende Ausgabe&quot;</li><li>Gib Lieferant, Betrag und Kategorie ein</li><li>Lege Haeufigkeit und Startdatum fest</li><li>Speichere und pruefe, wann Datensaetze erzeugt werden</li></ol><p>Diese Antwort beschraenkt sich darauf, wie die Funktion fuer wiederkehrende Ausgaben in der App arbeitet.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/expense-recurring-auto.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseRecurringAuto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseRecurringAuto as default
};
