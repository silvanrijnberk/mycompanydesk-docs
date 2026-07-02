import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Expense tax-deductible","description":"","frontmatter":{"title":"Expense tax-deductible","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["tax deductible","deductible expenses","which expenses deductible","tax write off","aftrekbare kosten","welke kosten aftrekbaar","absetzbare ausgaben","depenses deductibles","charges deductibles"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I categorize expenses?","How do I upload a receipt?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"nl/faq/expense-tax-deductible.md","filePath":"nl/faq/expense-tax-deductible.md"}');
const _sfc_main = { name: "nl/faq/expense-tax-deductible.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om aftrekbaarheid in de app vast te leggen:</p><ol><li>Open de uitgave</li><li>Stel voor dat record de optie aftrekbaar of niet-aftrekbaar in</li><li>Controleer in dezelfde uitgave ook de categorie en de BTW-instellingen</li><li>Sla de uitgave op en gebruik rapportfilters om de vastgelegde totalen te bekijken</li></ol><p>De app kan deze instelling registreren, maar bepaalt niet of een uitgave juridisch aftrekbaar is.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/expense-tax-deductible.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const expenseTaxDeductible = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  expenseTaxDeductible as default
};
