import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatic recurring expenses","description":"","frontmatter":{"title":"Automatic recurring expenses","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["auto log expense","recurring expense auto","automatic expense","schedule expense","automatische uitgave","terugkerende uitgave automatisch","automatische ausgabe","depense automatique"],"actions":[{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I stop a recurring expense?","How do I edit a recurring expense?","How do I categorize expenses?"]}},"headers":[],"relativePath":"nl/faq/expense-recurring-auto.md","filePath":"nl/faq/expense-recurring-auto.md"}');
const _sfc_main = { name: "nl/faq/expense-recurring-auto.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om automatisch terugkerende uitgaven in te stellen:</p><ol><li>Ga naar Terugkerende uitgaven</li><li>Klik op &quot;Nieuwe terugkerende uitgave&quot;</li><li>Voer de leverancier, het bedrag en de categorie in</li><li>Stel de frequentie en startdatum in</li><li>Sla op en controleer wanneer records worden aangemaakt</li></ol><p>Dit antwoord blijft beperkt tot hoe de functie voor terugkerende uitgaven in de app werkt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/expense-recurring-auto.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseRecurringAuto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseRecurringAuto as default
};
