import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bulk actions","description":"","frontmatter":{"title":"Bulk actions","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bulk action","bulk delete","bulk send","select multiple","batch operation","meerdere selecteren","bulk verwijderen","massenbearbeitung","action en masse"],"actions":[],"follow_up":["How do I delete multiple invoices?","How do I export selected items?"]}},"headers":[],"relativePath":"fr/faq/bulk-actions.md","filePath":"fr/faq/bulk-actions.md"}');
const _sfc_main = { name: "fr/faq/bulk-actions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour effectuer des actions en masse :</p><ol><li>Accédez à la vue en liste (Factures, Dépenses ou Clients)</li><li>Sélectionnez plusieurs éléments à l&#39;aide des cases à cocher</li><li>Utilisez le menu d&#39;actions en masse en haut de la liste</li><li>Choisissez l&#39;action (ex. : supprimer, envoyer, exporter)</li><li>Confirmez l&#39;opération en masse</li></ol><p>Astuce : Utilisez d&#39;abord les filtres pour affiner la liste, puis sélectionnez tous les éléments visibles pour un traitement par lot efficace.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/bulk-actions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkActions as default
};
