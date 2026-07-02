import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Merge customers","description":"","frontmatter":{"title":"Merge customers","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["merge customers","duplicate customer","combine customers","customer duplicate","klanten samenvoegen","dubbele klant","kunden zusammenfuhren","fusionner clients","doublons clients"],"actions":[{"label":"Open customers","to":"/customers"}],"follow_up":["How do I edit a customer?","How do I find a customer?","How do I delete a customer?"]}},"headers":[],"relativePath":"fr/faq/customer-merge.md","filePath":"fr/faq/customer-merge.md"}');
const _sfc_main = { name: "fr/faq/customer-merge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour fusionner des fiches clients en double :</p><ol><li>Accédez à Clients</li><li>Identifiez les doublons</li><li>Ouvrez l&#39;un des doublons</li><li>Utilisez l&#39;option de fusion ou de combinaison si disponible</li><li>Sélectionnez la fiche à conserver comme principale</li><li>Confirmez - toutes les factures et l&#39;historique sont consolidés</li></ol><p>Remarque : Si aucune option de fusion n&#39;est disponible, transférez manuellement les factures puis supprimez le doublon.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/customer-merge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customerMerge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customerMerge as default
};
