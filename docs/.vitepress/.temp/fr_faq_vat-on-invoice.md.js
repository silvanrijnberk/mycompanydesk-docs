import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TVA sur une facture","description":"","frontmatter":{"title":"TVA sur une facture","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["vat on invoice","add vat to invoice","tax rate invoice","change vat rate","btw op factuur","btw tarief","mwst auf rechnung","tva sur facture"],"actions":[{"label":"Open invoices","to":"/invoices"},{"label":"Open VAT settings","to":"/settings/btw"}],"follow_up":["How do I change the default VAT rate?","How do I prepare my VAT return?"]}},"headers":[],"relativePath":"fr/faq/vat-on-invoice.md","filePath":"fr/faq/vat-on-invoice.md"}');
const _sfc_main = { name: "fr/faq/vat-on-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour définir la TVA sur une facture :</p><ol><li>Modifiez ou créez une facture</li><li>Choisissez le taux de TVA pour chaque ligne (par ex. 21 %, 9 %, 0 %)</li><li>Le système calcule la TVA automatiquement</li><li>Les totaux de TVA apparaissent dans le récapitulatif de la facture</li></ol><p>Les nouvelles lignes de facture reçoivent par défaut votre taux de TVA standard. Pour modifier ce taux par défaut, allez dans Paramètres → &quot;TVA&quot; et ajustez-le. Le taux est toujours de 0 % quand la facture utilise l&#39;interrupteur d&#39;autoliquidation.</p><p>Astuce : vous facturez un client professionnel dans l&#39;UE ? Utilisez l&#39;interrupteur &quot;Autoliquidation de la TVA&quot; plutôt que de choisir 0 % vous-même.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/vat-on-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vatOnInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vatOnInvoice as default
};
