import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Enable quotes","description":"","frontmatter":{"title":"Enable quotes","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quotes not visible","where are quotes","enable quotes","turn on quotes","show quotes in menu","qoutes not visible","qoutes missing","where are qoutes","offertes niet zichtbaar","quotes activeren","angebote nicht sichtbar","devis non visible","activar cotizaciones","ativar propostas"],"actions":[{"label":"Open features","to":"/settings/onderdelen"},{"label":"Open team settings","to":"/settings/team"}],"follow_up":["How do I grant quote permissions to team members?","How do I create the first quote?","How do I send quotes?"]}},"headers":[],"relativePath":"faq/enable-quotes.md","filePath":"faq/enable-quotes.md"}');
const _sfc_main = { name: "faq/enable-quotes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>If Quotes are missing from navigation:</p><ol><li>Go to Settings → &quot;Onderdelen&quot; (features)</li><li>Turn on the &quot;Offertes&quot; (quotes) toggle</li><li>The menu updates immediately</li></ol><p>Turning a feature off never deletes anything; switch it back on later and everything is still there.</p><p>Tip: In team workspaces, also make sure your account has page access for Quotes.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/enable-quotes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const enableQuotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  enableQuotes as default
};
