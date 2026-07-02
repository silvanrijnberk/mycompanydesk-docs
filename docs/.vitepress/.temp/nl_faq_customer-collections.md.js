import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Klantgegevens en incasso","description":"","frontmatter":{"title":"Klantgegevens en incasso","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer data collections","improve collections","data improve collections","collections","incasso","klantgegevens incasso","forderungsmanagement","recouvrement"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send payment reminders?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"nl/faq/customer-collections.md","filePath":"nl/faq/customer-collections.md"}');
const _sfc_main = { name: "nl/faq/customer-collections.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Om klantgegevens te bekijken die in de app invloed hebben op factuuropvolging:</p><ol><li>Open Klanten en selecteer de klant</li><li>Controleer in het klantprofiel het opgeslagen factuur-e-mailadres, adres, BTW-nummer en de betaalvoorwaarden</li><li>Bekijk de kaart &quot;Recente facturen&quot; voor de status en het totaal per factuur, en open een factuur voor de betaalgegevens</li><li>Werk het klantrecord bij als de contact- of factuurgegevens verouderd zijn</li></ol><p>Actuele contact- en factuurgegevens zorgen dat herinneringen op het juiste adres aankomen, en dat is de grootste hefboom om facturen op tijd betaald te krijgen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nl/faq/customer-collections.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerCollections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerCollections as default
};
