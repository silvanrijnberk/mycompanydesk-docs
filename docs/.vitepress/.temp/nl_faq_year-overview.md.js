import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Year overview","description":"","frontmatter":{"title":"Year overview","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["year overview","annual overview","yearly summary","year report","jaaroverzicht","jaarcijfers","jaarrapport","jahresubersicht","apercu annuel","bilan annuel"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I export data for my accountant?","How do I view profit and loss?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"nl/faq/year-overview.md","filePath":"nl/faq/year-overview.md"}');
const _sfc_main = { name: "nl/faq/year-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een volledig jaar in de app te bekijken:</p><ol><li>Open Rapporten</li><li>Zet de datumfilter op het jaar dat je wilt controleren</li><li>Open de overzichtskaarten en de bijbehorende rapportsecties voor de gegevens die je wilt bekijken</li><li>Exporteer het zichtbare rapport als je precies die weergave buiten de app nodig hebt</li></ol><p>Dit antwoord blijft beperkt tot waar je het jaaroverzicht in de app vindt.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/year-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yearOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yearOverview as default
};
