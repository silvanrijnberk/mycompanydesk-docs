import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VAT return","description":"","frontmatter":{"title":"VAT return","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["vat return","vat filing","file vat","prepare vat","vat report","btw aangifte","btw indienen","btw berekening","mwst meldung","declaration tva"],"actions":[{"label":"Open VAT","to":"/vat"},{"label":"Open reports","to":"/reports"}],"follow_up":["How do I add my VAT number?","How do I view financial reports?","How do I export data for my accountant?"]}},"headers":[],"relativePath":"de/faq/vat-return.md","filePath":"de/faq/vat-return.md"}');
const _sfc_main = { name: "de/faq/vat-return.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So pruefst du MwSt-Zahlen in der App:</p><ol><li>Oeffne MwSt</li><li>Waehle den Zeitraum, den du kontrollieren willst</li><li>Pruefe die berechneten MwSt-Summen und oeffne die zugehoerigen Rechnungen oder Ausgaben, wenn du die Quelldaten sehen willst</li><li>Nutze die Exportfunktion, wenn du die sichtbaren Zahlen ausserhalb der App brauchst</li></ol><p>Die App zeigt MwSt-Berechnungen fuer deine erfassten Daten an, reicht die Meldung aber nicht fuer dich ein.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/vat-return.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vatReturn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vatReturn as default
};
