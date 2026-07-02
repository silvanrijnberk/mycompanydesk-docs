import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Autoliquidation","description":"","frontmatter":{"title":"Autoliquidation","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["reverse charge","reverse charge invoice","eu invoice","intracommunautair","intracommunity","btw verlegd","reverse charge rechnung","autoliquidation","intra-community"],"actions":[{"label":"Create invoice","to":"/invoices/new"}],"follow_up":["How do I add a customer VAT number?","How does reverse charge affect my VAT return?","How do I preview an invoice?"]}},"headers":[],"relativePath":"fr/faq/reverse-charge.md","filePath":"fr/faq/reverse-charge.md"}');
const _sfc_main = { name: "fr/faq/reverse-charge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour créer une facture en autoliquidation (UE) :</p><ol><li>Allez dans Factures → Nouvelle facture</li><li>Sélectionnez votre client de l&#39;UE et vérifiez que son numéro de TVA figure sur sa fiche</li><li>Activez l&#39;interrupteur &quot;Autoliquidation de la TVA&quot; sur le formulaire de facture ; MyCompanyDesk le propose automatiquement pour les clients professionnels de l&#39;UE</li><li>La TVA de toutes les lignes passe automatiquement à 0 %, aucun changement manuel n&#39;est nécessaire</li><li>Vérifiez la mention d&#39;autoliquidation dans l&#39;aperçu, puis envoyez la facture</li></ol><p>Astuce : l&#39;interrupteur est toujours disponible sur le formulaire de facture ; vous n&#39;avez rien à activer au préalable dans vos paramètres.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/reverse-charge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reverseCharge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reverseCharge as default
};
