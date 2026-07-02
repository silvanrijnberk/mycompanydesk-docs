import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ausgabenkategorie","description":"","frontmatter":{"title":"Ausgabenkategorie","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["expense category","categorize expense","expense categories","which category","change category","uitgave categorie","categorie wijzigen","ausgabe kategorie","categorie depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["Which expenses are tax deductible?","How do I create a new expense?","How do I view expenses by category?"]}},"headers":[],"relativePath":"de/faq/expense-category.md","filePath":"de/faq/expense-category.md"}');
const _sfc_main = { name: "de/faq/expense-category.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So legen Sie eine Ausgabenkategorie fest oder ändern sie:</p><ol><li>Öffnen Sie die Ausgabe im Bearbeitungsmodus</li><li>Suchen Sie das Dropdown „Kategorie&quot;</li><li>Wählen Sie eine der sechs Standardkategorien: Allgemeine Kosten, Bürokosten, Fahrzeugkosten &amp; Reisen, Telefon &amp; Internet, Repräsentationskosten oder Einkauf &amp; Material</li><li>Speichern Sie die Ausgabe</li></ol><p>Die sechs Standardkategorien folgen der niederländischen Steuererklärung, sodass Ihre Buchhaltung zur Aangifte passt. Über das Zahnrad auf der Seite Ausgaben können Sie auch eigene Kategorien hinzufügen. Verwenden Sie Kategorien konsistent, damit Filter, Listen und Berichte leicht zu prüfen bleiben.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/expense-category.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseCategory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseCategory as default
};
