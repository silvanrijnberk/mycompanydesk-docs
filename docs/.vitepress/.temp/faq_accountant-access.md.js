import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Accountant access","description":"","frontmatter":{"title":"Accountant access","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["accountant access","accountant permissions","add accountant","invite accountant","accountant toevoegen","boekhouder","buchhalter einladen","buchhalter zugang","comptable acces","ajouter comptable","accountant invite","revoke accountant"],"actions":[{"label":"Open team settings","to":"/settings?section=team"}],"follow_up":["How do I set page permissions?","How do I invite a team member?","How do I revoke access?"]}},"headers":[],"relativePath":"faq/accountant-access.md","filePath":"faq/accountant-access.md"}');
const _sfc_main = { name: "faq/accountant-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To manage accountant access:</p><ol><li>Go to Workspace Settings → Team</li><li>In the Accountants section, use &quot;Add accountant&quot; to add the contact details</li><li>Send the invite when you want them to create an account</li><li>Open Manage access to set page permissions</li></ol><p>Common statuses are contact-only, invited, active, and revoked.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/accountant-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accountantAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  accountantAccess as default
};
