import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Team access","description":"","frontmatter":{"title":"Team access","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["team access","access team","add user","invite team","user management","team member","team settings","teamtoegang","gebruiker toevoegen","teamzugang","benutzer einladen","acces equipe","inviter membre","team members","invite teammate","workspace","teamleden","uitnodigen","werkruimte"],"actions":[{"label":"Open team settings","to":"/settings?section=team"}],"follow_up":["How do I set page permissions for a team member?","How do I manage accountant access?","How do I remove a team member?"]}},"headers":[],"relativePath":"faq/team-access.md","filePath":"faq/team-access.md"}');
const _sfc_main = { name: "faq/team-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To manage team members and workspace access:</p><ol><li>Go to Workspace Settings → Team</li><li>Review current members and roles there</li><li>Use &quot;Invite teammate&quot; / &quot;Send invite&quot; to add a teammate by email</li><li>Open the Manage access button or gear icon on a member to set page access</li></ol><p>Permissions are managed per page with Read, Write, and Create options.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/team-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teamAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  teamAccess as default
};
