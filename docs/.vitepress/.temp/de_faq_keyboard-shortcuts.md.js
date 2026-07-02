import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tastenkombinationen","description":"","frontmatter":{"title":"Tastenkombinationen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["keyboard shortcuts","shortcuts","hotkeys","quick navigation","sneltoetsen","tastaturkurzel","raccourcis clavier"],"actions":[],"follow_up":["How do I find a specific page?","How do I search for invoices?"]}},"headers":[],"relativePath":"de/faq/keyboard-shortcuts.md","filePath":"de/faq/keyboard-shortcuts.md"}');
const _sfc_main = { name: "de/faq/keyboard-shortcuts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Die Anwendung bietet eine kleine Auswahl an Tastenkombinationen: • Drücken Sie Cmd+K (Mac) oder Strg+K (Windows/Linux), um das Suchfenster zu öffnen: Durchsuchen Sie Kunden, Rechnungen, Ausgaben und Einstellungen oder springen Sie zu jedem Bereich • Drücken Sie Esc, um einen Dialog zu schließen oder von einer Detailseite zur Liste zurückzukehren • Im Website-Editor machen Sie mit Cmd/Strg+Z rückgängig und wiederholen mit Cmd/Strg+Umschalt+Z (oder Strg+Y) • Verwenden Sie Tab und Enter, um effizient durch Formulare zu navigieren</p><p>Die vollständige Übersicht finden Sie unter <a href="/de/advanced/keyboard-shortcuts">Tastenkombinationen</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/keyboard-shortcuts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const keyboardShortcuts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  keyboardShortcuts as default
};
