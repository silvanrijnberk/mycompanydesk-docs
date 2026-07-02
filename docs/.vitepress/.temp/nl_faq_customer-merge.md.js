import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Merge customers","description":"","frontmatter":{"title":"Merge customers","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["merge customers","duplicate customer","combine customers","customer duplicate","klanten samenvoegen","dubbele klant","kunden zusammenfuhren","fusionner clients","doublons clients"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I edit a customer?","How do I find a customer?","How do I delete a customer?"]}},"headers":[],"relativePath":"nl/faq/customer-merge.md","filePath":"nl/faq/customer-merge.md"}');
const _sfc_main = { name: "nl/faq/customer-merge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om dubbele klantgegevens samen te voegen:</p><ol><li>Ga naar Klanten</li><li>Identificeer de dubbele vermeldingen</li><li>Open een van de duplicaten</li><li>Gebruik de samenvoeg- of combineeroptie indien beschikbaar</li><li>Selecteer welk record je als primair wilt behouden</li><li>Bevestig - alle facturen en geschiedenis worden samengevoegd</li></ol><p>Opmerking: Als er geen samenvoegoptie beschikbaar is, verplaats facturen handmatig en verwijder vervolgens het duplicaat.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/customer-merge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerMerge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerMerge as default
};
