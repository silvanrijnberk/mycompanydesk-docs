import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Valuta wijzigen","description":"","frontmatter":{"title":"Valuta wijzigen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["change currency","set currency","currency settings","euro dollar","valuta wijzigen","valuta instellen","wahrung andern","changer devise"],"follow_up":["How do I invoice in a different currency?","How do I change my language?"]}},"headers":[],"relativePath":"nl/faq/change-currency.md","filePath":"nl/faq/change-currency.md"}');
const _sfc_main = { name: "nl/faq/change-currency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Er is geen valuta-instelling om te wijzigen. MyCompanyDesk werkt bewust alleen in euro&#39;s: alle facturen, offertes, uitgaven en rapportages staan in EUR. Dit kun je nergens aanpassen, ook niet onder Mijn account.</p><p>Kijk bij <a href="/nl/faq/multi-currency">Meerdere valuta</a> voor hoe dit werkt als je klanten in het buitenland factureert.</p><p>Tip: Je kunt facturen wel in het Engels, Duits of Frans versturen; alleen de bedragen zijn altijd in euro&#39;s.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/change-currency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCurrency as default
};
