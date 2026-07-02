import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Upload receipt","description":"","frontmatter":{"title":"Upload receipt","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["upload receipt","attach receipt","add receipt","receipt photo","scan receipt","expense receipt","bon uploaden","bon toevoegen","beleg hochladen","telecharger recu"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I create an expense?","How do I categorize an expense?"]}},"headers":[],"relativePath":"de/faq/upload-receipt.md","filePath":"de/faq/upload-receipt.md"}');
const _sfc_main = { name: "de/faq/upload-receipt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So laedst du einen Beleg zu einer Ausgabe hoch:</p><ol><li>Oeffne eine bestehende Ausgabe oder speichere eine neue Ausgabe zuerst</li><li>Nutze auf der Detailseite der Ausgabe die Aktion „Beleg hochladen&quot;</li><li>Waehle die Bild- oder PDF-Datei aus, die du anhaengen willst</li><li>Warte, bis der Upload abgeschlossen ist, und pruefe, ob der Beleg bei der Ausgabe erscheint</li></ol><p>Tipp: Wenn du noch auf dem Formular fuer eine neue Ausgabe bist, speichere sie zuerst, denn der Beleg-Upload passiert auf der Detailseite.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/upload-receipt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uploadReceipt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uploadReceipt as default
};
