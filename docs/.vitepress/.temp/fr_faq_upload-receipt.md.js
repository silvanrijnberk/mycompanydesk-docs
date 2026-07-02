import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Upload receipt","description":"","frontmatter":{"title":"Upload receipt","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["upload receipt","attach receipt","add receipt","receipt photo","scan receipt","expense receipt","bon uploaden","bon toevoegen","beleg hochladen","telecharger recu"],"actions":[{"label":"Open expenses","to":"/expenses"}],"follow_up":["How do I create an expense?","How do I categorize an expense?"]}},"headers":[],"relativePath":"fr/faq/upload-receipt.md","filePath":"fr/faq/upload-receipt.md"}');
const _sfc_main = { name: "fr/faq/upload-receipt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour televerser un recu sur une depense :</p><ol><li>Ouvrez une depense existante, ou enregistrez d abord une nouvelle depense</li><li>Sur la page detail de la depense, utilisez l action « Televerser le recu »</li><li>Selectionnez le fichier image ou PDF a joindre</li><li>Attendez la fin du televersement et verifiez que le recu apparait sur la depense</li></ol><p>Astuce : si vous etes encore sur le formulaire de nouvelle depense, enregistrez-la d abord car le televersement du recu se fait sur la page detail.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/upload-receipt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uploadReceipt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uploadReceipt as default
};
