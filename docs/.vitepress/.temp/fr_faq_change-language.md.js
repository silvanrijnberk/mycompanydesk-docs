import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Changer la langue","description":"","frontmatter":{"title":"Changer la langue","last_verified":"2026-05-17T00:00:00.000Z","chatbot":{"triggers":["changer langue","ou changer la langue de l application","change language","switch language","app language"],"follow_up":["Comment changer le format de date ?","Comment changer la devise ?"]}},"headers":[],"relativePath":"fr/faq/change-language.md","filePath":"fr/faq/change-language.md"}');
const _sfc_main = { name: "fr/faq/change-language.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>L&#39;interface de MyCompanyDesk est en neerlandais. Il n&#39;y a pas de reglage de langue de l&#39;interface.</p><p>Pour la langue des documents (factures, devis, e-mails), allez dans Entreprise → Facturation (langue PDF). Vous pouvez generer des factures, devis et e-mails en neerlandais, anglais, allemand ou francais, independamment de la langue de l&#39;interface.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/change-language.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeLanguage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeLanguage as default
};
