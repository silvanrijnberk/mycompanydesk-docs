import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a quote","description":"","frontmatter":{"title":"Create a quote","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create quote","new quote","make quote","create proposal","new proposal","sales quote","estimate","offerte maken","offerte aanmaken","nieuwe offerte","angebot erstellen","neues angebot","wie erstelle ich ein angebot","devis creer","comment creer un devis","nouveau devis","crear cotizacion","crear presupuesto","criar proposta","nuovo preventivo"],"actions":[{"label":"Create quote","to":"/quotes/new"},{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I preview the quote PDF?","How do I send a quote by email?","How do I convert a quote to an invoice?"]}},"headers":[],"relativePath":"de/faq/create-quote.md","filePath":"de/faq/create-quote.md"}');
const _sfc_main = { name: "de/faq/create-quote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So erstellst du ein Angebot:</p><ol><li>Gehe zu Angebote und oeffne „Angebot erstellen&quot;</li><li>Waehle einen Kunden und verknuepfe bei Bedarf ein Projekt</li><li>Fuege Angebotspositionen mit Beschreibung, Menge, Preis und MwSt hinzu</li><li>Setze in der Karte mit den Angebotsdetails Angebotsdatum und „Gueltig bis&quot;</li><li>Nutze „Als Entwurf speichern&quot;, wenn das Angebot noch nicht fertig ist, oder „Finalisieren&quot;, wenn es bereit ist</li><li>Oeffne nach dem Speichern die Angebotsdetailseite, um es zu pruefen oder zu senden</li></ol><p>Tipp: Ein Angebot bleibt getrennt von Rechnungen, bis du es umwandelst.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/create-quote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createQuote as default
};
