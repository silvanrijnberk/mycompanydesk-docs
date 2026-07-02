import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customer collections","description":"","frontmatter":{"title":"Customer collections","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer data collections","improve collections","data improve collections","collections","incasso","klantgegevens incasso","forderungsmanagement","recouvrement"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send payment reminders?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"faq/customer-collections.md","filePath":"faq/customer-collections.md"}');
const _sfc_main = { name: "faq/customer-collections.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To view customer data that affects invoice follow-up in the app:</p><ol><li>Open Customers and select the customer</li><li>Check the saved billing email, address, VAT number, and payment terms on the customer profile</li><li>Check the &quot;Recent invoices&quot; card for each invoice&#39;s status and total, and open an invoice for its payment details</li><li>Update the customer record if the contact or billing details are outdated</li></ol><p>Up-to-date contact and billing details make reminders land at the right address, which is the biggest lever for getting invoices paid on time.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/customer-collections.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerCollections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerCollections as default
};
