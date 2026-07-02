import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Logo toevoegen","description":"","frontmatter":{"title":"Logo toevoegen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["add logo","upload logo","change logo","company logo","logo on invoice","logo toevoegen","logo wijzigen","logo uploaden","logo hochladen","ajouter logo"],"actions":[{"label":"Open logo and colour","to":"/settings/uiterlijk"}],"follow_up":["How do I change the PDF template?","How do I set up my company settings?"]}},"headers":[],"relativePath":"nl/faq/add-logo.md","filePath":"nl/faq/add-logo.md"}');
const _sfc_main = { name: "nl/faq/add-logo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om je bedrijfslogo toe te voegen of te wijzigen:</p><ol><li>Ga naar Instellingen → &quot;Logo en kleur&quot;</li><li>Zoek de sectie &quot;Logo&quot;</li><li>Klik op &quot;Uploaden&quot; en selecteer je logobestand (PNG of JPG aanbevolen)</li><li>Je logo verschijnt op alle facturen en documenten; het livevoorbeeld toont meteen het resultaat</li></ol><p>Tip: gebruik een logo met hoge resolutie (minstens 300px breed) voor scherpe PDF&#39;s.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/add-logo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addLogo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addLogo as default
};
