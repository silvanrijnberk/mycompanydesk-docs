import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Donkere modus","description":"","frontmatter":{"title":"Donkere modus","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["dark mode","light mode","switch theme","change theme","night mode","donkere modus","thema wijzigen","dunkler modus","mode sombre"],"actions":[],"follow_up":["How do I change my language?","How do I update my profile?"]}},"headers":[],"relativePath":"nl/faq/dark-mode.md","filePath":"nl/faq/dark-mode.md"}');
const _sfc_main = { name: "nl/faq/dark-mode.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="donkere-modus-in-de-app" tabindex="-1">Donkere modus in de app <a class="header-anchor" href="#donkere-modus-in-de-app" aria-label="Permalink to &quot;Donkere modus in de app&quot;">​</a></h2><p>Om je thema te wisselen:</p><ol><li>Ga naar Instellingen → &quot;Weergave&quot;</li><li>Kies Licht, Donker of Vanzelf (volgt je apparaat)</li><li>De wijziging wordt direct toegepast en automatisch opgeslagen</li></ol><p>Tip: je kunt ook de thema-schakelaar in het navigatiemenu gebruiken voor een snelle wissel.</p><h2 id="donkere-modus-voor-je-website" tabindex="-1">Donkere modus voor je website <a class="header-anchor" href="#donkere-modus-voor-je-website" aria-label="Permalink to &quot;Donkere modus voor je website&quot;">​</a></h2><p>Heb je een gehoste zakelijke website? Dan kun je ook voor je bezoekers een donkere modus instellen. Open het onderdeel <strong>Website</strong> in de app, ga naar de pagina <strong>Stijl</strong> en zoek de donkere-modusinstelling in de sectie <strong>Kleuren</strong>.</p><p>Drie opties:</p><ul><li><strong>Uit</strong> (standaard): Geen donkere modus. Je site blijft in het lichte palet.</li><li><strong>Knop</strong>: Bezoekers zien een zon/maan-knop in de navigatiebalk. De standaard is altijd licht, dus bezoekers die donker willen moeten de knop zelf aanzetten. Eenmaal gekozen, wordt de voorkeur opgeslagen in hun browser voor een volgend bezoek.</li><li><strong>Volg systeem</strong>: De site volgt automatisch de OS-voorkeur van de bezoeker. Past zich aan zodra de bezoeker zijn systeeminstelling wijzigt.</li></ul><p>Zet je donkere modus aan, dan verschijnt er een donker palet waarin je per merkkleur een nachtversie kunt instellen. Het palet leeg laten is prima; de site gebruikt dan een automatische inversie waarbij je merk- en accentkleuren behouden blijven.</p><p>Zie <a href="/nl/advanced/business-page">Sitebouwer</a> voor meer over het vormgeven van je website.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/dark-mode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const darkMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  darkMode as default
};
