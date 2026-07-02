import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Offertestatus","description":"","frontmatter":{"title":"Offertestatus","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote status","quote statuses","quote lifecycle","draft open sent canceled","offerte status","angebotsstatus","statut devis","estado cotizacion","status proposta"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I mark a quote as finalized?","How do I mark as sent?","How do I convert to invoice?"]}},"headers":[],"relativePath":"nl/faq/quote-status.md","filePath":"nl/faq/quote-status.md"}');
const _sfc_main = { name: "nl/faq/quote-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>De offertestatussen op een rij: • Concept: nog te bewerken, nog niet naar de klant verstuurd • Verzonden: bij de klant afgeleverd • Geaccepteerd: de klant is akkoord met de offerte • Geweigerd: de klant heeft de offerte afgewezen • Verlopen: de geldig-tot-datum is verstreken; dit wordt automatisch getoond</p><p>Zet je een geaccepteerde offerte om naar een factuur, dan blijft de offerte Geaccepteerd en krijgt die de markering &quot;Omgezet naar factuur&quot;.</p><p>Tip: Gebruik de filters in de offertelijst om eerst naar concepten en verlopen offertes te kijken.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/quote-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteStatus as default
};
