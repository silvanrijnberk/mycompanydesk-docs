import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rappels automatiques","description":"","frontmatter":{"title":"Rappels automatiques","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["automatic reminders","auto reminder","scheduled reminders","reminder automation","automatische herinnering","herinneringen instellen","automatische erinnerung","rappels automatiques"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How do I send a manual reminder?","How do I view overdue invoices?","How do I set payment terms?"]}},"headers":[],"relativePath":"fr/faq/automatic-reminders.md","filePath":"fr/faq/automatic-reminders.md"}');
const _sfc_main = { name: "fr/faq/automatic-reminders.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour configurer les rappels de paiement automatiques :</p><ol><li>Allez dans Paramètres → &quot;Factures et devis&quot;</li><li>Activez l&#39;interrupteur &quot;En retard ? Envoyer automatiquement un rappel&quot;</li><li>Les modifications sont enregistrées automatiquement</li></ol><p>Quand une facture dépasse de quelques jours sa date d&#39;échéance, MyCompanyDesk envoie automatiquement un rappel courtois, puis le répète chaque semaine jusqu&#39;au paiement. Les e-mails de rappel utilisent des modèles système fixes ; le texte ne peut pas être modifié.</p><p>Astuce : besoin de relancer un client tout de suite ? Vous pouvez aussi envoyer un rappel manuel depuis la facture.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/automatic-reminders.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automaticReminders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automaticReminders as default
};
