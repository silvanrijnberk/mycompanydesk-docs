import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Modifier votre adresse","description":"","frontmatter":{"title":"Modifier votre adresse","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change address","update address","company address","billing address","adres wijzigen","bedrijfsadres","adresse andern","changer adresse","firmenadresse andern","wo aendere ich meine firmenadresse","modifier mon adresse d entreprise","ou modifier mon adresse d entreprise"],"actions":[{"label":"Open business details","to":"/settings/bedrijfsgegevens"}],"follow_up":["How do I set up my company settings?","How do I change the PDF template?"]}},"headers":[],"relativePath":"fr/faq/change-address.md","filePath":"fr/faq/change-address.md"}');
const _sfc_main = { name: "fr/faq/change-address.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour changer l&#39;adresse de votre entreprise :</p><ol><li>Allez dans Paramètres → « Données de l&#39;entreprise »</li><li>Utilisez l&#39;aide d&#39;adresse pour rechercher puis appliquer la nouvelle adresse</li><li>Les nouveaux documents utiliseront ensuite l&#39;adresse mise à jour</li></ol><p>Remarque : les documents déjà émis conservent l&#39;adresse qu&#39;ils avaient.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/change-address.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeAddress as default
};
