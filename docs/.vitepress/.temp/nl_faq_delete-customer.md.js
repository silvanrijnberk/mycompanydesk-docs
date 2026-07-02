import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Klant verwijderen","description":"","frontmatter":{"title":"Klant verwijderen","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete customer","remove customer","trash customer","klant verwijderen","klant wissen","kunde loschen","supprimer client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I archive a customer instead?","How do I edit customer details?"]}},"headers":[],"relativePath":"nl/faq/delete-customer.md","filePath":"nl/faq/delete-customer.md"}');
const _sfc_main = { name: "nl/faq/delete-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om een klant te verwijderen:</p><ol><li>Ga naar Klanten en zoek de klant</li><li>Open het profiel</li><li>Scroll in de zijbalk naar de sectie &quot;Gevarenzone&quot;</li><li>Klik op &quot;Verwijderen&quot;</li><li>Bevestig de verwijdering</li></ol><p>Verwijderen wordt nooit geblokkeerd, ook niet bij klanten met gekoppelde facturen. Het gaat in stappen: een actieve klant verwijderen archiveert deze eerst, nog een keer verwijderen verplaatst de klant naar de Prullenbak, en verwijderen vanuit de Prullenbak is definitief. Tot die laatste stap kun je de klant altijd terugzetten vanuit de weergave Archief of Prullenbak.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/delete-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteCustomer as default
};
