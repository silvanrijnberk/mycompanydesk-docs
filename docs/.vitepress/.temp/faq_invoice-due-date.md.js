import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Invoice due date","description":"","frontmatter":{"title":"Invoice due date","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["set due date","change due date","payment terms","payment deadline","when invoice due","net 30","net 14","vervaldatum","betaaltermijn","zahlungsfrist","echeance","date d echeance","conditions de paiement","modifier conditions de paiement","changer conditions de paiement","comment modifier les conditions de paiement","comment changer les conditions de paiement"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How do I set default payment terms?","How do I send reminders?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"faq/invoice-due-date.md","filePath":"faq/invoice-due-date.md"}');
const _sfc_main = { name: "faq/invoice-due-date.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To change the deadline for one invoice:</p><ol><li>Open the invoice in edit mode</li><li>In the Invoice Details card, update the &quot;Due date&quot; field</li><li>Save the invoice</li></ol><p>If you want future invoices to start with a different deadline, update the customer&#39;s payment terms or the default at Settings → &quot;Facturen en offertes&quot; under &quot;Hoeveel dagen krijgt een klant om te betalen?&quot; (how many days does a customer get to pay?).</p><p>Tip: Automatic payment reminders follow the due date, so a correct deadline also means reminders go out at the right moment.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/invoice-due-date.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceDueDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceDueDate as default
};
