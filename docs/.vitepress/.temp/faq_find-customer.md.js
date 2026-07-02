import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find customer","description":"","frontmatter":{"title":"Find customer","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["find customer","search customer","look up customer","filter customers","klant zoeken","klant vinden","kunde suchen","chercher client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I edit a customer?","How do I add a new customer?"]}},"headers":[],"relativePath":"faq/find-customer.md","filePath":"faq/find-customer.md"}');
const _sfc_main = { name: "faq/find-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To find a customer:</p><ol><li>Go to Customers</li><li>Use the search bar at the top; it matches the customer name, customer number, email, and city</li><li>Results filter in real-time as you type</li></ol><p>Tip: The list is always in name order, with favorites pinned to the top. Mark customers you work with often as favorites (the star) so they are always at hand.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findCustomer as default
};
