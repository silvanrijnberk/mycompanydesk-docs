import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quick search","description":"","frontmatter":{"title":"Quick search","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["quick search","search everything","global search","find anything","search bar","snel zoeken","overal zoeken","schnellsuche","recherche rapide","recherche globale"],"actions":[],"follow_up":["How do I filter invoices by status?","How do I find a customer?","How do I search expenses?"]}},"headers":[],"relativePath":"nl/faq/quick-search.md","filePath":"nl/faq/quick-search.md"}');
const _sfc_main = { name: "nl/faq/quick-search.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om snel te zoeken in de applicatie:</p><ol><li>Gebruik de zoekbalk bovenaan de lijstweergaven</li><li>Typ klantnamen, factuurnummers of bedragen</li><li>Resultaten worden in realtime gefilterd terwijl je typt</li><li>Klik op een resultaat om het direct te openen</li></ol><p>Tip: Zoeken werkt in de meeste velden - probeer klantnamen, bedragen of datums.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/quick-search.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quickSearch as default
};
