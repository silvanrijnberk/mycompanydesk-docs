import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ausgabe duplizieren","description":"","frontmatter":{"title":"Ausgabe duplizieren","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["duplicate expense","copy expense","clone expense","reuse expense","uitgave kopieren","uitgave dupliceren","ausgabe kopieren","dupliquer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I set up recurring expenses?","How do I edit an expense?"]}},"headers":[],"relativePath":"de/faq/duplicate-expense.md","filePath":"de/faq/duplicate-expense.md"}');
const _sfc_main = { name: "de/faq/duplicate-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So duplizieren Sie eine Ausgabe:</p><ol><li>Öffnen Sie die bezahlte Ausgabe, die Sie kopieren möchten. Duplizieren ist nur bei bezahlten Ausgaben verfügbar; bei einer unbezahlten Ausgabe sehen Sie stattdessen „Als bezahlt markieren&quot;</li><li>Klicken Sie oben auf „Duplizieren&quot; oder nutzen Sie die Karte „Aktionen&quot; in der Seitenleiste</li><li>Es wird eine neue unbezahlte Kopie mit denselben Angaben erstellt, datiert auf heute</li><li>Passen Sie Betrag oder andere Details bei Bedarf an</li></ol><p>Tipp: Praktisch für wiederkehrende Ausgaben, die jedes Mal leicht abweichen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/duplicate-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duplicateExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  duplicateExpense as default
};
