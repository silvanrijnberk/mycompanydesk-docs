import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Date d'échéance d'une facture","description":"","frontmatter":{"title":"Date d'échéance d'une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["set due date","change due date","payment terms","payment deadline","when invoice due","net 30","net 14","vervaldatum","betaaltermijn","zahlungsfrist","echeance","date d echeance","conditions de paiement","modifier conditions de paiement","changer conditions de paiement","comment modifier les conditions de paiement","comment changer les conditions de paiement"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How do I set default payment terms?","How do I send reminders?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"fr/faq/invoice-due-date.md","filePath":"fr/faq/invoice-due-date.md"}`);
const _sfc_main = { name: "fr/faq/invoice-due-date.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour modifier l&#39;échéance d&#39;une seule facture :</p><ol><li>Ouvrez la facture en mode édition</li><li>Dans la carte des détails de la facture, mettez à jour le champ &quot;Date d&#39;échéance&quot;</li><li>Enregistrez la facture</li></ol><p>Pour que les prochaines factures démarrent avec un autre délai, ajustez les conditions de paiement du client ou la valeur par défaut dans Paramètres → &quot;Factures et devis&quot; sous &quot;Combien de jours le client a-t-il pour payer ?&quot;.</p><p>Astuce : les rappels automatiques suivent la date d&#39;échéance ; avec le bon délai, ils partent aussi au bon moment.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/invoice-due-date.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const invoiceDueDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  invoiceDueDate as default
};
