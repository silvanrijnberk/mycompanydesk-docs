import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uitgave dupliceren","description":"","frontmatter":{"title":"Uitgave dupliceren","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["duplicate expense","copy expense","clone expense","reuse expense","uitgave kopieren","uitgave dupliceren","ausgabe kopieren","dupliquer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I set up recurring expenses?","How do I edit an expense?"]}},"headers":[],"relativePath":"nl/faq/duplicate-expense.md","filePath":"nl/faq/duplicate-expense.md"}');
const _sfc_main = { name: "nl/faq/duplicate-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een uitgave te dupliceren:</p><ol><li>Open de betaalde uitgave die je wilt kopiëren. Dupliceren is alleen beschikbaar bij betaalde uitgaven; bij een onbetaalde uitgave zie je in plaats daarvan &quot;Markeer als betaald&quot;</li><li>Klik op &quot;Dupliceren&quot; in de kop, of gebruik de kaart &quot;Acties&quot; in de zijbalk</li><li>Er wordt een nieuwe onbetaalde kopie aangemaakt met dezelfde gegevens, met de datum van vandaag</li><li>Pas het bedrag of andere details aan waar nodig</li></ol><p>Tip: Handig voor terugkerende uitgaven die telkens net iets anders zijn.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/duplicate-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const duplicateExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  duplicateExpense as default
};
