import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Year overview","description":"","frontmatter":{"title":"Year overview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["year overview","annual overview","yearly summary","year report","jaaroverzicht","jaarcijfers","jaarrapport","jahresubersicht","apercu annuel","bilan annuel"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I export data for my accountant?","How do I view profit and loss?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"fr/faq/year-overview.md","filePath":"fr/faq/year-overview.md"}');
const _sfc_main = { name: "fr/faq/year-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour consulter une annee complete dans l application :</p><ol><li>Ouvrez Rapports</li><li>Reglez le filtre de date sur l annee que vous voulez examiner</li><li>Ouvrez les cartes d apercu et les sections de rapport associees aux donnees que vous souhaitez consulter</li><li>Exportez le rapport visible si vous avez besoin de cette meme vue en dehors de l application</li></ol><p>Cette reponse se limite a l endroit ou trouver l apercu annuel dans l application.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/year-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yearOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yearOverview as default
};
