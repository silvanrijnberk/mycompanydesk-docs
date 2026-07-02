import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sneltoetsen","description":"","frontmatter":{"title":"Sneltoetsen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["keyboard shortcuts","shortcuts","hotkeys","quick navigation","sneltoetsen","tastaturkurzel","raccourcis clavier"],"actions":[],"follow_up":["How do I find a specific page?","How do I search for invoices?"]}},"headers":[],"relativePath":"nl/faq/keyboard-shortcuts.md","filePath":"nl/faq/keyboard-shortcuts.md"}');
const _sfc_main = { name: "nl/faq/keyboard-shortcuts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>De applicatie heeft een kleine set sneltoetsen: • Druk op Cmd+K (Mac) of Ctrl+K (Windows/Linux) om het zoekvenster te openen: zoek in klanten, facturen, uitgaven en instellingen, of spring naar elk onderdeel • Druk op Esc om een dialoogvenster te sluiten of vanaf een detailpagina terug te gaan naar de lijst • In de sitebouwer maak je met Cmd/Ctrl+Z ongedaan en voer je met Cmd/Ctrl+Shift+Z (of Ctrl+Y) opnieuw uit • Gebruik Tab en Enter om efficiënt door formulieren te navigeren</p><p>Zie <a href="/nl/advanced/keyboard-shortcuts">Sneltoetsen</a> voor het volledige overzicht.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/keyboard-shortcuts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const keyboardShortcuts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  keyboardShortcuts as default
};
