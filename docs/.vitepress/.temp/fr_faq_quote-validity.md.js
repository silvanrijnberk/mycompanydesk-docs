import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Validité des devis","description":"","frontmatter":{"title":"Validité des devis","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["quote validity","valid until quote","quote expiry","quote expiration","how long quote valid","quote valid days","geldigheid offerte","offerte geldig","angebotsgultigkeit","devis validite","validez devis","validez cotizacion","validade proposta"],"actions":[{"label":"Open invoice settings","to":"/settings/facturen"}],"follow_up":["How does quote numbering work?","How do I edit valid-until per quote?","How do I preview the final PDF?"]}},"headers":[],"relativePath":"fr/faq/quote-validity.md","filePath":"fr/faq/quote-validity.md"}');
const _sfc_main = { name: "fr/faq/quote-validity.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>La validité des devis se règle à un seul endroit :</p><ol><li>Allez dans Paramètres → &quot;Factures et devis&quot;</li><li>Sous &quot;Combien de temps un devis reste-t-il valable ?&quot;, choisissez 2 semaines, 1 mois ou 2 mois</li><li>Les modifications sont enregistrées automatiquement</li></ol><p>Les nouveaux devis reçoivent leur date de validité selon ce choix. Une fois cette date dépassée, le devis apparaît comme Expiré dans votre liste de devis.</p><p>Astuce : le statut Expiré apparaît automatiquement, vous n&#39;avez pas à mettre à jour vos devis vous-même.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/quote-validity.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quoteValidity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quoteValidity as default
};
