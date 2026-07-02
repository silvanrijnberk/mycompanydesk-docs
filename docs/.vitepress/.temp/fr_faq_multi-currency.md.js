import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Plusieurs devises","description":"","frontmatter":{"title":"Plusieurs devises","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["multi currency","different currency","foreign currency","invoice in dollars","invoice in pounds","andere valuta","vreemde valuta","andere wahrung","devise etrangere","dollar invoice","pound invoice"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I set up my company settings?","How do I change my language?"]}},"headers":[],"relativePath":"fr/faq/multi-currency.md","filePath":"fr/faq/multi-currency.md"}');
const _sfc_main = { name: "fr/faq/multi-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>MyCompanyDesk fonctionne uniquement en euros. Toutes les factures, tous les devis, toutes les dépenses et tous les rapports sont en EUR. Il n&#39;existe aucun réglage de devise ni de sélecteur de devise par document ; c&#39;est un choix produit délibéré, pas une préférence manquante.</p><p>Si vous facturez un client à l&#39;étranger, la facture reste en euros.</p><p>Astuce : convenez à l&#39;avance avec vos clients étrangers d&#39;une facturation en euros. Ils paient le montant en euros et la conversion éventuelle se fait de leur côté.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/multi-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const multiCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  multiCurrency as default
};
