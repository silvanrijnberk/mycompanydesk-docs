import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Raccourcis clavier","description":"","frontmatter":{"title":"Raccourcis clavier","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["keyboard shortcuts","shortcuts","hotkeys","quick navigation","sneltoetsen","tastaturkurzel","raccourcis clavier"],"actions":[],"follow_up":["How do I find a specific page?","How do I search for invoices?"]}},"headers":[],"relativePath":"fr/faq/keyboard-shortcuts.md","filePath":"fr/faq/keyboard-shortcuts.md"}');
const _sfc_main = { name: "fr/faq/keyboard-shortcuts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>L&#39;application propose un petit ensemble de raccourcis clavier : • Appuyez sur Cmd+K (Mac) ou Ctrl+K (Windows/Linux) pour ouvrir la fenêtre de recherche : recherchez parmi les clients, factures, dépenses et paramètres, ou accédez à n&#39;importe quelle section • Appuyez sur Échap pour fermer une boîte de dialogue ou revenir d&#39;une page de détail à la liste • Dans l&#39;éditeur de site, Cmd/Ctrl+Z annule et Cmd/Ctrl+Maj+Z (ou Ctrl+Y) rétablit • Utilisez Tab et Entrée pour naviguer efficacement dans les formulaires</p><p>Consultez <a href="/fr/advanced/keyboard-shortcuts">Raccourcis clavier</a> pour la vue d&#39;ensemble complète.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/keyboard-shortcuts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const keyboardShortcuts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  keyboardShortcuts as default
};
