import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bulk actions","description":"","frontmatter":{"title":"Bulk actions","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bulk action","bulk delete","bulk send","select multiple","batch operation","meerdere selecteren","bulk verwijderen","massenbearbeitung","action en masse"],"actions":[],"follow_up":["How do I delete multiple invoices?","How do I export selected items?"]}},"headers":[],"relativePath":"nl/faq/bulk-actions.md","filePath":"nl/faq/bulk-actions.md"}');
const _sfc_main = { name: "nl/faq/bulk-actions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om bulkacties uit te voeren:</p><ol><li>Ga naar de lijstweergave (Facturen, Uitgaven of Klanten)</li><li>Selecteer meerdere items met de selectievakjes</li><li>Gebruik het bulkactiemenu bovenaan de lijst</li><li>Kies de actie (bijv. verwijderen, verzenden, exporteren)</li><li>Bevestig de bulkbewerking</li></ol><p>Tip: Gebruik eerst filters om de lijst te beperken en selecteer vervolgens alle zichtbare items voor efficiënte batchverwerking.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/bulk-actions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkActions as default
};
