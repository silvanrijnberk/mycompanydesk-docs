import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add line item","description":"","frontmatter":{"title":"Add line item","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["add line item","edit line item","remove line item","invoice line","add row","new line","factuurregel toevoegen","regel bewerken","rechnungsposition","ligne de facture","ajouter ligne"],"actions":[{"label":"Open invoices","to":"/invoices"}],"follow_up":["How do I add a discount to an invoice?","How do I change the VAT rate on a line?","How do I reorder line items?"]}},"headers":[],"relativePath":"nl/faq/add-line-item.md","filePath":"nl/faq/add-line-item.md"}');
const _sfc_main = { name: "nl/faq/add-line-item.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om regelitems toe te voegen, te bewerken of te verwijderen op een factuur:</p><ol><li>Open de factuur in bewerkingsmodus</li><li>Klik op &quot;Regel toevoegen&quot; of de +-knop om een nieuwe rij toe te voegen</li><li>Voer omschrijving, aantal, eenheidsprijs en BTW-tarief in</li><li>Om een regel te verwijderen, klik op het verwijdericoon (×) op die rij</li><li>Om de volgorde te wijzigen, sleep de rijen</li><li>Sla op wanneer je klaar bent</li></ol><p>Tip: Gebruik duidelijke, beschrijvende regelomschrijvingen voor professionele facturen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/add-line-item.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addLineItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addLineItem as default
};
