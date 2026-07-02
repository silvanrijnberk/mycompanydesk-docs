import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Angebotsnummerierung","description":"","frontmatter":{"title":"Angebotsnummerierung","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote number","quote numbering","change quote number","quote format","offerte nummer","offertenummer","angebotsnummer","numerotation devis","numero cotizacion","numero proposta","numero preventivo"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I set quote validity?","How do I edit a quote number safely?","How do I create a new quote?"]}},"headers":[],"relativePath":"de/faq/quote-numbering.md","filePath":"de/faq/quote-numbering.md"}');
const _sfc_main = { name: "de/faq/quote-numbering.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Angebotsnummern werden automatisch vergeben:</p><ol><li>Erstellen Sie ein Angebot; MyCompanyDesk vergibt automatisch die nächste Nummer in Ihrer Serie</li><li>Es gibt kein Nummernformat zu konfigurieren, die Serie bleibt von selbst sauber fortlaufend</li><li>Sie brauchen eine bestimmte Nummer auf einem Entwurf? Öffnen Sie das Angebot im Formular und klicken Sie in der Seitenleiste auf &quot;Eigene Nummer eingeben&quot;</li></ol><p>Tipp: Sobald ein Angebot versendet wurde, ist es gesperrt, einschließlich der Nummer. Legen Sie eine eigene Nummer daher fest, solange das Dokument noch ein Entwurf ist.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/quote-numbering.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteNumbering = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteNumbering as default
};
