import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Change date format","description":"","frontmatter":{"title":"Change date format","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["date format","change date format","number format","decimal format","datumformaat","datumformaat wijzigen","datumsformat","format date","format nombre"],"actions":[{"label":"Open profile preferences","to":"/profile?section=preferences"}],"follow_up":["How do I change my language?","How do I change my currency?"]}},"headers":[],"relativePath":"de/faq/change-date-format.md","filePath":"de/faq/change-date-format.md"}');
const _sfc_main = { name: "de/faq/change-date-format.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So änderst du Datums- oder Zahlenformat:</p><ol><li>Gehe zu Mein Konto → Einstellungen</li><li>Wähle das Datums- oder Zahlenformat, das du verwenden willst</li><li>Änderungen werden automatisch gespeichert</li></ol><p>Das neue Format wird in der App überall angewendet, wo diese Einstellung genutzt wird.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/change-date-format.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeDateFormat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeDateFormat as default
};
