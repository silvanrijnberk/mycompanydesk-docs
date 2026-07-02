import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Find deleted expenses","description":"","frontmatter":{"title":"Find deleted expenses","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["where are deleted expenses","where can i find deleted expenses","where do i find deleted expenses","expense trash","trashed expenses","deleted expenses","verwijderde uitgaven","uitgaven prullenbak","geloschte ausgaben","geloeschte ausgaben","geloeschten ausgaben","ausgaben papierkorb","depenses supprimees","mes depenses supprimees","corbeille depenses"],"actions":[{"label":"Open expenses","to":"/expenses?view=trash"}],"follow_up":["Where do I find archived expenses?","How do I search expenses?","How do I restore an expense?"]}},"headers":[],"relativePath":"faq/find-deleted-expenses.md","filePath":"faq/find-deleted-expenses.md"}');
const _sfc_main = { name: "faq/find-deleted-expenses.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Deleted expenses are in Expenses -&gt; Trash. If you are already in the expense list, switch to the Trash view.</p><p>Keep in mind that deletion is staged: the first delete on an active expense archives it, so if an expense is not in the Trash, check the Archive view. Deleting an archived expense moves it to the Trash, and deleting it from the Trash removes it permanently.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/find-deleted-expenses.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findDeletedExpenses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findDeletedExpenses as default
};
