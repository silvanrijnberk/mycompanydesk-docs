import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edit a customer","description":"","frontmatter":{"title":"Edit a customer","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["edit customer","change customer","update customer","modify customer","customer details","klant bewerken","klant wijzigen","kunde bearbeiten","modifier client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I merge duplicate customers?","How do I view customer payment history?"]}},"headers":[],"relativePath":"fr/faq/edit-customer.md","filePath":"fr/faq/edit-customer.md"}');
const _sfc_main = { name: "fr/faq/edit-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour modifier un client :</p><ol><li>Allez dans Clients et trouvez le client</li><li>Cliquez sur le client pour ouvrir son profil</li><li>Cliquez sur « Modifier »</li><li>Mettez à jour le nom, l&#39;adresse, l&#39;e-mail, le numéro de TVA ou les conditions de paiement</li><li>Enregistrez vos modifications</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/edit-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  editCustomer as default
};
