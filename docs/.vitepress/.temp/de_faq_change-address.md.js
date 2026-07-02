import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Firmenadresse ändern","description":"","frontmatter":{"title":"Firmenadresse ändern","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change address","update address","company address","billing address","adres wijzigen","bedrijfsadres","adresse andern","changer adresse","firmenadresse andern","wo aendere ich meine firmenadresse","modifier mon adresse d entreprise","ou modifier mon adresse d entreprise"],"actions":[{"label":"Open business details","to":"/settings/bedrijfsgegevens"}],"follow_up":["How do I set up my company settings?","How do I change the PDF template?"]}},"headers":[],"relativePath":"de/faq/change-address.md","filePath":"de/faq/change-address.md"}');
const _sfc_main = { name: "de/faq/change-address.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So ändern Sie Ihre Firmenadresse:</p><ol><li>Gehen Sie zu Einstellungen → „Unternehmensdaten&quot;</li><li>Nutzen Sie dort die Adresshilfe, um die neue Adresse zu suchen und zu übernehmen</li><li>Neue Dokumente verwenden danach die aktualisierte Adresse</li></ol><p>Hinweis: Bereits ausgestellte Dokumente behalten die Adresse, die sie schon hatten.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/change-address.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeAddress as default
};
