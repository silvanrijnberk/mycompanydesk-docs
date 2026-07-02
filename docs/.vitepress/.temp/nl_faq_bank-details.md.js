import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bankgegevens","description":"","frontmatter":{"title":"Bankgegevens","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["bank details","add bank account","bank information","where do i add my bank details","iban","payment details","bankgegevens","waar voeg ik mijn bankgegevens toe","bankrekening toevoegen","bankdaten","wo trage ich meine bankdaten ein","coordonnees bancaires","ou ajouter mes coordonnees bancaires"],"actions":[{"label":"Open payment settings","to":"/settings/betalen"}],"follow_up":["How do I add payment methods to invoices?","How do I set up my company settings?"]}},"headers":[],"relativePath":"nl/faq/bank-details.md","filePath":"nl/faq/bank-details.md"}');
const _sfc_main = { name: "nl/faq/bank-details.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om je bankgegevens toe te voegen of bij te werken:</p><ol><li>Ga naar Instellingen en open &quot;Betalen&quot;</li><li>Vul je IBAN en de naam op de rekening in bij de kaart met je bankrekening</li><li>Wijzigingen worden automatisch opgeslagen</li></ol><p>Zodra je een IBAN invult, wordt bankoverschrijving automatisch ingeschakeld op je facturen en komt er een betaal-QR-code op je factuur, zodat klanten scannen en meteen het juiste bedrag betalen. Een BIC-veld is er niet; dat is ook niet nodig.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/bank-details.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankDetails as default
};
