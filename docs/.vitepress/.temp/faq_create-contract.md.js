import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a contract","description":"","frontmatter":{"title":"Create a contract","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create contract","new contract","add contract","contract aanmaken","nieuw contract","vertrag erstellen","creer contrat","comment creer un contrat"],"actions":[],"follow_up":["How do I create a project?","How do I link invoices to a contract?"]}},"headers":[],"relativePath":"faq/create-contract.md","filePath":"faq/create-contract.md"}');
const _sfc_main = { name: "faq/create-contract.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To create a contract:</p><ol><li>Go to Contracts and open &quot;New Contract&quot;</li><li>For rental contracts, select the property, then choose the customer. For other contract types (service, NDA, project), only a customer is needed.</li><li>Enter the contract name, amount, VAT rate, and recurrence</li><li>Set the start date and first invoice date</li><li>Add optional service details or auto-send settings if needed</li><li>Save the contract</li></ol><p>You can open the saved contract later to review or adjust the billing setup.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/create-contract.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createContract = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createContract as default
};
