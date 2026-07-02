import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find deleted customers","description":"","frontmatter":{"title":"Find deleted customers","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are deleted customers","where can i find deleted customers","where do i find deleted customers","customer trash","trashed customers","deleted customers","verwijderde klanten","klanten prullenbak","geloschte kunden","geloeschte kunden","geloeschten kunden","kunden papierkorb","clients supprimes","mes clients supprimes","corbeille clients"],"actions":[{"label":"Open customers","to":"/customers?status=trash"}],"follow_up":["Where do I find archived customers?","How do I search customers?","How do I restore a customer?"]}},"headers":[],"relativePath":"faq/find-deleted-customers.md","filePath":"faq/find-deleted-customers.md"}');
const _sfc_main = { name: "faq/find-deleted-customers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Deleted customers are in Customers -&gt; Trash. If you are already in the customer list, switch to the Trash view.</p><p>Keep in mind that deletion is staged: the first delete on an active customer archives them, so if a customer is not in the Trash, check the Archive view first.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-deleted-customers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findDeletedCustomers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findDeletedCustomers as default
};
