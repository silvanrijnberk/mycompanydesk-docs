import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatic reminders","description":"","frontmatter":{"title":"Automatic reminders","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["automatic reminders","auto reminder","scheduled reminders","reminder automation","automatische herinnering","herinneringen instellen","automatische erinnerung","rappels automatiques"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How do I send a manual reminder?","How do I view overdue invoices?","How do I set payment terms?"]}},"headers":[],"relativePath":"faq/automatic-reminders.md","filePath":"faq/automatic-reminders.md"}');
const _sfc_main = { name: "faq/automatic-reminders.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To set up automatic payment reminders:</p><ol><li>Go to Settings → &quot;Facturen en offertes&quot;</li><li>Turn on the reminder toggle (&quot;Te laat? Automatisch een herinnering sturen&quot;)</li><li>Changes save automatically</li></ol><p>When an invoice is a few days past its due date, MyCompanyDesk automatically sends a friendly reminder, and repeats it every week until the invoice is paid. The reminder emails use fixed system templates; the text cannot be edited.</p><p>Tip: Need to nudge a customer right now? You can also send a manual reminder from the invoice.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/automatic-reminders.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automaticReminders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automaticReminders as default
};
