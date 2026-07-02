import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change PDF style","description":"","frontmatter":{"title":"Change PDF style","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["change pdf style","customize pdf","pdf template","invoice design","invoice layout","change invoice look","pdf editor","edit pdf template","pdf stijl wijzigen","factuur uiterlijk","pdf sjabloon","pdf-vorlage andern","style pdf"],"actions":[{"label":"Open Branding & Documents","to":"/company?section=brandingDocuments"}],"follow_up":["How do I add my logo?","How do I preview an invoice?","How do I export a PDF?"]}},"headers":[],"relativePath":"nl/faq/change-pdf-style.md","filePath":"nl/faq/change-pdf-style.md"}');
const _sfc_main = { name: "nl/faq/change-pdf-style.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om je PDF-factuurstijl te wijzigen:</p><ol><li>Ga naar Instellingen → PDF-editor</li><li>Kies of pas je sjabloonlay-out aan</li><li>Upload je logo en stel merkkleuren in</li><li>Pas lettertypen, afstanden en veldplaatsing aan</li><li>Bekijk het resultaat met voorbeelddata</li><li>Sla op - alle nieuwe facturen gebruiken het bijgewerkte ontwerp</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/change-pdf-style.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePdfStyle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changePdfStyle as default
};
