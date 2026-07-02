import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ajouter un numéro de TVA","description":"","frontmatter":{"title":"Ajouter un numéro de TVA","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["add vat number","set vat number","enter vat number","btw nummer","btw nummer invoeren","ust id eingeben","numero tva"],"actions":[{"label":"Open business details","to":"/settings/bedrijfsgegevens"}],"follow_up":["How do I set up my company settings?","How do I set VAT on an invoice?"]}},"headers":[],"relativePath":"fr/faq/add-vat-number.md","filePath":"fr/faq/add-vat-number.md"}');
const _sfc_main = { name: "fr/faq/add-vat-number.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour ajouter ou modifier le numéro de TVA de votre entreprise :</p><ol><li>Allez dans Paramètres → « Données de l&#39;entreprise »</li><li>Remplissez-y le champ « Numéro de TVA »</li><li>Les modifications s&#39;enregistrent automatiquement</li></ol><p>Votre numéro de TVA sera ensuite utilisé sur les documents générés. Pour les numéros de TVA des clients, ouvrez la fiche client et renseignez le champ correspondant.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/add-vat-number.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addVatNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  addVatNumber as default
};
