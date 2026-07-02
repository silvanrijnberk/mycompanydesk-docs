import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Creditnota","description":"","frontmatter":{"title":"Creditnota","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["credit note","create credit note","issue credit","credit invoice","creditnota","creditnota aanmaken","gutschrift erstellen","note de credit","avoir"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I cancel an invoice instead?","How does a credit note affect my VAT?","How do I find the original invoice?"]}},"headers":[],"relativePath":"nl/faq/credit-note.md","filePath":"nl/faq/credit-note.md"}');
const _sfc_main = { name: "nl/faq/credit-note.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo maak je een creditnota:</p><ol><li>Open de originele factuur die je wilt crediteren</li><li>Klik op &quot;Creditnota / correctie maken&quot; op de detailpagina</li><li>MyCompanyDesk maakt in één stap een complete, definitieve creditnota: elke regel van het origineel wordt negatief overgenomen en de creditnota krijgt het volgende nummer in je reeks</li><li>Verstuur de creditnota naar de klant</li></ol><p>Je kunt de bedragen tijdens het aanmaken niet aanpassen; verstuurde documenten zijn vergrendeld, dus de creditnota is altijd een exacte spiegel van het origineel. Wil je maar een deel corrigeren? Maak dan eerst de volledige creditnota en stuur daarna een nieuwe factuur met het juiste bedrag.</p><p>Tip: Doordat je de creditnota vanaf de originele factuur maakt, sluiten beide documenten precies op elkaar aan en blijft je administratie kloppend.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/credit-note.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const creditNote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  creditNote as default
};
