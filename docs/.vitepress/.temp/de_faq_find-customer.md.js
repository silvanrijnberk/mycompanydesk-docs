import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kunden finden","description":"","frontmatter":{"title":"Kunden finden","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["find customer","search customer","look up customer","filter customers","klant zoeken","klant vinden","kunde suchen","chercher client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I edit a customer?","How do I add a new customer?"]}},"headers":[],"relativePath":"de/faq/find-customer.md","filePath":"de/faq/find-customer.md"}');
const _sfc_main = { name: "de/faq/find-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>So finden Sie einen Kunden:</p><ol><li>Gehen Sie zu Kunden</li><li>Nutzen Sie die Suchleiste oben; sie durchsucht Kundenname, Kundennummer, E-Mail-Adresse und Ort</li><li>Die Ergebnisse filtern sich in Echtzeit beim Tippen</li></ol><p>Tipp: Die Liste ist immer nach Namen sortiert, mit Favoriten ganz oben. Markieren Sie Kunden, mit denen Sie oft arbeiten, als Favoriten (der Stern), dann sind sie immer griffbereit.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/faq/find-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findCustomer as default
};
