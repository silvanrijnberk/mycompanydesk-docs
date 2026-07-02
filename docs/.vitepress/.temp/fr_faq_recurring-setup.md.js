import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Configurer des factures récurrentes","description":"","frontmatter":{"title":"Configurer des factures récurrentes","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["set up recurring","recurring invoice","recurring expense","automate invoice","automatic invoice","monthly invoice","terugkerende factuur","terugkerende uitgave","wiederkehrende rechnung","facture recurrente"],"actions":[{"label":"Open recurring invoices","to":"/recurring-invoices"},{"label":"Open recurring expenses","to":"/recurring-expenses"}],"follow_up":["How do I stop a recurring invoice?","How do I edit a recurring item?","How do I change the frequency?"]}},"headers":[],"relativePath":"fr/faq/recurring-setup.md","filePath":"fr/faq/recurring-setup.md"}');
const _sfc_main = { name: "fr/faq/recurring-setup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour configurer une facture récurrente :</p><ol><li>Allez dans Factures récurrentes et cliquez sur &quot;Ajouter une facture récurrente&quot;</li><li>Sélectionnez le client et ajoutez les lignes de facture</li><li>Définissez la fréquence et la date de début</li><li>Choisissez si chaque facture est envoyée automatiquement par e-mail ou créée comme brouillon</li><li>Enregistrez et vérifiez la planification dans la liste des factures récurrentes</li></ol><p>Il n&#39;y a pas de champ de date de fin. Pour arrêter, ouvrez la facture récurrente et cliquez sur &quot;Mettre en pause&quot; ; le même bouton affiche &quot;Activer&quot; pour reprendre plus tard.</p><p>Astuce : les dépenses récurrentes fonctionnent de la même façon. Ouvrez Dépenses récurrentes et suivez les mêmes étapes.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/recurring-setup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recurringSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  recurringSetup as default
};
