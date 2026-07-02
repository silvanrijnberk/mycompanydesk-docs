import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rechnung bearbeiten","description":"","frontmatter":{"title":"Rechnung bearbeiten","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["edit invoice","change invoice","modify invoice","update invoice","correct invoice","fix invoice","factuur bewerken","factuur wijzigen","factuur aanpassen","hoe bewerk ik een factuur","rechnung bearbeiten","wie bearbeite ich eine rechnung","modifier facture"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel a sent invoice?","How do I duplicate an invoice?","How do I change the invoice date?"]}},"headers":[],"relativePath":"de/faq/edit-invoice.md","filePath":"de/faq/edit-invoice.md"}');
const _sfc_main = { name: "de/faq/edit-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So bearbeiten Sie eine Rechnung:</p><ol><li>Öffnen Sie die Rechnung aus der Liste</li><li>Klicken Sie auf &quot;Bearbeiten&quot;; das ist möglich, solange die Rechnung ein Entwurf ist oder zwar abgeschlossen, aber noch nicht versendet</li><li>Ändern Sie Positionen, Kunde, Daten oder Bedingungen</li><li>Speichern Sie die aktualisierte Rechnung</li></ol><p>Sobald eine Rechnung versendet oder per E-Mail verschickt wurde, oder bezahlt bzw. überfällig ist, ist sie gesperrt und lässt sich nicht mehr bearbeiten. Stornieren Sie sie und erstellen Sie eine neue, oder nutzen Sie &quot;Gutschrift / Korrektur erstellen&quot; für Korrekturen.</p><p>Tipp: Fehler auf einer versendeten Rechnung? Mit einer Gutschrift plus einer neuen Rechnung bleiben Ihre Nummerierung und MwSt.-Unterlagen sauber.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/edit-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editInvoice as default
};
