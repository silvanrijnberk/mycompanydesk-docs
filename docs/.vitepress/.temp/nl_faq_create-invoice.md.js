import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Factuur maken","description":"","frontmatter":{"title":"Factuur maken","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["create invoice","new invoice","make invoice","add invoice","write invoice","send invoice","first invoice","how to invoice","maak factuur","nieuwe factuur","factuur maken","factuur aanmaken","hoe maak ik een factuur","rechnung erstellen","wie erstelle ich eine rechnung","neue rechnung","creer facture","comment creer une facture"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer first?","How do I change the PDF style?","How do I set payment terms?"]}},"headers":[],"relativePath":"nl/faq/create-invoice.md","filePath":"nl/faq/create-invoice.md"}');
const _sfc_main = { name: "nl/faq/create-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo maak je een factuur:</p><ol><li>Ga naar Facturen en open &quot;Nieuwe factuur&quot;</li><li>Kies een klant of voeg er een toe via de klantkiezer</li><li>Voeg regels toe met omschrijving, aantal, prijs en BTW</li><li>Stel in de kaart met factuurdetails de factuurdatum en vervaldatum in</li><li>Gebruik &quot;Opslaan als concept&quot; als de factuur nog niet klaar is, of &quot;Afronden&quot; wanneer die gereed is (MyCompanyDesk controleert eerst je BTW-id en IBAN, je kunt ze meteen invullen als het nodig is)</li><li>Open na het opslaan de factuurdetailpagina om te bekijken of te versturen</li></ol><p>Heeft de klant nog niet-gefactureerde uren, dan haalt het formulier die binnen als factuurregels en vult het ontbrekende omschrijvingen automatisch in.</p><p>Tip: Standaardinstellingen zoals betaaltermijn en offertegeldigheid staan onder Instellingen → &quot;Facturen en offertes&quot;; factuurnummering gaat automatisch, daar hoef je niets voor in te stellen. Zorg dat je BTW-id en IBAN zijn ingevuld, dan rond je facturen zonder onderbreking af.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/create-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createInvoice as default
};
