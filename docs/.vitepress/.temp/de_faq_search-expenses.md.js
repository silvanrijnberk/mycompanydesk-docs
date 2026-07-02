import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ausgaben suchen","description":"","frontmatter":{"title":"Ausgaben suchen","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["search expenses","find expense","filter expenses","sort expenses","uitgave zoeken","uitgaven filteren","ausgabe suchen","chercher depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I filter by category?","How do I create an expense?"]}},"headers":[],"relativePath":"de/faq/search-expenses.md","filePath":"de/faq/search-expenses.md"}');
const _sfc_main = { name: "de/faq/search-expenses.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So suchen und filtern Sie Ausgaben:</p><ol><li>Gehen Sie zu Ausgaben</li><li>Nutzen Sie die Suchleiste, um nach Lieferant, Beschreibung oder Kategorie zu suchen</li><li>Nutzen Sie Filter, um nach Kategorie oder Zahlungsstatus einzugrenzen</li><li>Sortieren Sie nach Datum, Lieferant, Kategorie, Status oder Betrag</li></ol><p>Kombinieren Sie die Suchleiste mit dem Kategoriefilter, wenn die Liste lang ist.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/search-expenses.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchExpenses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  searchExpenses as default
};
