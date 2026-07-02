import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change language","description":"","frontmatter":{"title":"Change language","last_verified":"2026-05-17T00:00:00.000Z","chatbot":{"triggers":["change language","switch language","set language","language settings","app language","change app language","where do i change the app language","dutch language","german language","french language","taal wijzigen","taal instellen","waar wijzig ik de taal van de app","waar stel ik de factuurtaal in","sprache andern","wo aendere ich die sprache der app","changer langue","ou changer la langue de l application"],"follow_up":["How do I change the date format?","How do I change the currency?"]}},"headers":[],"relativePath":"faq/change-language.md","filePath":"faq/change-language.md"}');
const _sfc_main = { name: "faq/change-language.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>The MyCompanyDesk interface is Dutch-only. There is no interface language setting.</p><p>For document language (invoices, quotes, emails), go to Company → Invoicing (PDF language). You can generate invoices, quotes, and emails in Dutch, English, German, or French regardless of the interface language.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/change-language.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeLanguage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeLanguage as default
};
