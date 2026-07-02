import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BTW verlegd","description":"","frontmatter":{"title":"BTW verlegd","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["reverse charge","reverse charge invoice","eu invoice","intracommunautair","intracommunity","btw verlegd","reverse charge rechnung","autoliquidation","intra-community"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer VAT number?","How does reverse charge affect my VAT return?","How do I preview an invoice?"]}},"headers":[],"relativePath":"nl/faq/reverse-charge.md","filePath":"nl/faq/reverse-charge.md"}');
const _sfc_main = { name: "nl/faq/reverse-charge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo maak je een factuur met BTW verlegd (EU):</p><ol><li>Ga naar Facturen → Nieuwe factuur</li><li>Kies je EU-klant en controleer of het BTW-nummer bij de klant is ingevuld</li><li>Zet de schakelaar &quot;BTW verlegd&quot; aan op het factuurformulier; MyCompanyDesk stelt dit automatisch voor bij zakelijke EU-klanten</li><li>De BTW op alle factuurregels springt automatisch naar 0%, je hoeft niets handmatig aan te passen</li><li>Bekijk het voorbeeld om de vermelding van de verlegde BTW te controleren en verstuur de factuur</li></ol><p>Tip: De schakelaar staat altijd op het factuurformulier; je hoeft vooraf niets in je instellingen aan te zetten.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/reverse-charge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reverseCharge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reverseCharge as default
};
