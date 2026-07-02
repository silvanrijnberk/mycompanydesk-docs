import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Supprimer le compte","description":"","frontmatter":{"title":"Supprimer le compte","last_verified":"2026-07-02T00:00:00.000Z","chatbot":{"triggers":["delete account","close account","remove account","cancel subscription","account verwijderen","account opzeggen","konto loschen","supprimer compte","resilier abonnement"],"actions":[{"label":"Open account cancellation","to":"/settings/opzeggen"},{"label":"Download your data","to":"/settings/downloaden"}],"follow_up":["How do I export my data first?","How do I back up my data?","Can I temporarily deactivate instead?"]}},"headers":[],"relativePath":"fr/faq/delete-account.md","filePath":"fr/faq/delete-account.md"}');
const _sfc_main = { name: "fr/faq/delete-account.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Pour supprimer votre compte :</p><ol><li>Téléchargez d&#39;abord vos données via Paramètres → &quot;Télécharger les données&quot; si vous souhaitez en garder une copie</li><li>Allez dans Paramètres → &quot;Résilier le compte&quot;</li><li>Sous &quot;Supprimer définitivement le compte&quot;, cliquez sur &quot;Supprimer&quot;</li><li>Confirmez avec votre mot de passe actuel. Cette action est définitive</li></ol><p>Sur la même page, vous pouvez aussi résilier uniquement votre abonnement payant. Vous ne payez alors plus rien, mais votre compte et vos données sont conservés, car la législation fiscale néerlandaise impose de garder votre comptabilité pendant 7 ans. Si vous supprimez votre compte, votre compte et toutes vos données disparaissent définitivement.</p><p>Important : la suppression du compte est irréversible. Exportez tout ce dont vous avez besoin avant de continuer.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fr/faq/delete-account.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deleteAccount as default
};
