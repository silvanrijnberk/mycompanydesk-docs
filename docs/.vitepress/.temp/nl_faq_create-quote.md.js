import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a quote","description":"","frontmatter":{"title":"Create a quote","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create quote","new quote","make quote","create proposal","new proposal","sales quote","estimate","offerte maken","offerte aanmaken","nieuwe offerte","angebot erstellen","neues angebot","wie erstelle ich ein angebot","devis creer","comment creer un devis","nouveau devis","crear cotizacion","crear presupuesto","criar proposta","nuovo preventivo"],"actions":[{"label":"Create quote","to":"/quotes/new"},{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I preview the quote PDF?","How do I send a quote by email?","How do I convert a quote to an invoice?"]}},"headers":[],"relativePath":"nl/faq/create-quote.md","filePath":"nl/faq/create-quote.md"}');
const _sfc_main = { name: "nl/faq/create-quote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo maak je een offerte:</p><ol><li>Ga naar Offertes en open &quot;Offerte aanmaken&quot;</li><li>Selecteer een klant en koppel eventueel een project</li><li>Voeg offerteregels toe met omschrijving, aantal, prijs en BTW</li><li>Stel in de kaart met offertedetails de offertedatum en &quot;Geldig tot&quot; in</li><li>Gebruik &quot;Opslaan als concept&quot; als de offerte nog niet klaar is, of &quot;Afronden&quot; wanneer die gereed is</li><li>Open na het opslaan de offertedetailpagina om te bekijken of te versturen</li></ol><p>Tip: Een offerte blijft los van facturen totdat je die omzet.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/create-quote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createQuote as default
};
