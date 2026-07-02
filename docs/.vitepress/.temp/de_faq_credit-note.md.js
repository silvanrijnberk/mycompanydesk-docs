import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gutschrift","description":"","frontmatter":{"title":"Gutschrift","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["credit note","create credit note","issue credit","credit invoice","creditnota","creditnota aanmaken","gutschrift erstellen","note de credit","avoir"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel an invoice instead?","How does a credit note affect my VAT?","How do I find the original invoice?"]}},"headers":[],"relativePath":"de/faq/credit-note.md","filePath":"de/faq/credit-note.md"}');
const _sfc_main = { name: "de/faq/credit-note.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So erstellen Sie eine Gutschrift:</p><ol><li>Öffnen Sie die Originalrechnung, die Sie gutschreiben möchten</li><li>Klicken Sie auf der Detailseite auf &quot;Gutschrift / Korrektur erstellen&quot;</li><li>MyCompanyDesk erstellt in einem Schritt eine vollständige, endgültige Gutschrift: jede Position des Originals wird negativ übernommen und die Gutschrift erhält die nächste Nummer in Ihrer Serie</li><li>Senden Sie die Gutschrift an den Kunden</li></ol><p>Die Beträge lassen sich beim Erstellen nicht anpassen; versendete Dokumente sind gesperrt, die Gutschrift spiegelt das Original daher immer exakt wider. Für eine Teilkorrektur erstellen Sie zuerst die vollständige Gutschrift und stellen anschließend eine neue Rechnung über den richtigen Betrag aus.</p><p>Tipp: Da Sie die Gutschrift direkt aus der Originalrechnung erstellen, passen beide Dokumente exakt zusammen und Ihre Buchhaltung bleibt stimmig.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/credit-note.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const creditNote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  creditNote as default
};
