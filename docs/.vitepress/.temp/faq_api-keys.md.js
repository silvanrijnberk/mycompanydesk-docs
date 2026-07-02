import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"API keys","description":"","frontmatter":{"title":"API keys","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["api key","api keys","api access","integration","api token","connect api","api instellen","api schlussel","cle api"],"actions":[{"label":"Open API keys","to":"/settings/api-keys"}],"follow_up":["How do I set up my company settings?","How do I manage team access?"]}},"headers":[],"relativePath":"faq/api-keys.md","filePath":"faq/api-keys.md"}');
const _sfc_main = { name: "faq/api-keys.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To manage API keys:</p><ol><li>Go to Workspace Settings → API Keys</li><li>Click &quot;Create API Key&quot; and give it a descriptive name</li><li>Copy the key immediately - it won&#39;t be shown again</li><li>Review the scopes and revoke keys you no longer need</li></ol><p>This answer is limited to where API key actions are in the app.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/api-keys.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const apiKeys = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  apiKeys as default
};
