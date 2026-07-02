import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Profit and loss","description":"","frontmatter":{"title":"Profit and loss","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["profit and loss","profit loss","income statement","p&l","winst en verlies","resultatenrekening","gewinn und verlust","compte de resultat","resultat net"],"actions":[{"label":"Open reports","to":"/reports"}],"follow_up":["How do I view charts?","How do I export my reports?","How do I see my year overview?"]}},"headers":[],"relativePath":"fr/faq/profit-loss.md","filePath":"fr/faq/profit-loss.md"}');
const _sfc_main = { name: "fr/faq/profit-loss.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour ouvrir la vue resultat dans l application :</p><ol><li>Ouvrez Rapports</li><li>Ouvrez la vue resultat ou compte de resultat disponible a cet endroit</li><li>Selectionnez la periode que vous voulez consulter</li><li>Examinez les lignes de chiffre d affaires et de depenses pour cette periode, ou exportez le rapport visible si besoin</li></ol><p>Cette reponse se limite a l emplacement du rapport et a ce que l application y affiche.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/profit-loss.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profitLoss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  profitLoss as default
};
