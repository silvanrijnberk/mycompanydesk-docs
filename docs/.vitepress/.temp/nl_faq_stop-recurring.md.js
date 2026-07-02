import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Terugkerende factuur stoppen","description":"","frontmatter":{"title":"Terugkerende factuur stoppen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["stop recurring","cancel recurring","pause recurring","disable recurring","end recurring","terugkerend stoppen","terugkerend annuleren","wiederkehrend stoppen","arreter recurrent"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I edit a recurring item?","How do I create a new recurring invoice?"]}},"headers":[],"relativePath":"nl/faq/stop-recurring.md","filePath":"nl/faq/stop-recurring.md"}');
const _sfc_main = { name: "nl/faq/stop-recurring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zo stop je een terugkerende factuur:</p><ol><li>Ga naar Terugkerende facturen</li><li>Open de terugkerende factuur</li><li>Klik op &quot;Pauzeren&quot; op de detailpagina; dezelfde knop toont daarna &quot;Activeren&quot;, zodat je later weer kunt starten</li><li>Zolang die gepauzeerd is, worden er geen nieuwe facturen aangemaakt</li></ol><p>Er is geen einddatumveld; pauzeren is de manier om het schema te stoppen, en de eerder aangemaakte facturen blijven gewoon bewaard. Bulkacties zijn er niet in de lijst met terugkerende facturen, dus pauzeer elk item apart. Terugkerende uitgaven werken op dezelfde manier, met eigen knoppen Pauzeren en Activeren.</p><p>Tip: Pauzeren is veilig. Er wordt niets verwijderd en met één klik op &quot;Activeren&quot; loopt het schema weer door.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/stop-recurring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stopRecurring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stopRecurring as default
};
