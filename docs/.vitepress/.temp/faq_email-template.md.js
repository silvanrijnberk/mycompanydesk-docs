import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Email templates","description":"","frontmatter":{"title":"Email templates","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["email template","customize email","invoice email message","email text","change email message","email sjabloon","email aanpassen","e-mail vorlage","modele email","personnaliser email"],"actions":[{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I send an invoice by email?","How do I change the PDF style?"]}},"headers":[],"relativePath":"faq/email-template.md","filePath":"faq/email-template.md"}');
const _sfc_main = { name: "faq/email-template.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Email templates can no longer be edited. MyCompanyDesk uses standard, well-tested texts for invoice, quote, and reminder emails, in your document language.</p><p>What you can change:</p><ol><li>The sender: go to Settings → Email and choose your own domain (Pro), Gmail, or Outlook</li><li>Your sign-off: on the same page, fill in your support email, website, and social links; they appear under every email</li><li>A single email: in the send window you can adjust the recipient, subject, and message before the email goes out</li></ol><p>Tip: The details in your sign-off are shared with your company details, so filling them in once keeps every email complete.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/email-template.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const emailTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  emailTemplate as default
};
