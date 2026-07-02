import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Send a quote","description":"","frontmatter":{"title":"Send a quote","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["send quote","email quote","send proposal","deliver quote","quote email","offerte versturen","devis envoyer","angebot senden","enviar cotizacion","enviar proposta","inviare preventivo"],"actions":[{"label":"Open quotes","to":"/quotes"},{"label":"Open customers","to":"/customers"}],"follow_up":["How do I preview before sending?","How do I fix a failed send?","How do I update the customer email?"]}},"headers":[],"relativePath":"fr/faq/send-quote.md","filePath":"fr/faq/send-quote.md"}');
const _sfc_main = { name: "fr/faq/send-quote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour envoyer un devis par e-mail :</p><ol><li>Ouvrez la page detail du devis</li><li>Cliquez sur « Envoyer »</li><li>Verifiez l apercu et le destinataire</li><li>Confirmez l envoi</li></ol><p>Astuce : Verifiez l e-mail client en cas d echec.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/send-quote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sendQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sendQuote as default
};
