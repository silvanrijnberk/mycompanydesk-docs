import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Taal wijzigen","description":"","frontmatter":{"title":"Taal wijzigen","last_verified":"2026-05-17T00:00:00.000Z","chatbot":{"triggers":["taal wijzigen","taal instellen","waar wijzig ik de taal van de app","waar stel ik de factuurtaal in","change language","switch language","app language"],"follow_up":["Hoe wijzig ik de datumnotatie?","Hoe wijzig ik de valuta?"]}},"headers":[],"relativePath":"nl/faq/change-language.md","filePath":"nl/faq/change-language.md"}');
const _sfc_main = { name: "nl/faq/change-language.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>De interface van MyCompanyDesk is Nederlandstalig. Er is geen instelling voor de interfacetaal.</p><p>Voor de documenttaal (facturen, offertes, e-mails) ga je naar Bedrijf → Facturatie (pdf-taal). Je kunt facturen, offertes en e-mails genereren in het Nederlands, Engels, Duits of Frans, onafhankelijk van de interfacetaal.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/change-language.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeLanguage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeLanguage as default
};
