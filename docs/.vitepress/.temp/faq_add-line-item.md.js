import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add line item","description":"","frontmatter":{"title":"Add line item","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["add line item","edit line item","remove line item","invoice line","add row","new line","factuurregel toevoegen","regel bewerken","rechnungsposition","ligne de facture","ajouter ligne"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I add a discount to an invoice?","How do I change the VAT rate on a line?","How do I reorder line items?"]}},"headers":[],"relativePath":"faq/add-line-item.md","filePath":"faq/add-line-item.md"}');
const _sfc_main = { name: "faq/add-line-item.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To add, edit, or remove line items on an invoice:</p><ol><li>Open the invoice in edit mode (or create a new one)</li><li>Click &quot;Add Line&quot; or the + button to add a new row</li><li>Enter description, quantity, unit price, and VAT rate</li><li>To remove a line, click the trash icon next to it</li><li>Save the invoice when done</li></ol><p>Tip: Use clear, specific descriptions for each line item to avoid customer questions.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/add-line-item.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addLineItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addLineItem as default
};
