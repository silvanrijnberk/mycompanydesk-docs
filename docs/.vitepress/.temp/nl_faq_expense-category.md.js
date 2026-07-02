import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uitgavecategorie","description":"","frontmatter":{"title":"Uitgavecategorie","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["expense category","categorize expense","expense categories","which category","change category","uitgave categorie","categorie wijzigen","ausgabe kategorie","categorie depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["Which expenses are tax deductible?","How do I create a new expense?","How do I view expenses by category?"]}},"headers":[],"relativePath":"nl/faq/expense-category.md","filePath":"nl/faq/expense-category.md"}');
const _sfc_main = { name: "nl/faq/expense-category.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een uitgavecategorie in te stellen of te wijzigen:</p><ol><li>Open de uitgave in bewerkingsmodus</li><li>Zoek het dropdownmenu &quot;Categorie&quot;</li><li>Kies een van de zes standaardcategorieën: Algemene kosten, Kantoorkosten, Autokosten &amp; reizen, Telefoon &amp; internet, Representatiekosten of Inkoop &amp; materiaal</li><li>Sla de uitgave op</li></ol><p>De zes standaardcategorieën volgen de Nederlandse belastingaangifte, zodat je administratie aansluit op je aangifte. Je kunt ook eigen categorieën toevoegen via het instellingen-tandwiel op de pagina Uitgaven. Gebruik categorieën consistent zodat filters, lijsten en rapporten makkelijk te controleren blijven.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/expense-category.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseCategory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseCategory as default
};
