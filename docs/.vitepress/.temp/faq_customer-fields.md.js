import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customer fields","description":"","frontmatter":{"title":"Customer fields","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer fields","important fields","which fields","required fields","fields matter","klantvelden","welke velden","belangrijkste velden","kundenfelder","wichtigste felder","champs clients","champs importants"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I add a new customer?","How do I edit a customer?","How do I set default payment terms?"]}},"headers":[],"relativePath":"faq/customer-fields.md","filePath":"faq/customer-fields.md"}');
const _sfc_main = { name: "faq/customer-fields.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>The customer fields the app uses most often are:</p><ol><li>Company or customer name - shown on invoices and quotes</li><li>Email address - used when you send documents by email</li><li>Address fields - reused on document layouts that include address details</li><li>VAT number - shown on documents when that field is filled in</li><li>IBAN and payment terms - reused where billing defaults need them</li><li>Contact person and phone number - kept on the customer profile for reference</li></ol><p>Complete the fields you want the app to reuse on new invoices, quotes, and send flows.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/customer-fields.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerFields = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerFields as default
};
