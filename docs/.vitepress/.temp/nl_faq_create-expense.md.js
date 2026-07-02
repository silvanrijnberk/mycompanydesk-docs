import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uitgave aanmaken","description":"","frontmatter":{"title":"Uitgave aanmaken","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create expense","new expense","add expense","log expense","record expense","track expense","uitgave toevoegen","nieuwe uitgave","uitgave aanmaken","ausgabe hinzufugen","wie erstelle ich eine ausgabe","ajouter depense","comment creer une depense"],"actions":[{"label":"Create expense","to":"/expenses/new"}],"follow_up":["How do I upload a receipt?","How do I categorize expenses?","How do I mark an expense as paid?"]}},"headers":[],"relativePath":"nl/faq/create-expense.md","filePath":"nl/faq/create-expense.md"}');
const _sfc_main = { name: "nl/faq/create-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo voeg je een uitgave toe:</p><ol><li>Ga naar Uitgaven en klik op &quot;Nieuwe uitgave&quot;</li><li>Vul leverancier, categorie, omschrijving, bedrag en datum in</li><li>Sla de uitgave op zodat het record wordt aangemaakt</li><li>Open daarna de opgeslagen uitgave als je &quot;Bon uploaden&quot; wilt gebruiken</li></ol><p>Tip: Het uploaden van een bon gebeurt op de detailpagina nadat de uitgave is opgeslagen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/create-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createExpense as default
};
