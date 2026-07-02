import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create an invoice","description":"","frontmatter":{"title":"Create an invoice","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["create invoice","new invoice","make invoice","add invoice","write invoice","send invoice","first invoice","how to invoice","maak factuur","nieuwe factuur","factuur maken","factuur aanmaken","hoe maak ik een factuur","rechnung erstellen","wie erstelle ich eine rechnung","neue rechnung","creer facture","comment creer une facture"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer first?","How do I change the PDF style?","How do I set payment terms?"]}},"headers":[],"relativePath":"faq/create-invoice.md","filePath":"faq/create-invoice.md"}');
const _sfc_main = { name: "faq/create-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Here&#39;s how to create an invoice:</p><ol><li>Go to Invoices and open &quot;New Invoice&quot;</li><li>Select a customer or add one from the customer picker</li><li>Add the line items with description, quantity, price, and VAT</li><li>In the Invoice Details card, set the invoice date and due date</li><li>Use &quot;Save as Draft&quot; if it is not ready yet, or &quot;Finalize&quot; when the invoice is ready (MyCompanyDesk checks your BTW-id and IBAN first, you can fill them in on the spot if needed)</li><li>After saving, open the invoice detail page to preview or send it</li></ol><p>If the customer has unbilled time entries, the form pulls them in as line items and fills in missing descriptions automatically.</p><p>Tip: Defaults like payment terms and quote validity live at Settings → &quot;Facturen en offertes&quot;; invoice numbering is automatic, so there is nothing to configure there. Make sure your BTW-id and IBAN are filled in so you can finalize without interruption.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/create-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createInvoice as default
};
