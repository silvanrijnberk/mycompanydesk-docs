import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Team permissions","description":"","frontmatter":{"title":"Team permissions","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["team permissions","manage team permissions","page permissions","read write create","permission settings","access control","granular permissions","read only","write access","create access","pagina rechten","teamrechten","lezen schrijven","toegang instellen","seitenberechtigungen","teamberechtigungen","lese schreibzugriff","permissions page","permissions de l'equipe","droits acces"],"actions":[{"label":"Open team settings","to":"/settings?section=team"}],"follow_up":["How do I invite a new team member?","How do I manage accountant access?","How do I revoke someone's access?"]}},"headers":[],"relativePath":"de/faq/team-permissions.md","filePath":"de/faq/team-permissions.md"}`);
const _sfc_main = { name: "de/faq/team-permissions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Seitenberechtigungen steuern, was jedes Teammitglied oder jeder Buchhalter tun darf: • Lesen - Daten ansehen • Schreiben - bestehende Einträge bearbeiten • Erstellen - neue Einträge anlegen</p><p>So richtest du das ein:</p><ol><li>Gehe zu Workspace-Einstellungen → Team</li><li>Öffne „Zugang verwalten&quot; beim Teammitglied oder Buchhalter</li><li>Schalte Lesen, Schreiben und Erstellen pro Seite ein oder aus</li></ol><p>Hinweis: Lesen ist erforderlich, bevor Schreiben oder Erstellen funktioniert.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/team-permissions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teamPermissions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  teamPermissions as default
};
