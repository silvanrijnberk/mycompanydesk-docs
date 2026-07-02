import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uitgave verwijderen","description":"","frontmatter":{"title":"Uitgave verwijderen","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete expense","remove expense","trash expense","erase expense","uitgave verwijderen","uitgave wissen","hoe verwijder ik een uitgave","ausgabe loschen","wie losche ich eine ausgabe","supprimer depense"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I edit an expense instead?","How do I export my expense data?"]}},"headers":[],"relativePath":"nl/faq/delete-expense.md","filePath":"nl/faq/delete-expense.md"}');
const _sfc_main = { name: "nl/faq/delete-expense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een uitgave te verwijderen:</p><ol><li>Open de uitgave vanuit je uitgavenlijst</li><li>Scroll in de zijbalk naar de sectie &quot;Gevarenzone&quot;</li><li>Klik op &quot;Verwijderen&quot;</li><li>Bevestig de verwijdering</li></ol><p>Verwijderen gaat in stappen. Een actieve uitgave verwijderen archiveert deze eerst, nog een keer verwijderen vanuit het Archief verplaatst de uitgave naar de Prullenbak, en verwijderen vanuit de Prullenbak is definitief. Tot die laatste stap kun je de uitgave altijd terugzetten vanuit de weergave Archief of Prullenbak. Let op: uitgaven selecteren in de lijst en daar de bulkactie Verwijderen gebruiken verwijdert ze meteen definitief.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/delete-expense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteExpense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteExpense as default
};
