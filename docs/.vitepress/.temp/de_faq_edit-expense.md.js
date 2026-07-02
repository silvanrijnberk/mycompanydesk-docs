import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit an expense","description":"","frontmatter":{"title":"Edit an expense","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["edit expense","change expense","modify expense","update expense","correct expense","uitgave bewerken","uitgave wijzigen","ausgabe bearbeiten","modifier depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I change the expense category?","How do I upload a receipt?"]}},"headers":[],"relativePath":"de/faq/edit-expense.md","filePath":"de/faq/edit-expense.md"}');
const _sfc_main = { name: "de/faq/edit-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So bearbeitest du eine Ausgabe:</p><ol><li>Öffne die Ausgabe aus der Liste</li><li>Klicke auf „Bearbeiten&quot;</li><li>Aktualisiere Lieferant, Betrag, Kategorie, Datum oder Notizen</li><li>Speichere deine Änderungen</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/edit-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editExpense as default
};
