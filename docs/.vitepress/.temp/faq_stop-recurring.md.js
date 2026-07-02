import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stop recurring","description":"","frontmatter":{"title":"Stop recurring","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["stop recurring","cancel recurring","pause recurring","disable recurring","end recurring","terugkerend stoppen","terugkerend annuleren","wiederkehrend stoppen","arreter recurrent"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I edit a recurring item?","How do I create a new recurring invoice?"]}},"headers":[],"relativePath":"faq/stop-recurring.md","filePath":"faq/stop-recurring.md"}');
const _sfc_main = { name: "faq/stop-recurring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To stop a recurring invoice:</p><ol><li>Go to Recurring Invoices</li><li>Open the recurring invoice</li><li>Click &quot;Pause&quot; on the detail page; the same button then shows &quot;Activate&quot; so you can resume later</li><li>While it is paused, no further invoices are generated</li></ol><p>There is no end date field; pausing is how you stop the schedule, and it keeps the history of previously generated invoices intact. There are also no bulk actions on the recurring list, so pause each item individually. Recurring expenses work the same way with their own Pause and Activate buttons.</p><p>Tip: Pausing is safe. Nothing is deleted, and one click on &quot;Activate&quot; picks the schedule back up.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/stop-recurring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stopRecurring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stopRecurring as default
};
