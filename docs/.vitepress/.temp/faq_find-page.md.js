import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find page","description":"","frontmatter":{"title":"Find page","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where is","find page","navigate to","how to get to","menu location","waar vind ik","waar is","wo finde ich","ou trouver"],"actions":[],"follow_up":["How do I use the dashboard?","How do I search for invoices?"]}},"headers":[],"relativePath":"faq/find-page.md","filePath":"faq/find-page.md"}');
const _sfc_main = { name: "faq/find-page.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To find pages in the app: • Use the main navigation menu • Main sections are Dashboard, Invoices, Quotes, Expenses, Customers, Recurring, Projects, Contracts, Properties, Reports, Overview, VAT, Company, Workspace Settings, and My Account • Company-related setup is under Company • API keys, team access, and feature toggles are under Workspace Settings • Personal language, display, notifications, security, and data tools are under My Account</p><p>Tip: If a menu item is missing, first check Workspace Settings → Features and your page permissions.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findPage as default
};
