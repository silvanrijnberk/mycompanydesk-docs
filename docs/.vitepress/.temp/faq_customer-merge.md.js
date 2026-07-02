import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Merge customers","description":"","frontmatter":{"title":"Merge customers","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["merge customers","duplicate customer","combine customers","customer duplicate","klanten samenvoegen","dubbele klant","kunden zusammenfuhren","fusionner clients","doublons clients"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I edit a customer?","How do I find a customer?","How do I delete a customer?"]}},"headers":[],"relativePath":"faq/customer-merge.md","filePath":"faq/customer-merge.md"}');
const _sfc_main = { name: "faq/customer-merge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To handle duplicate customers:</p><ol><li>Identify the duplicate entries in your customer list</li><li>Decide which record to keep (the one with the most complete data)</li><li>Update the keeper record with any missing information from the duplicate</li><li>Re-assign invoices from the duplicate to the keeper if needed</li><li>Delete the duplicate record</li></ol><p>Tip: Prevent duplicates by searching for existing customers before creating new ones.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/customer-merge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerMerge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerMerge as default
};
