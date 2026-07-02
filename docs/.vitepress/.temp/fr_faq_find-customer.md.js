import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trouver un client","description":"","frontmatter":{"title":"Trouver un client","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["find customer","search customer","look up customer","filter customers","klant zoeken","klant vinden","kunde suchen","chercher client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I edit a customer?","How do I add a new customer?"]}},"headers":[],"relativePath":"fr/faq/find-customer.md","filePath":"fr/faq/find-customer.md"}');
const _sfc_main = { name: "fr/faq/find-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour trouver un client :</p><ol><li>Allez dans Clients</li><li>Utilisez la barre de recherche en haut ; elle recherche le nom du client, le numéro de client, l&#39;adresse e-mail et la ville</li><li>Les résultats se filtrent en temps réel pendant la saisie</li></ol><p>Astuce : la liste est toujours triée par nom, avec les favoris épinglés en haut. Marquez comme favoris (l&#39;étoile) les clients avec qui vous travaillez souvent pour les garder à portée de main.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/find-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const findCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  findCustomer as default
};
