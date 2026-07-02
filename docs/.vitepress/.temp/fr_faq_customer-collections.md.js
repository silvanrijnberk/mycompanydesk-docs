import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Données client et recouvrement","description":"","frontmatter":{"title":"Données client et recouvrement","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["customer data collections","improve collections","data improve collections","collections","incasso","klantgegevens incasso","forderungsmanagement","recouvrement"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I send payment reminders?","How do I view overdue invoices?"]}},"headers":[],"relativePath":"fr/faq/customer-collections.md","filePath":"fr/faq/customer-collections.md"}');
const _sfc_main = { name: "fr/faq/customer-collections.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour voir les données client qui influencent le suivi des factures dans l&#39;application :</p><ol><li>Ouvrez Clients et sélectionnez le client</li><li>Vérifiez dans la fiche client l&#39;e-mail de facturation, l&#39;adresse, le numéro de TVA et les conditions de paiement enregistrées</li><li>Consultez la carte « Factures récentes » pour le statut et le total de chaque facture, et ouvrez une facture pour ses détails de paiement</li><li>Mettez à jour la fiche client si les coordonnées ou les informations de facturation sont obsolètes</li></ol><p>Des coordonnées et informations de facturation à jour permettent aux rappels d&#39;arriver à la bonne adresse, ce qui est le meilleur levier pour être payé à temps.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/customer-collections.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerCollections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerCollections as default
};
