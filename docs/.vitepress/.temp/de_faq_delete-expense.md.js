import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ausgabe löschen","description":"","frontmatter":{"title":"Ausgabe löschen","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete expense","remove expense","trash expense","erase expense","uitgave verwijderen","uitgave wissen","hoe verwijder ik een uitgave","ausgabe loschen","wie losche ich eine ausgabe","supprimer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I edit an expense instead?","How do I export my expense data?"]}},"headers":[],"relativePath":"de/faq/delete-expense.md","filePath":"de/faq/delete-expense.md"}');
const _sfc_main = { name: "de/faq/delete-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So löschen Sie eine Ausgabe:</p><ol><li>Öffnen Sie die Ausgabe aus Ihrer Ausgabenliste</li><li>Scrollen Sie in der Seitenleiste zum Abschnitt „Gefahrenzone&quot;</li><li>Klicken Sie auf „Löschen&quot;</li><li>Bestätigen Sie die Löschung</li></ol><p>Das Löschen erfolgt in Stufen. Das Löschen einer aktiven Ausgabe archiviert sie zunächst, erneutes Löschen aus dem Archiv verschiebt sie in den Papierkorb, und das Löschen aus dem Papierkorb entfernt sie endgültig. Bis zu diesem letzten Schritt können Sie die Ausgabe jederzeit aus der Ansicht Archiv oder Papierkorb wiederherstellen. Hinweis: Wenn Sie Ausgaben in der Liste auswählen und dort die Sammelaktion Löschen verwenden, werden sie sofort endgültig entfernt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/delete-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteExpense as default
};
