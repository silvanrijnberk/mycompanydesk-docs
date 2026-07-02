import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Delete customer","description":"","frontmatter":{"title":"Delete customer","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete customer","remove customer","trash customer","klant verwijderen","klant wissen","kunde loschen","supprimer client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I archive a customer instead?","How do I edit customer details?"]}},"headers":[],"relativePath":"faq/delete-customer.md","filePath":"faq/delete-customer.md"}');
const _sfc_main = { name: "faq/delete-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To delete a customer:</p><ol><li>Go to Customers and find the customer</li><li>Open their profile</li><li>In the sidebar, scroll to the &quot;Danger Zone&quot; section</li><li>Click &quot;Delete&quot;</li><li>Confirm the deletion</li></ol><p>Deleting is never blocked, even for customers with linked invoices. It happens in stages: deleting an active customer archives them first, deleting again moves them to the Trash, and deleting from the Trash removes them permanently. You can restore the customer from the Archive or Trash view at any point before that final step.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/delete-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteCustomer as default
};
