import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatische Erinnerungen","description":"","frontmatter":{"title":"Automatische Erinnerungen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["automatic reminders","auto reminder","scheduled reminders","reminder automation","automatische herinnering","herinneringen instellen","automatische erinnerung","rappels automatiques"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How do I send a manual reminder?","How do I view overdue invoices?","How do I set payment terms?"]}},"headers":[],"relativePath":"de/faq/automatic-reminders.md","filePath":"de/faq/automatic-reminders.md"}');
const _sfc_main = { name: "de/faq/automatic-reminders.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So richten Sie automatische Zahlungserinnerungen ein:</p><ol><li>Gehen Sie zu Einstellungen → &quot;Rechnungen und Angebote&quot;</li><li>Aktivieren Sie den Schalter &quot;Zu spät? Automatisch eine Erinnerung senden&quot;</li><li>Änderungen werden automatisch gespeichert</li></ol><p>Ist eine Rechnung ein paar Tage über dem Fälligkeitsdatum, sendet MyCompanyDesk automatisch eine freundliche Erinnerung, und danach jede Woche erneut, bis bezahlt wurde. Die Erinnerungs-E-Mails verwenden feste Systemvorlagen; der Text lässt sich nicht bearbeiten.</p><p>Tipp: Möchten Sie einen Kunden sofort erinnern? Sie können von der Rechnung aus auch manuell eine Erinnerung senden.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/automatic-reminders.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automaticReminders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automaticReminders as default
};
