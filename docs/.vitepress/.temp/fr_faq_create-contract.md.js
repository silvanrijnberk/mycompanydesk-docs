import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a contract","description":"","frontmatter":{"title":"Create a contract","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create contract","new contract","add contract","contract aanmaken","nieuw contract","vertrag erstellen","creer contrat","comment creer un contrat"],"actions":[],"follow_up":["How do I create a project?","How do I link invoices to a contract?"]}},"headers":[],"relativePath":"fr/faq/create-contract.md","filePath":"fr/faq/create-contract.md"}');
const _sfc_main = { name: "fr/faq/create-contract.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour creer un contrat :</p><ol><li>Ouvrez Contrats puis « Nouveau contrat »</li><li>Pour les contrats de location, selectionnez le bien puis le client. Pour les autres types (service, NDA, projet), seul un client est necessaire.</li><li>Saisissez le nom du contrat, le montant, le taux de TVA et la recurrence</li><li>Definissez la date de debut et la date de la premiere facture</li><li>Ajoutez si besoin les details de service ou l envoi automatique puis enregistrez</li></ol><p>Astuce : vous pouvez rouvrir le contrat plus tard pour ajuster la configuration de facturation.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/create-contract.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createContract = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createContract as default
};
