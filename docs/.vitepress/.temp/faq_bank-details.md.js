import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bank details","description":"","frontmatter":{"title":"Bank details","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bank details","add bank account","bank information","where do i add my bank details","iban","payment details","bankgegevens","waar voeg ik mijn bankgegevens toe","bankrekening toevoegen","bankdaten","wo trage ich meine bankdaten ein","coordonnees bancaires","ou ajouter mes coordonnees bancaires"],"actions":[{"label":"Open payment settings","to":"/settings/betalen"}],"follow_up":["How do I add payment methods to invoices?","How do I set up my company settings?"]}},"headers":[],"relativePath":"faq/bank-details.md","filePath":"faq/bank-details.md"}');
const _sfc_main = { name: "faq/bank-details.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To add or update bank details:</p><ol><li>Go to Settings and open &quot;Betalen&quot;</li><li>Enter your IBAN and the name on the account in the bank account card</li><li>Changes save automatically</li></ol><p>Filling in an IBAN automatically enables bank transfer on your invoices, and a payment QR code is added to your invoices so customers can scan and pay the exact amount. There is no BIC field; it is not needed.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/bank-details.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankDetails as default
};
