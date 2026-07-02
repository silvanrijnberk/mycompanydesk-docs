import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VAT return","description":"","frontmatter":{"title":"VAT return","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["vat return","vat filing","file vat","prepare vat","vat report","btw aangifte","btw indienen","btw berekening","mwst meldung","declaration tva"],"actions":[{"label":"Open VAT","to":"/vat"},{"label":"Open reports","to":"/reports"}],"follow_up":["How do I add my VAT number?","How do I view financial reports?","How do I export data for my accountant?"]}},"headers":[],"relativePath":"fr/faq/vat-return.md","filePath":"fr/faq/vat-return.md"}');
const _sfc_main = { name: "fr/faq/vat-return.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour consulter les chiffres de TVA dans l application :</p><ol><li>Ouvrez TVA</li><li>Selectionnez la periode a verifier</li><li>Consultez les totaux TVA calcules et ouvrez les factures ou depenses liees si vous devez controler les enregistrements source</li><li>Utilisez l option d export si vous avez besoin des chiffres affiches en dehors de l application</li></ol><p>L application affiche les calculs de TVA pour vos donnees enregistrees, mais elle ne depose ni ne transmet la declaration a votre place.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/vat-return.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vatReturn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vatReturn as default
};
