import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add logo","description":"","frontmatter":{"title":"Add logo","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["add logo","upload logo","change logo","company logo","logo on invoice","logo toevoegen","logo wijzigen","logo uploaden","logo hochladen","ajouter logo"],"actions":[{"label":"Open logo and colour","to":"/settings/uiterlijk"}],"follow_up":["How do I change the PDF template?","How do I set up my company settings?"]}},"headers":[],"relativePath":"faq/add-logo.md","filePath":"faq/add-logo.md"}');
const _sfc_main = { name: "faq/add-logo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>To add or change your company logo:</p><ol><li>Go to Settings → &quot;Logo en kleur&quot; (logo and colour)</li><li>Look for the &quot;Logo&quot; section</li><li>Click &quot;Upload&quot; and select your logo file (PNG or JPG recommended)</li><li>Your logo will appear on all invoices and documents; the live preview shows the result right away</li></ol><p>Tip: Use a high-resolution logo (at least 300px wide) for crisp PDF output.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/add-logo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addLogo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addLogo as default
};
