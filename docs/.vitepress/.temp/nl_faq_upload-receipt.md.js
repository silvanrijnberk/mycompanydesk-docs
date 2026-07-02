import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Upload receipt","description":"","frontmatter":{"title":"Upload receipt","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["upload receipt","attach receipt","add receipt","receipt photo","scan receipt","expense receipt","bon uploaden","bon toevoegen","beleg hochladen","telecharger recu"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I create an expense?","How do I categorize an expense?"]}},"headers":[],"relativePath":"nl/faq/upload-receipt.md","filePath":"nl/faq/upload-receipt.md"}');
const _sfc_main = { name: "nl/faq/upload-receipt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een bon te uploaden bij een uitgave:</p><ol><li>Open een bestaande uitgave, of sla eerst een nieuwe uitgave op</li><li>Gebruik op de detailpagina van de uitgave de actie &quot;Bon uploaden&quot;</li><li>Selecteer het afbeeldings- of PDF-bestand dat je wilt toevoegen</li><li>Wacht tot de upload klaar is en controleer of de bon bij de uitgave verschijnt</li></ol><p>Tip: Zit je nog op het formulier voor een nieuwe uitgave, sla die dan eerst op want het uploaden van een bon gebeurt op de detailpagina.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/upload-receipt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uploadReceipt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uploadReceipt as default
};
