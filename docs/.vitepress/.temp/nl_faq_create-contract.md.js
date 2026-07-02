import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a contract","description":"","frontmatter":{"title":"Create a contract","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create contract","new contract","add contract","contract aanmaken","nieuw contract","vertrag erstellen","creer contrat","comment creer un contrat"],"actions":[],"follow_up":["How do I create a project?","How do I link invoices to a contract?"]}},"headers":[],"relativePath":"nl/faq/create-contract.md","filePath":"nl/faq/create-contract.md"}');
const _sfc_main = { name: "nl/faq/create-contract.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een contract aan te maken:</p><ol><li>Ga naar Contracten en open &quot;Nieuw contract&quot;</li><li>Selecteer bij een huurcontract het object en de klant. Bij andere typen (service, NDA, project) is alleen een klant nodig.</li><li>Vul de contractnaam, het bedrag, het BTW-tarief en de herhaling in</li><li>Stel de startdatum en datum van de eerste factuur in</li><li>Voeg zo nodig servicegegevens of automatisch verzenden toe en sla op</li></ol><p>Tip: Je kunt het opgeslagen contract later opnieuw openen om de facturatie-instelling aan te passen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/create-contract.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createContract = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createContract as default
};
