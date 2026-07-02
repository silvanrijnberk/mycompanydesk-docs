import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Failed invoice email","description":"","frontmatter":{"title":"Failed invoice email","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["failed invoice email","invoice email failed","failed send invoice","invoice not sending","invoice email issue","fix failed invoice email","mislukte factuur-e-mail","factuurmail mislukt","factuur e-mail mislukt","factuur versturen mislukt","hoe los ik een mislukte factuur-e-mail op","fehlgeschlagene rechnungs-e-mail","rechnungs-e-mail fehlgeschlagen","rechnung senden fehlgeschlagen","wie behebe ich eine fehlgeschlagene rechnungs-e-mail","e-mail de facture echoue","email facture echoue","envoi facture echec","comment corriger un e-mail de facture echoue"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I change the customer email?","How do I preview the invoice first?","Where do I check email delivery settings?"]}},"headers":[],"relativePath":"faq/failed-invoice-email.md","filePath":"faq/failed-invoice-email.md"}');
const _sfc_main = { name: "faq/failed-invoice-email.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To fix a failed invoice email:</p><ol><li>Check that the customer record has the correct email address</li><li>Open the invoice detail page and review the delivery status or any error shown there</li><li>Verify your email setup at Settings → &quot;Email&quot;</li><li>Send the invoice again; drafts can be emailed too, Send is the primary action and finalizes the draft in the same step</li><li>If the customer still does not receive it, ask them to check their spam or junk folder</li></ol><p>Tip: Preview the invoice first if you want to confirm the correct customer and document before resending.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/failed-invoice-email.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const failedInvoiceEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  failedInvoiceEmail as default
};
