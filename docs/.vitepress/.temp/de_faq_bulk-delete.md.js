import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bulk delete","description":"","frontmatter":{"title":"Bulk delete","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bulk delete","delete multiple","mass delete","delete all","remove multiple","meerdere verwijderen","alles verwijderen","mehrere loschen","supprimer plusieurs","suppression en masse"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I cancel a sent invoice?","How do I filter items before bulk actions?","How do I export items before deleting?"]}},"headers":[],"relativePath":"de/faq/bulk-delete.md","filePath":"de/faq/bulk-delete.md"}');
const _sfc_main = { name: "de/faq/bulk-delete.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Um mehrere Einträge gleichzeitig zu löschen:</p><ol><li>Gehe zur entsprechenden Listenansicht (Rechnungen, Ausgaben usw.)</li><li>Verwende die Kontrollkästchen, um die zu löschenden Einträge auszuwählen</li><li>Klicke auf das Massenaktionsmenü oben</li><li>Wähle &quot;Ausgewählte löschen&quot;</li><li>Bestätige die Löschung</li></ol><p>Warnung: Gelöschte Einträge können möglicherweise nicht wiederhergestellt werden. Erwäge stattdessen die Archivierung wichtiger Datensätze.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/bulk-delete.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkDelete = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkDelete as default
};
