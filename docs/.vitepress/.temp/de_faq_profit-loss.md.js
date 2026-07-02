import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Profit and loss","description":"","frontmatter":{"title":"Profit and loss","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["profit and loss","profit loss","income statement","p&l","winst en verlies","resultatenrekening","gewinn und verlust","compte de resultat","resultat net"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I view charts?","How do I export my reports?","How do I see my year overview?"]}},"headers":[],"relativePath":"de/faq/profit-loss.md","filePath":"de/faq/profit-loss.md"}');
const _sfc_main = { name: "de/faq/profit-loss.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So oeffnest du die Gewinn-und-Verlust-Ansicht in der App:</p><ol><li>Oeffne Berichte</li><li>Oeffne dort die verfuegbare Gewinn-und-Verlust- oder GuV-Ansicht</li><li>Waehle den Zeitraum, den du pruefen moechtest</li><li>Sieh dir die Umsatz- und Ausgabenzeilen fuer diesen Zeitraum an oder exportiere den sichtbaren Bericht bei Bedarf</li></ol><p>Diese Antwort beschraenkt sich darauf, wo du diesen Bericht findest und was die App dort anzeigt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/profit-loss.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profitLoss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  profitLoss as default
};
