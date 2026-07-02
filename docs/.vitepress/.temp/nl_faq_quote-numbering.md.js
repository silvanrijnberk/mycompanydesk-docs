import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Offertenummering","description":"","frontmatter":{"title":"Offertenummering","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote number","quote numbering","change quote number","quote format","offerte nummer","offertenummer","angebotsnummer","numerotation devis","numero cotizacion","numero proposta","numero preventivo"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I set quote validity?","How do I edit a quote number safely?","How do I create a new quote?"]}},"headers":[],"relativePath":"nl/faq/quote-numbering.md","filePath":"nl/faq/quote-numbering.md"}');
const _sfc_main = { name: "nl/faq/quote-numbering.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Offertenummers worden automatisch toegekend:</p><ol><li>Maak een offerte; MyCompanyDesk geeft die het volgende nummer in je reeks</li><li>Er is geen nummeringsformaat om in te stellen, de reeks blijft vanzelf netjes op volgorde</li><li>Wil je een eigen nummer op een concept? Open de offerte in het formulier en klik in de zijbalk op &quot;Eigen nummer invoeren&quot;</li></ol><p>Tip: Zodra een offerte is verstuurd, is die vergrendeld, inclusief het nummer. Stel een eigen nummer dus in zolang het document nog een concept is.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/quote-numbering.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteNumbering = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteNumbering as default
};
