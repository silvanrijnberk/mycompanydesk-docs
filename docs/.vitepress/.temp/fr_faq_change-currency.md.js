import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Changer de devise","description":"","frontmatter":{"title":"Changer de devise","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change currency","set currency","currency settings","euro dollar","valuta wijzigen","valuta instellen","wahrung andern","changer devise"],"follow_up":["How do I invoice in a different currency?","How do I change my language?"]}},"headers":[],"relativePath":"fr/faq/change-currency.md","filePath":"fr/faq/change-currency.md"}');
const _sfc_main = { name: "fr/faq/change-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Il n&#39;y a aucun réglage de devise à modifier. MyCompanyDesk fonctionne volontairement en euros uniquement : toutes les factures, tous les devis, toutes les dépenses et tous les rapports sont en EUR. Cela ne se change nulle part, pas même dans Mon compte.</p><p>Consultez <a href="/fr/faq/multi-currency">Plusieurs devises</a> pour savoir comment cela fonctionne avec des clients à l&#39;étranger.</p><p>Astuce : vous pouvez toujours envoyer vos factures en anglais, en allemand ou en français ; seuls les montants restent en euros.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/change-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCurrency as default
};
