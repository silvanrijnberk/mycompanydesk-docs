import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Angebotsstatus","description":"","frontmatter":{"title":"Angebotsstatus","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote status","quote statuses","quote lifecycle","draft open sent canceled","offerte status","angebotsstatus","statut devis","estado cotizacion","status proposta"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I mark a quote as finalized?","How do I mark as sent?","How do I convert to invoice?"]}},"headers":[],"relativePath":"de/faq/quote-status.md","filePath":"de/faq/quote-status.md"}');
const _sfc_main = { name: "de/faq/quote-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Die Angebotsstatus im Überblick: • Entwurf: noch bearbeitbar, noch nicht an den Kunden gesendet • Gesendet: beim Kunden zugestellt • Akzeptiert: der Kunde hat dem Angebot zugestimmt • Zurückgewiesen: der Kunde hat das Angebot abgelehnt • Abgelaufen: das Gültig-bis-Datum ist verstrichen; das wird automatisch angezeigt</p><p>Wandeln Sie ein akzeptiertes Angebot in eine Rechnung um, bleibt das Angebot Akzeptiert und erhält die Markierung &quot;In Rechnung umgewandelt&quot;.</p><p>Tipp: Nutzen Sie die Filter in der Angebotsliste, um zuerst Entwürfe und abgelaufene Angebote zu prüfen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/quote-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteStatus as default
};
