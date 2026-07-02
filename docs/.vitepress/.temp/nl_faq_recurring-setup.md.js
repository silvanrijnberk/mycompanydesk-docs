import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Terugkerende facturen instellen","description":"","frontmatter":{"title":"Terugkerende facturen instellen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["set up recurring","recurring invoice","recurring expense","automate invoice","automatic invoice","monthly invoice","terugkerende factuur","terugkerende uitgave","wiederkehrende rechnung","facture recurrente"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I stop a recurring invoice?","How do I edit a recurring item?","How do I change the frequency?"]}},"headers":[],"relativePath":"nl/faq/recurring-setup.md","filePath":"nl/faq/recurring-setup.md"}');
const _sfc_main = { name: "nl/faq/recurring-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo stel je een terugkerende factuur in:</p><ol><li>Ga naar Terugkerende facturen en klik op &quot;Terugkerende factuur toevoegen&quot;</li><li>Kies de klant en voeg factuurregels toe</li><li>Stel de frequentie en startdatum in</li><li>Kies of elke factuur automatisch wordt gemaild of als concept wordt aangemaakt</li><li>Sla op en controleer het schema in de lijst met terugkerende facturen</li></ol><p>Er is geen einddatumveld. Wil je stoppen, open dan de terugkerende factuur en klik op &quot;Pauzeren&quot;; dezelfde schakelaar toont &quot;Activeren&quot;, zodat je later weer kunt starten.</p><p>Tip: Terugkerende uitgaven werken hetzelfde. Open Terugkerende uitgaven en volg daar dezelfde stappen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/recurring-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recurringSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  recurringSetup as default
};
