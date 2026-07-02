import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a project","description":"","frontmatter":{"title":"Create a project","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create project","new project","add project","project aanmaken","nieuw project","projekt erstellen","creer projet","comment creer un projet"],"actions":[],"follow_up":["How do I create a contract?","How do I link expenses to a project?"]}},"headers":[],"relativePath":"de/faq/create-project.md","filePath":"de/faq/create-project.md"}');
const _sfc_main = { name: "de/faq/create-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So erstellst du ein Projekt:</p><ol><li>Gehe zu Projekte und oeffne „Neues Projekt&quot;</li><li>Gib Projektname, Nummer und Beschreibung ein</li><li>Verknuepfe bei Bedarf den Kunden</li><li>Setze Status, Daten, Budget und Stundensatz, soweit sie relevant sind</li><li>Speichere das Projekt</li></ol><p>Nach dem Speichern kannst du zugehoerige Rechnungen, Ausgaben oder Vertraege oeffnen und mit diesem Projekt verknuepfen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/create-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createProject as default
};
