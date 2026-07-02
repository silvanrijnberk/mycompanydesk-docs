import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Split an expense","description":"","frontmatter":{"title":"Split an expense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["split expense","divide expense","expense between categories","allocate expense","expense allocation","uitgave splitsen","uitgave verdelen","ausgabe aufteilen","repartir depense"],"actions":[{"label":"Create expense","to":"/expenses/new"}],"follow_up":["How do I categorize expenses?","Which expenses are tax deductible?","How do I upload a receipt?"]}},"headers":[],"relativePath":"de/faq/expense-split.md","filePath":"de/faq/expense-split.md"}');
const _sfc_main = { name: "de/faq/expense-split.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So teilst du eine Ausgabe auf mehrere Kategorien auf:</p><ol><li>Oeffne die Ausgabe im Bearbeitungsmodus</li><li>Verwende, falls das Formular es unterstuetzt, Positionen zum Aufteilen des Betrags</li><li>Weise jeder Position eine andere Kategorie zu</li><li>Pruefe, ob die Summe dem Belegbetrag entspricht</li><li>Speichere</li></ol><p>Wenn eine Aufteilung in einem Datensatz nicht verfuegbar ist, lege getrennte Ausgaben mit Verweis auf denselben Beleg an.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/expense-split.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseSplit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseSplit as default
};
