import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"API keys","description":"","frontmatter":{"title":"API keys","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["api key","api keys","api access","integration","api token","connect api","api instellen","api schlussel","cle api"],"actions":[{"label":"Open API keys","to":"/settings/api-keys"}],"follow_up":["How do I set up my company settings?","How do I manage team access?"]}},"headers":[],"relativePath":"de/faq/api-keys.md","filePath":"de/faq/api-keys.md"}');
const _sfc_main = { name: "de/faq/api-keys.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So verwaltest du API-Schlüssel:</p><ol><li>Gehe zu Workspace-Einstellungen → API-Schlüssel</li><li>Klicke auf „API-Schlüssel erstellen&quot; und gib ihm einen aussagekräftigen Namen</li><li>Kopiere den Schlüssel sofort, da er nicht erneut angezeigt wird</li><li>Prüfe die Scopes und widerrufe Schlüssel, die du nicht mehr brauchst</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/api-keys.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const apiKeys = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  apiKeys as default
};
