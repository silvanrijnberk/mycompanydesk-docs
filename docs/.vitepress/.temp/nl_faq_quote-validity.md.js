import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Geldigheid van offertes","description":"","frontmatter":{"title":"Geldigheid van offertes","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote validity","valid until quote","quote expiry","quote expiration","how long quote valid","quote valid days","geldigheid offerte","offerte geldig","angebotsgultigkeit","devis validite","validez devis","validez cotizacion","validade proposta"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How does quote numbering work?","How do I edit valid-until per quote?","How do I preview the final PDF?"]}},"headers":[],"relativePath":"nl/faq/quote-validity.md","filePath":"nl/faq/quote-validity.md"}');
const _sfc_main = { name: "nl/faq/quote-validity.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>De geldigheid van offertes is één instelling:</p><ol><li>Ga naar Instellingen → &quot;Facturen en offertes&quot;</li><li>Kies onder &quot;Hoe lang blijft een offerte geldig?&quot; voor 2 weken, 1 maand of 2 maanden</li><li>Wijzigingen worden automatisch opgeslagen</li></ol><p>Nieuwe offertes krijgen hun geldig-tot-datum op basis van deze keuze. Is die datum voorbij, dan staat de offerte als Verlopen in je offertelijst.</p><p>Tip: De status Verlopen verschijnt vanzelf, je hoeft offertes niet zelf bij te werken.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/quote-validity.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteValidity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteValidity as default
};
