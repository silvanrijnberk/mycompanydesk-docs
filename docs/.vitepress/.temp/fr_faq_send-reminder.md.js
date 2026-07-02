import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Send reminder","description":"","frontmatter":{"title":"Send reminder","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["send reminder","payment reminder","remind customer","follow up","chase payment","herinnering sturen","betaalherinnering","aanmaning","zahlungserinnerung","relance","rappel paiement"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I set up automatic reminders?","How do I view overdue invoices?","How do I mark an invoice as paid?"]}},"headers":[],"relativePath":"fr/faq/send-reminder.md","filePath":"fr/faq/send-reminder.md"}');
const _sfc_main = { name: "fr/faq/send-reminder.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour envoyer un rappel pour une facture impayee :</p><ol><li>Ouvrez la facture</li><li>Utilisez l action « Envoyer un rappel »</li><li>Verifiez le message puis envoyez-le</li></ol><p>Vous pouvez aussi modifier le modele de rappel dans Parametres → E-mails.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/send-reminder.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sendReminder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sendReminder as default
};
