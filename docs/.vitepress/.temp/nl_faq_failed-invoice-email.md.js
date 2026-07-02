import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mislukte factuur-e-mail","description":"","frontmatter":{"title":"Mislukte factuur-e-mail","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["failed invoice email","invoice email failed","failed send invoice","invoice not sending","invoice email issue","fix failed invoice email","mislukte factuur-e-mail","factuurmail mislukt","factuur e-mail mislukt","factuur versturen mislukt","hoe los ik een mislukte factuur-e-mail op","fehlgeschlagene rechnungs-e-mail","rechnungs-e-mail fehlgeschlagen","rechnung senden fehlgeschlagen","wie behebe ich eine fehlgeschlagene rechnungs-e-mail","e-mail de facture echoue","email facture echoue","envoi facture echec","comment corriger un e-mail de facture echoue"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open email settings","to":"/settings/email"}],"follow_up":["How do I change the customer email?","How do I preview the invoice first?","Where do I check email delivery settings?"]}},"headers":[],"relativePath":"nl/faq/failed-invoice-email.md","filePath":"nl/faq/failed-invoice-email.md"}');
const _sfc_main = { name: "nl/faq/failed-invoice-email.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo los je een mislukte factuur-e-mail op:</p><ol><li>Controleer of het juiste e-mailadres bij de klant staat</li><li>Open de detailpagina van de factuur en bekijk de bezorgstatus of eventuele foutmelding</li><li>Controleer je e-mailinstellingen via Instellingen → &quot;E-mail&quot;</li><li>Verstuur de factuur opnieuw; ook een concept kun je gewoon mailen, Versturen is de hoofdactie en rondt het concept in dezelfde stap af</li><li>Komt de mail nog steeds niet aan? Vraag de klant dan de spam- of ongewenste-mailmap te checken</li></ol><p>Tip: Bekijk eerst het voorbeeld van de factuur als je zeker wilt weten dat je de juiste klant en het juiste document opnieuw verstuurt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/failed-invoice-email.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const failedInvoiceEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  failedInvoiceEmail as default
};
