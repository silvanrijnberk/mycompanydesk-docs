import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Overdue invoices","description":"","frontmatter":{"title":"Overdue invoices","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["overdue invoices","late invoices","unpaid invoices","outstanding invoices","invoices not paid","achterstallige facturen","onbetaalde facturen","uberfaellige rechnungen","factures impayees"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I send payment reminders?","How do I see total outstanding amounts?","How do I mark an invoice as paid?"]}},"headers":[],"relativePath":"fr/faq/overdue-invoices.md","filePath":"fr/faq/overdue-invoices.md"}');
const _sfc_main = { name: "fr/faq/overdue-invoices.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour consulter et gerer les factures en retard :</p><ol><li>Allez dans Factures</li><li>Filtrez par statut « En retard »</li><li>Triez par date d echeance</li><li>Ouvrez une facture pour envoyer un rappel ou afficher les details</li></ol><p>Le tableau de bord peut aussi vous ramener vers les totaux en retard et les listes correspondantes.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/overdue-invoices.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overdueInvoices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overdueInvoices as default
};
