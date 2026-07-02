import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change PDF style","description":"","frontmatter":{"title":"Change PDF style","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["change pdf style","customize pdf","pdf template","invoice design","invoice layout","change invoice look","pdf editor","edit pdf template","pdf stijl wijzigen","factuur uiterlijk","pdf sjabloon","pdf-vorlage andern","style pdf"],"actions":[{"label":"Open Branding & Documents","to":"/company?section=brandingDocuments"}],"follow_up":["How do I add my logo?","How do I preview an invoice?","How do I export a PDF?"]}},"headers":[],"relativePath":"fr/faq/change-pdf-style.md","filePath":"fr/faq/change-pdf-style.md"}');
const _sfc_main = { name: "fr/faq/change-pdf-style.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour modifier le style PDF de vos factures :</p><ol><li>Allez dans Paramètres → Éditeur PDF</li><li>Choisissez ou personnalisez la mise en page</li><li>Téléchargez votre logo et définissez les couleurs</li><li>Ajustez les polices, espacement et placement</li><li>Prévisualisez avec des données d&#39;exemple</li><li>Enregistrez - toutes les nouvelles factures utiliseront le nouveau design</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/change-pdf-style.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePdfStyle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changePdfStyle as default
};
