import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rechnung als bezahlt markieren","description":"","frontmatter":{"title":"Rechnung als bezahlt markieren","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["mark invoice paid","invoice paid","mark as paid","record payment","received payment","payment received","factuur betaald","betaald markeren","factuur als betaald","rechnung als bezahlt","marquer payee"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I record a partial payment?","How do I send a payment reminder?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"de/faq/mark-invoice-paid.md","filePath":"de/faq/mark-invoice-paid.md"}');
const _sfc_main = { name: "de/faq/mark-invoice-paid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So markieren Sie eine Rechnung als bezahlt:</p><ol><li>Öffnen Sie die Rechnung aus der Liste</li><li>Klicken Sie im Kopf der Rechnung auf &quot;Als bezahlt markieren&quot;; ein Klick genügt und der Status wechselt zu Bezahlt</li><li>Möchten Sie Zahlungsdatum, Zahlungsart oder eine Referenz erfassen? Nutzen Sie stattdessen &quot;Zahlung erfassen&quot; im Bereich Zahlung</li></ol><p>Tipp: Aktualisiert sich der Status nicht, laden Sie die Liste neu und prüfen Sie auf der Detailseite, ob die Zahlung gespeichert wurde.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/mark-invoice-paid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markInvoicePaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markInvoicePaid as default
};
