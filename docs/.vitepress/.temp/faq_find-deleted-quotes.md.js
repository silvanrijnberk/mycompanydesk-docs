import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find deleted quotes","description":"","frontmatter":{"title":"Find deleted quotes","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are deleted quotes","where can i find deleted quotes","where do i find deleted quotes","quote trash","trashed quotes","deleted quotes","verwijderde offertes","offertes prullenbak","geloschte angebote","geloeschte angebote","geloeschten angebote","angebote papierkorb","devis supprimes","mes devis supprimes","corbeille devis"],"actions":[{"label":"Open quotes","to":"/quotes?view=trash"}],"follow_up":["Where do I find archived quotes?","How do I search quotes?","How do I convert a quote to an invoice?"]}},"headers":[],"relativePath":"faq/find-deleted-quotes.md","filePath":"faq/find-deleted-quotes.md"}');
const _sfc_main = { name: "faq/find-deleted-quotes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Deleted quotes are in Quotes -&gt; Trash. If you are already in the quote list, switch to the Trash view. Archived quotes are in Archive.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-deleted-quotes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findDeletedQuotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findDeletedQuotes as default
};
