import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Add a customer","description":"","frontmatter":{"title":"Add a customer","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create customer","new customer","add customer","add client","new client","klant toevoegen","nieuwe klant","klant aanmaken","kunde hinzufugen","wie fuege ich einen kunden hinzu","neuer kunde","ajouter client","comment ajouter un nouveau client"],"actions":[{"label":"Create customer","to":"/customers/new"}],"follow_up":["How do I create an invoice for this customer?","Which customer fields are most important?","How do I import customers in bulk?"]}},"headers":[],"relativePath":"fr/faq/add-customer.md","filePath":"fr/faq/add-customer.md"}');
const _sfc_main = { name: "fr/faq/add-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Voici comment ajouter un client :</p><ol><li>Allez dans Clients et ouvrez « Nouveau client »</li><li>Saisissez le nom du client ou de l entreprise ainsi que les coordonnees</li><li>Ajoutez l e-mail, le numero de telephone et l adresse</li><li>Renseignez si besoin le numero de TVA, l IBAN et le delai de paiement</li><li>Enregistrez le client</li></ol><p>Astuce : le formulaire client n a pas de champ separe pour la langue preferee pour le moment, alors concentrez-vous sur les donnees de facturation et de paiement reutilisees plus tard.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/add-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addCustomer as default
};
