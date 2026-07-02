import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bulk actions","description":"","frontmatter":{"title":"Bulk actions","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bulk action","bulk delete","bulk send","select multiple","batch operation","meerdere selecteren","bulk verwijderen","massenbearbeitung","action en masse"],"actions":[],"follow_up":["How do I delete multiple invoices?","How do I export selected items?"]}},"headers":[],"relativePath":"de/faq/bulk-actions.md","filePath":"de/faq/bulk-actions.md"}');
const _sfc_main = { name: "de/faq/bulk-actions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Um Massenaktionen durchzuführen:</p><ol><li>Gehe zur Listenansicht (Rechnungen, Ausgaben oder Kunden)</li><li>Wähle mehrere Einträge über die Kontrollkästchen aus</li><li>Verwende das Massenaktionsmenü oben in der Liste</li><li>Wähle die Aktion (z. B. Löschen, Senden, Exportieren)</li><li>Bestätige die Massenaktion</li></ol><p>Tipp: Verwende zuerst Filter, um die Liste einzugrenzen, und wähle dann alle sichtbaren Einträge für eine effiziente Stapelverarbeitung.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/bulk-actions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkActions as default
};
