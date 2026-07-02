import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find archived quotes","description":"","frontmatter":{"title":"Find archived quotes","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are archived quotes","where can i find archived quotes","where do i find archived quotes","quote archive","archived quotes","gearchiveerde offertes","offertes archief","archivierte angebote","archivierten angebote","angebote archiv","devis archives","mes devis archives","archives devis"],"actions":[{"label":"Open quotes","to":"/quotes?view=archived"}],"follow_up":["Where do I find deleted quotes?","How do I search quotes?","How do I preview a quote?"]}},"headers":[],"relativePath":"faq/find-archived-quotes.md","filePath":"faq/find-archived-quotes.md"}');
const _sfc_main = { name: "faq/find-archived-quotes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Archived quotes are in Quotes -&gt; Archive. If you are already in the quote list, switch to the Archive view. Deleted quotes are in Trash.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-archived-quotes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findArchivedQuotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findArchivedQuotes as default
};
