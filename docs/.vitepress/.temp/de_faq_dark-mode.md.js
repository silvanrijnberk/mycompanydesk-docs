import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dunkelmodus","description":"","frontmatter":{"title":"Dunkelmodus","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["dark mode","light mode","switch theme","change theme","night mode","donkere modus","thema wijzigen","dunkler modus","mode sombre"],"actions":[],"follow_up":["How do I change my language?","How do I update my profile?"]}},"headers":[],"relativePath":"de/faq/dark-mode.md","filePath":"de/faq/dark-mode.md"}');
const _sfc_main = { name: "de/faq/dark-mode.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="dunkelmodus-in-der-app" tabindex="-1">Dunkelmodus in der App <a class="header-anchor" href="#dunkelmodus-in-der-app" aria-label="Permalink to &quot;Dunkelmodus in der App&quot;">​</a></h2><p>So wechseln Sie Ihr Theme:</p><ol><li>Gehen Sie zu Einstellungen → „Darstellung&quot;</li><li>Wählen Sie Hell, Dunkel oder Automatisch (folgt Ihrem Gerät)</li><li>Die Änderung wird sofort angewendet und automatisch gespeichert</li></ol><p>Tipp: Sie können auch den Theme-Schalter im Navigationsmenü für einen schnellen Wechsel nutzen.</p><h2 id="dunkelmodus-fur-ihre-website" tabindex="-1">Dunkelmodus für Ihre Website <a class="header-anchor" href="#dunkelmodus-fur-ihre-website" aria-label="Permalink to &quot;Dunkelmodus für Ihre Website&quot;">​</a></h2><p>Haben Sie eine gehostete Geschäftswebsite? Dann können Sie auch für Ihre Besucher einen Dunkelmodus einrichten. Öffnen Sie den Bereich <strong>Website</strong> in der App, gehen Sie zur Seite <strong>Stil</strong> und suchen Sie die Dunkelmodus-Einstellung im Abschnitt <strong>Farben</strong>.</p><p>Drei Optionen:</p><ul><li><strong>Aus</strong> (Standard): Kein Dunkelmodus. Ihre Site bleibt im hellen Farbschema.</li><li><strong>Schaltfläche</strong>: Besucher sehen einen Sonne/Mond-Umschalter in der Navigationsleiste. Die Voreinstellung ist immer hell; Besucher, die den dunklen Modus möchten, müssen ihn selbst aktivieren. Nach der Wahl wird die Einstellung im Browser für den nächsten Besuch gespeichert.</li><li><strong>System folgen</strong>: Die Site übernimmt automatisch die Betriebssystem-Einstellung des Besuchers. Passt sich an, sobald der Besucher seine Systemeinstellung ändert.</li></ul><p>Wenn Sie den Dunkelmodus aktivieren, erscheint eine dunkle Farbpalette, in der Sie für jede Markenfarbe eine nachtoptimierte Version festlegen können. Die Palette leer zu lassen ist in Ordnung; die Site verwendet dann eine automatische Invertierung, bei der Ihre Marken- und Akzentfarben erhalten bleiben.</p><p>Siehe <a href="/de/advanced/business-page">Website-Builder</a> für mehr zur Gestaltung Ihrer Website.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/dark-mode.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const darkMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  darkMode as default
};
