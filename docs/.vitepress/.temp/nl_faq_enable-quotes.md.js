import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Offertes aanzetten","description":"","frontmatter":{"title":"Offertes aanzetten","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quotes not visible","where are quotes","enable quotes","turn on quotes","show quotes in menu","qoutes not visible","qoutes missing","where are qoutes","offertes niet zichtbaar","quotes activeren","angebote nicht sichtbar","devis non visible","activar cotizaciones","ativar propostas"],"actions":[{"label":"Open features","to":"/settings/onderdelen"},{"label":"Open team settings","to":"/settings/team"}],"follow_up":["How do I grant quote permissions to team members?","How do I create the first quote?","How do I send quotes?"]}},"headers":[],"relativePath":"nl/faq/enable-quotes.md","filePath":"nl/faq/enable-quotes.md"}');
const _sfc_main = { name: "nl/faq/enable-quotes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Staan Offertes niet in het menu?</p><ol><li>Ga naar Instellingen → &quot;Onderdelen&quot;</li><li>Zet de schakelaar &quot;Offertes&quot; aan</li><li>Het menu wordt direct bijgewerkt</li></ol><p>Een onderdeel uitzetten gooit niets weg; zet je het later weer aan, dan staat alles er nog precies zo.</p><p>Tip: Werk je met een team? Controleer dan ook of jouw account paginatoegang heeft voor Offertes.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/enable-quotes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const enableQuotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  enableQuotes as default
};
