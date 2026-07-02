import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Supprimer un client","description":"","frontmatter":{"title":"Supprimer un client","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["delete customer","remove customer","trash customer","klant verwijderen","klant wissen","kunde loschen","supprimer client"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I archive a customer instead?","How do I edit customer details?"]}},"headers":[],"relativePath":"fr/faq/delete-customer.md","filePath":"fr/faq/delete-customer.md"}');
const _sfc_main = { name: "fr/faq/delete-customer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour supprimer un client :</p><ol><li>Allez dans Clients et trouvez le client</li><li>Ouvrez le profil</li><li>Dans la barre latérale, faites défiler jusqu&#39;à la section « Zone de danger »</li><li>Cliquez sur « Supprimer »</li><li>Confirmez la suppression</li></ol><p>La suppression n&#39;est jamais bloquée, même pour les clients ayant des factures liées. Elle se fait par étapes : supprimer un client actif l&#39;archive d&#39;abord, le supprimer à nouveau le déplace vers la Corbeille, et le supprimer depuis la Corbeille est définitif. Jusqu&#39;à cette dernière étape, vous pouvez toujours restaurer le client depuis la vue Archives ou Corbeille.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/delete-customer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteCustomer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteCustomer as default
};
