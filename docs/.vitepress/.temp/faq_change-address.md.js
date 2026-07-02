import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change your address","description":"","frontmatter":{"title":"Change your address","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change address","update address","company address","billing address","adres wijzigen","bedrijfsadres","adresse andern","changer adresse","firmenadresse andern","wo aendere ich meine firmenadresse","modifier mon adresse d entreprise","ou modifier mon adresse d entreprise"],"actions":[{"label":"Open business details","to":"/settings/bedrijfsgegevens"}],"follow_up":["How do I set up my company settings?","How do I change the PDF template?"]}},"headers":[],"relativePath":"faq/change-address.md","filePath":"faq/change-address.md"}');
const _sfc_main = { name: "faq/change-address.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To change your company address:</p><ol><li>Go to Settings → &quot;Bedrijfsgegevens&quot; (business details)</li><li>Use the address helper to search for and apply the updated address</li><li>New documents will use that updated address</li></ol><p>Note: Previously issued documents keep the address they already had.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/change-address.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeAddress as default
};
