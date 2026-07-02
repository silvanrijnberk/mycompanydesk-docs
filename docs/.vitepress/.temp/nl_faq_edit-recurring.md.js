import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit a recurring invoice","description":"","frontmatter":{"title":"Edit a recurring invoice","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["edit recurring","change recurring","update recurring","modify recurring frequency","change frequency","terugkerend bewerken","frequentie wijzigen","wiederkehrend bearbeiten","modifier recurrent"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"}],"follow_up":["How do I stop a recurring invoice?","How do I create a new recurring invoice?"]}},"headers":[],"relativePath":"nl/faq/edit-recurring.md","filePath":"nl/faq/edit-recurring.md"}');
const _sfc_main = { name: "nl/faq/edit-recurring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een terugkerend item te bewerken:</p><ol><li>Ga naar Terugkerende facturen (of Uitgaven)</li><li>Open het terugkerende item</li><li>Klik op &quot;Bewerken&quot;</li><li>Wijzig bedrag, frequentie, klant of regels</li><li>Sla op - toekomstige generaties gebruiken het bijgewerkte sjabloon</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/edit-recurring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editRecurring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editRecurring as default
};
