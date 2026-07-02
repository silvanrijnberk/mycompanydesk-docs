import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatische herinneringen","description":"","frontmatter":{"title":"Automatische herinneringen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["automatic reminders","auto reminder","scheduled reminders","reminder automation","automatische herinnering","herinneringen instellen","automatische erinnerung","rappels automatiques"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How do I send a manual reminder?","How do I view overdue invoices?","How do I set payment terms?"]}},"headers":[],"relativePath":"nl/faq/automatic-reminders.md","filePath":"nl/faq/automatic-reminders.md"}');
const _sfc_main = { name: "nl/faq/automatic-reminders.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo stel je automatische betalingsherinneringen in:</p><ol><li>Ga naar Instellingen → &quot;Facturen en offertes&quot;</li><li>Zet de schakelaar &quot;Te laat? Automatisch een herinnering sturen&quot; aan</li><li>Wijzigingen worden automatisch opgeslagen</li></ol><p>Is een factuur een paar dagen over de vervaldatum, dan stuurt MyCompanyDesk vanzelf een vriendelijke herinnering, en daarna elke week opnieuw tot er betaald is. De herinneringsmails gebruiken vaste systeemsjablonen; de tekst kun je niet aanpassen.</p><p>Tip: Wil je een klant nu meteen een duwtje geven? Je kunt ook handmatig een herinnering sturen vanaf de factuur.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/automatic-reminders.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automaticReminders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automaticReminders as default
};
