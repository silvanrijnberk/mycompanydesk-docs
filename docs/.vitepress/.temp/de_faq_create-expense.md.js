import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ausgabe erstellen","description":"","frontmatter":{"title":"Ausgabe erstellen","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create expense","new expense","add expense","log expense","record expense","track expense","uitgave toevoegen","nieuwe uitgave","uitgave aanmaken","ausgabe hinzufugen","wie erstelle ich eine ausgabe","ajouter depense","comment creer une depense"],"actions":[{"label":"Create expense","to":"/expenses/new"}],"follow_up":["How do I upload a receipt?","How do I categorize expenses?","How do I mark an expense as paid?"]}},"headers":[],"relativePath":"de/faq/create-expense.md","filePath":"de/faq/create-expense.md"}');
const _sfc_main = { name: "de/faq/create-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So fügen Sie eine Ausgabe hinzu:</p><ol><li>Gehen Sie zu Ausgaben und klicken Sie auf „Hinzufügen&quot;</li><li>Geben Sie Lieferant, Kategorie, Beschreibung, Betrag und Datum ein</li><li>Speichern Sie die Ausgabe, damit der Datensatz angelegt wird</li><li>Öffnen Sie danach die gespeicherte Ausgabe, wenn Sie „Beleg hochladen&quot; nutzen möchten</li></ol><p>Tipp: Der Beleg-Upload befindet sich auf der Detailseite, nachdem die Ausgabe gespeichert wurde, nicht im Formular für neue Ausgaben.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/create-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createExpense as default
};
