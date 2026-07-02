import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BTW-nummer toevoegen","description":"","frontmatter":{"title":"BTW-nummer toevoegen","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["add vat number","set vat number","enter vat number","btw nummer","btw nummer invoeren","ust id eingeben","numero tva"],"actions":[{"label":"Open business details","to":"/settings/bedrijfsgegevens"}],"follow_up":["How do I set up my company settings?","How do I set VAT on an invoice?"]}},"headers":[],"relativePath":"nl/faq/add-vat-number.md","filePath":"nl/faq/add-vat-number.md"}');
const _sfc_main = { name: "nl/faq/add-vat-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om je BTW-nummer toe te voegen of te wijzigen:</p><ol><li>Ga naar Instellingen → &quot;Bedrijfsgegevens&quot;</li><li>Vul daar het veld &quot;BTW-nummer&quot; in</li><li>Wijzigingen worden automatisch opgeslagen</li></ol><p>Je BTW-nummer wordt daarna gebruikt op gegenereerde documenten. Voor klant-BTW-nummers open je het klantprofiel en vul je daar het BTW-veld in.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/add-vat-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addVatNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addVatNumber as default
};
