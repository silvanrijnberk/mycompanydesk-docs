import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Numérotation des devis","description":"","frontmatter":{"title":"Numérotation des devis","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote number","quote numbering","change quote number","quote format","offerte nummer","offertenummer","angebotsnummer","numerotation devis","numero cotizacion","numero proposta","numero preventivo"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I set quote validity?","How do I edit a quote number safely?","How do I create a new quote?"]}},"headers":[],"relativePath":"fr/faq/quote-numbering.md","filePath":"fr/faq/quote-numbering.md"}');
const _sfc_main = { name: "fr/faq/quote-numbering.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Les numéros de devis sont attribués automatiquement :</p><ol><li>Créez un devis ; MyCompanyDesk lui attribue le numéro suivant de votre série</li><li>Il n&#39;y a aucun format de numérotation à configurer, la série reste ordonnée d&#39;elle-même</li><li>Besoin d&#39;un numéro précis sur un brouillon ? Ouvrez le devis dans le formulaire et cliquez sur &quot;Définir un numéro personnalisé&quot; dans la barre latérale</li></ol><p>Astuce : une fois le devis envoyé, il est verrouillé, y compris son numéro. Définissez donc un numéro personnalisé tant que le document est encore un brouillon.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/quote-numbering.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteNumbering = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteNumbering as default
};
