import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a project","description":"","frontmatter":{"title":"Create a project","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create project","new project","add project","project aanmaken","nieuw project","projekt erstellen","creer projet","comment creer un projet"],"actions":[],"follow_up":["How do I create a contract?","How do I link expenses to a project?"]}},"headers":[],"relativePath":"nl/faq/create-project.md","filePath":"nl/faq/create-project.md"}');
const _sfc_main = { name: "nl/faq/create-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een project aan te maken:</p><ol><li>Ga naar Projecten en open &quot;Nieuw project&quot;</li><li>Vul de projectnaam, het nummer en de omschrijving in</li><li>Koppel zo nodig de klant</li><li>Stel status, datums, budget en uurtarief in als die van toepassing zijn</li><li>Sla het project op</li></ol><p>Na het opslaan kun je gerelateerde facturen, uitgaven of contracten openen en aan dit project koppelen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/create-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createProject as default
};
