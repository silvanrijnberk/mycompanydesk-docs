import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add VAT number","description":"","frontmatter":{"title":"Add VAT number","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["add vat number","set vat number","enter vat number","btw nummer","btw nummer invoeren","ust id eingeben","numero tva"],"actions":[{"label":"Open business details","to":"/settings/bedrijfsgegevens"}],"follow_up":["How do I set up my company settings?","How do I set VAT on an invoice?"]}},"headers":[],"relativePath":"faq/add-vat-number.md","filePath":"faq/add-vat-number.md"}');
const _sfc_main = { name: "faq/add-vat-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To add or change your company VAT number:</p><ol><li>Go to Settings → &quot;Bedrijfsgegevens&quot; (business details)</li><li>Fill in the &quot;VAT number&quot; field there</li><li>Changes save automatically</li></ol><p>Your VAT number is then available on generated documents. For customer VAT numbers, open the customer profile and set their VAT field there.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/add-vat-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addVatNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addVatNumber as default
};
