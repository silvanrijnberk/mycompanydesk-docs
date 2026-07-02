import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Create a quote","description":"","frontmatter":{"title":"Create a quote","last_verified":"2026-05-09T00:00:00.000Z","chatbot":{"triggers":["create quote","new quote","make quote","create proposal","new proposal","sales quote","estimate","offerte maken","offerte aanmaken","nieuwe offerte","angebot erstellen","neues angebot","wie erstelle ich ein angebot","devis creer","comment creer un devis","nouveau devis","crear cotizacion","crear presupuesto","criar proposta","nuovo preventivo"],"actions":[{"label":"Create quote","to":"/quotes/new"},{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I preview the quote PDF?","How do I send a quote by email?","How do I convert a quote to an invoice?"]}},"headers":[],"relativePath":"fr/faq/create-quote.md","filePath":"fr/faq/create-quote.md"}');
const _sfc_main = { name: "fr/faq/create-quote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Voici comment creer un devis :</p><ol><li>Allez dans Devis et ouvrez « Creer un devis »</li><li>Selectionnez un client et liez un projet si besoin</li><li>Ajoutez des lignes avec description, quantite, prix et TVA</li><li>Definissez dans la carte des details la date du devis et « Valide jusqu au »</li><li>Utilisez « Enregistrer comme brouillon » si le devis n est pas encore pret, ou « Finaliser » quand il est pret</li><li>Apres l enregistrement, ouvrez la page detail du devis pour le previsualiser ou l envoyer</li></ol><p>Astuce : Un devis reste distinct d une facture tant qu il n est pas converti.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/create-quote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createQuote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  createQuote as default
};
