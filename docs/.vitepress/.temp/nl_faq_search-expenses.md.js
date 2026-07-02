import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uitgaven zoeken","description":"","frontmatter":{"title":"Uitgaven zoeken","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["search expenses","find expense","filter expenses","sort expenses","uitgave zoeken","uitgaven filteren","ausgabe suchen","chercher depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I filter by category?","How do I create an expense?"]}},"headers":[],"relativePath":"nl/faq/search-expenses.md","filePath":"nl/faq/search-expenses.md"}');
const _sfc_main = { name: "nl/faq/search-expenses.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om uitgaven te zoeken en te filteren:</p><ol><li>Ga naar Uitgaven</li><li>Gebruik de zoekbalk om te zoeken op leverancier, omschrijving of categorie</li><li>Gebruik filters om te verfijnen op categorie of betaalstatus</li><li>Sorteer op datum, leverancier, categorie, status of bedrag</li></ol><p>Combineer de zoekbalk met het categoriefilter als de lijst lang is.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/search-expenses.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchExpenses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  searchExpenses as default
};
