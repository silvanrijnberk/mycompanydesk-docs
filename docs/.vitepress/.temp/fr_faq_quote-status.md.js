import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Statut du devis","description":"","frontmatter":{"title":"Statut du devis","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote status","quote statuses","quote lifecycle","draft open sent canceled","offerte status","angebotsstatus","statut devis","estado cotizacion","status proposta"],"actions":[{"label":"Open quotes","to":"/quotes"}],"follow_up":["How do I mark a quote as finalized?","How do I mark as sent?","How do I convert to invoice?"]}},"headers":[],"relativePath":"fr/faq/quote-status.md","filePath":"fr/faq/quote-status.md"}');
const _sfc_main = { name: "fr/faq/quote-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Les statuts d&#39;un devis : • Brouillon : encore modifiable, pas encore envoyé au client • Envoyée : remis au client • Acceptée : le client a accepté le devis • Refusée : le client a décliné le devis • Expiré : la date de validité est dépassée ; ce statut s&#39;affiche automatiquement</p><p>Quand vous convertissez un devis accepté en facture, le devis reste Acceptée et reçoit le marqueur &quot;Converti en facture&quot;.</p><p>Astuce : utilisez les filtres de la liste des devis pour vérifier d&#39;abord les brouillons et les devis expirés.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/quote-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteStatus as default
};
