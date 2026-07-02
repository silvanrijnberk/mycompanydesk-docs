import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find archived customers","description":"","frontmatter":{"title":"Find archived customers","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are archived customers","where can i find archived customers","where do i find archived customers","customer archive","archived customers","gearchiveerde klanten","klanten archief","archivierte kunden","archivierten kunden","kunden archiv","clients archives","mes clients archives","archives clients"],"actions":[{"label":"Open customers","to":"/customers?status=archived"}],"follow_up":["Where do I find deleted customers?","How do I search customers?","How do I edit a customer?"]}},"headers":[],"relativePath":"faq/find-archived-customers.md","filePath":"faq/find-archived-customers.md"}');
const _sfc_main = { name: "faq/find-archived-customers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Archived customers are in Customers -&gt; Archive. If you are already in the customer list, switch to the Archive view. Deleted customers are in Trash.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-archived-customers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findArchivedCustomers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findArchivedCustomers as default
};
